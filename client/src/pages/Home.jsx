import React from 'react';
import HeroSection from '../components/home/HeroSection';
import Ticker from '../components/home/Ticker';
import AboutPreview from '../components/home/AboutPreview';
import AcademicsOverview from '../components/home/AcademicsOverview';
import FacilitiesGrid from '../components/home/FacilitiesGrid';
import GalleryPreview from '../components/home/GalleryPreview';
import AdmissionCTA from '../components/home/AdmissionCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Latest Announcements Ticker */}
      <Ticker />

      {/* Hero Section */}
      <HeroSection />

      {/* Short Introduction about the school */}
      <AboutPreview />

      {/* Academics Overview */}
      <AcademicsOverview />

      {/* Highlights of School Facilities */}
      <FacilitiesGrid preview={true} />

      {/* Photo Gallery Preview */}
      <GalleryPreview />

      {/* Admissions Info & Enquiry CTA */}
      <AdmissionCTA />
    </div>
  );
}
