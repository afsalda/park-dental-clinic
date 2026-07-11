import type { Metadata } from "next";
import Header from "../../components/Header";
import ServicePageLayout from "../../components/ServicePageLayout";
import BookingModal from "../../components/BookingModal";
import DoctorModal from "../../components/DoctorModal";
import SuccessToast from "../../components/SuccessToast";
import ScrollObserver from "../../components/ScrollObserver";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Dental Implants in Kochi | All-on-4, Single Tooth — Park Dental Clinic",
  description:
    "Get dental implants in Kochi from a specialist prosthodontist. Single tooth implants, full-arch restoration, All-on-4, and immediate-load implants at Park Dental Clinic, Elamakkara.",
  keywords:
    "dental implants kochi, tooth implant kerala, all-on-4 kochi, dental implant cost kochi, implant dentist kochi, implant-supported bridge",
  alternates: {
    canonical: "https://www.parkdentalclinics.co.in/dental-implants",
  },
  openGraph: {
    type: "website",
    title: "Dental Implants in Kochi — Park Dental Clinic",
    description:
      "Single tooth implants, full-arch restoration, All-on-4, and immediate-load implants by a specialist prosthodontist and implant surgeon.",
    url: "https://www.parkdentalclinics.co.in/dental-implants",
    images: [
      {
        url: "https://www.parkdentalclinics.co.in/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dental Implants in Kochi — Park Dental Clinic",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Dental Implants",
  description:
    "Single tooth implants, full-arch restoration, All-on-4, immediate-load implants, and implant-supported bridges performed by a prosthodontist and implant surgeon.",
  howPerformed:
    "A titanium post is surgically placed into the jawbone by our implant surgeon to act as an artificial tooth root. After integration, a custom crown, bridge, or denture is attached to restore function and aesthetics.",
  procedureType: "https://schema.org/SurgicalProcedure",
  bodyLocation: "Jaw",
  followup:
    "Post-operative review at 1 week, osseointegration check at 3 months, final prosthesis placement at 3–6 months.",
};

export default function DentalImplantsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollObserver />
      <Header />
      <ServicePageLayout
        title="Dental Implants"
        slug="dental-implants"
        icon="/images/icon-implants.webp"
        heroDescription="Replace missing teeth permanently with dental implants placed by our specialist prosthodontist and implant surgeon. We offer single tooth implants, full-arch restoration, All-on-4, and immediate-load implants using modern digital imaging for precise placement."
        bookingService="Dental Implants"
        sections={[
          {
            heading: "What Are Dental Implants?",
            content:
              "Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots. Once the implant fuses with the bone (a process called osseointegration), a custom-made crown, bridge, or denture is attached on top. The result is a replacement that looks, feels, and functions like your natural tooth — and can last a lifetime with proper care.",
          },
          {
            heading: "Types of Implants We Offer",
            content:
              "At Park Dental Clinic, we offer the full range of implant solutions: single tooth implants to replace individual missing teeth, implant-supported bridges for multiple adjacent teeth, All-on-4 and All-on-6 full-arch restorations for patients who have lost most or all teeth, and immediate-load implants where clinically appropriate — meaning you can leave the clinic with temporary teeth on the same day as surgery.",
          },
          {
            heading: "Why Choose Park Dental for Implants?",
            content:
              "All implant procedures are planned and performed by Dr. Layana Theodore, a prosthodontist and implant surgeon. This means the same doctor who places the implant also designs and fabricates the final prosthesis — ensuring seamless aesthetics and function. We use digital imaging for precise placement and follow strict sterilization protocols aligned with CDC and DCI guidelines.",
          },
        ]}
        relatedDoctors={[
          {
            name: "Dr. Layana Theodore",
            role: "Prosthodontist & Implant Surgeon",
            img: "/images/dr-layana.webp",
            id: "layana",
          },
          {
            name: "Dr. Manu M. Das",
            role: "Maxillofacial Surgeon",
            img: "/images/dr-manu.webp",
            id: "manu",
          },
        ]}
        faqs={[
          {
            question: "How long does the dental implant process take?",
            answer:
              "The entire process typically takes 3–6 months. The implant is placed in a single surgical appointment, then needs 3–4 months to integrate with the jawbone. After that, the final crown is fabricated and attached in 1–2 visits. In some cases, immediate-load implants allow us to place temporary teeth on the same day.",
          },
          {
            question: "Are dental implants painful?",
            answer:
              "The procedure is performed under local anesthesia, so you feel no pain during placement. Post-operative discomfort is typically mild and managed with standard painkillers. Most patients report that the experience was far more comfortable than they expected.",
          },
          {
            question: "How much do dental implants cost in Kochi?",
            answer:
              "The cost varies depending on the type of implant and prosthesis. A single implant with crown starts from competitive rates compared to other metro cities. We provide a detailed cost breakdown during your consultation. All-on-4 and full-arch restorations are also available at transparent pricing.",
          },
          {
            question: "Who is a good candidate for dental implants?",
            answer:
              "Most adults with adequate jawbone density and good general health are candidates for implants. Even if you have experienced bone loss, bone grafting procedures can make implants possible. During your consultation, Dr. Layana will evaluate your case with digital imaging and recommend the best approach.",
          },
        ]}
        relatedServices={[
          {
            title: "Cosmetic Dentistry",
            href: "/cosmetic-dentistry",
            description:
              "Complement your implants with veneers and smile makeovers for a complete transformation.",
          },
          {
            title: "Root Canal Treatment",
            href: "/root-canal-treatment",
            description:
              "Save a damaged tooth before considering an implant — painless root canal therapy by specialists.",
          },
          {
            title: "Check-ups & Hygiene",
            href: "/checkups-hygiene",
            description:
              "Maintain your implants with regular professional cleanings and gum health checks.",
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
