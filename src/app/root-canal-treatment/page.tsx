import type { Metadata } from "next";
import Header from "../../components/Header";
import ServicePageLayout from "../../components/ServicePageLayout";
import BookingModal from "../../components/BookingModal";
import DoctorModal from "../../components/DoctorModal";
import SuccessToast from "../../components/SuccessToast";
import ScrollObserver from "../../components/ScrollObserver";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Root Canal Treatment in Kochi | Painless RCT — Park Dental Clinic",
  description:
    "Get painless root canal treatment in Kochi from specialist endodontists. Advanced rotary endodontics and digital imaging for precise, comfortable root canal therapy at Park Dental Clinic.",
  keywords:
    "root canal kochi, RCT kerala, painless root canal kochi, endodontist kochi, root canal treatment cost kochi, rotary endodontics",
  alternates: {
    canonical: "https://www.parkdentalclinics.co.in/root-canal-treatment",
  },
  openGraph: {
    type: "website",
    title: "Painless Root Canal Treatment in Kochi — Park Dental Clinic",
    description:
      "Painless root canal therapy by specialist endodontists using advanced rotary endodontics and digital imaging.",
    url: "https://www.parkdentalclinics.co.in/root-canal-treatment",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Root Canal Treatment",
  description:
    "Painless single and multi-visit root canal treatments using advanced rotary endodontics and digital imaging, performed by dedicated endodontists.",
  procedureType: "https://schema.org/SurgicalProcedure",
  bodyLocation: "Tooth pulp and root canals",
};

export default function RootCanalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollObserver />
      <Header />
      <ServicePageLayout
        title="Root Canal Treatment"
        slug="root-canal-treatment"
        icon="/images/icon-prosthetics.webp"
        heroDescription="Save your natural tooth with painless root canal therapy performed by our specialist endodontists. We use advanced rotary endodontics and digital imaging to ensure precise, comfortable treatment — often completed in a single visit."
        bookingService="Root Canal"
        sections={[
          {
            heading: "What Is a Root Canal?",
            content:
              "A root canal (endodontic treatment) removes infected or damaged pulp tissue from inside a tooth, cleans and disinfects the root canals, then seals them to prevent further infection. Despite its reputation, modern root canal treatment is virtually painless — comparable to getting a filling. The procedure saves your natural tooth, avoiding the need for extraction and replacement with an implant or bridge.",
          },
          {
            heading: "Advanced Rotary Endodontics",
            content:
              "Our endodontists use motorized rotary instruments made of nickel-titanium alloy, which are more flexible and efficient than traditional hand files. This technology allows them to clean and shape root canals faster and more precisely, reducing procedure time and improving outcomes. Combined with digital radiography for real-time imaging, we can treat even complex root canal anatomies with confidence.",
          },
          {
            heading: "Two Specialist Endodontists",
            content:
              "Park Dental Clinic has two dedicated endodontists — Dr. Nikhil Julian and Dr. Mathew Jacob — who focus exclusively on root canal procedures and related treatments. Having specialists means every root canal is performed by someone with advanced training and daily experience in endodontics, not by a general dentist handling it occasionally.",
          },
        ]}
        relatedDoctors={[
          {
            name: "Dr. Nikhil Julian",
            role: "Endodontist",
            img: "/images/dr-nikhil.webp",
            id: "nikhil",
          },
          {
            name: "Dr. Mathew Jacob",
            role: "Endodontist",
            img: "/images/dr-mathew.webp",
            id: "mathew",
          },
        ]}
        faqs={[
          {
            question: "Is root canal treatment painful?",
            answer:
              "Modern root canal treatment is virtually painless. The tooth and surrounding area are fully numbed with local anesthesia before the procedure begins. Most patients compare the experience to getting a routine filling. Any post-treatment discomfort is mild and managed with over-the-counter painkillers for 1–2 days.",
          },
          {
            question: "How many visits does a root canal require?",
            answer:
              "Many root canals at our clinic are completed in a single visit using advanced rotary endodontics. In some cases — particularly when there is a severe infection or complex root anatomy — a two-visit approach is used for optimal results. Your endodontist will discuss the recommended approach during your consultation.",
          },
          {
            question: "Can a root canal save my tooth permanently?",
            answer:
              "Yes. A properly performed root canal followed by a crown can allow your tooth to function normally for decades. Root canal treated teeth have a high success rate (over 95%) when performed by a specialist endodontist and properly restored.",
          },
        ]}
        relatedServices={[
          {
            title: "Dental Implants",
            href: "/dental-implants",
            description:
              "If a tooth cannot be saved, implants provide the most natural permanent replacement option.",
          },
          {
            title: "Cosmetic Dentistry",
            href: "/cosmetic-dentistry",
            description:
              "Restore the appearance of a root canal-treated tooth with a natural-looking crown or veneer.",
          },
          {
            title: "Check-ups & Hygiene",
            href: "/checkups-hygiene",
            description:
              "Regular check-ups help detect tooth decay early — before it progresses to needing a root canal.",
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
