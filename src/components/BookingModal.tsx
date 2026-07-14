"use client";

import { useState, useEffect } from "react";
import { useBooking } from "../context/BookingContext";
import { IconTooth, IconCheck, IconChevronLeft, IconChevronRight, IconStethoscope, IconUser, IconCalendar, IconArrowLeft, IconArrowRight } from "./Icons";

interface ServiceItem {
  label: string;
  img: string;
}

interface DoctorItem {
  name: string;
  role: string;
  init: string;
}

interface TimeItem {
  t: string;
  l: string;
}

const svcs: ServiceItem[] = [
  { label: "General Consultation", img: "/images/icon-treatment.webp" },
  { label: "Dental Implants", img: "/images/icon-implants.webp" },
  { label: "Cosmetic Dentistry", img: "/images/icon-veneers.webp" },
  { label: "Root Canal", img: "/images/icon-prosthetics.webp" },
  { label: "Teeth Whitening", img: "/images/icon-whitening.webp" },
  { label: "Braces & Aligners", img: "/images/icon-braces.webp" },
];

const docs: DoctorItem[] = [
  { name: "Any specialist (recommended)", role: "We'll match you to the right doctor", init: "✦" },
  { name: "Dr. Monish", role: "Chief Dental Surgeon", init: "M" },
  { name: "Dr. Manu M. Das", role: "Maxillofacial Surgeon", init: "M" },
  { name: "Dr. Aswani Anil", role: "Pedodontist", init: "A" },
  { name: "Dr. Nikhil Julian", role: "Endodontist", init: "N" },
  { name: "Dr. Fouzia Ismail", role: "General Dentist", init: "F" },
  { name: "Dr. Mathew Jacob", role: "Endodontist", init: "M" },
  { name: "Dr. Layana Theodore", role: "Prosthodontist & Implant Surgeon", init: "L" },
];

const times: TimeItem[] = [
  { t: "10:00 AM – 12:00 PM", l: "Morning" },
  { t: "12:00 PM – 2:00 PM", l: "Mid-day" },
  { t: "2:00 PM – 5:00 PM", l: "Afternoon" },
  { t: "5:00 PM – 7:30 PM", l: "Evening" },
];

const stepMeta = [
  { num: "Step 1 of 3", title: "What brings you in?", sub: "Select your service and preferred specialist" },
  { num: "Step 2 of 3", title: "When works for you?", sub: "Pick a preferred date and time" },
  { num: "Step 3 of 3", title: "Your details", sub: "We'll confirm your appointment shortly" },
];

