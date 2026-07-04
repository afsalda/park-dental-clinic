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

        {/* Static Server-Rendered Content for Search Engines */}
        <section className="section-row" style={{ background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", padding: "var(--space-3xl) 0" }}>
          <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto" }}>
            
            {/* Reputation Intro */}
            <div className="reviews-static-intro" style={{ marginBottom: "var(--space-3xl)" }}>
              <span className="badge badge-primary" style={{ marginBottom: "var(--space-sm)" }}>✦ Clinical Reputation</span>
              <h2 className="text-h2" style={{ color: "var(--color-text)", marginBottom: "var(--space-md)", fontFamily: "var(--font-heading)" }}>
                Our Reputation for Quality Dental Care in Kochi
              </h2>
              <p className="text-body" style={{ fontSize: "1.0625rem", lineHeight: "1.7", color: "var(--color-text-secondary)" }}>
                Park Dental Clinic in Elamakkara, Kochi, has built a stellar reputation over the past decade as a leading provider of multi-specialty dental care. Under the leadership of Chief Dental Surgeon Dr. Monish, our clinic is committed to safety, advanced dental technology, and clinical excellence. Verified patient experiences across JustDial (4.9★ from 868 reviews) and Google Business Profile (5.0★ from 34 reviews) reflect our dedication to providing painless, gentle, and highly professional treatments. We believe in transparency and patient-first care, ensuring every individual receives personalized attention from our seven-specialist team.
              </p>
            </div>

            {/* Testimonials */}
            <div className="reviews-static-testimonials" style={{ marginBottom: "var(--space-3xl)" }}>
              <span className="badge badge-primary" style={{ marginBottom: "var(--space-sm)" }}>✦ Patient Stories</span>
              <h2 className="text-h2" style={{ color: "var(--color-text)", marginBottom: "var(--space-xl)", fontFamily: "var(--font-heading)" }}>
                Detailed Patient Testimonials &amp; Experiences
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
                
                <div style={{ background: "var(--color-bg)", padding: "var(--space-xl)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-sm)" }}>
                    <strong style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}>Divesh Raj</strong>
                    <span style={{ fontSize: "0.875rem", color: "var(--color-primary)", fontWeight: 600 }}>Dental Implants Patient</span>
                  </div>
                  <p className="text-body" style={{ fontStyle: "italic", color: "var(--color-text-secondary)", margin: 0 }}>
                    "I had an outstanding experience with my front tooth implant at Park Dental Clinic. Dr. Monish and Dr. Layana Theodore explained the entire implant placement process in detail, making sure I was comfortable at every step. The clinic follows world-class sterilization protocols, which gave me immense confidence. The final crown looks completely natural, and I can eat and smile without any hesitation. I highly recommend this clinic to anyone seeking reliable implant procedures."
                  </p>
                </div>

                <div style={{ background: "var(--color-bg)", padding: "var(--space-xl)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-sm)" }}>
                    <strong style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}>Deepak Kumar</strong>
                    <span style={{ fontSize: "0.875rem", color: "var(--color-primary)", fontWeight: 600 }}>Wisdom Tooth Extraction Patient</span>
                  </div>
                  <p className="text-body" style={{ fontStyle: "italic", color: "var(--color-text-secondary)", margin: 0 }}>
                    "I visited Park Dental Clinic for a wisdom tooth extraction after experiencing severe pain. I was very anxious, but Dr. Manu M. Das was incredibly reassuring. The extraction was performed using modern equipment and was completed in under ten minutes with absolutely zero pain. The healing process was swift, and the post-treatment follow-up was excellent. This is by far the cleanest and most professional dental clinic in Kochi."
                  </p>
                </div>

                <div style={{ background: "var(--color-bg)", padding: "var(--space-xl)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-sm)" }}>
                    <strong style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}>Ananya R.</strong>
                    <span style={{ fontSize: "0.875rem", color: "var(--color-primary)", fontWeight: 600 }}>Smile Designing Patient</span>
                  </div>
                  <p className="text-body" style={{ fontStyle: "italic", color: "var(--color-text-secondary)", margin: 0 }}>
                    "The cosmetic smile design work done by Dr. Monish has completely transformed my confidence. Before visiting Park Dental Clinic, I was self-conscious about my teeth alignment, but their use of custom veneers and modern digital planning provided perfect results. The staff is polite, the environment is pristine, and the doctors are exceptionally skilled. I am extremely happy with my new, natural-looking smile."
                  </p>
                </div>

                <div style={{ background: "var(--color-bg)", padding: "var(--space-xl)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-sm)" }}>
                    <strong style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}>Meera Nair</strong>
                    <span style={{ fontSize: "0.875rem", color: "var(--color-primary)", fontWeight: 600 }}>Pediatric Dental Care Parent</span>
                  </div>
                  <p className="text-body" style={{ fontStyle: "italic", color: "var(--color-text-secondary)", margin: 0 }}>
                    "Finding a dentist who can handle children gently is difficult, but Dr. Aswani Anil is absolutely amazing. I took my seven-year-old son for a cavity filling, and she turned what could have been a scary experience into a fun, anxiety-free visit. Her patience and pediatric expertise are commendable. The family-friendly atmosphere at Park Dental makes it the best choice for children's dentistry in Cochin."
                  </p>
                </div>

              </div>
            </div>

            {/* FAQ Block */}
            <div className="reviews-static-faq">
              <span className="badge badge-primary" style={{ marginBottom: "var(--space-sm)" }}>✦ Patient FAQ</span>
              <h2 className="text-h2" style={{ color: "var(--color-text)", marginBottom: "var(--space-xl)", fontFamily: "var(--font-heading)" }}>
                Patient Review &amp; Feedback FAQ
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
                <div>
                  <h3 className="text-h4" style={{ color: "var(--color-text)", fontWeight: 600, marginBottom: "var(--space-xs)" }}>
                    How can I leave a review for Park Dental Clinic?
                  </h3>
                  <p className="text-body" style={{ color: "var(--color-text-secondary)", margin: 0 }}>
                    Patients can share their treatment experiences on Google or JustDial. To leave a Google Review, search for "Park Dental Clinic Kochi" on Google Search or Maps, click on the reviews tab, and write your feedback. To leave a review on JustDial, search for our clinic name on the JustDial platform and rate your experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-h4" style={{ color: "var(--color-text)", fontWeight: 600, marginBottom: "var(--space-xs)" }}>
                    Are the patient reviews on your website verified?
                  </h3>
                  <p className="text-body" style={{ color: "var(--color-text-secondary)", margin: 0 }}>
                    Yes. All testimonials and reviews displayed on our website represent real, verified patient experiences sourced directly from Google Business Profile, JustDial, and Practo. We maintain complete transparency and use these platforms to continuously monitor and improve our patient care standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-h4" style={{ color: "var(--color-text)", fontWeight: 600, marginBottom: "var(--space-xs)" }}>
                    What should I include in my feedback?
                  </h3>
                  <p className="text-body" style={{ color: "var(--color-text-secondary)", margin: 0 }}>
                    When writing a review, we encourage patients to mention the specific treatment they received (such as dental implants, root canal, or pediatric care), the doctor who treated them, the cleanliness of the clinic, and their overall comfort level. Your detailed feedback helps other patients in Kochi make informed dental healthcare decisions.
                  </p>
                </div>
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
