"use client";

import Link from "next/link";
import { useBooking } from "../context/BookingContext";
import Breadcrumb from "./Breadcrumb";
import FAQ from "./FAQ";

interface RelatedDoctor {
  name: string;
  role: string;
  img: string;
  id: string;
}

interface RelatedService {
  title: string;
  href: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageLayoutProps {
  title: string;
  slug: string;
  icon: string;
  heroDescription: string;
  sections: { heading: string; content: string }[];
  relatedDoctors: RelatedDoctor[];
  relatedServices: RelatedService[];
  faqs: FAQItem[];
  bookingService: string;
}

export default function ServicePageLayout({
  title,
  slug,
  icon,
  heroDescription,
  sections,
  relatedDoctors,
  relatedServices,
  faqs,
  bookingService,
}: ServicePageLayoutProps) {
  const { openBooking, openDoctor } = useBooking();

  return (
    <main id="main-content" className="page-wrapper">
      {/* Breadcrumb */}
      <section className="section-row service-breadcrumb-section">
        <div className="section-inner">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: title, href: `/${slug}` },
            ]}
          />
        </div>
      </section>

      {/* Service Hero */}
      <section className="section-row service-hero-section" aria-label={title}>
        <div className="section-inner">
          <div className="service-page-hero animate-on-scroll">
            <div className="service-page-hero-icon">
              <img src={icon} alt={title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <div className="service-page-hero-content">
              <h1 className="text-display split-text-animate">{title}</h1>
              <p className="service-page-hero-desc">{heroDescription}</p>
              <div className="service-page-hero-actions">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => openBooking(undefined, bookingService)}
                >
                  Book This Service
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 15L15 5M15 5H8M15 5V12" />
                  </svg>
                </button>
                <Link href="/" className="btn btn-secondary">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      <section className="section-row" aria-label={`${title} details`}>
        <div className="section-inner card-section">
          <div className="service-page-details">
            {sections.map((section, index) => (
              <div key={index} className="service-detail-block animate-on-scroll">
                <h2 className="text-h2">{section.heading}</h2>
                <p className="text-body">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Doctors */}
      {relatedDoctors.length > 0 && (
        <section className="section-row" aria-label="Related specialists">
          <div className="section-inner card-section">
            <div className="service-related-doctors">
              <span className="badge badge-primary">✦ Your Specialists</span>
              <h2 className="text-h1">Meet Your Doctors</h2>
              <div className="service-doctors-grid stagger-children">
                {relatedDoctors.map((doc) => (
                  <Link
                    key={doc.id}
                    href="/dentists"
                    className="team-card animate-on-scroll"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={doc.img} alt={`${doc.name}, ${doc.role}`} loading="lazy" />
                    <div className="team-card-overlay"></div>
                    <div className="team-card-info">
                      <div>
                        <h3 className="team-card-name">{doc.name}</h3>
                        <p className="team-card-role">{doc.role}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="section-row" aria-label="Frequently asked questions">
          <div className="section-inner card-section">
            <FAQ items={faqs} />
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="section-row" aria-label="Related services">
        <div className="section-inner card-section">
          <div className="service-related-services">
            <span className="badge badge-primary">✦ Explore More</span>
            <h2 className="text-h1">Other Services</h2>
            <div className="service-related-grid stagger-children">
              {relatedServices.map((svc, index) => (
                <Link key={index} href={svc.href} className="service-related-card animate-on-scroll">
                  <h3 className="service-related-card-title">{svc.title}</h3>
                  <p className="service-related-card-desc">{svc.description}</p>
                  <span className="service-related-card-link">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-row" aria-label="Book appointment">
        <div className="section-inner">
          <div className="cta-row">
            <div className="cta-content-card animate-on-scroll" style={{ flex: 1 }}>
              <h2 className="cta-title split-text-animate">
                Ready to get started? Book your {title.toLowerCase()} consultation today.
              </h2>
              <div className="cta-bottom">
                <div className="cta-reviews">
                  <div className="cta-reviews-info">
                    <div className="cta-reviews-score">
                      <span>4.9</span>
                      <span className="stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg key={i} viewBox="0 0 20 20">
                            <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z" />
                          </svg>
                        ))}
                      </span>
                    </div>
                    <span className="cta-reviews-text">200+ Reviews on Google</span>
                  </div>
                </div>
                <button
                  className="btn btn-white btn-lg"
                  onClick={() => openBooking(undefined, bookingService)}
                >
                  Book Online
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 15L15 5M15 5H8M15 5V12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
