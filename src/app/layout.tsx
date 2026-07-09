import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "../context/BookingContext";
import SmoothScroll from "../components/SmoothScroll";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Park Dental Clinic — Premium Dental Care in Kochi, Kerala",
  description:
    "Park Dental Clinic offers premium dental implants, cosmetic dentistry, orthodontics, and family dental care in Kochi, Kerala. Led by Dr. Monish with 20+ years of experience.",
  keywords:
    "dentist kochi, dental clinic kerala, dental implants, cosmetic dentistry, teeth whitening, braces, root canal, family dentist",
  authors: [{ name: "Park Dental Clinic" }],
  alternates: {
    canonical: "https://www.parkdentalclinics.co.in",
  },
  openGraph: {
    type: "website",
    title: "Park Dental Clinic — Premium Dental Care in Kochi, Kerala",
    description:
      "Experienced specialists, modern technology, and compassionate dental care for your entire family. Book your consultation today.",
    url: "https://www.parkdentalclinics.co.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Park Dental Clinic — Premium Dental Care in Kochi, Kerala",
    description:
      "Experienced specialists, modern technology, and compassionate dental care for your entire family.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.parkdentalclinics.co.in/#organization",
      "name": "Park Dental Clinic",
      "url": "https://www.parkdentalclinics.co.in/",
      "logo": "https://www.parkdentalclinics.co.in/logo.png",
      "email": "parkdentalclinicdrmonish@gmail.com",
      "telephone": ["+91 98469 18974", "+91 81081 07271"],
      "foundingDate": "2015",
      "description": "Premium multi-specialty dental clinic in Kochi, Kerala offering dental implants, cosmetic dentistry, root canal therapy, teeth whitening, braces and aligners, and family dental care. 4.9 rating with 868 reviews on JustDial.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ground floor, opposite to More Supermarket, Punnackal, Elamakkara",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "postalCode": "682026",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.google.com/maps/place/Park+Dental+Clinic/@9.9816,76.3194,17z"
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Dr. Monish Krishnan",
          "jobTitle": "Chief Dental Surgeon",
          "worksFor": { "@id": "https://www.parkdentalclinics.co.in/#organization" }
        },
        {
          "@type": "Person",
          "name": "Dr. Manu M. Das",
          "jobTitle": "Maxillofacial Surgeon",
          "worksFor": { "@id": "https://www.parkdentalclinics.co.in/#organization" }
        },
        {
          "@type": "Person",
          "name": "Dr. Aswani Anil",
          "jobTitle": "Pedodontist",
          "worksFor": { "@id": "https://www.parkdentalclinics.co.in/#organization" }
        },
        {
          "@type": "Person",
          "name": "Dr. Nikhil Julian",
          "jobTitle": "Endodontist",
          "worksFor": { "@id": "https://www.parkdentalclinics.co.in/#organization" }
        },
        {
          "@type": "Person",
          "name": "Dr. Fouzia Ismail",
          "jobTitle": "General Dentist",
          "worksFor": { "@id": "https://www.parkdentalclinics.co.in/#organization" }
        },
        {
          "@type": "Person",
          "name": "Dr. Mathew Jacob",
          "jobTitle": "Endodontist",
          "worksFor": { "@id": "https://www.parkdentalclinics.co.in/#organization" }
        },
        {
          "@type": "Person",
          "name": "Dr. Layana Theodore",
          "jobTitle": "Prosthodontist and Implant Surgeon",
          "worksFor": { "@id": "https://www.parkdentalclinics.co.in/#organization" }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.parkdentalclinics.co.in/#website",
      "url": "https://www.parkdentalclinics.co.in/",
      "name": "Park Dental Clinic",
      "publisher": { "@id": "https://www.parkdentalclinics.co.in/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.parkdentalclinics.co.in/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.parkdentalclinics.co.in/#clinic",
      "name": "Park Dental Clinic",
      "url": "https://www.parkdentalclinics.co.in/",
      "description": "Premium multi-specialty dental clinic in Kochi, Kerala with seven specialists offering dental implants, cosmetic dentistry, root canal therapy, teeth whitening, braces and aligners, and family dental care.",
      "image": "https://www.parkdentalclinics.co.in/clinic-image.jpg",
      "priceRange": "$$",
      "telephone": "+91 98469 18974",
      "email": "parkdentalclinicdrmonish@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ground floor, opposite to More Supermarket, Punnackal, Elamakkara",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "postalCode": "682026",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "9.9816",
        "longitude": "76.3194"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "19:30"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "868",
        "bestRating": "5",
        "worstRating": "1"
      },
      "medicalSpecialty": [
        "Dentistry",
        "OralSurgery",
        "Endodontics",
        "Orthodontics",
        "PediatricDentistry",
        "Prosthodontics",
        "CosmeticDentistry"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Kochi"
      },
      "parentOrganization": { "@id": "https://www.parkdentalclinics.co.in/#organization" }
    },
    {
      "@type": "Service",
      "@id": "https://www.parkdentalclinics.co.in/#implants",
      "serviceType": "Dental Implants",
      "provider": { "@id": "https://www.parkdentalclinics.co.in/#clinic" },
      "description": "Single tooth implants, full-arch restoration, All-on-4, immediate-load implants, and implant-supported bridges performed by a prosthodontist and implant surgeon."
    },
    {
      "@type": "Service",
      "@id": "https://www.parkdentalclinics.co.in/#cosmetic",
      "serviceType": "Cosmetic Dentistry",
      "provider": { "@id": "https://www.parkdentalclinics.co.in/#clinic" },
      "description": "Porcelain veneers, composite veneers, smile makeovers, dental bonding, and aesthetic contouring."
    },
    {
      "@type": "Service",
      "@id": "https://www.parkdentalclinics.co.in/#rootcanal",
      "serviceType": "Root Canal Therapy",
      "provider": { "@id": "https://www.parkdentalclinics.co.in/#clinic" },
      "description": "Painless single and multi-visit root canal treatments using advanced rotary endodontics and digital imaging, performed by dedicated endodontists."
    },
    {
      "@type": "Service",
      "@id": "https://www.parkdentalclinics.co.in/#whitening",
      "serviceType": "Teeth Whitening",
      "provider": { "@id": "https://www.parkdentalclinics.co.in/#clinic" },
      "description": "In-office laser whitening, custom take-home whitening trays, and professional stain removal treatments."
    },
    {
      "@type": "Service",
      "@id": "https://www.parkdentalclinics.co.in/#orthodontics",
      "serviceType": "Dental Braces and Aligners",
      "provider": { "@id": "https://www.parkdentalclinics.co.in/#clinic" },
      "description": "Traditional metal braces, ceramic braces, self-ligating systems, and clear aligner therapy for all ages."
    },
    {
      "@type": "Service",
      "@id": "https://www.parkdentalclinics.co.in/#hygiene",
      "serviceType": "Routine Check-ups and Hygiene",
      "provider": { "@id": "https://www.parkdentalclinics.co.in/#clinic" },
      "description": "Professional cleanings, plaque and tartar removal, gum health checks, and preventive care plans."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.parkdentalclinics.co.in/#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes Park Dental Clinic the safest dental clinic in Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Park Dental Clinic has seven specialists with defined roles, meaning every procedure is performed by someone trained specifically for it. A maxillofacial surgeon handles surgical cases, two endodontists perform root canals with rotary endodontics, and a prosthodontist and implant surgeon manages implant placements. The clinic uses modern digital imaging and follows strict sterilization protocols."
          }
        },
        {
          "@type": "Question",
          "name": "Does Park Dental Clinic treat children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Park Dental Clinic has a dedicated pedodontist, Dr. Aswani Anil, who specializes in pediatric dental care. Children require different approaches to behavior management, anesthesia, and treatment planning than adults."
          }
        },
        {
          "@type": "Question",
          "name": "Does Park Dental Clinic offer Invisalign or clear aligners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Park Dental Clinic offers clear aligner therapy alongside traditional metal braces, ceramic braces, and self-ligating systems for all ages."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Park Dental Clinic located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Park Dental Clinic is located at Ground floor, opposite to More Supermarket, Punnackal, Elamakkara, Kochi, Kerala 682026, India. The clinic is open Monday to Saturday from 10:00 AM to 7:30 PM."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book an appointment at Park Dental Clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book an appointment online at parkdentalclinics.co.in or call +91 98469 18974 or +91 81081 07271. Online booking is available with a 3-step form to select your service, preferred specialist, and preferred date and time."
          }
        },
        {
          "@type": "Question",
          "name": "What dental services does Park Dental Clinic offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Park Dental Clinic offers dental implants (single tooth, full-arch, All-on-4, immediate-load), cosmetic dentistry (veneers, smile makeovers, bonding), root canal therapy with rotary endodontics, teeth whitening (laser and take-home trays), dental braces and clear aligners, and routine check-ups and hygiene care."
          }
        },
        {
          "@type": "Question",
          "name": "Are dental implants safe at Park Dental Clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dental implants at Park Dental Clinic are placed by Dr. Layana Theodore, a prosthodontist and implant surgeon. The clinic uses modern digital imaging for precise placement and follows strict sterilization protocols aligned with CDC and DCI guidelines."
          }
        }
      ]
    }
  ]
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let ratingValue = "5.0";
  let reviewCount = "34";

  try {
    // Fetch the live Google Reviews feed from SociableKit with daily revalidation
    const res = await fetch("https://data.accentapi.com/feed/25694673.json", {
      next: { revalidate: 86400 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.bio?.overall_star_rating) {
        ratingValue = Number(data.bio.overall_star_rating).toFixed(1);
      }
      if (data?.bio?.rating_count) {
        reviewCount = data.bio.rating_count.toString();
      }
    }
  } catch (error) {
    console.error("Failed to fetch live Google Reviews rating for schema:", error);
  }

  // Create a deep copy of jsonLd to inject dynamic values
  const dynamicJsonLd = JSON.parse(JSON.stringify(jsonLd));

  // Find Organization and update its description to match live ratings
  const org = dynamicJsonLd["@graph"].find((item: any) => item["@type"] === "Organization");
  if (org) {
    org.description = `Premium multi-specialty dental clinic in Kochi, Kerala offering dental implants, cosmetic dentistry, root canal therapy, teeth whitening, braces and aligners, and family dental care. ${ratingValue} Google rating from ${reviewCount}+ reviews.`;
  }

  // Find MedicalClinic and update its rating and description
  const clinic = dynamicJsonLd["@graph"].find((item: any) => item["@type"] === "MedicalClinic");
  if (clinic) {
    clinic.description = `Premium multi-specialty dental clinic in Kochi, Kerala with seven specialists offering dental implants, cosmetic dentistry, root canal therapy, teeth whitening, braces and aligners, and family dental care. ${ratingValue} Google rating from ${reviewCount}+ reviews.`;
    clinic.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount, // Keeps it a valid numeric string for SEO validation
      "bestRating": "5",
      "worstRating": "1"
    };
  }

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="bUyC6aCrt6af4PPxkR7VYWeSs4Rqplyk2iBSgbMxoQg" />
        {/* Tabler Icons CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
        {/* Inline SVG Tooth Favicon */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 2c-3.5 0-6.4 1.2-8.2 3.3C5.9 7.5 5 10.2 5 13c0 2.5.8 4.8 1.8 7 1 2.1 2.2 4.1 3.2 6 .5.9 1 1.8 1.4 2.6.4.8 1 1.4 1.8 1.4s1.4-.6 1.6-1.5c.3-1.2.6-2.6 1.2-3.5.6-.9 1.2-.9 1.8.1.6.9.9 2.3 1.2 3.5.2.9.8 1.5 1.6 1.5s1.3-.6 1.8-1.4c.4-.8.9-1.7 1.4-2.6 1-1.9 2.2-3.9 3.2-6 1-2.2 1.8-4.5 1.8-7 0-2.8-.9-5.5-2.8-7.7C22.4 3.2 19.5 2 16 2z' fill='%230891b2'/%3E%3C/svg%3E"
        />
        {/* Structured Schema Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicJsonLd) }}
        />
      </head>
      <body>
        <BookingProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </BookingProvider>
      </body>
    </html>
  );
}
