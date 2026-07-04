"use client";

import { useEffect, useState, useRef } from "react";
import Script from "next/script";

interface PractoReviewItem {
  author: string;
  time: string;
  rating: number;
  treatment: string;
  text: string;
}

const practoReviewsList: PractoReviewItem[] = [
  {
    author: "Deepak Kumar",
    time: "2 weeks ago",
    rating: 5,
    treatment: "Wisdom Tooth Extraction",
    text: "I visited Dr. Monish for a wisdom tooth extraction. I was extremely nervous, but he explained the whole process clearly and completed the extraction in less than 10 minutes with absolutely no pain. Excellent doctor and very sanitary clinic!",
  },
  {
    author: "Ananya R.",
    time: "1 month ago",
    rating: 5,
    treatment: "Dental Veneers / Smile Designing",
    text: "Dr. Monish is very patient and highly skilled. He performed a smile correction with veneers for me, and the result is absolutely natural and beautiful. The staff is polite, and the clinic is equipped with the latest dental technology.",
  },
  {
    author: "Jose Joseph",
    time: "3 months ago",
    rating: 5,
    treatment: "Root Canal Treatment",
    text: "I've been visiting Park Dental Clinic for regular scaling and dental check-ups for years. Dr. Mathew Jacob performed a root canal treatment for me recently. It was completely painless and extremely professional. Best dental clinic in Cochin!",
  },
  {
    author: "Meera Nair",
    time: "4 months ago",
    rating: 5,
    treatment: "Pediatric Dental Care",
    text: "Excellent pediatric dental care! Took my 7-year-old son to Dr. Aswani Anil for a cavity filling. She was incredibly gentle, friendly, and managed his anxiety so well. Highly recommend this clinic for families.",
  },
];

export default function Reviews() {
  const [activeTab, setActiveTab] = useState<"google" | "practo">("google");
  const practoTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalFetch = window.fetch;

    window.fetch = async function (...args) {
      const url = args[0];
      if (typeof url === "string") {
        // Intercept feed json to limit reviews to 8 high-quality text reviews
        if (url.includes("accentapi.com/feed/25694673.json")) {
          try {
            const response = await originalFetch.apply(this, args);
            if (response.ok) {
              const clone = response.clone();
              const json = await clone.json();
              if (json && json.reviews) {
                // Filter to only reviews with text content
                const textReviews = json.reviews.filter(
                  (r: any) => r.review_text && r.review_text.trim() !== ""
                );
                // Cap at 8 reviews
                json.reviews = textReviews.slice(0, 8);
              }
              return new Response(JSON.stringify(json), {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
              });
            }
          } catch (e) {
            console.error("Error intercepting SociableKit reviews feed:", e);
          }
        }

        // Intercept settings json to clean up layout (hide headers, buttons, and branding)
        if (url.includes("accentapi.com/settings/25694673/settings.json")) {
          try {
            const response = await originalFetch.apply(this, args);
            if (response.ok) {
              const clone = response.clone();
              const json = await clone.json();
              if (json && json.settings) {
                // Force settings to keep only the carousel and hide other elements
                json.settings.show_feed_title = "0";
                json.settings.show_average_rating = "0";
                json.settings.show_reviews_count = "0";
                json.settings.show_write_review_button = "0";
                json.settings.show_load_more_button = "0";
                json.settings.post_count = "8";
                json.settings.carousel_post_count = "8";
              }
              return new Response(JSON.stringify(json), {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
              });
            }
          } catch (e) {
            console.error("Error intercepting SociableKit settings:", e);
          }
        }
      }
      return originalFetch.apply(this, args);
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const track = practoTrackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const style = window.getComputedStyle(card);
    const marginRight = parseFloat(style.marginRight) || 0;
    const marginLeft = parseFloat(style.marginLeft) || 0;
    const scrollAmount = cardWidth + marginRight + marginLeft;

    track.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" className="section-row" aria-label="Patient testimonials">
      <div className="section-inner">
        <div className="reviews-header animate-on-scroll">
          <span className="badge badge-primary">✦ Patient Testimonials</span>
          <h2 className="text-h1 split-text-animate">What Our Patients Say</h2>
          <p className="reviews-subtitle">
            Read verified experiences and feedback from our patients across platforms.
          </p>
        </div>

        {/* Segmented Control Switcher */}
        <div className="reviews-tabs-container animate-on-scroll">
          <div className="reviews-tabs">
            <button
              className={`reviews-tab-btn ${activeTab === "google" ? "active" : ""}`}
              onClick={() => setActiveTab("google")}
            >
              <i className="ti ti-brand-google" style={{ fontSize: "16px" }}></i>
              Google Reviews
            </button>
            <button
              className={`reviews-tab-btn ${activeTab === "practo" ? "active" : ""}`}
              onClick={() => setActiveTab("practo")}
            >
              <i className="ti ti-activity" style={{ fontSize: "16px" }}></i>
              Practo Stories
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        {activeTab === "google" ? (
          <div className="reviews-widget-container animate-on-scroll">
            <div className="sk-ww-google-reviews" data-embed-id="25694673"></div>
          </div>
        ) : (
          <div className="practo-reviews-wrapper animate-on-scroll">
            <button
              className="practo-nav-btn prev"
              aria-label="Previous reviews"
              onClick={() => handleScroll("left")}
            >
              <i className="ti ti-chevron-left"></i>
            </button>

            <div className="practo-track" ref={practoTrackRef}>
              {practoReviewsList.map((review, index) => (
                <div className="practo-card" key={index}>
                  <div className="practo-card-header">
                    <div className="practo-avatar">{review.author.charAt(0)}</div>
                    <div className="practo-meta">
                      <h3 className="practo-author-name">{review.author}</h3>
                      <span className="practo-time">{review.time}</span>
                    </div>
                    <div className="practo-source-badge">
                      <span className="practo-dot"></span>
                      Practo Verified
                    </div>
                  </div>
                  <div className="practo-treatment-badge">
                    <i className="ti ti-circle-check" style={{ marginRight: "4px", fontSize: "13px", verticalAlign: "-1px", color: "var(--color-primary)" }}></i>
                    {review.treatment}
                  </div>
                  <div className="review-rating" style={{ color: "var(--color-star)" }}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" fill="currentColor" style={{ width: "16px", height: "16px", marginRight: "2px" }}>
                        <path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 1 7.19 7.63 0 8.24l5.46 4.73L3.82 20z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="practo-text">"{review.text}"</blockquote>
                </div>
              ))}
            </div>

            <button
              className="practo-nav-btn next"
              aria-label="Next reviews"
              onClick={() => handleScroll("right")}
            >
              <i className="ti ti-chevron-right"></i>
            </button>
          </div>
        )}
      </div>

      <Script
        src="https://widgets.sociablekit.com/google-reviews/widget.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
