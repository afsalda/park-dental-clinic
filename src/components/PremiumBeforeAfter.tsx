"use client";

import React, { useRef, useEffect } from "react";

interface ComparisonSliderProps {
  label: string;
  beforeSrc: string;
  afterSrc: string;
  ariaLabel: string;
}

function ComparisonSlider({ label, beforeSrc, afterSrc, ariaLabel }: ComparisonSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLImageElement>(null);
  const positionRef = useRef<number>(50); // Default to 50%
  const requestRef = useRef<number | null>(null);
  const pendingPercentageRef = useRef<number>(50);

  // Update the position of the slider divider and clip-path directly in the DOM
  const updatePosition = (percentage: number) => {
    const clamped = Math.max(0, Math.min(100, percentage));
    positionRef.current = clamped;

    if (dividerRef.current) {
      dividerRef.current.style.left = `${clamped}%`;
      dividerRef.current.setAttribute("aria-valuenow", Math.round(clamped).toString());
    }
    if (overlayRef.current) {
      // clipPath hides the left side of the After image, showing it on the right
      overlayRef.current.style.clipPath = `inset(0 0 0 ${clamped}%)`;
    }
  };

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    pendingPercentageRef.current = percentage;

    if (requestRef.current === null) {
      requestRef.current = requestAnimationFrame(() => {
        updatePosition(pendingPercentageRef.current);
        requestRef.current = null;
      });
    }
  };

  // Pointer Event handlers for mouse, touch, and trackpad dragging
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === "mouse") return; // Only drag with left click
    const target = e.currentTarget;
    target.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      handleMove(e.clientX);
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  // Keyboard navigation for accessibility
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    let newPos = positionRef.current;
    const step = e.shiftKey ? 10 : 2; // Move by 10% with shift, otherwise 2%
    
    if (e.key === "ArrowLeft") {
      newPos -= step;
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      newPos += step;
      e.preventDefault();
    } else if (e.key === "Home") {
      newPos = 0;
      e.preventDefault();
    } else if (e.key === "End") {
      newPos = 100;
      e.preventDefault();
    }
    
    updatePosition(newPos);
  };

  // Sync initial 50% position on mount and clean up animation frames
  useEffect(() => {
    updatePosition(50);
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", width: "100%" }}>
      {/* Outer comparison slider container */}
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="slider"
        aria-label={ariaLabel}
        aria-valuenow={50}
        aria-valuemin={0}
        aria-valuemax={100}
        className="slider-container"
        style={{
          position: "relative",
          width: "100%",
          borderRadius: "32px",
          overflow: "hidden",
          userSelect: "none",
          touchAction: "none",
          outline: "none",
          cursor: "ew-resize",
        }}
      >
        {/* Style injection for responsive handle, custom classes and focus outlines */}
        <style jsx>{`
          .slider-container {
            aspect-ratio: 3 / 4;
            box-shadow: var(--shadow-card);
            border: 1px solid var(--color-border-light);
            transition: box-shadow var(--duration-fast);
          }
          .slider-container:focus-visible {
            box-shadow: 0 0 0 3px var(--color-primary);
          }
          .slider-handle {
            width: 28px;
            height: 28px;
          }
          @media (min-width: 640px) {
            .slider-handle {
              width: 32px;
              height: 32px;
            }
          }
          @media (min-width: 1024px) {
            .slider-handle {
              width: 36px;
              height: 36px;
            }
          }
        `}</style>

        {/* Before Image (Base Layer - visible on the left side of the divider) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeSrc}
          alt={`${label} - Before treatment`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />

        {/* After Image (Overlay Layer - visible on the right side of the divider, clipped) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={overlayRef}
          src={afterSrc}
          alt={`${label} - After treatment`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            clipPath: "inset(0 0 0 50%)",
            willChange: "clip-path",
          }}
        />

        {/* Draggable vertical divider */}
        <div
          ref={dividerRef}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: "2px",
            backgroundColor: "#ffffff",
            pointerEvents: "none",
            willChange: "left",
            zIndex: 10,
          }}
        >
          {/* Circular Handle */}
          <div
            className="slider-handle"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate3d(-50%, -50%, 0)",
              backgroundColor: "#ffffff",
              borderRadius: "50%",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
              border: "1.5px solid rgba(255, 255, 255, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            {/* Premium left/right arrows inside the circular handle */}
            <svg
              viewBox="0 0 24 24"
              style={{
                width: "45%",
                height: "45%",
                fill: "none",
                stroke: "var(--color-text)",
                strokeWidth: 3,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
            >
              <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Case Study Label Underneath */}
      <div style={{ textAlign: "center", fontWeight: "600", color: "var(--color-text)", marginTop: "0.5rem" }}>
        {label}
      </div>
    </div>
  );
}

