"use client";

import { useBooking } from "../context/BookingContext";

export default function SuccessToast() {
  const { isSuccessToastOpen } = useBooking();

  return (
    <div
      id="success-toast"
      className={`toast-notification ${isSuccessToastOpen ? "active" : ""}`}
      aria-live="polite"
    >
      <div className="toast-icon">✓</div>
      <div className="toast-content">
        <h4 className="toast-title">Booking Request Sent</h4>
        <p className="toast-desc">Doctor will call or text to confirm.</p>
      </div>
    </div>
  );
}
