"use client";

import { useBooking } from "../context/BookingContext";

export default function Hero() {
  const { openBooking } = useBooking();

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#services");
    if (target) {
      const navbar = document.querySelector(".navbar");
      const navHeight = navbar ? (navbar as HTMLElement).offsetHeight : 0;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero-wrapper" aria-label="Welcome to Park Dental Clinic">
      <div className="hero section-inner">
        <div className="hero-bg">
          <img
            src="/images/hero.png"
            alt="Happy patient smiling in a modern dental clinic with natural lighting and teal decor"
            loading="eager"
          />
        </div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="badge badge-white hero-fade-up">✦ Premium Dental Care in Kochi</span>
          <h1 className="text-display hero-headline split-text-animate">
            Your Smile,<br />Our Expertise
          </h1>
          <p className="hero-description hero-fade-up">
            From routine check-ups to advanced restorations, we deliver personalized dental care with the latest technology and a gentle, compassionate approach.
          </p>
          <div className="hero-actions hero-fade-up">
            <a
              href="#booking-modal"
              className="btn btn-primary btn-lg"
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
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
            </a>
            <a
              href="#services"
              className="btn btn-outline-white"
              onClick={handleServicesClick}
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="hero-bottom hero-fade-up">
          <div className="reviews-badge">
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
            <div className="reviews-badge-info">
              <div className="reviews-badge-rating">
                <span>4.9</span>
                <span className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20">
                      <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z" />
                    </svg>
                  ))}
                </span>
              </div>
              <span className="reviews-badge-text">868 reviews on JustDial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
