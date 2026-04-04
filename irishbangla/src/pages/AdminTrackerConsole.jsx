import { useState } from "react";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { touristVisaTimeline } from "../data/touristVisaTimeline";
import "../styles/AdminConsole.css";

const COLLECTION = "visaTrackers";

function tsToDateInput(ts) {
  if (!ts?.toDate) return "";
  const d = ts.toDate();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function dateInputToTimestamp(value) {
  if (!value) return null;
  return Timestamp.fromDate(new Date(`${value}T12:00:00`));
}

export default function AdminTrackerConsole() {
  const { user, loading: authLoading, login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [trackingId, setTrackingId] = useState("");
  const [loadError, setLoadError] = useState("");
  const [saveStatus, setSaveStatus] = useState("");
  const [saveError, setSaveError] = useState("");

  const [name, setName] = useState("");
  const [passport, setPassport] = useState("");
  const [country, setCountry] = useState("Ireland");
  const [travelDate, setTravelDate] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [stepDates, setStepDates] = useState({});

  const resetForm = () => {
    setName("");
    setPassport("");
    setCountry("Ireland");
    setTravelDate("");
    setCurrentStep(1);
    setStepDates({});
    setLoadError("");
    setSaveStatus("");
    setSaveError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
      await login(email, password);
    } catch (err) {
      setLoginError(err?.message || "Sign-in failed.");
    }
  };

  const handleLoad = async () => {
    const id = trackingId.trim();
    if (!id) return;
    setLoadError("");
    setSaveStatus("");
    setSaveError("");
    try {
      const ref = doc(db, COLLECTION, id);
      const snap = await getDoc(ref);
      if (!snap.exists()) {
        setLoadError("No document for this tracking ID.");
        resetForm();
        return;
      }
      const d = snap.data();
      setName(d.Name ?? "");
      setPassport(d.passport ?? "");
      setCountry(d.country ?? "Ireland");
      setTravelDate(d.travelDate ?? "");
      setCurrentStep(Number(d.currentStep) || 1);
      const nextDates = {};
      const steps = d.steps || {};
      touristVisaTimeline.forEach((s) => {
        const key = String(s.id);
        if (steps[s.id] != null) nextDates[key] = tsToDateInput(steps[s.id]);
        else if (steps[key] != null) nextDates[key] = tsToDateInput(steps[key]);
      });
      setStepDates(nextDates);
    } catch {
      setLoadError("Could not load document. Check rules and network.");
    }
  };

  const handleSave = async () => {
    const id = trackingId.trim();
    if (!id) return;
    setSaveStatus("");
    setSaveError("");
    setLoadError("");
    try {
      const stepsPayload = {};
      const max = Math.min(Number(currentStep) || 1, touristVisaTimeline.length);
      for (let i = 1; i <= max; i++) {
        const key = String(i);
        const val = stepDates[key];
        if (val) stepsPayload[i] = dateInputToTimestamp(val);
      }

      const ref = doc(db, COLLECTION, id);
      await setDoc(
        ref,
        {
          Name: name.trim(),
          passport: passport.trim(),
          country: country.trim() || "Ireland",
          travelDate: travelDate.trim(),
          currentStep: Number(currentStep) || 1,
          steps: stepsPayload,
          updatedAt: serverTimestamp(),
          updatedBy: user?.email || null,
        },
        { merge: true }
      );
      setSaveStatus("Saved successfully.");
    } catch (err) {
      const code = err?.code || "";
      const msg = err?.message || String(err);
      setSaveStatus("");
      if (code === "permission-denied" || code === "firestore/permission-denied") {
        setSaveError(
          `Firestore blocked this write (permission-denied). Your signed-in email must be listed in Firestore rules for visaTrackers, and those rules must be published in the Firebase console. You are signed in as: ${user?.email || "unknown"}.`
        );
      } else {
        setSaveError(`${code ? `${code}: ` : ""}${msg}`);
      }
    }
  };

  const generateNewId = () => {
    const id = `EVT-${Date.now().toString(36).toUpperCase()}`;
    setTrackingId(id);
    resetForm();
    setSaveError("");
    setSaveStatus("New ID generated. Fill fields and save to create the document.");
  };

  const visibleSteps = touristVisaTimeline.filter((s) => s.id <= currentStep);

  if (authLoading) {
    return <p className="admin-muted">Checking session…</p>;
  }

  if (!user) {
    return (
      <div className="admin-card admin-login">
        <h1>Sign in</h1>
        <p className="admin-muted">
          Authorised staff only. Accounts are created in Firebase Authentication — there is no public registration.
        </p>
        <form onSubmit={handleLogin}>
          <label>
            Email
            <input
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {loginError && <p className="admin-error">{loginError}</p>}
          <button type="submit" className="admin-btn primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-console">
      <div className="admin-card">
        <h1>Update visa tracker</h1>
        <p className="admin-muted">
          Signed in as <strong>{user.email}</strong>
        </p>

        <div className="admin-row">
          <label className="admin-grow">
            Tracking ID
            <input
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="e.g. EVT-XXXX"
            />
          </label>
          <button type="button" className="admin-btn" onClick={handleLoad}>
            Load
          </button>
          <button type="button" className="admin-btn ghost" onClick={generateNewId}>
            New ID
          </button>
        </div>
        {loadError && <p className="admin-error">{loadError}</p>}

        <hr className="admin-hr" />

        <div className="admin-grid">
          <label>
            Applicant name
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Passport
            <input value={passport} onChange={(e) => setPassport(e.target.value)} />
          </label>
          <label>
            Country
            <input value={country} onChange={(e) => setCountry(e.target.value)} />
          </label>
          <label>
            Travel date
            <input value={travelDate} onChange={(e) => setTravelDate(e.target.value)} />
          </label>
          <label>
            Current step (1–{touristVisaTimeline.length})
            <select
              value={currentStep}
              onChange={(e) => setCurrentStep(Number(e.target.value))}
            >
              {touristVisaTimeline.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.id} — {s.title}
                </option>
              ))}
            </select>
          </label>
        </div>

        <h2 className="admin-h2">Step completion dates</h2>
        <p className="admin-muted small">
          Only steps up to the current step are shown. Leave a date empty to omit that step from Firestore on save.
        </p>
        <div className="admin-steps">
          {visibleSteps.map((s) => {
            const key = String(s.id);
            return (
              <label key={s.id} className="admin-step-row">
                <span className="admin-step-label">{s.id}. {s.title}</span>
                <input
                  type="date"
                  value={stepDates[key] || ""}
                  onChange={(e) =>
                    setStepDates((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                />
              </label>
            );
          })}
        </div>

        <div className="admin-actions">
          <button type="button" className="admin-btn primary" onClick={handleSave}>
            Save to Firestore
          </button>
        </div>
        {saveStatus && <p className="admin-success">{saveStatus}</p>}
        {saveError && (
          <div className="admin-error-box">
            <p className="admin-error">{saveError}</p>
            <p className="admin-muted small admin-fix-steps">
              <strong>Fix:</strong> Firebase Console → Firestore Database → Rules → paste the contents of
              <code> firestore.rules</code> from this repo (add your exact sign-in email to the list) →
              <strong> Publish</strong>. The file in the repo is not applied automatically until you publish.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