export default function BookingModal() {
  const {
    isBookingOpen,
    closeBooking,
    selectedDoctor,
    selectedService,
    showSuccessToast,
  } = useBooking();

  const [curStep, setCurStep] = useState(1);
  const [bkSvc, setBkSvc] = useState("General Consultation");
  const [bkDoc, setBkDoc] = useState("Any specialist (recommended)");
  const [bkDate, setBkDate] = useState("");
  const [bkTime, setBkTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientNotes, setPatientNotes] = useState("");

  const [calMonth, setCalMonth] = useState(new Date().getMonth());
  const [calYear, setCalYear] = useState(new Date().getFullYear());

  const isSlotExpired = (slotText: string) => {
    if (!bkDate) return false;

    const [year, month, day] = bkDate.split("-").map(Number);
    const selDate = new Date(year, month - 1, day);
    selDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selDate < today) return true;
    if (selDate > today) return false;

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    let startHour = 0;
    let startMinute = 0;

    if (slotText.includes("10:00 AM")) {
      startHour = 10;
      startMinute = 0;
    } else if (slotText.includes("12:00 PM")) {
      startHour = 12;
      startMinute = 0;
    } else if (slotText.includes("2:00 PM")) {
      startHour = 14;
      startMinute = 0;
    } else if (slotText.includes("5:00 PM")) {
      startHour = 17;
      startMinute = 0;
    } else {
      return false;
    }

    if (currentHour > startHour) return true;
    if (currentHour === startHour && currentMinute > startMinute) return true;

    return false;
  };

  // Clear selected time if it becomes expired due to date change
  useEffect(() => {
    if (bkDate && bkTime) {
      if (isSlotExpired(bkTime)) {
        setBkTime("");
      }
    }
  }, [bkDate, bkTime]);


  // Synchronize when context pre-selection changes
  useEffect(() => {
    if (isBookingOpen) {
      setBkSvc(selectedService);
      setBkDoc(selectedDoctor);
      // Reset step and fields
      setCurStep(1);
      setBkDate("");
      setBkTime("");
      setPatientName("");
      setPatientPhone("");
      setPatientNotes("");
      setCalMonth(new Date().getMonth());
      setCalYear(new Date().getFullYear());
    }
  }, [isBookingOpen, selectedDoctor, selectedService]);

  if (!isBookingOpen) return null;

  // Calendar render helpers
  const handlePrevMonth = () => {
    setCalMonth((prev) => {
      if (prev === 0) {
        setCalYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNextMonth = () => {
    setCalMonth((prev) => {
      if (prev === 11) {
        setCalYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const handleTodayClick = () => {
    const date = new Date();
    if (date.getDay() === 0) {
      // If today is Sunday, default to tomorrow (Monday)
      date.setDate(date.getDate() + 1);
    }
    setCalMonth(date.getMonth());
    setCalYear(date.getFullYear());
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formatted = `${year}-${month}-${day}`;
    setBkDate(formatted);
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  let selectedDateObject = null;
  if (bkDate) {
    const [year, month, day] = bkDate.split("-").map(Number);
    selectedDateObject = new Date(year, month - 1, day);
    selectedDateObject.setHours(0, 0, 0, 0);
  }

  const firstDayIndex = new Date(calYear, calMonth, 1).getDay();
  const totalDays = new Date(calYear, calMonth + 1, 0).getDate();

  const emptyCells = Array.from({ length: firstDayIndex });
  const dayNumbers = Array.from({ length: totalDays }, (_, i) => i + 1);

  const handleDaySelect = (day: number) => {
    const formattedDate = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setBkDate(formattedDate);
  };

  // Step logic
  const handleContinue = () => {
    if (curStep === 1) {
      setCurStep(2);
    } else if (curStep === 2) {
      if (!bkDate) {
        alert("Please select a date.");
        return;
      }
      if (!bkTime) {
        alert("Please select a preferred time slot.");
        return;
      }
      if (isSlotExpired(bkTime)) {
        alert("The selected time slot has already expired. Please select another slot.");
        setBkTime("");
        return;
      }
      setCurStep(3);
    }
  };

  const handleBack = () => {
    if (curStep > 1) {
      setCurStep((step) => step - 1);
    }
  };

  const validateDetails = () => {
    if (!patientName.trim() || !patientPhone.trim()) {
      alert("Please enter your name and phone number.");
      return false;
    }
    if (patientPhone.trim().length !== 10 || isNaN(Number(patientPhone.trim()))) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  };

  const doWA = () => {
    if (!validateDetails()) return;
    let dateObj = null;
    if (bkDate) {
      const [year, month, day] = bkDate.split("-").map(Number);
      dateObj = new Date(year, month - 1, day);
    }
    const d = dateObj
      ? dateObj.toLocaleDateString("en-IN", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "Flexible";
    const msg = `Hello Park Dental Clinic!\n\nI'd like to book an appointment:\n\nService: ${bkSvc}\nDoctor: ${bkDoc}\nDate: ${d}\nTime: ${bkTime || "Any time"}\nName: ${patientName.trim()}\nPhone: +91 ${patientPhone.trim()}${patientNotes.trim() ? "\nNotes: " + patientNotes.trim() : ""}`;

    closeBooking();
    window.open("https://wa.me/919846918974?text=" + encodeURIComponent(msg), "_blank");
  };

  const doCB = () => {
    if (!validateDetails()) return;
    closeBooking();
    showSuccessToast();
  };

  let summaryDateObj = null;
  if (bkDate) {
    const [year, month, day] = bkDate.split("-").map(Number);
    summaryDateObj = new Date(year, month - 1, day);
  }
  const summaryDateString = summaryDateObj
    ? summaryDateObj.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
      })
    : "No date selected";

  const meta = stepMeta[curStep - 1];

  return (
    <div
      id="booking-modal"
      className="modal-overlay active"
      role="dialog"
      aria-labelledby="booking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeBooking();
      }}
    >
      <div
        className="modal-container"
        style={{ maxWidth: "460px", padding: 0, overflow: "hidden", border: "none" }}
      >
        <div className="wizard-card-embedded">
          <button className="modal-close" aria-label="Close modal" onClick={closeBooking}>
            &times;
          </button>

          <div style={{ padding: "20px 20px 0", flexShrink: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "14px",
                paddingRight: "32px",
              }}
            >
              <span
                style={{
                  fontSize: "13.5px",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                <IconTooth
                  size={16}
                  style={{ verticalAlign: "-2px", marginRight: "5px" }}
                  aria-hidden="true"
                />
                Park Dental
              </span>
            </div>
            <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
              <div
                style={{
                  height: "4px",
                  flex: 1,
                  borderRadius: "2px",
                  background: curStep >= 1 ? "var(--color-primary)" : "var(--color-border)",
                  transition: "background 0.3s ease",
                }}
              ></div>
              <div
                style={{
                  height: "4px",
                  flex: 1,
                  borderRadius: "2px",
                  background: curStep >= 2 ? "var(--color-primary)" : "var(--color-border)",
                  transition: "background 0.3s ease",
                }}
              ></div>
              <div
                style={{
                  height: "4px",
                  flex: 1,
                  borderRadius: "2px",
                  background: curStep >= 3 ? "var(--color-primary)" : "var(--color-border)",
                  transition: "background 0.3s ease",
                }}
              ></div>
            </div>
            <p
              id="snum"
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
                letterSpacing: ".75px",
                margin: "0 0 4px",
                fontFamily: "var(--font-body)",
              }}
            >
              {meta.num}
            </p>
            <p
              id="stitle"
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--color-text)",
                margin: "0 0 4px",
                letterSpacing: "-.2px",
                fontFamily: "var(--font-heading)",
              }}
            >
              {meta.title}
            </p>
            <p
              id="ssub"
              style={{
                fontSize: "13px",
                color: "var(--color-text-muted)",
                margin: "0 0 16px",
                fontFamily: "var(--font-body)",
              }}
            >
              {meta.sub}
            </p>
          </div>

          <div
            id="content"
            style={{
              overflowY: "auto",
              maxHeight: "380px",
              padding: "0 20px 8px",
              boxSizing: "border-box",
            }}
          >
            {/* STEP 1 */}
            {curStep === 1 && (
              <div id="s1">
                <span className="sec-lbl">Service</span>
                <div id="svc-grid">
                  {svcs.map((s) => (
                    <div
                      key={s.label}
                      className={`svc-card ${bkSvc === s.label ? "sel" : ""}`}
                      onClick={() => setBkSvc(s.label)}
                    >
                      <div className="svc-icon">
                        <img
                          src={s.img}
                          alt={s.label}
                          width={800}
                          height={800}
                          loading="lazy"
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                      </div>
                      <span className="svc-label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <span className="sec-lbl">Preferred specialist (optional)</span>
                <div id="doc-list" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {docs.map((d) => (
                    <div
                      key={d.name}
                      className={`doc-card ${bkDoc === d.name ? "sel" : ""}`}
                      onClick={() => setBkDoc(d.name)}
                    >
                      <div className="doc-av">{d.init}</div>
                      <div>
                        <p className="doc-name">{d.name}</p>
                        <p className="doc-role">{d.role}</p>
                      </div>
                      <div className="doc-radio">
                        {bkDoc === d.name && (
                          <IconCheck
                            size={10}
                            style={{ color: "var(--color-white)" }}
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {curStep === 2 && (
              <div id="s2">
                <label className="fld-lbl">Date</label>
                <div className="calendar-container" style={{ marginBottom: "10px" }}>
                  <div
                    className="calendar-header"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                    }}
                  >
                    <div>
                      <span
                        id="cal-month-year"
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "var(--color-text)",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {monthNames[calMonth]} {calYear}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <button id="cal-today-btn" type="button" onClick={handleTodayClick}>
                        Today
                      </button>
                      <button
                        id="cal-prev-btn"
                        type="button"
                        className="btn-cal-nav"
                        aria-label="Previous month"
                        onClick={handlePrevMonth}
                      >
                        <IconChevronLeft size={14} />
                      </button>
                      <button
                        id="cal-next-btn"
                        type="button"
                        className="btn-cal-nav"
                        aria-label="Next month"
                        onClick={handleNextMonth}
                      >
                        <IconChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                  <div
                    className="calendar-weekdays"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(7, 1fr)",
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                      marginBottom: "4px",
                    }}
                  >
                    <span>Su</span>
                    <span>Mo</span>
                    <span>Tu</span>
                    <span>We</span>
                    <span>Th</span>
                    <span>Fr</span>
                    <span>Sa</span>
                  </div>
                  <div
                    id="calendar-days"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(7, 1fr)",
                      gap: "2px",
                      textAlign: "center",
                    }}
                  >
                    {emptyCells.map((_, i) => (
                      <div key={`empty-${i}`} className="cal-day-cell empty"></div>
                    ))}
                    {dayNumbers.map((day) => {
                      const cellDate = new Date(calYear, calMonth, day);
                      cellDate.setHours(0, 0, 0, 0);

                      const isSunday = cellDate.getDay() === 0;
                      const isDisabled = cellDate < todayDate || isSunday;
                      const isSelected =
                        selectedDateObject &&
                        cellDate.getTime() === selectedDateObject.getTime();
                      const isToday = cellDate.getTime() === todayDate.getTime();

                      return (
                        <div
                          key={`day-${day}`}
                          className={`cal-day-cell ${isDisabled ? "disabled" : ""} ${isSelected ? "selected" : ""} ${isToday && !isSelected ? "today" : ""}`}
                          onClick={() => {
                            if (!isDisabled) handleDaySelect(day);
                          }}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <span className="sec-lbl">Time preference</span>
                <div id="time-grid">
                  {times.map((t) => {
                    const expired = isSlotExpired(t.t);
                    return (
                      <div
                        key={t.t}
                        className={`t-slot ${bkTime === t.t ? "sel" : ""} ${expired ? "disabled" : ""}`}
                        onClick={() => {
                          if (!expired) {
                            setBkTime(t.t);
                          }
                        }}
                      >
                        <span className="t-main">{t.t}</span>
                        <span className="t-lbl">{t.l}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {curStep === 3 && (
              <div id="s3">
                <label className="fld-lbl" htmlFor="nm-in">
                  Full name
                </label>
                <input
                  type="text"
                  id="nm-in"
                  placeholder="e.g. Rahul Nair"
                  autoComplete="name"
                  style={{ marginBottom: "12px" }}
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />

                <label className="fld-lbl" htmlFor="ph-in">
                  WhatsApp / Phone
                </label>
                <div className="phone-input-container">
                  <span className="prefix-span">+91</span>
                  <input
                    type="tel"
                    id="ph-in"
                    className="phone-input"
                    placeholder="98000 00000"
                    maxLength={10}
                    autoComplete="tel"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                  />
                </div>

                <label className="fld-lbl" htmlFor="nt-in">
                  Notes (optional)
                </label>
                <textarea
                  id="nt-in"
                  placeholder="Any pain, concerns, or special requests..."
                  rows={2}
                  style={{ marginBottom: "14px" }}
                  value={patientNotes}
                  onChange={(e) => setPatientNotes(e.target.value)}
                ></textarea>

                <span className="sec-lbl">Booking summary</span>
                <div
                  style={{
                    background: "var(--color-white)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "6px 14px",
                    marginBottom: "8px",
                  }}
                >
                  <div className="sum-row">
                    <IconStethoscope
                      size={18}
                      style={{ color: "var(--color-primary)", flexShrink: 0 }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        style={{
                          fontSize: "10px",
                          color: "var(--color-text-muted)",
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Service
                      </p>
                      <p
                        id="sm-svc"
                        style={{
                          fontSize: "13.5px",
                          fontWeight: 600,
                          color: "var(--color-text)",
                          margin: "2px 0 0 0",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {bkSvc}
                      </p>
                    </div>
                  </div>
                  <div className="sum-row">
                    <IconUser
                      size={18}
                      style={{ color: "var(--color-primary)", flexShrink: 0 }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        style={{
                          fontSize: "10px",
                          color: "var(--color-text-muted)",
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Doctor
                      </p>
                      <p
                        id="sm-doc"
                        style={{
                          fontSize: "13.5px",
                          fontWeight: 600,
                          color: "var(--color-text)",
                          margin: "2px 0 0 0",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {bkDoc}
                      </p>
                    </div>
                  </div>
                  <div className="sum-row">
                    <IconCalendar
                      size={18}
                      style={{ color: "var(--color-primary)", flexShrink: 0 }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        style={{
                          fontSize: "10px",
                          color: "var(--color-text-muted)",
                          margin: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Date and time
                      </p>
                      <p
                        id="sm-dt"
                        style={{
                          fontSize: "13.5px",
                          fontWeight: 600,
                          color: "var(--color-text)",
                          margin: "2px 0 0 0",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {summaryDateString}
                        {bkTime ? `, ${bkTime}` : ""}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    background: "#fffbeb",
                    border: "1.5px solid #f59e0b",
                    borderRadius: "var(--radius-md)",
                    padding: "10px 12px",
                    marginTop: "12px",
                    marginBottom: "6px",
                    alignItems: "flex-start",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="12" x2="12" y2="16" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.45",
                      color: "#78350f",
                      margin: 0,
                      fontWeight: 500,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    This is a booking request, not a confirmed slot. Your appointment is confirmed only after the doctor calls or texts you.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            id="foot"
            style={{
              padding: "14px 20px 20px",
              borderTop: "1px solid var(--color-border)",
              background: "var(--color-border-light)",
              flexShrink: 0,
              display: "flex",
              gap: "8px",
              alignItems: "center",
              boxSizing: "border-box",
              borderRadius: "0 0 var(--radius-md) var(--radius-md)",
            }}
          >
            <button
              id="bbk"
              className={`btn-back-sm ${curStep === 1 ? "invis" : ""}`}
              aria-label="Go back"
              onClick={handleBack}
            >
              <IconArrowLeft size={18} aria-hidden="true" />
            </button>

            {curStep < 3 ? (
              <button id="bnx" className="btn-next" onClick={handleContinue}>
                Continue{" "}
                <IconArrowRight size={18} aria-hidden="true" />
              </button>
            ) : (
              <div
                className="wa-actions-container"
                style={{ flex: 1, display: "flex", flexDirection: "column", gap: 0 }}
              >
                <button className="btn-wa" id="bwa" onClick={doWA}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.63-1.019-5.101-2.872-6.958-1.85-1.856-4.322-2.874-6.941-2.875-5.44.001-9.866 4.417-9.87 9.851-.001 1.776.477 3.51 1.385 5.048L2.013 21.75l6.096-1.597z" />
                  </svg>
                  Book via WhatsApp
                </button>
                <button className="btn-cb" id="bcb" onClick={doCB}>
                  Request a callback instead
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
