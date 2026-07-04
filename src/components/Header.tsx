"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBooking } from "../context/BookingContext";

export default function Header() {
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    closeMobileMenu();
    if (pathname === "/") {
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        const navbar = document.querySelector(".navbar");
        const navHeight = navbar ? (navbar as HTMLElement).offsetHeight : 0;
        const targetPosition =
          el.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "visible" : ""}`}
        aria-hidden={!isMobileMenuOpen}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-nav-drawer ${isMobileMenuOpen ? "open" : ""}`}
        id="mobile-nav-drawer"
        aria-hidden={!isMobileMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <Link
            href="/#home"
            className="drawer-logo"
            aria-label="Park Dental Clinic Home"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            <img src="/images/logo.png" alt="Park Dental Logo" className="logo-img" />
          </Link>
          <button
            className="drawer-close"
            id="drawer-close"
            aria-label="Close mobile menu"
            onClick={closeMobileMenu}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="mobile-drawer-content">
          <nav className="mobile-drawer-links" aria-label="Mobile navigation links">
            <Link href="/" className="drawer-link" onClick={(e) => handleLinkClick(e, "#home")}>
              Home
            </Link>
            <Link href="/about" className="drawer-link" onClick={(e) => handleLinkClick(e, "#clinic")}>
              Our Clinic
            </Link>

            <span className="drawer-link-category">Our Services</span>
            <Link href="/dental-implants" className="drawer-sublink" onClick={closeMobileMenu}>
              Dental Implants
            </Link>
            <Link href="/cosmetic-dentistry" className="drawer-sublink" onClick={closeMobileMenu}>
              Cosmetic Dentistry
            </Link>
            <Link href="/root-canal-treatment" className="drawer-sublink" onClick={closeMobileMenu}>
              Root Canal Therapy
            </Link>
            <Link href="/teeth-whitening" className="drawer-sublink" onClick={closeMobileMenu}>
              Teeth Whitening
            </Link>
            <Link href="/braces-aligners" className="drawer-sublink" onClick={closeMobileMenu}>
              Braces & Aligners
            </Link>
            <Link href="/checkups-hygiene" className="drawer-sublink" onClick={closeMobileMenu}>
              Check-ups & Hygiene
            </Link>

            <Link href="/reviews" className="drawer-link" onClick={(e) => handleLinkClick(e, "#testimonials")}>
              Reviews
            </Link>
            <Link href="/dentists" className="drawer-link" onClick={(e) => handleLinkClick(e, "#team")}>
              Dentists
            </Link>
            <Link href="/contact" className="drawer-link" onClick={(e) => handleLinkClick(e, "#contact")}>
              Contact
            </Link>
          </nav>
          <div className="mobile-drawer-footer">
            <a
              href="#booking-modal"
              className="btn btn-primary drawer-cta"
              onClick={(e) => {
                e.preventDefault();
                closeMobileMenu();
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
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="nav-wrapper" role="banner">
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar" aria-label="Main navigation">
          <Link
            href="/#home"
            className="nav-logo"
            aria-label="Park Dental Clinic Home"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            <img src="/images/logo.png" alt="Park Dental Logo" className="logo-img" />
          </Link>

          <div className="nav-links" id="nav-links">
            <Link href="/" className="nav-link" onClick={(e) => handleLinkClick(e, "#home")}>
              Home
            </Link>
            <Link href="/about" className="nav-link" onClick={(e) => handleLinkClick(e, "#clinic")}>
              Our Clinic
            </Link>

            {/* Desktop Services Dropdown */}
            <div className="nav-dropdown">
              <span className="nav-link nav-dropdown-trigger">
                Services
                <svg
                  className="dropdown-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "12px", height: "12px", marginLeft: "4px" }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
              <div className="nav-dropdown-menu">
                <Link href="/dental-implants">Dental Implants</Link>
                <Link href="/cosmetic-dentistry">Cosmetic Dentistry</Link>
                <Link href="/root-canal-treatment">Root Canal Therapy</Link>
                <Link href="/teeth-whitening">Teeth Whitening</Link>
                <Link href="/braces-aligners">Braces & Aligners</Link>
                <Link href="/checkups-hygiene">Check-ups & Hygiene</Link>
              </div>
            </div>

            <Link href="/reviews" className="nav-link" onClick={(e) => handleLinkClick(e, "#testimonials")}>
              Reviews
            </Link>
            <Link href="/dentists" className="nav-link" onClick={(e) => handleLinkClick(e, "#team")}>
              Dentists
            </Link>
            <Link href="/contact" className="nav-link" onClick={(e) => handleLinkClick(e, "#contact")}>
              Contact
            </Link>

            {/* Mobile-only CTA */}
            <a
              href="#booking-modal"
              className="btn btn-primary nav-cta-mobile"
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
            >
              Book Now
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

          <a
            href="#booking-modal"
            className="btn btn-primary btn-sm nav-cta"
            id="nav-cta"
            onClick={(e) => {
              e.preventDefault();
              openBooking();
            }}
          >
            Book Now
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

          <button
            className={`nav-toggle ${isMobileMenuOpen ? "open" : ""}`}
            id="nav-toggle"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            onClick={isMobileMenuOpen ? closeMobileMenu : openMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
    </>
  );
}
