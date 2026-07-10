"use client";

import { useBooking } from "../context/BookingContext";

export default function ClinicStats() {
  const { openBooking } = useBooking();

  return (
    <section id="clinic" className="section-row" aria-label="Visit our clinic">
      <div className="section-inner">
        <div className="stats-row">
          {/* Clinic Image Card */}
          <div className="stats-clinic-card animate-on-scroll">
            <img
              src="/images/clinic.webp"
              alt="Modern Park Dental Clinic building exterior with glass facade and tropical greenery in Kochi"
              width={800}
              height={800}
              loading="lazy"
            />
            <div className="stats-clinic-overlay"></div>
            <div className="stats-clinic-info">
              <div>
                <h2 className="stats-clinic-title">Visit Our Clinic</h2>
                <p className="stats-clinic-address">
                  Punnackal, Elamakkara, Kochi, Kerala 682026
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/oPA1jHT1RMKtVsqB9"
                target="_blank"
                rel="noopener"
                className="stats-clinic-btn"
                aria-label="Open in Google Maps"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Promo Card */}
          <div
            className="stats-promo-card animate-on-scroll"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="stats-promo-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="8"
                  y="20"
                  width="48"
                  height="32"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <path d="M8 28h48" stroke="currentColor" stroke-width="2.5" />
                <circle cx="32" cy="12" r="6" stroke="currentColor" stroke-width="2.5" />
                <path
                  d="M26 12l4 4 8-8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="14"
                  y="38"
                  width="16"
                  height="4"
                  rx="2"
                  fill="currentColor"
                  opacity="0.3"
                />
              </svg>
            </div>
            <a
              href="#booking-modal"
              className="stats-promo-arrow trigger-booking"
              aria-label="Book consultation"
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
            >
              <svg
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
            <div className="stats-promo-text">
              <h3 className="stats-promo-title">Schedule your dental consultation</h3>
              <p className="stats-promo-desc">
                Book a consultation today. We'd love to give you a reason to smile more :)
              </p>
            </div>
          </div>
        </div>

        {/* Clinic Gallery Sub-section */}
        <div
          className="clinic-gallery-container animate-on-scroll"
          style={{ marginTop: "var(--space-4xl)" }}
        >
          <div
            className="gallery-header"
            style={{
              marginBottom: "var(--space-xl)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--space-xs)",
            }}
          >
            <span className="badge badge-primary">✦ Tour Our Space</span>
            <h3
              className="text-h2"
              style={{
                margin: 0,
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                color: "var(--color-text)",
              }}
            >
              Inside Our Clinic
            </h3>
          </div>
          <div className="gallery-track">
            <div className="gallery-item">
              <img
                src="/images/gallery-1.webp"
                alt="Modern dental consultation room at Park Dental Clinic"
                width={800}
                height={533}
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/images/gallery-2.webp"
                alt="State-of-the-art dental treatment operatory chair"
                width={800}
                height={533}
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/images/gallery-3.webp"
                alt="Comfortable clinic reception and waiting lounge area"
                width={800}
                height={533}
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/images/gallery-4.webp"
                alt="Advanced sterile clinical tools and diagnostic equipment"
                width={800}
                height={533}
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/images/gallery-5.webp"
                alt="Modern building exterior facade of Park Dental Clinic"
                width={800}
                height={533}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
