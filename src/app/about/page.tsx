import type { Metadata } from "next";
import Header from "../../components/Header";
import ClinicStats from "../../components/ClinicStats";
import Footer from "../../components/Footer";
import BookingModal from "../../components/BookingModal";
import DoctorModal from "../../components/DoctorModal";
import PrivacyModal from "../../components/PrivacyModal";
import SuccessToast from "../../components/SuccessToast";
import ScrollObserver from "../../components/ScrollObserver";

export const metadata: Metadata = {
  title: "About Our Clinic | Modern Dental Facility in Kochi — Park Dental Clinic",
  description:
    "Learn about Park Dental Clinic in Elamakkara, Kochi. Discover our state-of-the-art dental facility, strict sterilization protocols, and patient-first care approach.",
  alternates: {
    canonical: "https://www.parkdentalclinics.co.in/about",
  },
  openGraph: {
    type: "website",
    title: "About Our Clinic — Park Dental Clinic",
    description:
      "Modern dental facility in Kochi, Kerala with strict sterilization protocols and advanced dental technologies.",
    url: "https://www.parkdentalclinics.co.in/about",
    images: [
      {
        url: "https://www.parkdentalclinics.co.in/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Our Clinic — Park Dental Clinic",
      },
    ],
  },
};

export default function AboutPage() {
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
                <li style={{ color: "var(--color-primary)", fontWeight: 500 }} aria-current="page">About Clinic</li>
              </ol>
            </nav>
          </div>
        </div>
        <ClinicStats />
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
