import type { Metadata } from "next";
import Header from "../../components/Header";
import ServicePageLayout from "../../components/ServicePageLayout";
import BookingModal from "../../components/BookingModal";
import DoctorModal from "../../components/DoctorModal";
import SuccessToast from "../../components/SuccessToast";
import ScrollObserver from "../../components/ScrollObserver";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry in Kochi | Veneers, Smile Makeover — Park Dental Clinic",
  description:
    "Transform your smile with cosmetic dentistry in Kochi. Porcelain veneers, composite veneers, smile makeovers, dental bonding, and aesthetic contouring at Park Dental Clinic.",
  keywords:
    "cosmetic dentist kochi, veneers kerala, smile makeover kochi, dental bonding, porcelain veneers, aesthetic dentistry kochi",
  alternates: {
    canonical: "https://www.parkdentalclinics.co.in/cosmetic-dentistry",
  },
  openGraph: {
    type: "website",
    title: "Cosmetic Dentistry in Kochi — Park Dental Clinic",
    description:
      "Porcelain veneers, smile makeovers, and dental bonding by experienced cosmetic dental specialists in Kochi, Kerala.",
    url: "https://www.parkdentalclinics.co.in/cosmetic-dentistry",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Cosmetic Dentistry",
  description:
    "Porcelain veneers, composite veneers, smile makeovers, dental bonding, and aesthetic contouring.",
  procedureType: "https://schema.org/NoninvasiveProcedure",
  bodyLocation: "Teeth",
};

export default function CosmeticDentistryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollObserver />
      <Header />
      <ServicePageLayout
        title="Cosmetic Dentistry"
        slug="cosmetic-dentistry"
        icon="/images/icon-veneers.png"
        heroDescription="Achieve the smile you've always wanted with our comprehensive cosmetic dentistry services. From porcelain veneers to complete smile makeovers, our specialists craft natural-looking results tailored to your facial features."
        bookingService="Cosmetic Dentistry"
        sections={[
          {
            heading: "Porcelain & Composite Veneers",
            content:
              "Veneers are ultra-thin shells bonded to the front of your teeth to correct chips, discoloration, gaps, or misalignment. Porcelain veneers offer unmatched durability and a natural translucency that mimics real tooth enamel — they can last 15–20 years. Composite veneers are a more affordable option that can be completed in a single visit, with results that still look strikingly natural.",
          },
          {
            heading: "Smile Makeovers",
            content:
              "A smile makeover combines multiple cosmetic treatments — veneers, whitening, bonding, and contouring — into a comprehensive plan customized to your face. Our team evaluates your tooth color, alignment, gum line, lip line, and facial proportions to design a harmonious smile. Every makeover is planned digitally before work begins, so you can preview your new smile.",
          },
          {
            heading: "Dental Bonding & Contouring",
            content:
              "Dental bonding uses tooth-colored composite resin to repair chips, cracks, and gaps in a single painless appointment. Tooth contouring reshapes irregular or uneven teeth by gently removing small amounts of enamel. These are quick, affordable procedures that can dramatically improve the appearance of your smile without any invasive work.",
          },
        ]}
        relatedDoctors={[
          {
            name: "Dr. Monish",
            role: "Chief Dental Surgeon",
            img: "/images/dr-monish.jpg",
            id: "monish",
          },
          {
            name: "Dr. Layana Theodore",
            role: "Prosthodontist & Implant Surgeon",
            img: "/images/dr-layana.jpg",
            id: "layana",
          },
        ]}
        faqs={[
          {
            question: "How long do porcelain veneers last?",
            answer:
              "Porcelain veneers typically last 15–20 years with proper care. They are resistant to staining and extremely durable. We use high-quality ceramic materials and precision bonding techniques to ensure longevity.",
          },
          {
            question: "Is cosmetic dentistry painful?",
            answer:
              "Most cosmetic procedures are minimally invasive and painless. Dental bonding and contouring require no anesthesia at all. For veneers, a small amount of enamel is removed under local anesthesia — patients report little to no discomfort.",
          },
          {
            question: "Can I see what my smile will look like before treatment?",
            answer:
              "Yes. We use digital smile design planning to show you a preview of your new smile before any work begins. This allows you to provide feedback and make adjustments to achieve exactly the look you want.",
          },
        ]}
        relatedServices={[
          {
            title: "Teeth Whitening",
            href: "/teeth-whitening",
            description:
              "Brighten your teeth before or alongside veneers for a complete smile transformation.",
          },
          {
            title: "Dental Implants",
            href: "/dental-implants",
            description:
              "Replace missing teeth with implants that blend seamlessly with your cosmetic work.",
          },
          {
            title: "Braces & Aligners",
            href: "/braces-aligners",
            description:
              "Straighten your teeth first, then finish with cosmetic treatments for the perfect result.",
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
