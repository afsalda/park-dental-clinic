"use client";

import { useBooking } from "../context/BookingContext";

export default function CtaSection() {
  const { openBooking } = useBooking();

  return (
    <section className="section-row" aria-label="Book your appointment">
      <div className="section-inner">
        <div className="cta-row">
          <div className="cta-image-card animate-on-scroll">
            <img
              src="/images/dental-closeup.png"
              alt="Professional dental examination at Park Dental Clinic"
              loading="lazy"
            />
          </div>
          <div
            className="cta-content-card animate-on-scroll"
            style={{ transitionDelay: "100ms" }}
          >
            <h2 className="cta-title split-text-animate">
              We'll give you a reason to smile more. Book today.
            </h2>
            <div className="cta-bottom">
              <div className="cta-reviews">
                <div className="avatar-stack">
                  <img
                    className="avatar-item"
                    src="/images/reviewer-krishna.png"
                    alt="krishnasankar K S"
                    title="krishnasankar K S"
                  />
                  <img
                    className="avatar-item"
                    src="/images/reviewer-aznedi.png"
                    alt="- Aznedi -"
                    title="- Aznedi -"
                  />
                  <img
                    className="avatar-item"
                    src="/images/reviewer-divesh.png"
                    alt="Divesh Raj"
                    title="Divesh Raj"
                  />
                </div>
                <div className="cta-reviews-info">
                  <div className="cta-reviews-score">
                    <span>4.9</span>
                    <span className="stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} viewBox="0 0 20 20">
                          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z" />
                        </svg>
                      ))}
                    </span>
                  </div>
                  <span className="cta-reviews-text">200+ Reviews on Google</span>
                </div>
              </div>
              <a
                href="#booking-modal"
                className="btn btn-white btn-lg trigger-booking"
                onClick={(e) => {
                  e.preventDefault();
                  openBooking();
                }}
              >
                Book Online
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
          </div>
        </div>
      </div>
    </section>
  );
}
