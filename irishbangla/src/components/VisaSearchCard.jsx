import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "../styles/VisaSearchCard.css";

// Country options
const countries = [
  { value: "BD", label: "Bangladesh", flag: "https://flagcdn.com/w20/bd.png" },
  { value: "IN", label: "India", flag: "https://flagcdn.com/w20/in.png" },
  { value: "PK", label: "Pakistan", flag: "https://flagcdn.com/w20/pk.png" },
  { value: "IE", label: "Ireland", flag: "https://flagcdn.com/w20/ie.png" },
];

// Format react-select options with flag
const formatOptionLabel = ({ label, flag }) => (
  <div className="flag-option">
    <img src={flag} alt={label} />
    <span>{label}</span>
  </div>
);

// Custom react-select styles
const selectStyles = {
  control: (base) => ({
    ...base,
    minHeight: 44,
    borderRadius: 10,
    borderColor: "#e2e8f0",
    fontFamily: "Mulish",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    "&:hover": { borderColor: "#1a9c3d" },
  }),
  singleValue: (base) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    gap: 8,
  }),
};

export default function VisaSearchCard() {
  const [citizen, setCitizen] = useState(null);
  const [destination, setDestination] = useState(null);
  const [visaType, setVisaType] = useState("");

  const navigate = useNavigate();

  const isFormValid = citizen && destination && visaType;

  const handleSubmit = () => {
    if (!isFormValid) return;

    navigate("/visa-details", {
      state: { citizen, destination, visaType },
    });
  };

  return (
    <div className="visa-wrapper">
      <div className="visa-card">
        <div className="visa-input">
          <label>I am a citizen of</label>
          <Select
            options={countries}
            styles={selectStyles}
            formatOptionLabel={formatOptionLabel}
            placeholder="Select country"
            onChange={setCitizen}
          />
        </div>

        <div className="visa-input">
          <label>Travelling to</label>
          <Select
            options={countries}
            styles={selectStyles}
            formatOptionLabel={formatOptionLabel}
            placeholder="Select destination"
            onChange={setDestination}
          />
        </div>

        <div className="visa-input">
          <label>Visa category</label>
          <select
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
          >
            <option value="">Select visa type</option>
            <option>Tourist Visa</option>
            <option>Study Visa</option>
            <option>Work/Employment Visa</option>
            <option>Training Visa</option>
            <option>Family Visit Visa</option>
            <option>Join Family Visa</option>
          </select>
        </div>

        <button
          className={`visa-btn ${isFormValid ? "active" : ""}`}
          disabled={!isFormValid}
          onClick={handleSubmit}
        >
          Check Details
        </button>
      </div>
    </div>
  );
}
