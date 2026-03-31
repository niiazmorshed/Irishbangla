import {
  FaIdCard,
  FaBriefcase,
  FaHome,
  FaEuroSign,
  FaBusAlt,
  FaLeaf,
} from "react-icons/fa";

import imgCliffs from "../assets/hero/cliffs.jpg";
import imgDublin from "../assets/hero/dublin.jpg";
import imgOther from "../assets/hero/other.jpg";
import imgWild from "../assets/hero/wild2.jpg";
import imgHidden from "../assets/hero/hidden.jpg";
import imgAncient from "../assets/hero/ancient.jpg";

export const informationTopics = [
  {
    slug: "moving-to-ireland",
    title: "Moving to Ireland — Registration & Residency",
    icon: FaIdCard,
    heroImage: imgCliffs,
    lead:
      "Key steps for non‑EEA nationals staying more than 90 days, including registration, IRP, stamp types, long‑term residency and citizenship pathways.",
    sections: [
      {
        heading: "Register with Immigration",
        bullets: [
          "Register at your local Garda immigration office (outside Dublin) or the Burgh Quay Registration Office in Dublin.",
          "Register within 90 days of arrival in Ireland.",
          "Bring: passport, evidence of immigration permission, and registration fee of €300.",
          "You receive an IRP (Irish Residence Permit) card — your proof of legal residence.",
        ],
      },
      {
        heading: "IRP Stamp Types (Overview)",
        bullets: [
          "Stamp 1: Employment (requires employment permit).",
          "Stamp 1G: Graduated / job‑seeking after studies.",
          "Stamp 2: Student (registered course, full‑time).",
          "Stamp 3: Non‑working (joining family, retired).",
          "Stamp 4: Longer‑term; can work without permit (incl. family of Irish/EEA citizen).",
          "Stamp 5: Without Condition as to Time — effectively permanent residency.",
        ],
      },
      {
        heading: "Long‑Term Residency",
        bullets: [
          "Apply after 5 years of legal residency under certain stamps.",
          "Provides Stamp 4 level rights — no employment permit required.",
          "Applications are handled by Immigration Service Delivery (ISD).",
        ],
      },
      {
        heading: "Irish Citizenship (Naturalisation)",
        bullets: [
          "Naturalisation typically requires 5 years of continuous residency (some absences may be allowed).",
          "Generally requires Stamp 1, 1G, 4 or 5 (not Stamp 2 or 3).",
          "Apply through the Irish Naturalisation and Immigration Service (INIS).",
        ],
      },
    ],
    sources: ["citizensinformation.ie", "irishimmigration.ie"],
  },
  {
    slug: "employment-in-ireland",
    title: "Employment in Ireland",
    icon: FaBriefcase,
    heroImage: imgDublin,
    lead:
      "Employment basics, key worker rights, and a practical overview of common employment permits for non‑EEA nationals.",
    sections: [
      {
        heading: "Employment Types (Summary)",
        table: {
          columns: ["Employment Type", "Description", "Permit Needed? (non‑EEA)"],
          rows: [
            ["Employed (Full‑time)", "Standard contract, PRSI contributions, full rights", "Yes"],
            ["Part‑time", "Same rights as full‑time, pro‑rata basis", "Yes"],
            ["Self‑employed", "Run your own business, different tax treatment", "Business Permit"],
            ["Agency Worker", "Placed by agency, rights after 12 weeks", "Yes"],
            ["Domestic Worker", "Employed in private home, specific rights apply", "Yes"],
          ],
        },
      },
      {
        heading: "Key Employment Rights (Highlights)",
        bullets: [
          "National minimum wage: €13.50/hour (2025). Reviewed annually.",
          "Maximum 48‑hour working week on average; breaks required by law.",
          "Statutory annual leave: minimum 4 weeks per year.",
          "Statutory sick pay: employees entitled to paid sick leave (up to 10 days/year from 2026).",
          "Maternity leave: 26 weeks paid + 16 weeks unpaid.",
          "Paternity leave: 2 weeks paid leave for new fathers.",
          "Redundancy payment after 2 years’ continuous service.",
          "Protection against unfair dismissal after 12 months’ service.",
          "Anti‑discrimination laws cover 9 grounds including race, religion, nationality.",
        ],
      },
      {
        heading: "Employment Permits for Non‑EEA Nationals",
        table: {
          columns: ["Permit Type", "For Whom", "Salary Threshold"],
          rows: [
            ["Critical Skills EP", "Highly skilled professionals in demand occupations", "€38,000+ / year"],
            ["General EP", "Most occupations not covered by Critical Skills", "€34,000+ / year"],
            ["Intra‑Company Transfer", "Employees moving within multinational", "€40,000+ / year"],
            ["Dependent / Partner EP", "Dependents of Critical Skills EP holders", "Any salary"],
            ["Internship EP", "Students/graduates on structured programme", "€25,000+ / year"],
          ],
        },
      },
      {
        heading: "Apply (Official Portal)",
        bullets: [
          "Apply for employment permits at: enterprise.gov.ie → Employment Permits.",
        ],
      },
    ],
    sources: ["citizensinformation.ie", "irishimmigration.ie", "enterprise.gov.ie"],
  },
  {
    slug: "housing-in-ireland",
    title: "Housing in Ireland",
    icon: FaHome,
    heroImage: imgOther,
    lead:
      "A tenant‑focused overview of renting, notice periods, deposits, dispute resolution, and key support schemes.",
    sections: [
      {
        heading: "Renting a Home",
        bullets: [
          "Written tenancy agreement (lease) required by law.",
          "Landlord must register tenancy with the RTB (Residential Tenancies Board).",
          "Standard lease is 12 months, then rolling monthly.",
          "Tenants must give 28–84 days’ notice (depending on tenancy length).",
          "Landlords must give 90–224 days’ notice to end a tenancy.",
        ],
      },
      {
        heading: "Tenant Rights",
        bullets: [
          "Right to peaceful occupation and safe, habitable accommodation.",
          "Rent receipts must be provided on request.",
          "Landlord must give 24 hours’ notice before entry.",
          "Disputes go to the Residential Tenancies Board (RTB).",
          "Discriminating against tenants by nationality is illegal.",
        ],
      },
      {
        heading: "Typical Rents (Indicative, 2025)",
        bullets: [
          "Dublin City Centre — 1‑bed: €1,800–€2,400/month; 2‑bed: €2,400–€3,200/month.",
          "Cork / Galway — 1‑bed: €1,400–€1,800/month; 2‑bed: €1,800–€2,400/month.",
        ],
      },
      {
        heading: "Deposits",
        bullets: [
          "Maximum 2 months’ rent deposit allowed by law.",
          "Must be returned within 14 days of tenancy ending.",
          "Landlord can deduct for damage beyond normal wear.",
        ],
      },
      {
        heading: "Social & Affordable Housing (Support Schemes)",
        bullets: [
          "Apply to your local council (Local Authority) for social housing.",
          "Housing Assistance Payment (HAP): council pays landlord directly on your behalf.",
          "Rent Supplement: short‑term support from Dept. of Social Protection.",
          "First Home Scheme: shared equity for first‑time buyers.",
        ],
      },
    ],
    sources: ["citizensinformation.ie", "irishimmigration.ie"],
  },
  {
    slug: "money-and-tax",
    title: "Money & Tax in Ireland",
    icon: FaEuroSign,
    heroImage: imgWild,
    lead:
      "Core income tax bands, PRSI, USC, VAT basics, plus practical steps like PPS number and opening a bank account.",
    sections: [
      {
        heading: "Income Tax (Indicative)",
        bullets: [
          "Standard rate: 20% on income up to €42,000 (single).",
          "Higher rate: 40% on income above the standard rate cut‑off.",
          "Tax credits reduce your final tax bill (e.g. Personal Credit: €1,875).",
        ],
      },
      {
        heading: "PRSI (Social Insurance)",
        bullets: [
          "Most employees pay 4.1% PRSI on earnings above €352/week (2025).",
          "Entitles you to jobseeker’s benefit, maternity pay, state pension.",
        ],
      },
      {
        heading: "USC (Universal Social Charge)",
        bullets: [
          "0.5% on first €12,012 of income.",
          "2% on €12,012–€25,760; 4% on €25,760–€70,044; 8% above.",
        ],
      },
      {
        heading: "Important Tax Steps",
        bullets: [
          "Get a PPS Number (Personal Public Service number) before starting work.",
          "Register for tax with Revenue (revenue.ie/myaccount).",
          "Your employer deducts PAYE (pay as you earn) from your salary.",
          "File an annual tax return if self‑employed or have multiple incomes.",
        ],
      },
      {
        heading: "VAT (Value Added Tax)",
        bullets: [
          "Standard rate: 23%.",
          "Reduced rate: 13.5% (hospitality, fuel).",
          "Zero rate: children’s clothing, basic foodstuffs.",
        ],
      },
      {
        heading: "Banking",
        bullets: [
          "Major banks: AIB, Bank of Ireland, PTSB, N26, Revolut.",
          "Need PPS number and proof of address to open an account.",
        ],
      },
    ],
    sources: ["citizensinformation.ie", "irishimmigration.ie", "revenue.ie"],
  },
  {
    slug: "travel-transport-practical",
    title: "Travel, Transport & Practical Information",
    icon: FaBusAlt,
    heroImage: imgHidden,
    lead:
      "Arrival essentials, public transport, driving rules, mobile/Internet, emergency services, and cultural notes for day‑to‑day life in Ireland.",
    sections: [
      {
        heading: "Arriving",
        bullets: [
          "Main airports: Dublin (DUB), Shannon (SNN), Cork (ORK).",
          "Dublin Airport has two terminals — check which one applies to your flight.",
          "Immigration/border control on arrival: present passport + supporting documents.",
          "Customs: declare items over €430 (non‑EEA arrivals).",
        ],
      },
      {
        heading: "Public Transport",
        bullets: [
          "Dublin: Dublin Bus, Luas tram (Red & Green lines), DART coastal rail.",
          "Leap Card: top‑up contactless travel card accepted on bus, tram, rail.",
          "Bus Éireann connects major towns and cities nationwide.",
          "Irish Rail (Iarnród Éireann): intercity services linking Dublin to Cork, Galway, Limerick, etc.",
        ],
      },
      {
        heading: "Driving",
        bullets: [
          "Drive on the LEFT side of the road.",
          "Speed limits: 50km/h urban, 80km/h regional, 100km/h national, 120km/h motorway.",
          "Foreign driving licences accepted for up to 12 months; then must exchange or pass Irish test.",
          "Car insurance is mandatory; third‑party minimum.",
        ],
      },
      {
        heading: "Mobile & Internet",
        bullets: [
          "Major operators: Vodafone, Three, Eir, Tesco Mobile, 48.",
          "Prepaid SIM available at airports, supermarkets and phone shops.",
          "4G/LTE widely available; 5G expanding in cities.",
          "Electricity: 230V, Type G plugs (3 flat rectangular pins) — bring an adapter.",
        ],
      },
      {
        heading: "Emergency & Health",
        bullets: [
          "Emergency services: dial 999 or 112 (free from any phone).",
          "Non‑emergency Gardaí (police): 1800 666 111.",
          "HSE (public health) hospitals: A&E departments at major hospitals.",
          "GP (family doctor): registration recommended; GP visit card if eligible.",
          "Pharmacies widely available; no prescription needed for many medications.",
        ],
      },
      {
        heading: "Cultural & Religious",
        bullets: [
          "Islamic Cultural Centre of Ireland: Clonskeagh, Dublin 6 (Friday prayers, events).",
          "Halal food available in major supermarkets (Tesco, Lidl, Aldi, Asian shops).",
          "Hindu temples, Buddhist centres and synagogues in Dublin.",
          "Catholic churches in every town and village across Ireland.",
          "Tolerance and inclusion are core values protected by Irish law.",
        ],
      },
    ],
    sources: ["citizensinformation.ie", "irishimmigration.ie"],
  },
  {
    slug: "environment-waste-daily-living",
    title: "Environment, Waste & Daily Living",
    icon: FaLeaf,
    heroImage: imgAncient,
    lead:
      "Recycling and waste system, water and energy basics, plus climate expectations for planning your daily life in Ireland.",
    sections: [
      {
        heading: "Waste & Recycling",
        bullets: [
          "Three‑bin system: Green (recycling), Brown (food/garden), Black (general waste).",
          "Bin collection fees apply — paid to your local waste provider.",
          "Bring centres / recycling centres available in every county for larger items.",
          "Littering carries on‑the‑spot fines.",
        ],
      },
      {
        heading: "Water & Energy",
        bullets: [
          "Tap water is safe to drink throughout Ireland.",
          "Irish Water (Uisce Éireann) manages water infrastructure.",
          "Electricity & gas supplied by ESB, Bord Gáis, Electric Ireland, and competitors.",
          "Ireland has a carbon tax — applies to fuel and energy.",
        ],
      },
      {
        heading: "Weather & Climate",
        bullets: [
          "Mild, temperate and WET — rain is common year‑round.",
          "Summer (Jun–Aug): 15–20°C; Winter (Dec–Feb): 3–8°C.",
          "Daylight varies greatly: ~17hrs in June, ~7hrs in December.",
          "Clocks change twice a year (BST in summer, GMT in winter).",
        ],
      },
    ],
    sources: ["citizensinformation.ie", "irishimmigration.ie"],
  },
];

export function getInformationTopic(slug) {
  return informationTopics.find((t) => t.slug === slug) || null;
}

