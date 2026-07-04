"use client";

import { useEffect, useRef } from "react";

interface ReviewItem {
  author: string;
  time: string;
  avatar: string;
  rating: number;
  text: string;
}

const reviewsList: ReviewItem[] = [
  {
    author: "krishnasankar K S",
    time: "2 months ago",
    avatar: "/images/reviewer-krishna.png",
    rating: 5,
    text: "I had an excellent experience at the best dental clinic in Ernakulam. From the moment I walked in, the staff made me feel comfortable and well taken care of. The clinic is extremely clean, well-maintained, and equipped with modern technology.",
  },
  {
    author: "- Aznedi -",
    time: "8 months ago",
    avatar: "/images/reviewer-aznedi.png",
    rating: 5,
    text: "incredible service by Dr.Monish amazing doctor and person in his own right. very sanitary with a nice waiting area, the staff were very nice and easy to locate",
  },
  {
    author: "Divesh Raj",
    time: "11 months ago",
    avatar: "/images/reviewer-divesh.png",
    rating: 5,
    text: "I've trusted Dr. Monish Krishnan and his exceptional dental team for over a decade. Their expertise, gentle care, and attention to detail make every visit comfortable and reassuring.",
  },
];

export default function Reviews() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const track = trackRef.current;

    if (!marquee || !track) return;

    const originalCards = Array.from(track.children) as HTMLElement[];
    if (originalCards.length === 0) return;

    let halfWidth = 0;
    let lastObservedOffsetWidth = 0;
    let currentX = 0;
    const speed = 40; // Pixels per second
    let isPaused = false;
    let isDragging = false;
    let startX = 0;
    let startOffset = 0;
    let lastTime = performance.now();
    let animFrameId: number | null = null;

    const rebuildTrack = () => {
      // Clear track and restore original cards
      track.innerHTML = "";
      originalCards.forEach((card) => track.appendChild(card));

      // Reset transform
      const prevTransform = track.style.transform;
      track.style.transform = "";

      // Measure single set width
      let setWidth = 0;
      originalCards.forEach((card) => {
        const style = window.getComputedStyle(card);
        const marginRight = parseFloat(style.marginRight) || 0;
        const marginLeft = parseFloat(style.marginLeft) || 0;
        setWidth += card.offsetWidth + marginRight + marginLeft;
      });

      if (setWidth === 0) return;

      const marqueeWidth = marquee.offsetWidth;
      const setsNeeded = Math.max(2, Math.ceil(marqueeWidth / setWidth) + 1);

      for (let s = 1; s < setsNeeded; s++) {
        originalCards.forEach((card) => {
          const clone = card.cloneNode(true);
          track.appendChild(clone);
        });
      }

      halfWidth = setWidth;
      track.style.transform = prevTransform;
      lastObservedOffsetWidth = track.offsetWidth;
    };

    rebuildTrack();

    window.addEventListener("resize", rebuildTrack);

    const checkTimeout = setTimeout(rebuildTrack, 500);

    const animate = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (track.offsetWidth !== lastObservedOffsetWidth || halfWidth === 0) {
        rebuildTrack();
      }

      if (!isPaused && !isDragging && halfWidth > 0) {
        currentX -= speed * delta;

        if (currentX <= -halfWidth) {
          currentX += halfWidth;
        } else if (currentX > 0) {
          currentX -= halfWidth;
        }

        track.style.transform = `translate3d(${currentX}px, 0, 0)`;
      }

      animFrameId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
      lastTime = performance.now();
    };

    const handleTouchStart = (e: TouchEvent) => {
      isDragging = true;
      startX = e.touches[0].clientX;
      startOffset = currentX;
      lastTime = performance.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const currentTouchX = e.touches[0].clientX;
      const deltaX = currentTouchX - startX;

      currentX = startOffset + deltaX;

      if (halfWidth > 0) {
        if (currentX <= -halfWidth) {
          currentX += halfWidth;
          startX = currentTouchX;
          startOffset = currentX;
        } else if (currentX > 0) {
          currentX -= halfWidth;
          startX = currentTouchX;
          startOffset = currentX;
        }
      }

      track.style.transform = `translate3d(${currentX}px, 0, 0)`;
    };

    const handleTouchEnd = () => {
      isDragging = false;
      lastTime = performance.now();
    };

    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);
    marquee.addEventListener("touchstart", handleTouchStart, { passive: true });
    marquee.addEventListener("touchmove", handleTouchMove, { passive: true });
    marquee.addEventListener("touchend", handleTouchEnd);

    animFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", rebuildTrack);
      clearTimeout(checkTimeout);
      if (animFrameId) cancelAnimationFrame(animFrameId);

      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
      marquee.removeEventListener("touchstart", handleTouchStart);
      marquee.removeEventListener("touchmove", handleTouchMove);
      marquee.removeEventListener("touchend", handleTouchEnd);
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
        <div className="reviews-marquee" ref={marqueeRef}>
          <div className="review-track" ref={trackRef}>
            {reviewsList.map((review, index) => (
              <div className="review-card" key={index}>
                <div className="review-card-header">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="review-avatar"
                  />
                  <div className="review-meta">
                    <h3 className="review-author-name">{review.author}</h3>
                    <span className="review-time">{review.time}</span>
                  </div>
                  <div className="google-icon-watermark">
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                </div>
                <div className="review-rating">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 1 7.19 7.63 0 8.24l5.46 4.73L3.82 20z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="review-text">"{review.text}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
