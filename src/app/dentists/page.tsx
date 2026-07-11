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
    images: [
      {
        url: "https://www.parkdentalclinics.co.in/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Our Dental Specialists — Park Dental Clinic",
      },
    ],
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

        {/* Static Server-Rendered Content for Search Engines */}
        <section className="section-row" style={{ background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", padding: "var(--space-3xl) 0" }}>
          <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <span className="badge badge-primary" style={{ marginBottom: "var(--space-sm)" }}>✦ Specialist Profiles</span>
            <h2 className="text-h2" style={{ color: "var(--color-text)", marginBottom: "var(--space-xl)", fontFamily: "var(--font-heading)" }}>
              Detailed Specialist Biographies
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
              
              <div style={{ background: "var(--color-bg)", padding: "var(--space-xl)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)" }}>
                <h3 className="text-h3" style={{ color: "var(--color-primary)", marginBottom: "var(--space-xs)" }}>
                  Dr. Monish
                </h3>
                <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "var(--space-md)" }}>
                  Chief Dental Surgeon &amp; Implantologist
                </p>
                <p className="text-body" style={{ color: "var(--color-text-secondary)", margin: 0, fontSize: "1rem", lineHeight: "1.6" }}>
                  Dr. Monish is the Chief Dental Surgeon at Park Dental Clinic, with over 15 years of experience in clinical dentistry. He specializes in implantology and advanced cosmetic dentistry, helping patients restore their smiles with custom smile makeovers and dental implants. His gentle, patient-centric approach has earned him a stellar reputation in Kochi for anxiety-free dental care.
                </p>
              </div>

              <div style={{ background: "var(--color-bg)", padding: "var(--space-xl)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)" }}>
                <h3 className="text-h3" style={{ color: "var(--color-primary)", marginBottom: "var(--space-xs)" }}>
                  Dr. Manu M. Das
                </h3>
                <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "var(--space-md)" }}>
                  Oral &amp; Maxillofacial Surgeon
                </p>
                <p className="text-body" style={{ color: "var(--color-text-secondary)", margin: 0, fontSize: "1rem", lineHeight: "1.6" }}>
                  Dr. Manu M. Das is our consulting Oral and Maxillofacial Surgeon, specializing in complex surgical extractions, wisdom tooth removals, and corrective jaw surgeries. With extensive post-graduate training and over a decade of surgical experience, he ensures that all minor and major oral surgeries are carried out with utmost precision, safety, and patient comfort. His expertise makes surgical visits swift and stress-free.
                </p>
              </div>

              <div style={{ background: "var(--color-bg)", padding: "var(--space-xl)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)" }}>
                <h3 className="text-h3" style={{ color: "var(--color-primary)", marginBottom: "var(--space-xs)" }}>
                  Dr. Aswani Anil
                </h3>
                <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "var(--space-md)" }}>
                  Pedodontist (Children's Dentist)
                </p>
                <p className="text-body" style={{ color: "var(--color-text-secondary)", margin: 0, fontSize: "1rem", lineHeight: "1.6" }}>
                  Dr. Aswani Anil is our dedicated pediatric dentist (Pedodontist), specializing in comprehensive dental care for children from infancy through adolescence. She is highly skilled in pediatric behavior management, preventive dental treatments, and gentle cavity restoration, ensuring a friendly and fear-free environment for young patients. Her expert care helps lay the foundation for a lifetime of healthy dental habits.
                </p>
              </div>

              <div style={{ background: "var(--color-bg)", padding: "var(--space-xl)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)" }}>
                <h3 className="text-h3" style={{ color: "var(--color-primary)", marginBottom: "var(--space-xs)" }}>
                  Dr. Nikhil Julian
                </h3>
                <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "var(--space-md)" }}>
                  Endodontist (Root Canal Specialist)
                </p>
                <p className="text-body" style={{ color: "var(--color-text-secondary)", margin: 0, fontSize: "1rem", lineHeight: "1.6" }}>
                  Dr. Nikhil Julian is a skilled Endodontist specializing in advanced root canal therapy and microscopic endodontics. He utilizes state-of-the-art rotary endodontic systems and digital imaging to perform precise, pain-free root canals in single or minimal sessions. Dr. Nikhil is dedicated to saving damaged natural teeth and restoring oral health with long-lasting treatments.
                </p>
              </div>

              <div style={{ background: "var(--color-bg)", padding: "var(--space-xl)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)" }}>
                <h3 className="text-h3" style={{ color: "var(--color-primary)", marginBottom: "var(--space-xs)" }}>
                  Dr. Fouzia Ismail
                </h3>
                <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "var(--space-md)" }}>
                  General Dentist
                </p>
                <p className="text-body" style={{ color: "var(--color-text-secondary)", margin: 0, fontSize: "1rem", lineHeight: "1.6" }}>
                  Dr. Fouzia Ismail is our general dentist, focusing on preventive care, routine dental check-ups, scaling and polishing, and restoration procedures. She is passionate about educating patients on proper oral hygiene practices and performs detailed assessments to catch potential issues early. Dr. Fouzia's approachable and caring demeanor makes her popular with patients of all ages.
                </p>
              </div>

              <div style={{ background: "var(--color-bg)", padding: "var(--space-xl)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)" }}>
                <h3 className="text-h3" style={{ color: "var(--color-primary)", marginBottom: "var(--space-xs)" }}>
                  Dr. Mathew Jacob
                </h3>
                <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "var(--space-md)" }}>
                  Endodontist (Root Canal Specialist)
                </p>
                <p className="text-body" style={{ color: "var(--color-text-secondary)", margin: 0, fontSize: "1rem", lineHeight: "1.6" }}>
                  Dr. Mathew Jacob is an Endodontist specializing in complex root canal treatments, retreatments, and dental trauma management. With years of experience in root canal therapies, he employs modern techniques and diagnostic tools to ensure every treatment is highly effective and completely comfortable. Patients appreciate his thorough explanations and gentle touch.
                </p>
              </div>

              <div style={{ background: "var(--color-bg)", padding: "var(--space-xl)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)" }}>
                <h3 className="text-h3" style={{ color: "var(--color-primary)", marginBottom: "var(--space-xs)" }}>
                  Dr. Layana Theodore
                </h3>
                <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "var(--space-md)" }}>
                  Prosthodontist &amp; Implantologist
                </p>
                <p className="text-body" style={{ color: "var(--color-text-secondary)", margin: 0, fontSize: "1rem", lineHeight: "1.6" }}>
                  Dr. Layana Theodore is our Prosthodontist and Implant Surgeon, specializing in dental implants, crowns, bridges, and full-mouth rehabilitations. She uses advanced digital imaging and custom prosthetics to replace missing teeth, restore jaw function, and create beautiful, natural-looking smiles. Dr. Layana focuses on high-precision care, ensuring long-term success and comfort for her patients.
                </p>
              </div>

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