export default function PremiumBeforeAfter() {
  return (
    <section id="before-after" className="section-row" aria-label="Before and After Results">
      <div className="section-inner">
        {/* Premium Section Header matching the website design system */}
        <div className="gallery-header" style={{ marginBottom: "var(--space-2xl)" }}>
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
              Before & After Transformations
            </h2>
            <p style={{ color: "var(--color-text-secondary)", marginTop: "0.5rem" }}>
              Drag the sliders to see the transformations in alignment and brightness.
            </p>
          </div>
        </div>

        {/* Cases container: 3-column grid on desktop, horizontal slider on mobile */}
        <div className="cases-container">
          {/* Case 1: Smile Makeover */}
          <div className="cases-item">
            <ComparisonSlider
              label="Smile Makeover"
              beforeSrc="/images/Remove_text_change_ratio_2K_202607132318.jpeg"
              afterSrc="/images/Fix_teeth_issue_whiten_misalignment_202607132319.jpeg"
              ariaLabel="Smile makeover teeth alignment and whitening comparison slider"
            />
          </div>

          {/* Case 2: Orthodontics */}
          <div className="cases-item">
            <ComparisonSlider
              label="Orthodontics"
              beforeSrc="/images/ChatGPT Image Jul 13, 2026, 10_55_51 PM.png"
              afterSrc="/images/Orthodontic_treatment_after_image_2K_202607132253.jpeg"
              ariaLabel="Orthodontic braces teeth alignment comparison slider"
            />
          </div>

          {/* Case 3: Teeth Whitening & Alignment */}
          <div className="cases-item">
            <ComparisonSlider
              label="Teeth Whitening & Alignment"
              beforeSrc="/images/Remove_text_change_ratio_2K_202607141209.jpeg"
              afterSrc="/images/Fix_teeth_whiten_align_teeth_202607141209.jpeg"
              ariaLabel="Teeth whitening and alignment comparison slider"
            />
          </div>
        </div>

        <style jsx>{`
          .cases-container {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 280px));
            justify-content: center;
            gap: 2.5rem;
            max-width: 1000px;
            margin: 0 auto;
            width: 100%;
          }
          .cases-item {
            display: flex;
            justify-content: center;
          }
          @media (max-width: 960px) {
            .cases-container {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              gap: 1.5rem;
              padding: 0.5rem var(--page-padding) 1.5rem;
              width: calc(100% + (var(--page-padding) * 2));
              margin-left: calc(var(--page-padding) * -1);
              margin-right: calc(var(--page-padding) * -1);
              scroll-behavior: smooth;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: thin;
              scrollbar-color: var(--color-primary) var(--color-border-light);
            }
            .cases-container::-webkit-scrollbar {
              height: 6px;
            }
            .cases-container::-webkit-scrollbar-track {
              background: var(--color-border-light);
              border-radius: var(--radius-pill);
            }
            .cases-container::-webkit-scrollbar-thumb {
              background: var(--color-primary);
              border-radius: var(--radius-pill);
            }
            .cases-item {
              flex: 0 0 auto;
              width: min(70vw, 260px);
              scroll-snap-align: start;
            }
          }
          @media (max-width: 767px) {
            #before-after {
              padding-bottom: 36px !important;
            }
            .gallery-header {
              margin-bottom: 24px !important;
            }
            .cases-container {
              gap: 16px;
              padding: 0.5rem 20px 1.5rem;
              width: calc(100% + 40px);
              margin-left: -20px;
              margin-right: -20px;
            }
            .cases-item {
              flex: 0 0 auto;
              width: 75vw;
              max-width: 238px;
              min-width: 224px;
              scroll-snap-align: center;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
