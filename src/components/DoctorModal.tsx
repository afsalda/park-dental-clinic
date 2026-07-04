"use client";

import Link from "next/link";
import { useBooking } from "../context/BookingContext";

interface DoctorDetails {
  name: string;
  role: string;
  specialty: string;
  img: string;
  serviceUrl?: string;
  serviceName?: string;
}

const doctorDb: Record<string, DoctorDetails> = {
  monish: {
    name: "Dr. Monish",
    role: "Chief Dental Surgeon & Implantologist",
    specialty: "Dental Implants",
    img: "/images/dr-monish.jpg",
    serviceUrl: "/dental-implants",
    serviceName: "Dental Implants",
  },
  manu: {
    name: "Dr. Manu M. Das",
    role: "Oral & Maxillofacial Surgeon",
    specialty: "Surgical Procedures",
    img: "/images/dr-manu.jpg",
    serviceUrl: "/dental-implants",
    serviceName: "Dental Implants",
  },
  aswani: {
    name: "Dr. Aswani Anil",
    role: "Pedodontist (Children's Dentist)",
    specialty: "Pediatric Care",
    img: "/images/dr-aswani.jpg",
    serviceUrl: "/checkups-hygiene",
    serviceName: "Check-ups & Hygiene",
  },
  nikhil: {
    name: "Dr. Nikhil Julian",
    role: "Endodontist (Root Canal Specialist)",
    specialty: "Root Canal Therapy",
    img: "/images/dr-nikhil.jpg",
    serviceUrl: "/root-canal-treatment",
    serviceName: "Root Canal Treatment",
  },
  fouzia: {
    name: "Dr. Fouzia Ismail",
    role: "General Dentist",
    specialty: "General Dentistry",
    img: "/images/dr-fouzia.jpg",
    serviceUrl: "/checkups-hygiene",
    serviceName: "Check-ups & Hygiene",
  },
  mathew: {
    name: "Dr. Mathew Jacob",
    role: "Endodontist (Root Canal Specialist)",
    specialty: "Root Canal Therapy",
    img: "/images/dr-mathew.jpg",
    serviceUrl: "/root-canal-treatment",
    serviceName: "Root Canal Treatment",
  },
  layana: {
    name: "Dr. Layana Theodore",
    role: "MDS Prosthodontist & Implantologist",
    specialty: "Implant Surgery & Prosthetics",
    img: "/images/dr-layana.jpg",
    serviceUrl: "/dental-implants",
    serviceName: "Dental Implants",
  },
};

export default function DoctorModal() {
  const { isDoctorOpen, activeDoctorId, closeDoctor, openBooking } = useBooking();

  if (!isDoctorOpen) return null;

  const doc = doctorDb[activeDoctorId];
  if (!doc) return null;

  const handleBookClick = () => {
    closeDoctor();
    openBooking(doc.name);
  };

  return (
    <div
      id="doctor-modal"
      className="modal-overlay active"
      role="dialog"
      aria-labelledby="doctor-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeDoctor();
      }}
    >
      <div className="modal-container animate-scale">
        <button className="modal-close" aria-label="Close modal" onClick={closeDoctor}>
          &times;
        </button>
        <div className="modal-body doctor-modal-content">
          <div className="doctor-modal-image">
            <img src={doc.img} alt={`${doc.name}, ${doc.role}`} />
          </div>
          <div className="doctor-modal-details">
            <span id="doc-modal-specialty" className="badge">
              {doc.specialty}
            </span>
            <h3 id="doctor-modal-title-text" className="text-h2">
              {doc.name}
            </h3>
            <p
              id="doc-modal-role"
              className="text-body-lg text-primary"
              style={{ marginBottom: "var(--space-md)" }}
            >
              {doc.role}
            </p>
            {doc.serviceUrl && doc.serviceName && (
              <p className="text-body-sm" style={{ marginBottom: "var(--space-md)" }}>
                Specializes in:{" "}
                <Link
                  href={doc.serviceUrl}
                  onClick={closeDoctor}
                  style={{
                    color: "var(--color-primary)",
                    textDecoration: "underline",
                    fontWeight: 600,
                  }}
                >
                  {doc.serviceName}
                </Link>
              </p>
            )}
            <button
              id="doc-modal-book"
              className="btn btn-primary"
              style={{ marginTop: "var(--space-xl)", width: "100%" }}
              onClick={handleBookClick}
            >
              Book Appointment
              <svg
                className="btn-icon"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 15L15 5M15 5H8M15 5V12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
