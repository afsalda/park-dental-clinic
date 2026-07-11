import type { Metadata } from "next";
import Header from "../../components/Header";
import ServicePageLayout from "../../components/ServicePageLayout";
import BookingModal from "../../components/BookingModal";
import DoctorModal from "../../components/DoctorModal";
import SuccessToast from "../../components/SuccessToast";
import ScrollObserver from "../../components/ScrollObserver";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Braces & Clear Aligners in Kochi | Invisalign — Park Dental Clinic",
  description:
    "Get braces and clear aligners in Kochi at Park Dental Clinic. Traditional metal braces, ceramic braces, self-ligating systems, and clear aligner therapy for all ages.",
  keywords:
    "braces kochi, clear aligners kerala, invisalign kochi, orthodontist kochi, dental braces cost kochi, ceramic braces, self-ligating braces",
  alternates: {
    canonical: "https://www.parkdentalclinics.co.in/braces-aligners",
  },
  openGraph: {
    type: "website",
    title: "Braces & Clear Aligners in Kochi — Park Dental Clinic",
    description:
      "Metal braces, ceramic braces, and clear aligner therapy for all ages at Park Dental Clinic, Kochi.",
    url: "https://www.parkdentalclinics.co.in/braces-aligners",
    images: [
      {
        url: "https://www.parkdentalclinics.co.in/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Braces & Clear Aligners in Kochi — Park Dental Clinic",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Dental Braces and Aligners",
  description:
    "Traditional metal braces, ceramic braces, self-ligating systems, and clear aligner therapy for all ages.",
  procedureType: "https://schema.org/NoninvasiveProcedure",
  bodyLocation: "Teeth and jaw",
};

export default function BracesAlignersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollObserver />
      <Header />
      <ServicePageLayout
        title="Braces & Aligners"
        slug="braces-aligners"
        icon="/images/icon-braces.webp"
        heroDescription="Achieve a perfectly aligned smile with our orthodontic treatments. We offer traditional metal braces, discreet ceramic braces, advanced self-ligating systems, and clear aligner therapy — customized to your age, lifestyle, and treatment goals."
        bookingService="Braces & Aligners"
        sections={[
          {
            heading: "Traditional & Ceramic Braces",
            content:
              "Metal braces remain the most versatile and effective orthodontic treatment, capable of correcting even complex bite and alignment issues. For patients who prefer a less noticeable option, ceramic braces use tooth-colored brackets that blend with your natural teeth while delivering the same precision results. Both options are available at Park Dental Clinic with customized treatment plans.",
          },
          {
            heading: "Clear Aligners",
            content:
              "Clear aligner therapy uses a series of custom-made, transparent trays that gradually shift your teeth into alignment. The aligners are virtually invisible, removable for eating and brushing, and changed every 1–2 weeks. This is an ideal option for adults and teens who want straight teeth without the visibility of traditional braces. Treatment duration varies from 6 to 18 months depending on the complexity of your case.",
          },
          {
            heading: "Self-Ligating Braces",
            content:
              "Self-ligating braces use a specialized clip instead of elastic bands to hold the archwire. This design reduces friction, requires fewer adjustments, and can shorten overall treatment time. Patients also report greater comfort and easier cleaning compared to traditional bracket systems. We offer both metal and ceramic self-ligating options.",
          },
        ]}
        relatedDoctors={[
          {
            name: "Dr. Monish",
            role: "Chief Dental Surgeon",
            img: "/images/dr-monish.webp",
            id: "monish",
          },
        ]}
        faqs={[
          {
            question: "How long does orthodontic treatment take?",
            answer:
              "Treatment duration depends on the complexity of your case. Simple alignment issues may be corrected in 6–12 months, while more complex cases with bite problems can take 18–24 months. Clear aligners typically range from 6–18 months. Your dentist will provide an estimated timeline during your initial consultation.",
          },
          {
            question: "Are clear aligners as effective as braces?",
            answer:
              "Clear aligners are highly effective for mild to moderate alignment issues including crowding, spacing, and mild bite problems. For complex cases involving severe overbites, crossbites, or significant tooth rotation, traditional braces may be recommended for better control. Your dentist will advise the best option for your specific needs.",
          },
          {
            question: "What age is best for braces?",
            answer:
              "While braces are most commonly placed during adolescence (ages 12–16) when permanent teeth have erupted, orthodontic treatment is effective at any age. Many adults in their 30s, 40s, and beyond achieve excellent results with braces or clear aligners. Early evaluation at age 7 can help identify issues that benefit from interceptive treatment.",
          },
          {
            question: "Do braces hurt?",
            answer:
              "You may experience mild soreness for 3–5 days after braces are first placed and after each adjustment. This discomfort is manageable with over-the-counter painkillers and soft foods. Most patients adapt quickly. Self-ligating braces tend to cause less discomfort than traditional systems due to reduced friction.",
          },
        ]}
        relatedServices={[
          {
            title: "Cosmetic Dentistry",
            href: "/cosmetic-dentistry",
            description:
              "After straightening your teeth, enhance your smile with veneers and bonding.",
          },
          {
            title: "Teeth Whitening",
            href: "/teeth-whitening",
            description:
              "Whiten your newly straightened teeth for the ultimate smile transformation.",
          },
          {
            title: "Check-ups & Hygiene",
            href: "/checkups-hygiene",
            description:
              "Extra cleanings during braces treatment help maintain gum health and prevent cavities.",
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
