import type { Metadata } from "next";
import Header from "../../components/Header";
import ServicePageLayout from "../../components/ServicePageLayout";
import BookingModal from "../../components/BookingModal";
import DoctorModal from "../../components/DoctorModal";
import SuccessToast from "../../components/SuccessToast";
import ScrollObserver from "../../components/ScrollObserver";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Dental Check-ups & Hygiene in Kochi | Cleaning — Park Dental Clinic",
  description:
    "Professional dental cleaning, plaque removal, gum health checks, and preventive care at Park Dental Clinic, Kochi. Regular check-ups to keep your teeth and gums healthy.",
  keywords:
    "dental cleaning kochi, dental hygiene kerala, dental checkup kochi, teeth cleaning cost kochi, preventive dentistry, gum health kochi",
  alternates: {
    canonical: "https://www.parkdentalclinics.co.in/checkups-hygiene",
  },
  openGraph: {
    type: "website",
    title: "Dental Check-ups & Hygiene in Kochi — Park Dental Clinic",
    description:
      "Professional cleanings, gum health checks, and preventive care plans for your entire family.",
    url: "https://www.parkdentalclinics.co.in/checkups-hygiene",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Routine Dental Check-ups and Hygiene",
  description:
    "Professional cleanings, plaque and tartar removal, gum health checks, and preventive care plans.",
  procedureType: "https://schema.org/NoninvasiveProcedure",
  bodyLocation: "Teeth and gums",
};

export default function CheckupsHygienePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollObserver />
      <Header />
      <ServicePageLayout
        title="Check-ups & Hygiene"
        slug="checkups-hygiene"
        icon="/images/icon-treatment.png"
        heroDescription="Prevention is the foundation of good dental health. Our professional cleanings, comprehensive check-ups, and personalized preventive care plans help you and your family maintain healthy teeth and gums for life."
        bookingService="General Consultation"
        sections={[
          {
            heading: "Professional Dental Cleaning",
            content:
              "Even with excellent brushing and flossing, plaque and tartar can accumulate in areas that are difficult to reach. Our professional cleaning (scaling and polishing) removes these deposits from above and below the gum line, reducing your risk of cavities and gum disease. We recommend a professional cleaning every 6 months — or more frequently if you have gum concerns or are undergoing orthodontic treatment.",
          },
          {
            heading: "Comprehensive Dental Check-ups",
            content:
              "A check-up at Park Dental Clinic is thorough. Your dentist examines every tooth, checks your gums for signs of periodontal disease, evaluates your bite, screens for oral cancer, and reviews any existing restorations. Digital X-rays are taken as needed to detect hidden issues like cavities between teeth, bone loss, or impacted wisdom teeth. Early detection prevents small problems from becoming expensive, complex treatments.",
          },
          {
            heading: "Children's Dental Care",
            content:
              "Our dedicated pedodontist, Dr. Aswani Anil, provides specialized care for children from infancy through adolescence. Children require different approaches to behavior management, anesthesia, and treatment planning than adults. Regular check-ups starting at age 1 help establish good oral hygiene habits early, detect developmental issues, and prevent cavities through fluoride application and sealants.",
          },
        ]}
        relatedDoctors={[
          {
            name: "Dr. Fouzia Ismail",
            role: "General Dentist",
            img: "/images/dr-fouzia.jpg",
            id: "fouzia",
          },
          {
            name: "Dr. Aswani Anil",
            role: "Pedodontist",
            img: "/images/dr-aswani.jpg",
            id: "aswani",
          },
          {
            name: "Dr. Monish",
            role: "Chief Dental Surgeon",
            img: "/images/dr-monish.jpg",
            id: "monish",
          },
        ]}
        faqs={[
          {
            question: "How often should I get a dental check-up?",
            answer:
              "We recommend a comprehensive check-up and professional cleaning every 6 months for most patients. If you have gum disease, are undergoing orthodontic treatment, or have other risk factors, your dentist may recommend more frequent visits every 3–4 months.",
          },
          {
            question: "Does dental cleaning hurt?",
            answer:
              "Professional cleaning is generally painless. You may feel mild pressure or vibration during scaling, and slight sensitivity in areas with tartar buildup. If you have sensitive teeth or significant buildup, your dentist can apply a topical numbing gel for added comfort.",
          },
          {
            question: "At what age should a child first visit the dentist?",
            answer:
              "The American Academy of Pediatric Dentistry recommends a child's first dental visit by age 1 or within 6 months of the first tooth appearing. Early visits allow us to monitor development, provide preventive care, and help your child become comfortable with dental visits.",
          },
        ]}
        relatedServices={[
          {
            title: "Teeth Whitening",
            href: "/teeth-whitening",
            description:
              "After a thorough cleaning, professional whitening gives you the brightest possible smile.",
          },
          {
            title: "Root Canal Treatment",
            href: "/root-canal-treatment",
            description:
              "Regular check-ups can detect decay early, potentially avoiding the need for root canal therapy.",
          },
          {
            title: "Dental Implants",
            href: "/dental-implants",
            description:
              "If you have missing teeth, implants provide a permanent replacement with proper ongoing care.",
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
