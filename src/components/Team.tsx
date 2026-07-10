"use client";

import { useBooking } from "../context/BookingContext";

interface Doctor {
  id: string;
  name: string;
  role: string;
  img: string;
}

const doctorsList: Doctor[] = [
  {
    id: "monish",
    name: "Dr. Monish",
    role: "Chief Dental Surgeon",
    img: "/images/dr-monish.webp",
  },
  {
    id: "manu",
    name: "Dr. Manu M. Das",
    role: "Maxillofacial Surgeon",
    img: "/images/dr-manu.webp",
  },
  {
    id: "aswani",
    name: "Dr. Aswani Anil",
    role: "Pedodontist",
    img: "/images/dr-aswani.webp",
  },
  {
    id: "nikhil",
    name: "Dr. Nikhil Julian",
    role: "Endodontist",
    img: "/images/dr-nikhil.webp",
  },
  {
    id: "fouzia",
    name: "Dr. Fouzia Ismail",
    role: "General Dentist",
    img: "/images/dr-fouzia.webp",
  },
  {
    id: "mathew",
    name: "Dr. Mathew Jacob",
    role: "Endodontist",
    img: "/images/dr-mathew.webp",
  },
  {
    id: "layana",
    name: "Dr. Layana Theodore",
    role: "Prosthodontist & Implant Surgeon",
    img: "/images/dr-layana.webp",
  },
];

export default function Team() {
  const { openDoctor } = useBooking();

  const handleMeetTeamClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#team-grid");
    if (target) {
      const navbar = document.querySelector(".navbar");
      const navHeight = navbar ? (navbar as HTMLElement).offsetHeight : 0;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="team" className="section-row" aria-label="Our dental specialists">
      <div className="section-inner card-section">
        <div className="team-section">
          <div className="team-header animate-on-scroll">
            <div className="team-header-left">
              <h2 className="text-h1 split-text-animate">Our Specialists</h2>
              <p className="team-count">7 experienced specialists ready to care for you</p>
            </div>
            <a href="#team-grid" className="btn btn-secondary btn-sm" onClick={handleMeetTeamClick}>
              Meet the Team
              <svg
                className="btn-icon"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 15L15 5M15 5H8M15 5V12" />
              </svg>
            </a>
          </div>
          <div className="team-grid stagger-children" id="team-grid">
            {doctorsList.map((doc, index) => (
              <div
                key={index}
                className="team-card animate-on-scroll"
                onClick={() => openDoctor(doc.id)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={doc.img}
                  alt={`${doc.name}, ${doc.role} at Park Dental Clinic`}
                  width={800}
                  height={800}
                  loading="lazy"
                />
                <div className="team-card-overlay"></div>
                <div className="team-card-info">
                  <div>
                    <h3 className="team-card-name">{doc.name}</h3>
                    <p className="team-card-role">{doc.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
