import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BookingModal from "../../components/BookingModal";
import DoctorModal from "../../components/DoctorModal";
import PrivacyModal from "../../components/PrivacyModal";
import SuccessToast from "../../components/SuccessToast";
import ScrollObserver from "../../components/ScrollObserver";

export const metadata: Metadata = {
  title: "Inside Our Clinic Gallery | Tour Our Space — Park Dental Clinic",
  description:
    "Take a virtual tour of Park Dental Clinic in Elamakkara, Kochi. View our modern dental consultation rooms, sterilization equipment, and state-of-the-art facility.",
  alternates: {
    canonical: "https://www.parkdentalclinics.co.in/gallery",
  },
  openGraph: {
    type: "website",
    title: "Inside Our Clinic Gallery — Park Dental Clinic",
    description:
      "Take a virtual tour of Park Dental Clinic in Elamakkara, Kochi. View our modern dental consultation rooms and state-of-the-art facility.",
    url: "https://www.parkdentalclinics.co.in/gallery",
    images: [
      {
        url: "https://www.parkdentalclinics.co.in/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Inside Our Clinic Gallery — Park Dental Clinic",
      },
    ],
  },
};

const galleryImages = [
  { src: "/images/JAI04274.JPG.webp", alt: "Clinic entrance and reception desk" },
  { src: "/images/JAI04158.JPG.webp", alt: "Modern dental operatory treatment chair" },
  { src: "/images/JAI04168.JPG.webp", alt: "Advanced dental treatment equipment" },
  { src: "/images/JAI04233.JPG.webp", alt: "Clinical treatment room setup" },
  { src: "/images/JAI04180.JPG.webp", alt: "Dedicated dental specialist team room" },
  { src: "/images/JAI04145.JPG.webp", alt: "Sterilized instruments and operating room" },
  { src: "/images/JAI04125.JPG.webp", alt: "Patient treatment consult room" },
  { src: "/images/JAI04131.JPG.webp", alt: "Clinical diagnostic station" },
  { src: "/images/JAI04305.JPG.webp", alt: "Dentist consulting room at Park Dental" }
];

export default function GalleryPage() {
  return (
    <>
      <ScrollObserver />
      <Header />
      <main id="main-content" className="page-wrapper" style={{ paddingTop: "var(--space-2xl)" }}>
        {/* Breadcrumbs */}
        <div className="section-row service-breadcrumb-section" style={{ paddingBottom: 0 }}>
          <div className="section-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, gap: "8px", fontSize: "14px" }}>
                <li>
                  <a href="/" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}>Home</a>
                </li>
                <li style={{ color: "var(--color-text-muted)" }}>/</li>
                <li style={{ color: "var(--color-primary)", fontWeight: 500 }} aria-current="page">Gallery</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Gallery Grid Section */}
        <section className="section-row" aria-label="Clinic photo gallery">
          <div className="section-inner">
            <div style={{ marginBottom: "var(--space-2xl)", textAlign: "center" }}>
              <span className="badge badge-primary" style={{ margin: "0 auto var(--space-xs) auto" }}>✦ Tour Our Space</span>
              <h1
                className="text-h1"
                style={{
                  margin: "0 0 var(--space-sm) 0",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  color: "var(--color-text)",
                  letterSpacing: "-.5px"
                }}
              >
                Inside Our Clinic
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--color-text-secondary)",
                  maxWidth: "600px",
                  margin: "0 auto",
                  fontFamily: "var(--font-body)",
                  lineHeight: "1.6"
                }}
              >
                Take a look around our modern, fully-equipped facility in Kochi, designed to provide a comfortable and anxiety-free experience.
              </p>
            </div>

            {/* Responsive Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "var(--space-md)",
                marginTop: "var(--space-xl)",
              }}
            >
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="gallery-item"
                  style={{
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    border: "1px solid var(--color-border-light)",
                    boxShadow: "var(--shadow-card)",
                    aspectRatio: "3/2",
                    position: "relative",
                    flex: "initial",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
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
