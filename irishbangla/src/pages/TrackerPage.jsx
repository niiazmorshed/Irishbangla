import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { touristVisaTimeline } from "../data/touristVisaTimeline";
import "../styles/tracker.css";

export default function TrackerPage() {
  const { trackingId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTracker = async () => {
      try {
        const ref = doc(db, "visaTrackers", trackingId);
        const snap = await getDoc(ref);

        if (!snap.exists()) {
          setError("Invalid Tracking ID");
        } else {
          setData(snap.data());
        }
      } catch {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchTracker();
  }, [trackingId]);

  if (loading) {
    return (
      <div className="center">
        <h2 className="center">Loading...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="center">
        <h2 className="center">{error}</h2>
      </div>
    );
  }

  /* ================= LOGIC ================= */

  // show only started/completed steps
  const activeSteps = touristVisaTimeline.filter(
    (step) => step.id <= data.currentStep
  );

  const formatDate = (ts) =>
    ts?.toDate ? ts.toDate().toLocaleDateString() : "";

  return (
    <div className="page-with-navbar">
      <div className="tracker-container">

        {/* ================= LEFT PANEL ================= */}
        <aside className="applicant-panel">
          <h3>Applicant Details</h3>

          <div className="applicant-card">
            <div className="avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Applicant"
              />
            </div>

            <div className="basic-info">
              <h4>{data.Name}</h4>
              <p>{trackingId}</p>
              <p>{data.passport || "N/A"}</p>
            </div>
          </div>

          <div className="info-block">
            <label>Selected Country</label>
            <div className="value">🇮🇪 {data.country}</div>
          </div>

          <div className="info-block">
            <label>Service</label>
            <div className="value">Ireland – Study Visa</div>
          </div>

          <div className="info-block">
            <label>Visa Category</label>
            <div className="value">Study Visa</div>
          </div>

          <div className="info-block">
            <label>Travel Date</label>
            <div className="value">
              {data.travelDate || "Invalid Date"}
            </div>
          </div>
        </aside>

        {/* ================= RIGHT PANEL ================= */}
        <section className="process-panel">

          <div className="process-header">
            <h2>Track Your Visa Process</h2>
          </div>

          {/* ================= HORIZONTAL STEPPER ================= */}
          <div className="horizontal-steps">
            {activeSteps.map((step) => {
              const isFinal = step.final === true;

              return (
                <div className="step" key={step.id}>
                  <div className={`step-box ${isFinal ? "final" : ""}`}>
                    <h5>{step.title}</h5>
                    <span>{formatDate(data.steps?.[step.id])}</span>
                  </div>

                  <div className={`step-icon ${isFinal ? "final" : ""}`}>
                    ✔
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= VERTICAL TIMELINE ================= */}
          <div className="vertical-log">
            <span className="vertical-line" />

            {activeSteps.map((step) => {
              const isActive = step.id === data.currentStep;
              const isFinal = step.final === true;

              return (
                <div
                  key={step.id}
                  className={`log-row 
                    ${isActive ? "active" : ""} 
                    ${isFinal ? "final" : ""}`}
                >
                  <span
                    className={`log-dot 
                      ${isActive ? "active" : ""} 
                      ${isFinal ? "final" : ""}`}
                  />

                  <div
                    className={`log-card 
                      ${isActive ? "active" : ""} 
                      ${isFinal ? "final" : ""}`}
                  >
                    <span className="log-date">
                      {formatDate(data.steps?.[step.id])}
                    </span>
                    <p>{step.description || step.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </section>
      </div>
    </div>
  );
}
