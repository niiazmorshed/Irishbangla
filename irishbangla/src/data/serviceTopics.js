import {
  FaPassport,
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaLaptop,
  FaBolt,
  FaFileSignature,
} from "react-icons/fa";

import imgCliffs from "../assets/hero/cliffs.jpg";
import imgDublin from "../assets/hero/dublin.jpg";
import imgWild from "../assets/hero/wild.jpg";
import imgOther from "../assets/hero/other.jpg";
import imgHidden from "../assets/hero/hidden.jpg";
import imgAncient from "../assets/hero/ancient.jpg";

export const serviceTopics = [
  {
    slug: "visa-consultancy",
    title: "Visa Consultancy",
    menuDescription: "Eligibility review, document strategy & rejection prevention",
    icon: FaPassport,
    heroImage: imgDublin,
    lead:
      "Professional visa consultancy for tourist, business, and family visit applications — built around embassy requirements, not generic checklists. We assess your profile first, then design a documentation strategy that maximises approval probability.",
    toc: [
      { id: "overview", label: "How consultancy works" },
      { id: "categories", label: "Visa categories" },
      { id: "process", label: "Step-by-step process" },
      { id: "documents", label: "Document checklist" },
      { id: "traps", label: "Common rejection traps" },
      { id: "packages", label: "Consultancy packages" },
    ],
    sections: [
      {
        id: "overview",
        heading: "How our visa consultancy works",
        paragraphs: [
          "IrishBangla consultancy is deliberately front-loaded: we review travel purpose, passport history, financial background, and ties to home country before you invest in fees or bookings. This reduces costly rejections and re-applications.",
          "Our consultants work in English and Bangla, with specialist knowledge of Ireland (routed via New Delhi), Schengen, UK, and popular destinations for Bangladeshi travellers.",
        ],
        bullets: [
          "Free initial eligibility screening — honest go / no-go advice before you commit.",
          "Country-specific document strategy — not a one-size-fits-all PDF.",
          "Cover letter and itinerary drafting aligned with embassy expectations.",
          "Mock interview preparation where applicable (US, UK, Canada).",
          "Post-refusal analysis and strengthened re-application planning.",
        ],
      },
      {
        id: "categories",
        heading: "Visa categories we consult on",
        table: {
          caption: "Visa categories and typical timelines",
          columns: ["Visa type", "Purpose", "Typical processing*", "Our focus"],
          rows: [
            ["Ireland short-stay (C)", "Tourism, family, business up to 90 days", "25–30 working days", "AVATS, New Delhi routing, financial proof"],
            ["Schengen (Type C)", "26 EU + associated states", "15–20 working days", "Itinerary, insurance, accommodation proof"],
            ["UK standard visitor", "Tourism, business, family", "15–20 working days", "VFS submission, financial thresholds"],
            ["Tourist / visitor (general)", "Leisure and sightseeing worldwide", "15–30 working days", "Purpose letter, return intent"],
            ["Business", "Meetings, conferences, trade", "15–20 working days", "Invitation letters, employer support"],
            ["Transit", "Airport layover clearance", "7–15 working days", "Onward tickets, visa for final destination"],
            ["Medical", "Treatment abroad", "10–20 working days", "Hospital letters, treatment plan, funds"],
          ],
        },
        note: "*Processing times are approximate and depend on embassy workload and season.",
      },
      {
        id: "process",
        heading: "Our step-by-step consultancy process",
        numbered: [
          "Free eligibility assessment — We review travel purpose, financial background, and passport history before you commit.",
          "Personalised document checklist — Country-specific list: passport validity, photos, bank statements, employment letters, bookings, insurance, cover letter.",
          "Application preparation — Forms completed and reviewed (e.g. Ireland AVATS), documents ordered as each embassy requires.",
          "Submission guidance — Fee payment, VFS/embassy appointment, tracking reference setup.",
          "Active tracking & follow-up — Monitoring and prompt response to requests for additional documents.",
          "Outcome support — Verify stamp accuracy on approval; analyse refusal grounds and plan re-application if needed.",
        ],
      },
      {
        id: "documents",
        heading: "Standard document checklist (varies by country)",
        table: {
          columns: ["Document", "Why it matters", "Common mistake"],
          rows: [
            ["Valid passport", "Minimum 6 months validity beyond return date", "Applying with insufficient blank pages"],
            ["Passport photos", "Biometric specifications differ by embassy", "Wrong background colour or size"],
            ["Bank statements", "Proves funds for trip + ties to home", "Large unexplained deposits before application"],
            ["Employment / business proof", "Shows stable income and return intent", "Generic letter without salary, role, leave dates"],
            ["Travel insurance", "Schengen requires minimum €30,000 cover", "Policy dates not covering full stay"],
            ["Flight & hotel bookings", "Demonstrates planned itinerary", "Non-refundable bookings before visa approval (we advise refundable options)"],
            ["Cover letter", "Ties purpose, itinerary, and finances together", "Copy-paste templates that don't match your profile"],
          ],
        },
      },
      {
        id: "traps",
        heading: "Common rejection traps — read before you apply",
        callout: {
          title: "Important for Ireland applicants",
          text: "There is no Irish Embassy in Bangladesh. Applications are routed through the Embassy of Ireland in New Delhi, India. IrishBangla handles this as your authorised representative — you do not need to travel to India yourself.",
        },
        bullets: [
          "Insufficient funds or inconsistent bank history — sudden large deposits raise red flags.",
          "Weak ties to Bangladesh — unclear employment, no property/family anchors.",
          "Mismatched itinerary — flights, hotels, and cover letter tell different stories.",
          "Incomplete insurance — wrong dates, wrong coverage amount, wrong Schengen zone.",
          "Previous refusals not disclosed — always declare prior visa history honestly.",
          "Applying too late — peak season backlogs can miss your travel date even with approval.",
        ],
      },
      {
        id: "packages",
        heading: "Consultancy packages",
        table: {
          columns: ["Plan", "Best for", "What's included", "Fee"],
          rows: [
            ["Essential", "First-time travellers", "Eligibility review + checklist + 1 visa category", "Free with package booking"],
            ["Standard", "Families & groups", "Full strategy + cover letter + pre-submission review", "€15–38"],
            ["Premium", "Complex profiles", "All services + interview prep + refusal re-application plan", "€62–115"],
            ["Ireland specialist", "Ireland-bound applicants", "New Delhi routing + AVATS + Dublin stay map", "€38–77"],
          ],
        },
      },
    ],
  },
  {
    slug: "cross-border-visa-processing",
    title: "Cross-Border Visa Processing",
    menuDescription: "Ireland via India, Schengen, UK & multi-country coordination",
    icon: FaGlobeAmericas,
    heroImage: imgCliffs,
    lead:
      "Many destinations Bangladeshi travellers want have no local embassy — applications cross borders, time zones, and jurisdictions. We manage the full cross-border pipeline so you submit once, correctly, from Bangladesh.",
    toc: [
      { id: "routing", label: "Embassy routing" },
      { id: "ireland", label: "Ireland via New Delhi" },
      { id: "schengen", label: "Schengen processing" },
      { id: "uk", label: "UK visitor route" },
      { id: "multi", label: "Multi-country trips" },
      { id: "tracking", label: "Tracking & handover" },
    ],
    sections: [
      {
        id: "routing",
        heading: "Understanding embassy jurisdiction",
        paragraphs: [
          "Cross-border processing means your application is assessed by an embassy or visa application centre outside Bangladesh, even though you prepare and often biometrics-submit locally through a VFS or similar partner.",
          "IrishBangla maps the correct jurisdiction, courier chain, and appointment flow so documents are not rejected for being sent to the wrong mission.",
        ],
        table: {
          columns: ["Destination", "Submission route from Bangladesh", "Notes"],
          rows: [
            ["Ireland", "Embassy of Ireland, New Delhi (authorised rep)", "No Irish Embassy in Dhaka; AVATS online first"],
            ["Schengen (varies)", "Relevant member-state VFS in Dhaka", "Apply to main destination or longest stay country"],
            ["United Kingdom", "VFS Global, Dhaka", "Standard visitor, business, family routes"],
            ["United States", "Embassy interview, Dhaka", "DS-160, appointment, supporting docs"],
            ["Canada", "VFS / online portal", "Biometrics + application centre"],
            ["Australia", "Online + VFS biometrics", "Genuine temporary entrant evidence critical"],
          ],
        },
      },
      {
        id: "ireland",
        heading: "Ireland — cross-border processing in detail",
        paragraphs: [
          "Ireland operates its own visa policy (not Schengen). Bangladeshi nationals require a visa for short stays. Because there is no Irish Embassy in Dhaka, applications are handled through the Embassy of Ireland in New Delhi.",
        ],
        numbered: [
          "Complete AVATS online application and print summary.",
          "Gather supporting documents per Irish Immigration Service checklist.",
          "IrishBangla submits on your behalf to New Delhi — no personal travel to India required.",
          "Application assessed; additional documents requested if needed.",
          "Passport returned with visa or refusal letter; we verify entry dates and conditions.",
        ],
        bullets: [
          "Short Stay C visa — tourism, family, business up to 90 days.",
          "Typical fee context: visa fee plus service charges (confirm current rates before payment).",
          "Financial proof must show you can fund the trip without recourse to public funds.",
          "Travel insurance and accommodation evidence strongly recommended even when not explicitly listed.",
        ],
      },
      {
        id: "schengen",
        heading: "Schengen cross-border requirements",
        bullets: [
          "Apply to the country of main purpose or longest stay — not always the first entry point.",
          "Travel medical insurance minimum €30,000 valid across all Schengen states.",
          "Proof of accommodation for every night — hotel bookings or invitation with host documents.",
          "Flight reservation (refundable) showing entry and exit from Schengen area.",
          "Biometrics at VFS valid 59 months for repeat applications under same rules.",
        ],
        callout: {
          title: "Schengen trap",
          text: "A valid Schengen visa does not grant entry to Ireland or the UK. Plan separate applications if your itinerary includes Dublin, London, or Belfast.",
        },
      },
      {
        id: "uk",
        heading: "UK standard visitor processing",
        bullets: [
          "Online application + VFS appointment in Dhaka for biometrics and document upload.",
          "Financial evidence: salary slips, bank statements, tax documents where applicable.",
          "Ties to Bangladesh: employment letter, property, family dependencies.",
          "Accommodation and itinerary — especially for first-time UK visitors.",
          "Refusal codes on GWF letters — we decode and plan targeted re-application.",
        ],
      },
      {
        id: "multi",
        heading: "Multi-country itinerary coordination",
        paragraphs: [
          "Europe + Ireland trips need sequenced applications: often Schengen first (if longest stay in EU), then Ireland or UK separately. We align dates so visas overlap correctly and no gap leaves you stranded.",
        ],
        table: {
          columns: ["Trip pattern", "Application order", "Timing tip"],
          rows: [
            ["Dublin + London", "Ireland + UK separate", "Allow 6–8 weeks total processing"],
            ["Paris + Dublin", "Schengen then Ireland", "Match visa validity to flight dates"],
            ["UK transit to Schengen", "Schengen + UK transit if needed", "Confirm transit visa rules per nationality"],
            ["Ireland only", "Ireland via New Delhi", "Book refundable flights until visa issued"],
          ],
        },
      },
      {
        id: "tracking",
        heading: "Tracking, courier & secure handover",
        bullets: [
          "Unique tracking ID for every submission — check status on our tracker page.",
          "Secure passport courier to and from application centres with insurance.",
          "WhatsApp updates at each milestone: received, submitted, under review, decision.",
          "Digital copies of all submitted documents stored for re-application if needed.",
          "Emergency contact line during active processing windows.",
        ],
      },
    ],
  },
  {
    slug: "visa-application-support",
    title: "End-to-End Visa Application Support",
    menuDescription: "Forms, documents, submission coordination & tracking",
    icon: FaMapMarkerAlt,
    heroImage: imgWild,
    lead:
      "We manage your visa application from first checklist to final decision — form completion, document review, submission coordination, and active tracking. You travel from anywhere in the world; we handle the paperwork with clarity and care.",
    toc: [
      { id: "scope", label: "What we manage" },
      { id: "process", label: "Application process" },
      { id: "financial", label: "Financial documents" },
      { id: "employment", label: "Employment proof" },
      { id: "family", label: "Family & group trips" },
      { id: "support", label: "Client communication" },
    ],
    sections: [
      {
        id: "scope",
        heading: "What we manage for you",
        paragraphs: [
          "Emerald Visa & Tours is an Ireland-focused travel and visa consultancy serving clients globally — not a walk-in office in any single country. Everything we do is built around accurate applications for Ireland, Schengen, the UK, and other destinations you plan to visit.",
        ],
        bullets: [
          "Personalised document checklist for your nationality, destination, and travel purpose.",
          "Application forms completed and reviewed (e.g. Ireland AVATS, UKVI, Schengen portals).",
          "Cover letters, itineraries, and supporting files organised in embassy-required order.",
          "Submission coordination — including Ireland applications routed via our authorised New Delhi channel.",
          "Biometric and VFS appointment guidance where you attend in your own country.",
          "Live tracking with your unique reference and proactive follow-up on embassy requests.",
        ],
      },
      {
        id: "process",
        heading: "Our application process",
        numbered: [
          "Free eligibility review — we confirm purpose, timeline, and realistic approval prospects.",
          "Document pack preparation — you send scans; we verify before anything is submitted.",
          "Form completion and internal quality check — every field, date, and attachment cross-checked.",
          "Submission — we coordinate embassy or VFS routing appropriate to your case.",
          "Tracking & updates — milestone alerts by email and WhatsApp through our tracker.",
          "Decision support — passport check on approval, or refusal analysis and re-application plan.",
        ],
        callout: {
          title: "Ireland applications",
          text: "Irish visa applications for many nationalities are processed through the Embassy of Ireland in New Delhi. We submit on your behalf as an authorised representative — you do not need to travel to India.",
        },
      },
      {
        id: "financial",
        heading: "Financial documentation guidance",
        table: {
          columns: ["Document", "Typical requirement", "What embassies look for"],
          rows: [
            ["Bank statements", "Usually 3–6 months", "Stable balance, regular income, no unexplained deposits"],
            ["Salary / income proof", "Recent payslips + employer letter", "Income consistent with bank credits"],
            ["Savings or investments", "Statements or solvency letter", "Funds available for the trip, not borrowed short-term"],
            ["Sponsorship", "If someone else pays", "Sponsor finances, relationship proof, signed declaration"],
            ["Business income", "For self-employed applicants", "Registration, tax returns, business account history"],
          ],
        },
      },
      {
        id: "employment",
        heading: "Employment & ties to home country",
        bullets: [
          "Employer letter: role, salary, length of service, approved leave, and confirmation you return to work.",
          "Self-employed — business registration, invoices, or tax evidence showing ongoing activity.",
          "Students — enrolment proof, term dates, and sponsor package if a parent funds the trip.",
          "Retirees — pension or savings evidence plus property or family ties showing return intent.",
          "Property, family, or other anchors — highlighted in the cover letter where they strengthen the case.",
        ],
      },
      {
        id: "family",
        heading: "Family & group applications",
        bullets: [
          "Linked applications for couples and children — shared itinerary and consistent finances.",
          "Minors — birth certificates and parental consent where only one parent travels.",
          "Family visits to Ireland or Europe — host invitation, host address, and host financials.",
          "Group travel — single point of contact, coordinated timelines, and combined invoicing on request.",
        ],
      },
      {
        id: "support",
        heading: "How we stay in touch",
        paragraphs: [
          "Visa rules are published in English and change often. We explain requirements in plain language — in English or Bangla — and review your documents remotely before you pay embassy fees.",
        ],
        bullets: [
          "Video or phone consultation from wherever you are based.",
          "WhatsApp document review — uploads checked before printing or submission.",
          "Step-by-step checklists tailored to your destination and profile.",
          "Clear explanation of refusal letters and honest advice on next steps.",
        ],
      },
    ],
  },
  {
    slug: "e-visa-processing",
    title: "E-Visa Processing",
    menuDescription: "Online visas for Turkey, India, UAE & other e-visa countries",
    icon: FaLaptop,
    heroImage: imgOther,
    lead:
      "Electronic visas let you apply online without embassy visits — but wrong passport scans, payment errors, or invalid itineraries still cause delays at the airport. We complete e-visa applications correctly the first time.",
    toc: [
      { id: "overview", label: "What is an e-visa" },
      { id: "destinations", label: "Popular e-visa destinations" },
      { id: "steps", label: "Application steps" },
      { id: "documents", label: "Digital documents" },
      { id: "traps", label: "Airport & portal traps" },
      { id: "turnaround", label: "Processing times" },
    ],
    sections: [
      {
        id: "overview",
        heading: "What e-visa processing covers",
        paragraphs: [
          "An e-visa (electronic visa) is linked to your passport number and issued via a government portal. You print the approval or show it on your phone at check-in and immigration. It is not a visa-on-arrival stamp — each country has different rules.",
          "IrishBangla handles portal registration, document upload, payment, and approval verification so you arrive with a valid authorisation.",
        ],
      },
      {
        id: "destinations",
        heading: "Popular e-visa destinations for Bangladeshi travellers",
        table: {
          columns: ["Country", "Portal type", "Typical validity", "Notes"],
          rows: [
            ["Turkey", "Government e-Visa", "90 days / 180-day window", "Tourism and business; passport scan quality critical"],
            ["India", "e-Visa (eTV)", "30 days / 1 year options", "Categories: tourist, business, medical; designated airports only"],
            ["United Arab Emirates", "Online / GDRFA", "30–90 days", "Often via airline or authorised agent; rules change frequently"],
            ["Sri Lanka", "ETA online", "30 days", "Extendable in country subject to rules"],
            ["Kenya", "eTA", "90 days", "Required before travel for most nationalities"],
            ["Vietnam", "E-visa", "30–90 days", "Single entry; designated ports of entry"],
          ],
        },
        note: "E-visa eligibility and rules change. We confirm current requirements before every application.",
      },
      {
        id: "steps",
        heading: "Our e-visa application steps",
        numbered: [
          "Confirm passport validity (usually 6+ months beyond stay) and eligible entry points.",
          "Scan passport bio page and photo to exact portal specifications (size, DPI, no glare).",
          "Complete online form — travel dates, address abroad, contact details match ticket/hotel.",
          "Pay government fee by approved card; retain payment receipt.",
          "Download approval PDF; verify name spelling, passport number, and validity dates.",
          "Send copy to airline and save offline — airport Wi-Fi is not guaranteed.",
        ],
      },
      {
        id: "documents",
        heading: "Digital document requirements",
        bullets: [
          "Passport bio page scan — colour, full page, no fingers in frame.",
          "Digital photo — white background, recent, no glasses unless permitted.",
          "Flight itinerary — entry and exit dates matching visa validity.",
          "Hotel booking or host address — required by some portals.",
          "Supporting letter — business invitation or conference registration where applicable.",
          "Payment card — international debit/credit enabled for foreign transactions.",
        ],
      },
      {
        id: "traps",
        heading: "Common e-visa traps",
        callout: {
          title: "Airport denial risk",
          text: "An e-visa approval with a typo in your passport number is invalid. We triple-check machine-readable zone details against the approval PDF before you fly.",
        },
        bullets: [
          "Wrong visa category — tourist vs business affects entry permission.",
          "Entry only at designated airports/seaports — landing elsewhere may be refused.",
          "Expired approval PDF — some countries require application within a window before travel.",
          "Third-party scam sites charging inflated fees — we use official government portals only.",
          "Screenshot instead of official PDF — airlines may reject non-official formats.",
        ],
      },
      {
        id: "turnaround",
        heading: "Typical processing times",
        table: {
          columns: ["Destination", "Standard", "Express / urgent", "Our service"],
          rows: [
            ["Turkey", "Minutes to 24 hours", "Same day in most cases", "Same-day submission + verification"],
            ["India e-Visa", "2–4 business days", "Limited expedite options", "Document pre-check before payment"],
            ["UAE", "1–3 business days", "Varies by channel", "Coordination with airline/authorised agents"],
            ["Sri Lanka ETA", "Usually within 24 hours", "Rare delays in peak season", "Re-application if rejected"],
          ],
        },
      },
    ],
  },
  {
    slug: "express-consultation",
    title: "Express Consultation",
    menuDescription: "Same-day review for urgent travel & re-applications",
    icon: FaBolt,
    heroImage: imgHidden,
    lead:
      "When departure dates are fixed or a refusal letter arrives late, standard turnaround is not enough. Express consultation gives you a senior case review, corrected documents, and a clear action plan within hours — not weeks.",
    toc: [
      { id: "when", label: "When to use express" },
      { id: "included", label: "What's included" },
      { id: "urgent", label: "Urgent travel scenarios" },
      { id: "refusal", label: "Post-refusal express" },
      { id: "slots", label: "Availability & slots" },
      { id: "pricing", label: "Express fees" },
    ],
    sections: [
      {
        id: "when",
        heading: "When express consultation is the right choice",
        bullets: [
          "Departure within 2–4 weeks and documents not yet submitted.",
          "Visa refusal received — need immediate re-application strategy.",
          "Employer or conference deadline with fixed travel dates.",
          "Last-minute family emergency travel abroad.",
          "Complex profile — prior refusals, self-employment, sponsorship cases needing senior review.",
          "Document rejection at VFS counter — fix and rebook quickly.",
        ],
      },
      {
        id: "included",
        heading: "What express consultation includes",
        numbered: [
          "Priority callback within 2 hours (business hours) or same-day appointment slot.",
          "Senior consultant review — not junior checklist only.",
          "Line-by-line document audit with written correction list.",
          "Cover letter rewrite or urgent drafting within 24 hours.",
          "VFS appointment monitoring — alert when earlier slots open.",
          "Direct WhatsApp line until submission complete.",
        ],
      },
      {
        id: "urgent",
        heading: "Urgent travel scenarios we handle",
        table: {
          columns: ["Scenario", "Risk", "Express action"],
          rows: [
            ["Flight in 10 days, no visa", "High — may need itinerary change", "Same-day doc audit + fastest eligible route"],
            ["Schengen appointment months away", "Miss travel window", "Cancellation monitoring + alternative mission if legal"],
            ["Ireland via New Delhi delay", "Processing exceeds travel date", "Refundable booking advice + letter to employer"],
            ["Medical travel abroad", "Treatment date fixed", "Medical visa doc pack + priority submission"],
            ["Business conference invite", "Registration deadline", "Invitation validation + express cover letter"],
          ],
        },
      },
      {
        id: "refusal",
        heading: "Post-refusal express re-application",
        paragraphs: [
          "A refusal is not always final — but blind re-application wastes money. Express service includes decoding the refusal letter, identifying the weak evidence, and rebuilding the case.",
        ],
        bullets: [
          "Analysis of refusal codes and officer notes (where provided).",
          "Gap identification: finances, ties, itinerary, or document authenticity.",
          "Strengthened evidence pack — new bank history, employer letter, property docs.",
          "Honest assessment: proceed vs wait vs change destination.",
          "Re-application timing — too soon can harm credibility; we advise optimal window.",
        ],
        callout: {
          title: "Honest note",
          text: "Express service speeds up preparation — it cannot override embassy processing times. We will tell you if travel on your original date is no longer realistic.",
        },
      },
      {
        id: "slots",
        heading: "Availability & booking slots",
        bullets: [
          "Express slots: Monday–Saturday, 9:00–19:00 BST/Dhaka-aligned hours.",
          "Book via Book Trip page — mark 'Express consultation' in message field.",
          "Video call (Zoom/WhatsApp) or in-office Dhaka by appointment.",
          "Response target: 2 hours weekdays, 4 hours weekends.",
          "Emergency line for existing clients with active tracking ID.",
        ],
      },
      {
        id: "pricing",
        heading: "Express consultation fees",
        table: {
          columns: ["Service", "Turnaround", "Fee (indicative)"],
          rows: [
            ["Express eligibility call (30 min)", "Same day", "Free for returning clients / €15 new"],
            ["Full document audit + correction list", "Within 24 hours", "€38–62"],
            ["Cover letter urgent draft", "Within 24 hours", "€23–46"],
            ["Refusal analysis + re-application plan", "Within 48 hours", "€46–77"],
            ["End-to-end express processing", "Until submission", "€115+ (plus embassy fees)"],
          ],
        },
        note: "Fees vary by destination complexity. Quote confirmed before work begins.",
      },
    ],
  },
  {
    slug: "document-legalization",
    title: "Document Legalization",
    menuDescription: "Apostille, notarisation, translation & embassy attestation",
    icon: FaFileSignature,
    heroImage: imgAncient,
    lead:
      "Visa applications often require documents to be notarised, translated, attested by government ministries, and legalised for use abroad. We coordinate the full chain so nothing is rejected for improper certification.",
    toc: [
      { id: "chain", label: "Legalisation chain" },
      { id: "notary", label: "Notarisation" },
      { id: "translation", label: "Certified translation" },
      { id: "attestation", label: "Government attestation" },
      { id: "apostille", label: "Apostille & embassy legalisation" },
      { id: "documents", label: "Documents we legalise" },
    ],
    sections: [
      {
        id: "chain",
        heading: "Understanding the legalisation chain",
        paragraphs: [
          "Different countries require different levels of authentication. A birth certificate from Bangladesh may need notary → Ministry of Foreign Affairs (MOFA) → destination embassy legalisation before a foreign visa office accepts it.",
          "We map the exact chain for your destination and document type — skipping unnecessary steps saves time and money.",
        ],
        table: {
          columns: ["Stage", "Who performs it", "Purpose"],
          rows: [
            ["Notarisation", "Licensed notary public", "Certifies copy or signature is genuine"],
            ["Translation", "Certified translator", "Foreign embassy can read Bangla documents"],
            ["MOFA attestation", "Ministry of Foreign Affairs, Bangladesh", "Confirms notary/translator authority"],
            ["Embassy legalisation", "Destination country embassy in Dhaka", "Confirms MOFA stamp for that country"],
            ["Apostille", "Competent authority ( Hague countries)", "Simplified international certification"],
          ],
        },
      },
      {
        id: "notary",
        heading: "Notarisation services",
        bullets: [
          "Certified true copies of passports, birth certificates, marriage certificates, academic transcripts.",
          "Affidavits and sworn statements — sponsorship, single status, consent for minors.",
          "Power of attorney for representatives submitting on your behalf.",
          "Business documents — trade license copies, board resolutions, partnership deeds.",
          "Bank balance certificates notarised where embassy requires notary seal.",
        ],
      },
      {
        id: "translation",
        heading: "Certified translation (Bangla ↔ English)",
        bullets: [
          "Birth, marriage, divorce, death certificates.",
          "Academic records — SSC, HSC, bachelor's, master's transcripts and certificates.",
          "Employment letters, experience certificates, NOC letters.",
          "Property documents — mutation, tax receipts, ownership papers.",
          "Medical reports for medical visa applications.",
          "Translator affidavit and firm stamp for embassy acceptance.",
        ],
        callout: {
          title: "Translation trap",
          text: "Informal translation without translator certification is rejected by most embassies. We provide embassy-accepted format with translator declaration.",
        },
      },
      {
        id: "attestation",
        heading: "Government attestation (Bangladesh MOFA)",
        numbered: [
          "Document notarised or issued in correct format.",
          "Submitted to Ministry of Foreign Affairs, Dhaka for attestation stamp.",
          "MOFA confirms notary or issuing authority — processing time varies by queue.",
          "If required, forward to destination embassy in Dhaka for final legalisation.",
          "Return authenticated document with photocopy set for visa file.",
        ],
        note: "MOFA queues can take 3–10 business days. Express consultation can advise on timing relative to your travel date.",
      },
      {
        id: "apostille",
        heading: "Apostille & Hague Convention countries",
        paragraphs: [
          "Countries party to the Hague Apostille Convention accept apostille instead of full embassy legalisation for many public documents. Bangladesh is not a Hague apostille country for all document types — routing varies by destination.",
        ],
        bullets: [
          "We confirm whether your destination accepts MOFA + embassy route vs apostille from another jurisdiction.",
          "Educational documents for study visas — university verification plus legalisation.",
          "Commercial invoices and export documents — chamber of commerce plus MOFA where required.",
          "Irish and UK family reunion cases — full birth/marriage certificate chains common.",
        ],
      },
      {
        id: "documents",
        heading: "Documents we regularly legalise for visa use",
        table: {
          columns: ["Document", "Typical chain", "Used for"],
          rows: [
            ["Birth certificate", "Notary → MOFA → embassy", "Family visa, minor travel, reunion"],
            ["Marriage certificate", "Notary → MOFA → embassy", "Spouse visa, family visit"],
            ["Academic transcripts", "Notary → MOFA → embassy / university verify", "Student visa support"],
            ["Police clearance", "Issuing authority → MOFA", "Long-stay, work, immigration"],
            ["Bank solvency letter", "Bank seal → notary (if required)", "Tourist, business visa funds"],
            ["Trade license", "Notary → MOFA", "Business visa, self-employed applicant"],
            ["Medical reports", "Hospital → notary → translation", "Medical treatment visa"],
          ],
        },
      },
    ],
  },
];

export function getServiceTopic(slug) {
  return serviceTopics.find((t) => t.slug === slug) ?? null;
}
