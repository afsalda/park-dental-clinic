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
        <h4 className="toast-title">Request Submitted</h4>
        <p className="toast-desc">This is a booking request, not a confirmed slot. Your appointment is confirmed only after the doctor calls or texts you.</p>
      </div>
    </div>
  );
}
