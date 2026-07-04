"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function Reviews() {
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

  return (
    <section id="testimonials" className="section-row" aria-label="Patient testimonials">
      <div className="section-inner">
        <div className="reviews-header animate-on-scroll">
          <span className="badge badge-primary">✦ Google Reviews</span>
          <h2 className="text-h1 split-text-animate">What Our Patients Say</h2>
          <p className="reviews-subtitle">
            Real reviews from our patients, fetched directly from Google Maps reviews.
          </p>
        </div>
        <div className="reviews-widget-container animate-on-scroll">
          <div className="sk-ww-google-reviews" data-embed-id="25694673"></div>
        </div>
      </div>
      <Script
        src="https://widgets.sociablekit.com/google-reviews/widget.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
