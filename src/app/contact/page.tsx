import type { Metadata } from "next";
import Header from "../../components/Header";
import CtaSection from "../../components/CtaSection";
import Footer from "../../components/Footer";
import BookingModal from "../../components/BookingModal";
import DoctorModal from "../../components/DoctorModal";
import PrivacyModal from "../../components/PrivacyModal";
import SuccessToast from "../../components/SuccessToast";
import ScrollObserver from "../../components/ScrollObserver";

export const metadata: Metadata = {
  title: "Contact Us | Book Appointment at Park Dental Clinic Kochi",
  description:
    "Contact Park Dental Clinic in Elamakkara, Kochi. Call us at +91 98469 18974 or +91 81081 07271 to book an appointment. Find our location, email, and clinic hours.",
  alternates: {
    canonical: "https://www.parkdentalclinics.co.in/contact",
  },
  openGraph: {
    type: "website",
    title: "Contact Us — Park Dental Clinic",
    description:
      "Get in touch with Park Dental Clinic in Kochi. Book appointments and find contact information.",
    url: "https://www.parkdentalclinics.co.in/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ScrollObserver />
      <Header />
      <main id="main-content" className="page-wrapper" style={{ paddingTop: "var(--space-2xl)" }}>
        <div className="section-row service-breadcrumb-section" style={{ paddingBottom: 0 }}>
          <div className="section-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, gap: "8px", fontSize: "14px" }}>
                <li>
                  <a href="/" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}>Home</a>
                </li>
                <li style={{ color: "var(--color-text-muted)" }}>/</li>
                <li style={{ color: "var(--color-primary)", fontWeight: 500 }} aria-current="page">Contact Us</li>
              </ol>
            </nav>
          </div>
        </div>
        <CtaSection />
      </main>
      <Footer />

      {/* Modals & Overlay triggers */}
      <BookingModal />
      <DoctorModal />
      <PrivacyModal />
      <SuccessToast />
    </>
  );
}
