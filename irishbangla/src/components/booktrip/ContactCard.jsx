import {
  PiClockCountdownBold,
  PiEnvelopeSimpleBold,
  PiMapPinLineBold,
  PiPhoneCallBold,
} from "react-icons/pi";

const CONTACT_ITEMS = [
  {
    icon: PiMapPinLineBold,
    label: "Address",
    content: (
      <>
        House 76/A, Road 11
        <br />
        Banani, Dhaka-1213
      </>
    ),
  },
  {
    icon: PiPhoneCallBold,
    label: "Phone",
    content: (
      <a href="tel:+8801725982743">+880 1725-982743</a>
    ),
  },
  {
    icon: PiEnvelopeSimpleBold,
    label: "Email",
    content: (
      <a href="mailto:fineanswer2025@gmail.com">fineanswer2025@gmail.com</a>
    ),
  },
  {
    icon: PiClockCountdownBold,
    label: "Office Hours",
    content: "Sat – Wed: 10:00 AM – 6:00 PM",
  },
];

export default function ContactCard() {
  return (
    <aside className="booktrip-contact">
      <div className="booktrip-contact__inner">
        <h2 className="booktrip-contact__title">Contact Information</h2>
        <p className="booktrip-contact__lead">
          Reach our team directly — we typically respond within one business day.
        </p>
        <ul className="booktrip-contact__list">
          {CONTACT_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label} className="booktrip-contact__item">
                <span className="booktrip-contact__icon" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <span className="booktrip-contact__label">{item.label}</span>
                  <p>{item.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
