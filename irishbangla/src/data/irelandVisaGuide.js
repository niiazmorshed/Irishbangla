export const visaCountries = [
  {
    code: "BD",
    name: "Bangladesh",
    visaRequired: "Yes",
    waiver: "None",
    embassyHandling: "New Delhi, India",
  },
  {
    code: "IN",
    name: "India",
    visaRequired: "Yes",
    waiver: "BIVS (UK visa)",
    embassyHandling: "New Delhi, India",
  },
  {
    code: "PK",
    name: "Pakistan",
    visaRequired: "Yes",
    waiver: "UK Short Stay Waiver",
    embassyHandling: "Abu Dhabi, UAE",
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    visaRequired: "Yes",
    waiver: "UK Short Stay Waiver",
    embassyHandling: "Riyadh, Saudi Arabia",
  },
  {
    code: "AE",
    name: "UAE (Dubai)",
    visaRequired: "No",
    waiver: "Visa‑Free (90 days)",
    embassyHandling: "—",
  },
  {
    code: "KW",
    name: "Kuwait",
    visaRequired: "Yes",
    waiver: "UK Short Stay Waiver",
    embassyHandling: "Abu Dhabi, UAE",
  },
  {
    code: "BH",
    name: "Bahrain",
    visaRequired: "Yes",
    waiver: "UK Short Stay Waiver",
    embassyHandling: "Abu Dhabi, UAE",
  },
  {
    code: "QA",
    name: "Qatar",
    visaRequired: "Yes",
    waiver: "UK Short Stay Waiver",
    embassyHandling: "Abu Dhabi, UAE",
  },
  {
    code: "BR",
    name: "Brazil",
    visaRequired: "No",
    waiver: "Visa‑Free (90 days)",
    embassyHandling: "—",
  },
  {
    code: "MX",
    name: "Mexico",
    visaRequired: "No",
    waiver: "Visa‑Free (90 days)",
    embassyHandling: "—",
  },
  {
    code: "CO",
    name: "Colombia",
    visaRequired: "Yes",
    waiver: "UK Short Stay Waiver",
    embassyHandling: "Bogotá, Colombia",
  },
  {
    code: "US",
    name: "USA",
    visaRequired: "No",
    waiver: "Visa‑Free (90 days)",
    embassyHandling: "—",
  },
  {
    code: "CA",
    name: "Canada",
    visaRequired: "No",
    waiver: "Visa‑Free (90 days)",
    embassyHandling: "—",
  },
  {
    code: "CN",
    name: "China",
    visaRequired: "Yes",
    waiver: "BIVS (UK visa)",
    embassyHandling: "Beijing / Shanghai",
  },
  {
    code: "KR",
    name: "South Korea",
    visaRequired: "No",
    waiver: "Visa‑Free (90 days)",
    embassyHandling: "—",
  },
  {
    code: "LK",
    name: "Sri Lanka",
    visaRequired: "Yes",
    waiver: "None",
    embassyHandling: "New Delhi, India",
  },
];

