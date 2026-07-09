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
  {
    author: "Siddharth Menon",
    time: "3 weeks ago",
    rating: 5,
    treatment: "Dental Implants",
    text: "Got my front tooth implant done by Dr. Monish. The surgical procedure was explained thoroughly, and the crown fits perfectly. Highly satisfied with the advanced equipment and care.",
  },
  {
    author: "Riya Mathew",
    time: "1 month ago",
    rating: 5,
    treatment: "Teeth Whitening",
    text: "Very happy with the teeth whitening treatment. The results are amazing, and the sensitivity was minimal. The clinic is exceptionally clean and comfortable.",
  },
  {
    author: "Rahul G. Nair",
    time: "1 month ago",
    rating: 5,
    treatment: "Root Canal Treatment",
    text: "Dr. Mathew Jacob did an excellent job with my root canal. He was very gentle and completed it in two brief sessions. The pain is completely gone.",
  },
  {
    author: "Lakshmi Priya",
    time: "2 months ago",
    rating: 5,
    treatment: "Invisalign / Clear Aligners",
    text: "Currently undergoing clear aligner treatment here. The digital scanning process was quick, and the doctors are very precise with their follow-ups. Great experience!",
  },
  {
    author: "Aron Joseph",
    time: "2 months ago",
    rating: 5,
    treatment: "Tooth Extraction",
    text: "Got a painless extraction for my decayed molar. The staff was very supportive and gave detailed post-treatment instructions. Cleanliness is top-notch.",
  },
  {
    author: "Shruti Sharma",
    time: "2 months ago",
    rating: 5,
    treatment: "Dental Crowns & Bridges",
    text: "Got a zirconium crown for my front tooth. It matches the color of my natural teeth perfectly. Dr. Monish is truly a perfectionist.",
  },
  {
    author: "Devassy Paul",
    time: "3 months ago",
    rating: 5,
    treatment: "Scaling & Polishing",
    text: "Regular scaling session was quick and comfortable. No sensitivity afterwards. The pricing is very transparent and reasonable.",
  },
  {
    author: "Aisha Fatima",
    time: "3 months ago",
    rating: 5,
    treatment: "Pediatric Dental Care",
    text: "Took my daughter for a check-up. Dr. Aswani Anil is wonderful with children. She made the entire visit fun and stress-free for my little one.",
  },
  {
    author: "Madhavan K.",
    time: "3 months ago",
    rating: 5,
    treatment: "Full Mouth Rehabilitation",
    text: "Exceptional care for senior citizens. My father got his complete dentures made here. They fit comfortably, and he can eat without any issues now.",
  },
  {
    author: "Tessa Antony",
    time: "4 months ago",
    rating: 5,
    treatment: "Cosmetic Dentistry / Smile Designing",
    text: "Dr. Parvathy Raj transformed my smile with composite bonding. She is very skilled and took her time to ensure it looked perfect. Highly recommended!",
  },
  {
    author: "Nikhil Raj",
    time: "4 months ago",
    rating: 5,
    treatment: "Wisdom Tooth Surgery",
    text: "Had a surgical extraction of an impacted wisdom tooth. Dr. Monish made it look simple and fast. Healing was quick with minimal swelling.",
  },
  {
    author: "Gautham Krishna",
    time: "5 months ago",
    rating: 5,
    treatment: "Dental Fillings",
    text: "Clean and quick composite filling done for two cavities. The doctor explained the procedure and used high-quality materials. Very professional environment.",
  },
  {
    author: "Sandra Maria",
    time: "5 months ago",
    rating: 5,
    treatment: "Orthodontic Braces",
    text: "Started my braces treatment here 6 months ago. The progress is visible, and the monthly adjustments are handled with care. The clinic staff is very polite.",
  },
  {
    author: "Vinod Kumar",
    time: "5 months ago",
    rating: 5,
    treatment: "Laser Gum Treatment",
    text: "Completed laser gum therapy for bleeding gums. The treatment was effective and painless. The clinic has very advanced laser equipment.",
  },
  {
    author: "Meera Krishnan",
    time: "6 months ago",
    rating: 5,
    treatment: "Dental Veneers",
    text: "The veneers look incredibly natural. They have boosted my confidence tremendously. Thank you to Dr. Monish and the amazing staff at Park Dental.",
  },
  {
    author: "Abhishek S.",
    time: "6 months ago",
    rating: 5,
    treatment: "Mouth Guard / Night Guard",
    text: "Got a custom night guard for teeth grinding. It fits comfortably and has relieved my morning jaw pain. Excellent service.",
  },
  {
    author: "Fathima N.",
    time: "7 months ago",
    rating: 5,
    treatment: "Root Canal Treatment",
    text: "Second time getting a root canal treatment at this clinic. Both Dr. Mathew Jacob and the assistant were extremely caring and patient throughout.",
  },
  {
    author: "Thomas Kurian",
    time: "7 months ago",
    rating: 5,
    treatment: "Dental Implants",
    text: "Had two implants placed last year. The follow-up care and the final crowns are excellent. Very reliable clinic with experienced doctors.",
  },
  {
    author: "Anjali Ramesh",
    time: "8 months ago",
    rating: 5,
    treatment: "Teeth Scaling",
    text: "Thorough scaling and polishing done. The doctor also gave useful advice on flossing and daily oral care. Very helpful and friendly staff.",
  },
  {
    author: "Hari Prasad",
    time: "8 months ago",
    rating: 5,
    treatment: "Dental Fillings",
    text: "Painless decay removal and ceramic filling. The clinic follows strict hygiene standards which is very reassuring. Highly recommend Dr. Aswani.",
  },
  {
    author: "Elizabeth Sunny",
    time: "9 months ago",
    rating: 5,
    treatment: "Pediatric Dental Care",
    text: "My son actually looks forward to visiting the dentist now! The pediatric section is child-friendly, and the doctors are extremely gentle.",
  },
  {
    author: "Rajesh Sekhar",
    time: "9 months ago",
    rating: 5,
    treatment: "Wisdom Tooth Extraction",
    text: "Excellent post-op care. The wisdom tooth extraction was very swift. Dr. Monish check-in calls after the procedure show their patient commitment.",
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
              Practo Stories (600+)
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div
          className="reviews-widget-container animate-on-scroll"
          style={{ display: activeTab === "google" ? "block" : "none" }}
        >
          <div className="sk-ww-google-reviews" data-embed-id="25694673"></div>
        </div>

        <div
          className="practo-reviews-wrapper animate-on-scroll"
          style={{ display: activeTab === "practo" ? "flex" : "none" }}
        >
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
      </div>

      <Script
        src="https://widgets.sociablekit.com/google-reviews/widget.js"
        strategy="lazyOnload"
        defer
      />
    </section>
  );
}
