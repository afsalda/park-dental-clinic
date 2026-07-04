import type { Metadata } from "next";
import Header from "../../components/Header";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";
import BookingModal from "../../components/BookingModal";
import DoctorModal from "../../components/DoctorModal";
import PrivacyModal from "../../components/PrivacyModal";
import SuccessToast from "../../components/SuccessToast";
import ScrollObserver from "../../components/ScrollObserver";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials — Park Dental Clinic Kochi",
  description:
    "Read patient testimonials and reviews for Park Dental Clinic in Kochi. Verified 4.9 rating on JustDial and 5.0 rating on Google Reviews reflecting premium patient care.",
  alternates: {
    canonical: "https://www.parkdentalclinics.co.in/reviews",
  },
  openGraph: {
    type: "website",
    title: "Patient Reviews & Testimonials — Park Dental Clinic",
    description:
      "Read verified patient reviews and experiences at Park Dental Clinic, Kochi.",
    url: "https://www.parkdentalclinics.co.in/reviews",
  },
};

export default function ReviewsPage() {
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
                <li style={{ color: "var(--color-primary)", fontWeight: 500 }} aria-current="page">Patient Reviews</li>
              </ol>
            </nav>
          </div>
        </div>
        <Reviews />
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
