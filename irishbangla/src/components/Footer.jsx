import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";

import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>
            Email:{" "}
            <a href="mailto:info@irishbangla.com">info@irishbangla.com</a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+8801788-687091">(+880) 1788-687091</a>
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Location 1 */}
        <div className="footer-col">
          <h4>Irish Bangla – Dhaka</h4>
          <p>
            3rd Floor, Road: 11, House: 76/A <br />
            Banani, Dhaka
          </p>
          <a
            className="location-link"
            href="https://www.google.com/maps/search/?api=1&query=House%2076%2FA%2C%20Road%2011%2C%20Banani%2C%20Dhaka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Irish Bangla Dhaka on Google Maps"
          >
            <FaMapMarkerAlt /> View Location
          </a>
        </div>

        {/* Location 2 */}
        <div className="footer-col">
          <h4>Irish Bangla – Dublin</h4>
          <p>
            North Wall Quay, <br />
            Dublin 1, Ireland
          </p>
          <a
            className="location-link"
            href="https://www.google.com/maps/search/?api=1&query=North%20Wall%20Quay%2C%20Dublin%201%2C%20Ireland"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Irish Bangla Dublin on Google Maps"
          >
            <FaMapMarkerAlt /> View Location
          </a>
        </div>

        {/* Payments */}
        <div className="footer-col">
          <h4>We Accept</h4>
          <div className="payment-box" aria-label="Accepted payment methods">
            <span className="payment-mark payment-mark--visa" title="Visa">
              <FaCcVisa aria-hidden="true" />
              <span className="sr-only">Visa</span>
            </span>
            <span className="payment-mark payment-mark--mastercard" title="Mastercard">
              <FaCcMastercard aria-hidden="true" />
              <span className="sr-only">Mastercard</span>
            </span>
            <span className="payment-mark payment-mark--amex" title="American Express">
              <FaCcAmex aria-hidden="true" />
              <span className="sr-only">American Express</span>
            </span>
            <span className="payment-badge payment-badge--bkash" title="bKash">bKash</span>
            <span className="payment-badge payment-badge--nagad" title="Nagad">Nagad</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Irish Bangla. All Rights Reserved.
      </div>
    </footer>
  );
}
