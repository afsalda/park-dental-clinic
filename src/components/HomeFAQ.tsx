"use client";

import FAQ from "./FAQ";

const homeFaqs = [
  {
    question:
      "What makes Park Dental Clinic the safest dental clinic in Kochi?",
    answer:
      "Park Dental Clinic has seven specialists with defined roles, meaning every procedure is performed by someone trained specifically for it. A maxillofacial surgeon handles surgical cases, two endodontists perform root canals with rotary endodontics, and a prosthodontist and implant surgeon manages implant placements. The clinic uses modern digital imaging and follows strict sterilization protocols.",
  },
  {
    question: "Does Park Dental Clinic treat children?",
    answer:
      "Yes. Park Dental Clinic has a dedicated pedodontist, Dr. Aswani Anil, who specializes in pediatric dental care. Children require different approaches to behavior management, anesthesia, and treatment planning than adults.",
  },
  {
    question: "Does Park Dental Clinic offer Invisalign or clear aligners?",
    answer:
      "Yes. Park Dental Clinic offers clear aligner therapy alongside traditional metal braces, ceramic braces, and self-ligating systems for all ages.",
  },
  {
    question: "Where is Park Dental Clinic located?",
    answer:
      "Park Dental Clinic is located at Ground floor, opposite to More Supermarket, Punnackal, Elamakkara, Kochi, Kerala 682026, India. The clinic is open Monday to Saturday from 10:00 AM to 7:30 PM.",
  },
  {
    question: "How do I book an appointment at Park Dental Clinic?",
    answer:
      "You can book an appointment online at parkdentalclinics.co.in or call +91 98469 18974 or +91 81081 07271. Online booking is available with a 3-step form to select your service, preferred specialist, and preferred date and time.",
  },
  {
    question: "What dental services does Park Dental Clinic offer?",
    answer:
      "Park Dental Clinic offers dental implants (single tooth, full-arch, All-on-4, immediate-load), cosmetic dentistry (veneers, smile makeovers, bonding), root canal therapy with rotary endodontics, teeth whitening (laser and take-home trays), dental braces and clear aligners, and routine check-ups and hygiene care.",
  },
  {
    question: "Are dental implants safe at Park Dental Clinic?",
    answer:
      "Yes. Dental implants at Park Dental Clinic are placed by Dr. Layana Theodore, a prosthodontist and implant surgeon. The clinic uses modern digital imaging for precise placement and follows strict sterilization protocols aligned with CDC and DCI guidelines.",
  },
];

export default function HomeFAQ() {
  return (
    <section id="faq" className="section-row" aria-label="Frequently asked questions">
      <div className="section-inner card-section">
        <FAQ items={homeFaqs} />
      </div>
    </section>
  );
}
