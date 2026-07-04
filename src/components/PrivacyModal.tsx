"use client";

import { useBooking } from "../context/BookingContext";

export default function PrivacyModal() {
  const { isPrivacyOpen, closePrivacy } = useBooking();

  if (!isPrivacyOpen) return null;

  return (
    <div
      id="privacy-modal"
      className="modal-overlay active"
      role="dialog"
      aria-labelledby="privacy-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closePrivacy();
      }}
    >
      <div className="modal-container" style={{ maxWidth: "600px" }}>
        <button className="modal-close" aria-label="Close modal" onClick={closePrivacy}>
          &times;
        </button>
        <div className="modal-header">
          <h3 id="privacy-modal-title" className="text-h2">
            Privacy Policy
          </h3>
          <p className="text-small">Last Updated: June 2026</p>
        </div>
        <div
          className="modal-body"
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            paddingRight: "var(--space-md)",
            textAlign: "left",
          }}
        >
          <p className="text-body" style={{ marginBottom: "var(--space-md)" }}>
            Park Dental Clinic is committed to protecting your personal and medical
            information. This privacy policy explains how we collect, use, and secure your
            information when you visit our website or book consultations.
          </p>
          <h4 className="text-h4" style={{ margin: "var(--space-lg) 0 var(--space-sm)" }}>
            1. Information We Collect
          </h4>
          <p className="text-body" style={{ marginBottom: "var(--space-md)" }}>
            We collect details such as your name, contact phone number, and preferred
            date/time of booking to coordinate your dental consultation. Medical information
            shared is kept strictly confidential and only accessible by authorized clinical
            staff.
          </p>
          <h4 className="text-h4" style={{ margin: "var(--space-lg) 0 var(--space-sm)" }}>
            2. How We Use Information
          </h4>
          <p className="text-body" style={{ marginBottom: "var(--space-md)" }}>
            We use booking details to schedule appointments and send confirmation reminders
            via WhatsApp, SMS, or phone. We do not sell or share your data with third-party
            marketing companies.
          </p>
          <h4 className="text-h4" style={{ margin: "var(--space-lg) 0 var(--space-sm)" }}>
            3. Data Security
          </h4>
          <p className="text-body" style={{ marginBottom: "var(--space-md)" }}>
            We implement secure administrative procedures and standard encryption to prevent
            unauthorized access or disclosure of clinical data.
          </p>
          <p className="text-body">
            For any privacy questions or requests to delete booking logs, please email{" "}
            <a href="mailto:hello@parkdentalclinics.co.in" style={{ textDecoration: "underline" }}>
              hello@parkdentalclinics.co.in
            </a>{" "}
            or contact Dr. Monish Krishnan directly.
          </p>
        </div>
      </div>
    </div>
  );
}
