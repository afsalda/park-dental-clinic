"use client";

import Link from "next/link";
import { useBooking } from "../context/BookingContext";

interface ServiceItem {
  title: string;
  label: string; // matches the wizard's service value
  desc: string;
  img: string;
  href: string;
}

const servicesList: ServiceItem[] = [
  {
    title: "Dental Implants",
    label: "Dental Implants",
    desc: "Single tooth implants, full-arch restoration, All-on-4, immediate-load implants, and implant-supported bridges.",
    img: "/images/icon-implants.png",
    href: "/dental-implants",
  },
  {
    title: "Cosmetic Dentistry",
    label: "Cosmetic Dentistry",
    desc: "Porcelain veneers, composite veneers, smile makeovers, dental bonding, and aesthetic contouring.",
    img: "/images/icon-veneers.png",
    href: "/cosmetic-dentistry",
  },
  {
    title: "Root Canal Therapy",
    label: "Root Canal",
    desc: "Painless single and multi-visit root canal treatments using advanced rotary endodontics and digital imaging.",
    img: "/images/icon-prosthetics.png",
    href: "/root-canal-treatment",
  },
  {
    title: "Teeth Whitening",
    label: "Teeth Whitening",
    desc: "In-office laser whitening, custom take-home whitening trays, and professional stain removal treatments.",
    img: "/images/icon-whitening.png",
    href: "/teeth-whitening",
  },
  {
    title: "Dental Braces & Aligners",
    label: "Braces & Aligners",
    desc: "Traditional metal braces, ceramic braces, self-ligating systems, and clear aligner therapy for all ages.",
    img: "/images/icon-braces.png",
    href: "/braces-aligners",
  },
  {
    title: "Routine Check-ups & Hygiene",
    label: "General Consultation",
    desc: "Professional cleanings, plaque and tartar removal, gum health checks, and preventive care plans.",
    img: "/images/icon-treatment.png",
    href: "/checkups-hygiene",
  },
];

export default function Services() {
  const { openBooking } = useBooking();

  return (
    <section id="services" className="section-row" aria-label="Our dental services">
      <div className="section-inner card-section">
        <div className="services-section">
          {/* Left Column */}
          <div className="services-left animate-slide-left">
            <div>
              <div className="rating" style={{ marginBottom: "16px" }}>
                <div className="rating-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20">
                      <path
                        d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z"
                        fill="#f59e0b"
                      />
                    </svg>
                  ))}
                </div>
                <span className="rating-score">4.9</span>
                <span className="rating-count">(200+ Reviews)</span>
              </div>
              <h2 className="text-h1 split-text-animate">
                Expert Dental
                <br />
                Treatments
              </h2>
            </div>
            <a
              href="#booking-modal"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
            >
              All Services
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
            </a>
          </div>

          {/* Right Column — Service Cards */}
          <div className="services-right stagger-children">
            {servicesList.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="service-card animate-on-scroll"
                style={{ textDecoration: "none" }}
              >
                <div className="service-icon">
                  <img
                    src={service.img}
                    alt={service.title}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
                <div className="service-info">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
