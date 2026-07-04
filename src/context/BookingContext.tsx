"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface BookingContextType {
  isBookingOpen: boolean;
  isDoctorOpen: boolean;
  isPrivacyOpen: boolean;
  isSuccessToastOpen: boolean;
  selectedDoctor: string;
  selectedService: string;
  activeDoctorId: string;
  openBooking: (docName?: string, svcName?: string) => void;
  closeBooking: () => void;
  openDoctor: (docId: string) => void;
  closeDoctor: () => void;
  openPrivacy: () => void;
  closePrivacy: () => void;
  showSuccessToast: () => void;
  closeSuccessToast: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isSuccessToastOpen, setIsSuccessToastOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("Any specialist (recommended)");
  const [selectedService, setSelectedService] = useState("General Consultation");
  const [activeDoctorId, setActiveDoctorId] = useState("");

  const openBooking = (docName?: string, svcName?: string) => {
    if (docName) setSelectedDoctor(docName);
    if (svcName) setSelectedService(svcName);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  const openDoctor = (docId: string) => {
    setActiveDoctorId(docId);
    setIsDoctorOpen(true);
  };

  const closeDoctor = () => {
    setIsDoctorOpen(false);
  };

  const openPrivacy = () => {
    setIsPrivacyOpen(true);
  };

  const closePrivacy = () => {
    setIsPrivacyOpen(false);
  };

  const showSuccessToast = () => {
    setIsSuccessToastOpen(true);
    setTimeout(() => {
      setIsSuccessToastOpen(false);
    }, 4500);
  };

  const closeSuccessToast = () => {
    setIsSuccessToastOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        isDoctorOpen,
        isPrivacyOpen,
        isSuccessToastOpen,
        selectedDoctor,
        selectedService,
        activeDoctorId,
        openBooking,
        closeBooking,
        openDoctor,
        closeDoctor,
        openPrivacy,
        closePrivacy,
        showSuccessToast,
        closeSuccessToast,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
