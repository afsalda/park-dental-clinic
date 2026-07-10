import type { Metadata } from "next";
import Header from "../../components/Header";
import ServicePageLayout from "../../components/ServicePageLayout";
import BookingModal from "../../components/BookingModal";
import DoctorModal from "../../components/DoctorModal";
import SuccessToast from "../../components/SuccessToast";
import ScrollObserver from "../../components/ScrollObserver";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Teeth Whitening in Kochi | Laser Whitening — Park Dental Clinic",
  description:
    "Professional teeth whitening in Kochi with in-office laser whitening and custom take-home trays. Safe, effective whitening treatments at Park Dental Clinic, Elamakkara.",
  keywords:
    "teeth whitening kochi, laser whitening kerala, professional teeth whitening, teeth whitening cost kochi, dental whitening kochi",
  alternates: {
    canonical: "https://www.parkdentalclinics.co.in/teeth-whitening",
  },
  openGraph: {
    type: "website",
    title: "Professional Teeth Whitening in Kochi — Park Dental Clinic",
    description:
      "In-office laser whitening and custom take-home trays for a brighter, more confident smile.",
    url: "https://www.parkdentalclinics.co.in/teeth-whitening",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Teeth Whitening",
  description:
    "In-office laser whitening, custom take-home whitening trays, and professional stain removal treatments.",
  procedureType: "https://schema.org/NoninvasiveProcedure",
  bodyLocation: "Teeth",
};

export default function TeethWhiteningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollObserver />
      <Header />
      <ServicePageLayout
        title="Teeth Whitening"
        slug="teeth-whitening"
        icon="/images/icon-whitening.webp"
        heroDescription="Brighten your smile by up to 8 shades with professional teeth whitening. Choose from in-office laser whitening for instant results or custom take-home trays for gradual whitening at your convenience."
        bookingService="Teeth Whitening"
        sections={[
          {
            heading: "In-Office Laser Whitening",
            content:
              "Our in-office laser whitening treatment delivers dramatic results in a single 60–90 minute appointment. A professional-grade whitening gel is applied to your teeth and activated with a specially calibrated light, breaking down stains at the molecular level. The result: teeth that are 4–8 shades brighter in just one visit. This is the fastest and most effective whitening option available.",
          },
          {
            heading: "Custom Take-Home Whitening Trays",
            content:
              "For patients who prefer to whiten at their own pace, we create custom-fitted whitening trays from impressions of your teeth. You receive professional-strength whitening gel to use at home for 2–3 weeks. The custom trays ensure even gel distribution and prevent gum irritation — delivering superior results compared to over-the-counter strips and generic trays.",
          },
          {
            heading: "Professional Stain Removal",
            content:
              "Before whitening, we perform a thorough professional cleaning to remove surface stains, plaque, and tartar buildup. This step alone can significantly improve your tooth shade. For patients with staining from coffee, tea, tobacco, or certain medications, professional stain removal combined with whitening delivers the best possible results.",
          },
        ]}
        relatedDoctors={[
          {
            name: "Dr. Monish",
            role: "Chief Dental Surgeon",
            img: "/images/dr-monish.webp",
            id: "monish",
          },
          {
            name: "Dr. Fouzia Ismail",
            role: "General Dentist",
            img: "/images/dr-fouzia.webp",
            id: "fouzia",
          },
        ]}
        faqs={[
          {
            question: "How long does teeth whitening last?",
            answer:
              "Professional in-office whitening results typically last 1–3 years, depending on your diet and oral hygiene habits. Avoiding heavily pigmented foods and drinks (coffee, red wine, turmeric) and maintaining regular dental cleanings will help extend results. Touch-up treatments are available when needed.",
          },
          {
            question: "Is teeth whitening safe for my teeth?",
            answer:
              "Yes. Professional whitening is a well-established, safe procedure. We use clinically tested whitening agents at controlled concentrations. Some patients experience mild temporary sensitivity, which resolves within 24–48 hours. Our dentists evaluate your teeth beforehand to ensure whitening is appropriate for your situation.",
          },
          {
            question: "Can I whiten teeth with crowns or veneers?",
            answer:
              "Whitening agents only work on natural tooth enamel — they do not change the color of existing crowns, veneers, or fillings. If you have restorations on visible teeth, your dentist will discuss the best approach to achieve a uniform shade, which may involve replacing old restorations after whitening.",
          },
        ]}
        relatedServices={[
          {
            title: "Cosmetic Dentistry",
            href: "/cosmetic-dentistry",
            description:
              "Combine whitening with veneers and bonding for a complete smile makeover.",
          },
          {
            title: "Check-ups & Hygiene",
            href: "/checkups-hygiene",
            description:
              "Professional cleaning before whitening removes surface stains for the best results.",
          },
          {
            title: "Braces & Aligners",
            href: "/braces-aligners",
            description:
              "Straighten your teeth first, then whiten for a perfectly aligned, bright smile.",
          },
        ]}
      />
      <Footer />
      <BookingModal />
      <DoctorModal />
      <SuccessToast />
    </>
  );
}
