import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

export default function HeroSection() {
  const { settings } = useSchool();

  return (
    <section className="relative bg-gradient-to-b from-[#F3F4F6] via-white to-white border-b border-[#E5E7EB] overflow-hidden">
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: School Title & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#333333] shadow-subtle">
              <ShieldCheck className="w-4 h-4 text-gray-700" />
              <span>Karnataka State Board Recognized • English Medium</span>
            </div>

            {/* School Main Title */}
            <div>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#777777] block mb-1">
                Welcome to Official School Website
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222222] font-serif leading-tight">
                Augustine English Medium <br />
                <span className="text-gray-700">HPS & HS, Hallikhed (B)</span>
              </h1>
            </div>

            {/* Welcome & Subtitle */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl font-light">
              Empowering young learners in Humanabad Taluk with comprehensive academic excellence, disciplined values, and holistic character from <strong className="text-[#222222] font-medium">Nursery to 10th Standard (SSLC)</strong>.
            </p>

            {/* Key Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white border border-[#E5E7EB] p-2.5 rounded-md shadow-subtle">
                <CheckCircle2 className="w-4 h-4 text-[#333333] flex-shrink-0" />
                <span className="text-xs font-medium text-[#444444]">State Curriculum</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-[#E5E7EB] p-2.5 rounded-md shadow-subtle">
                <CheckCircle2 className="w-4 h-4 text-[#333333] flex-shrink-0" />
                <span className="text-xs font-medium text-[#444444]">Nursery to 10th Std</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-[#E5E7EB] p-2.5 rounded-md shadow-subtle col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#333333] flex-shrink-0" />
                <span className="text-xs font-medium text-[#444444]">Dedicated Faculty</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-semibold rounded-md text-white bg-[#333333] hover:bg-[#111111] shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Admission Enquiry</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-[#D1D5DB] text-sm font-semibold rounded-md text-[#333333] bg-white hover:bg-[#F3F4F6] transition-all duration-200"
              >
                <span>Explore About Us</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative borders */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl transform rotate-1 opacity-70"></div>
              
              <div className="relative bg-white rounded-xl shadow-card border border-[#E5E7EB] overflow-hidden">
                {/* School Hero Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80"
                    alt="Augustine English Medium HPS & HS School Campus"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">
                      Campus Life
                    </span>
                    <p className="text-sm font-semibold mt-1">
                      Inspiring Environment for Quality Learning
                    </p>
                  </div>
                </div>

                {/* Info Card Sub-block */}
                <div className="p-5 bg-white space-y-3">
                  <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                    <div>
                      <p className="text-xs text-[#777777]">Institution Type</p>
                      <p className="text-sm font-bold text-[#333333]">Co-Educational English Medium</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[#777777]">Syllabus</p>
                      <p className="text-sm font-bold text-[#333333]">Karnataka State Board</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#555555] pt-1">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-gray-700" />
                      Higher Primary & High School
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-gray-700" />
                      Hallikhed (B), Bidar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
