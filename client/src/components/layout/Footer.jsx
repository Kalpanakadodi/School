import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import Logo from '../common/Logo';
import { useSchool } from '../../context/SchoolContext';

export default function Footer() {
  const { settings } = useSchool();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2937] text-gray-300 border-t border-gray-700">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Identity & Crest */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-lg inline-block shadow-sm">
              <Logo size="md" showText={false} />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold font-serif leading-tight">
                {settings.schoolName || "Augustine English Medium HPS & HS"}
              </h3>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                Hallikhed (B), Bidar District
              </p>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Committed to imparting quality school education from Nursery to 10th Standard under the Karnataka State Board curriculum with moral discipline, critical thinking, and character building.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-gray-300" />
              <span>Affiliated to Karnataka State Board</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home Page', path: '/' },
                { name: 'About Our School', path: '/about' },
                { name: 'Academic Curriculum', path: '/academics' },
                { name: 'Campus Facilities', path: '/facilities' },
                { name: 'Photo Gallery', path: '/gallery' },
                { name: 'Admissions & Enquiry', path: '/admissions' },
                { name: 'Contact & Location', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all text-xs text-gray-300"
                  >
                    <ArrowRight className="w-3 h-3 text-gray-500" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Sections */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4 border-b border-gray-700 pb-2">
              Education Wings
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex flex-col">
                <span className="font-semibold text-white">Pre-Primary Section</span>
                <span className="text-gray-400">Nursery, LKG & UKG</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">Primary Education</span>
                <span className="text-gray-400">Classes 1st to 5th Standard</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">Higher Primary School (HPS)</span>
                <span className="text-gray-400">Classes 6th & 7th Standard</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">High School (HS)</span>
                <span className="text-gray-400">Classes 8th to 10th (SSLC Board)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office Info */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4 border-b border-gray-700 pb-2">
              Contact School Office
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Hallikhed (B), Humanabad Taluk, Bidar District, Karnataka, India - 585414
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span>{settings.phone || '+91 98XXX XXXXX (Update in Admin)'}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="break-all">{settings.email || 'contact@augustineschool.edu.in'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>{settings.officeHours || 'Mon - Sat: 9:00 AM – 4:00 PM (Sunday Closed)'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#111827] border-t border-gray-800 py-5 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-center md:text-left">
            &copy; {currentYear} <strong className="text-gray-200">Augustine English Medium HPS & HS, Hallikhed (B)</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Official Karnataka State Board Institution</span>
            <span>•</span>
            <Link to="/admin/login" className="hover:text-white underline underline-offset-2">
              Staff Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