export const visaCategories = [
  {
    key: "tourist",
    label: "Tourist / Visitor Visa",
    type: "Short Stay — C Visa",
    duration: "Up to 90 days",
    processing: "~20 working days",
    fee: "€60 single / €100 multi-entry",
    purpose:
      "Tourism, sightseeing, visiting friends or family (short trip).",
    whoCanApply:
      "Anyone wishing to visit Ireland for leisure or short-term personal visits.",
    documents: [
      "Valid passport (6+ months remaining) + previous passports",
      "Printed online visa application summary (INIS)",
      "2 recent passport-size photos (white background)",
      "Cover letter: purpose of visit, travel dates, accommodation details",
      "Return flight tickets / travel itinerary",
      "Hotel bookings or invitation letter from host in Ireland",
      "Bank statements — last 6 months (show sufficient funds)",
      "Proof of employment / leave approval (if employed)",
      "Business registration (if self-employed)",
      "Travel insurance (min. €30,000 medical cover)",
      "Evidence of ties to home country (property, family, job)",
    ],
    notes: [
      "You cannot extend or change to another visa category once in Ireland on a Tourist visa.",
      "Evidence of strong ties to home country (employment, property, family) greatly improves approval chances.",
    ],
  },
  {
    key: "student",
    label: "Student Visa",
    type: "Long Stay — D Visa (or Short Stay for courses < 3 months)",
    duration: "Duration of course (typically 1–4 years)",
    processing: "~6–8 weeks",
    fee: "€60 single / €100 multi-entry",
    purpose:
      "Full-time study at a recognised Irish educational institution.",
    whoCanApply:
      "Students enrolled in Irish universities, colleges, language schools or vocational courses.",
    documents: [
      "Valid passport (must cover entire study period)",
      "Letter of Acceptance from ILEP-registered or IUA-recognised Irish institution",
      "Proof of full tuition fee payment (or Year 1 instalment receipt)",
      "Bank statements — last 6 months showing minimum €10,000 available",
      "Sponsor's bank statements + sponsor letter if parents/guardian funding",
      "English language test results (IELTS 5.5+ / TOEFL / PTE — institution may vary)",
      "Academic transcripts and certificates (all previous qualifications)",
      "2 passport-size photos",
      "Private health insurance covering full period of study in Ireland",
      "Cover letter explaining academic background and study intentions",
      "Visa application summary sheet (INIS online system)",
    ],
    notes: [
      "Students may work up to 20 hours/week during term time and 40 hours/week during holiday periods.",
      "After graduation, apply for Stamp 1G to remain in Ireland and seek employment for up to 12–24 months.",
    ],
  },
  {
    key: "work",
    label: "Work / Employment Visa",
    type: "Long Stay — D Visa (Employment)",
    duration: "Tied to Employment Permit validity (typically 2 years, renewable)",
    processing: "~10 working days (Critical Skills) / ~8 weeks (General)",
    fee: "€60 single entry",
    purpose:
      "Taking up employment in Ireland with a valid Employment Permit.",
    whoCanApply:
      "Non-EEA nationals who have secured a job offer and an Employment Permit from DETE.",
    documents: [
      "Valid passport",
      "Employment Permit issued by the Department of Enterprise, Trade and Employment (DETE)",
      "Job offer letter / contract of employment (signed)",
      "Employer's letter confirming position, salary, start date",
      "Bank statements — personal and evidence of living costs",
      "Qualifications, degree certificates and professional credentials",
      "Reference letters from previous employers",
      "2 passport-size photos",
      "Cover letter explaining your role and move to Ireland",
      "Travel insurance (for initial travel)",
      "Visa application summary sheet (INIS)",
    ],
    notes: [
      "You must obtain your Employment Permit BEFORE applying for the visa.",
      "Critical Skills Employment Permit threshold: €38,000+/year. General Employment Permit: €34,000+/year.",
      "After 5 years, you may be eligible to apply for Stamp 4 and eventually citizenship.",
    ],
  },
  {
    key: "business",
    label: "Business Visa",
    type: "Short Stay — C Visa",
    duration: "Up to 90 days per visit",
    processing: "3–7 working days (expedited available)",
    fee: "€60 single / €100 multi-entry",
    purpose:
      "Attending business meetings, conferences, trade events, training.",
    whoCanApply:
      "Business travellers, entrepreneurs, corporate delegates visiting Ireland for commercial purposes.",
    documents: [
      "Valid passport",
      "Invitation letter from Irish business / organisation (on company letterhead)",
      "Cover letter from your employer/company detailing purpose of visit",
      "Company registration documents (if self-employed / business owner)",
      "Bank statements — last 6 months",
      "Proof of accommodation (hotel booking)",
      "Return flight tickets",
      "2 passport-size photos",
      "Travel insurance",
      "Evidence of business ties to home country",
      "Visa application summary sheet (INIS)",
    ],
    notes: [
      "Multi-journey business visas (€100) are ideal for frequent travellers.",
      "You cannot carry out paid employment in Ireland on a Business visa.",
    ],
  },
  {
    key: "join-family",
    label: "Family / Join Family Visa",
    type: "Long Stay — D Visa (Join Family)",
    duration: "Initial 12 months (renewable — route to Stamp 4)",
    processing: "~12–16 weeks",
    fee: "€60",
    purpose:
      "Joining a family member who is legally resident in Ireland.",
    whoCanApply:
      "Spouses, partners, children and dependent relatives of Irish citizens or legally resident non‑EEA nationals.",
    documents: [
      "Valid passport",
      "Sponsor's Irish Residence Permit (IRP) or Irish passport",
      "Marriage certificate / civil partnership certificate (officially translated if not in English)",
      "Birth certificates (for children)",
      "Evidence of genuine relationship (photos, communication records, joint accounts)",
      "Sponsor's proof of accommodation in Ireland (lease or mortgage)",
      "Sponsor's bank statements — last 6 months (sufficient to support family)",
      "Sponsor's employment / income evidence (payslips, employer letter)",
      "Cover letter explaining relationship and reasons for joining",
      "2 passport-size photos",
      "Health insurance for applicant",
      "Visa application summary sheet (INIS)",
    ],
    notes: [
      "Spouse/civil partner of an Irish citizen may be eligible for Stamp 4 directly (allowing work without permit).",
      "De facto partners may need pre-clearance first.",
      "Children under 18 may attend Irish school once admitted.",
    ],
  },
  {
    key: "transit",
    label: "Transit Visa",
    type: "Transit Visa (C — Airside)",
    duration: "Airport transit only (no entry to Ireland)",
    processing: "~5–10 working days",
    fee: "€25",
    purpose:
      "Passing through an Irish airport on the way to another destination.",
    whoCanApply:
      "Nationals of certain countries (e.g., Nigeria, Somalia, Ethiopia, Ghana, Sri Lanka, Pakistan, Afghanistan, etc.) transiting through Dublin Airport.",
    documents: [
      "Valid passport",
      "Confirmed onward flight ticket and boarding pass (or booking)",
      "Valid visa for the final destination country",
      "Proof that you will not leave the transit area",
      "Cover letter explaining journey route",
      "2 passport-size photos",
      "Visa application summary sheet (INIS)",
    ],
    notes: [
      "A transit visa does NOT permit you to enter or stay in Ireland — only to pass through the airport.",
      "If you have a valid Irish visa (C or D) or an Irish Residence Permit, you do NOT need a separate transit visa.",
    ],
  },
];

export function getVisaCountry(code) {
  return visaCountries.find((c) => c.code === code) || null;
}

export function getVisaCategory(key) {
  return visaCategories.find((c) => c.key === key) || null;
}

export function flagUrl(code) {
  // Best-effort flags via FlagCDN. Not all may be perfect (e.g. "UAE (Dubai)" uses AE).
  return `https://flagcdn.com/w20/${code.toLowerCase()}.png`;
}

