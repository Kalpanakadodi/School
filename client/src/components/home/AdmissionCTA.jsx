import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Phone, MapPin, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

export default function AdmissionCTA() {
  const { settings } = useSchool();

  return (
    <section className="py-16 bg-[#F3F4F6] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1F2937] text-white rounded-2xl shadow-xl overflow-hidden border border-gray-700">
          <div className="p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col */}
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                Admissions Open • Nursery to 10th Standard
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif leading-tight">
                Begin Your Child's Journey of Excellence at Augustine School
              </h2>

              <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
                We invite parents in Hallikhed (B) and surrounding villages of Humanabad Taluk to enroll their children for quality English medium schooling under the Karnataka State Board.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-gray-300">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-gray-200" />
                  Simple Admission Procedure
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-gray-200" />
                  Individual Student Attention
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-gray-200" />
                  Disciplined & Safe Campus
                </span>
              </div>
            </div>

            {/* Right Col: Actions */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <Link
                to="/admissions"
                className="w-full inline-flex items-center justify-center px-6 py-4 text-sm font-bold rounded-lg text-[#1F2937] bg-white hover:bg-gray-100 shadow-md transition-all duration-150 transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 mr-2 text-[#1F2937]" />
                <span>Fill Admission Enquiry Form</span>
              </Link>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold rounded-lg text-white border border-gray-600 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-2" />
                <span>Contact School Office</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
