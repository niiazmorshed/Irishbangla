import { useLocation } from "react-router-dom";
import "../styles/VisaDetails.css";

export default function VisaDetails() {
  const { state } = useLocation();

  return (
    <div className="visa-details-page">
      {/* Header */}
      <div className="visa-header">
        <h1>
          Apply online for Ireland Family member of EU-EEA-Swiss citizen
          (de facto partner) Visa from Bangladesh
        </h1>

        <div className="visa-steps">
          <span className="step">Basic Information</span>
          <span className="step active">Check Required Documents</span>
          <span className="step">Embassy Details</span>
          <span className="step highlight">Book an Appointment</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="visa-content">
        {/* LEFT */}
        <div className="visa-main">
          <h2>Document Requirement</h2>
          <p className="subtitle">
            Ireland is offering an online visa application process. Applicants
            must submit the following documents in support of their application.
          </p>

          <div className="doc-accordion">

            <DocumentItem
              number="1"
              title="Current Passport"
              text="Original passport issued within the last 10 years. The passport must be valid for at least six months beyond the intended date of departure and contain at least two blank pages."
            />

            <DocumentItem
              number="2"
              title="Previous Passport(s)"
              text="Copies of all previous passports, including expired passports, showing travel history and previous visas, if applicable."
            />

            <DocumentItem
              number="3"
              title="Visa Application Form"
              text="Completed and signed Ireland visa application form generated online. All information provided must be accurate and consistent with supporting documents."
            />

            <DocumentItem
              number="4"
              title="Cover Letter"
              text="A signed cover letter explaining the purpose of travel, relationship with the EU/EEA/Swiss citizen, intended duration of stay, and details of accommodation."
            />

            <DocumentItem
              number="5"
              title="Supplementary Application Form"
              text="Completed supplementary form for Family Member of EU-EEA-Swiss citizen, as required by the Irish Naturalisation and Immigration Service."
            />

            <DocumentItem
              number="6"
              title="Invitation Letter"
              text="Invitation letter from the EU/EEA/Swiss citizen residing in Ireland, including contact details, address, and proof of legal residence."
            />

            <DocumentItem
              number="7"
              title="Personal Identification Document"
              text="Copy of National ID Card or Birth Certificate of the applicant as proof of identity."
            />

            <DocumentItem
              number="8"
              title="Bank Statement"
              text="Personal bank statements for the last six months showing sufficient funds to support the stay. Statements must be stamped and signed by the bank."
            />

          </div>
        </div>

        {/* RIGHT */}
        <aside className="visa-sidebar">
          <h4>Ireland Short- & Long-Stay Visa Services</h4>

          <div className="price-box">
            <span className="currency">৳</span>
            <span className="amount">54,500</span>
          </div>

          <div className="fee-row">
            <span>Service Fee</span>
            <span>৳ 54,500</span>
          </div>

          <div className="fee-row total">
            <span>Grand Total</span>
            <span>৳ 54,500</span>
          </div>

          <button className="primary-btn">Start Application</button>
        </aside>
      </div>
    </div>
  );
}

/* Reusable document item */
function DocumentItem({ number, title, text }) {
  return (
    <div className="doc-item">
      <div className="doc-title">
        <span>{number}</span>
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
}
