"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useBooking } from "../context/BookingContext";

export default function Footer() {
  const { openBooking, openPrivacy } = useBooking();
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navbar = document.querySelector(".navbar");
        const navHeight = navbar ? (navbar as HTMLElement).offsetHeight : 0;
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section id="contact" className="section-row" aria-label="Footer and contact information">
      <div className="section-inner card-section">
        <footer className="footer-section" role="contentinfo">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link
                href="/#home"
                className="footer-logo"
                onClick={(e) => handleLinkClick(e, "#home")}
              >
                Park Dental
              </Link>
              <div className="footer-social">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/park.dentalclinic/"
                  target="_blank"
                  rel="noopener"
                  className="footer-social-link"
                  aria-label="Follow us on Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div className="footer-col">
              <h4 className="footer-col-title">Services</h4>
              <nav className="footer-links" aria-label="Footer services links">
                <Link href="/dental-implants" className="footer-link">
                  Dental Implants
                </Link>
                <Link href="/cosmetic-dentistry" className="footer-link">
                  Cosmetic Dentistry
                </Link>
                <Link href="/root-canal-treatment" className="footer-link">
                  Root Canal Therapy
                </Link>
                <Link href="/teeth-whitening" className="footer-link">
                  Teeth Whitening
                </Link>
                <Link href="/braces-aligners" className="footer-link">
                  Braces & Aligners
                </Link>
                <Link href="/checkups-hygiene" className="footer-link">
                  Check-ups & Hygiene
                </Link>
              </nav>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <nav className="footer-links" aria-label="Footer quick links">
                <Link href="/" className="footer-link" onClick={(e) => handleLinkClick(e, "#home")}>
                  Home
                </Link>
                <Link href="/#services" className="footer-link" onClick={(e) => handleLinkClick(e, "#services")}>
                  Services
                </Link>
                <Link href="/about" className="footer-link" onClick={(e) => handleLinkClick(e, "#clinic")}>
                  Our Clinic
                </Link>
                <Link href="/dentists" className="footer-link" onClick={(e) => handleLinkClick(e, "#team")}>
                  Dentists
                </Link>
                <Link href="/reviews" className="footer-link" onClick={(e) => handleLinkClick(e, "#testimonials")}>
                  Reviews
                </Link>
                <Link href="/contact" className="footer-link" onClick={(e) => handleLinkClick(e, "#contact")}>
                  Contact Us
                </Link>
                <Link href="/best-dental-clinics-kochi" className="footer-link">
                  Best Dental Clinics in Kochi
                </Link>
                <a
                  href="#privacy-modal"
                  className="footer-link trigger-privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    openPrivacy();
                  }}
                >
                  Privacy Policy
                </a>
              </nav>
            </div>

            {/* Contact Info Column */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact Info</h4>
              <div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <a
                    href="mailto:parkdentalclinicdrmonish@gmail.com"
                    className="footer-contact-text footer-contact-link"
                  >
                    parkdentalclinicdrmonish@gmail.com
                  </a>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
                    <a href="tel:+919846918974" className="footer-contact-text footer-contact-link">
                      +91 98469 18974
                    </a>
                    <a href="tel:+918108107271" className="footer-contact-text footer-contact-link">
                      +91 81081 07271
                    </a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/oPA1jHT1RMKtVsqB9"
                    target="_blank"
                    rel="noopener"
                    className="footer-contact-text footer-contact-link"
                  >
                    Ground floor, opposite to More Supermarket,
                    <br />
                    Punnackal, Elamakkara, Kochi, Kerala 682026
                  </a>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <span className="footer-contact-text">
                    Mon to Sat — 10:00 AM to 7:30 PM
                    <br />
                    Sunday — Closed
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© 2026 Park Dental Clinic. All rights reserved.</p>
            <p className="footer-credit">
              website by{" "}
              <a
                href="https://whyweb.in"
                target="_blank"
                rel="noopener"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                whyweb.in
              </a>
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
