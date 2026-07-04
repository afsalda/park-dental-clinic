import type { Metadata } from "next";
import Header from "../../components/Header";
import Team from "../../components/Team";
import Footer from "../../components/Footer";
import BookingModal from "../../components/BookingModal";
import DoctorModal from "../../components/DoctorModal";
import PrivacyModal from "../../components/PrivacyModal";
import SuccessToast from "../../components/SuccessToast";
import ScrollObserver from "../../components/ScrollObserver";

export const metadata: Metadata = {
  title: "Our Dental Specialists | Expert Dentists in Kochi — Park Dental Clinic",
  description:
    "Meet our specialist dental team in Kochi. Seven experienced doctors covering implants, maxillofacial surgery, pediatric dentistry, root canals, and prosthetics.",
  alternates: {
    canonical: "https://www.parkdentalclinics.co.in/dentists",
  },
  openGraph: {
    type: "website",
    title: "Our Dental Specialists — Park Dental Clinic",
    description:
      "Expert specialists ready to care for your smile. Meet our dentists at Park Dental Clinic.",
    url: "https://www.parkdentalclinics.co.in/dentists",
  },
};

export default function DentistsPage() {
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
                <li style={{ color: "var(--color-primary)", fontWeight: 500 }} aria-current="page">Our Specialists</li>
              </ol>
            </nav>
          </div>
        </div>
        <Team />
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
