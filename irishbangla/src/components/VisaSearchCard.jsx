import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "../styles/VisaSearchCard.css";
import { flagUrl, visaCategories, visaCountries } from "../data/irelandVisaGuide";

const countryOptions = visaCountries.map((c) => ({
  value: c.code,
  label: c.name,
  flag: flagUrl(c.code),
}));

const destinationOption = {
  value: "IE",
  label: "Ireland",
  flag: "https://flagcdn.com/w20/ie.png",
};

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
    backgroundColor: "#ffffff",
    color: "#0f172a",
    fontFamily: "Mulish",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    "&:hover": { borderColor: "#1a9c3d" },
  }),
  input: (base) => ({
    ...base,
    color: "#0f172a",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#6b7280",
  }),
  singleValue: (base) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "#0f172a",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#ffffff",
    color: "#0f172a",
    zIndex: 30,
  }),
  menuList: (base) => ({
    ...base,
    backgroundColor: "#ffffff",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused || state.isSelected ? "#dbeafe" : "#ffffff",
    color: "#0f172a",
    cursor: "pointer",
    "&:active": {
      backgroundColor: "#bfdbfe",
    },
  }),
};

export default function VisaSearchCard() {
  const [citizen, setCitizen] = useState(null);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const isFormValid = citizen && category;

  const handleSubmit = () => {
    if (!isFormValid) return;

    navigate("/visa-details", {
      state: {
        fromCountryCode: citizen.value,
        destination: "Ireland",
        categoryKey: category,
      },
    });
  };

  return (
    <div className="visa-wrapper">
      <div className="visa-card">
        <div className="visa-input">
          <label>I am from</label>
          <Select
            options={countryOptions}
            styles={selectStyles}
            formatOptionLabel={formatOptionLabel}
            placeholder="Select country"
            onChange={setCitizen}
          />
        </div>

        <div className="visa-input">
          <label>Travelling to</label>
          <Select
            options={[destinationOption]}
            styles={selectStyles}
            formatOptionLabel={formatOptionLabel}
            value={destinationOption}
            isDisabled
          />
        </div>

        <div className="visa-input">
          <label>Visa category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select visa type</option>
            {visaCategories.map((c) => (
              <option key={c.key} value={c.key}>
                {c.label}
              </option>
            ))}
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
