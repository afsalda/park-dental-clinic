import Header from "../components/Header";
import Hero from "../components/Hero";
import ClinicStats from "../components/ClinicStats";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import Team from "../components/Team";
import HomeFAQ from "../components/HomeFAQ";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import DoctorModal from "../components/DoctorModal";
import PrivacyModal from "../components/PrivacyModal";
import SuccessToast from "../components/SuccessToast";
import ScrollObserver from "../components/ScrollObserver";
import PremiumBeforeAfter from "../components/PremiumBeforeAfter";

export default function Home() {
  return (
    <>
      <ScrollObserver />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="page-wrapper">
        <Hero />
        <ClinicStats />
        <Services />
        <Reviews />
        <Team />
        <PremiumBeforeAfter />
        <HomeFAQ />
        <CtaSection />
        <Footer />
      </main>

      {/* Modals & Overlay triggers */}
      <BookingModal />
      <DoctorModal />
      <PrivacyModal />
      <SuccessToast />
    </>
  );
}
