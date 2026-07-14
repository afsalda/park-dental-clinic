"use client";

import React from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const cases = [
  {
    id: "case-1",
    label: "Smile Makeover",
    beforeImg: "/images/before-after/smile-makeover-before.jpg",
    afterImg: "/images/before-after/smile-makeover-after.jpg",
    isSingleCombinedImage: false, 
  },
  {
    id: "case-2",
    label: "Orthodontics",
    beforeImg: "/images/before-after/orthodontics-before.jpg",
    afterImg: "/images/before-after/orthodontics-after.jpg",
    isSingleCombinedImage: false,
  },
];

export default function BeforeAfterGallery() {
  return (
    <section id="before-after" className="section-row" aria-label="Before and After Results">
      <div className="section-inner">
        <div className="animate-on-scroll">
          <div
            className="gallery-header"
            style={{
              marginBottom: "var(--space-xl)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "var(--space-md)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-xs)" }}>
              <span className="badge badge-primary">✦ Real Results</span>
              <h2
                className="text-h2"
                style={{
                  margin: 0,
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                }}
              >
                Before & After Results
              </h2>
              <p style={{ color: "var(--color-text-secondary)", marginTop: "0.5rem" }}>
                See the real results our patients have achieved
              </p>
            </div>
          </div>

          <div className="gallery-track" style={{ paddingBottom: "1rem" }}>
            {cases.map((item) => (
              <div
                key={item.id}
                style={{
                  flex: "0 0 280px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  scrollSnapAlign: "start",
                }}
                className="gallery-item-wrapper"
              >
                {/* The card containing the slider, styled like .gallery-item */}
                <div
                  className="gallery-item"
                  style={{
                    flex: "none",
                    width: "100%",
                    aspectRatio: "3/2",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-card)",
                    border: "1px solid var(--color-border-light)",
                    position: "relative",
                  }}
                >
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage 
                        src={item.beforeImg} 
                        alt={`${item.label} Before`} 
                        style={item.isSingleCombinedImage ? { objectPosition: "top" } : {}}
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage 
                        src={item.afterImg} 
                        alt={`${item.label} After`} 
                        style={item.isSingleCombinedImage ? { objectPosition: "bottom" } : {}}
                      />
                    }
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                {/* Label underneath */}
                <div style={{ textAlign: "center", fontWeight: "600", color: "var(--color-text)" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
