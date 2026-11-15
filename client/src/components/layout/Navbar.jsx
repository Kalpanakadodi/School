import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import Logo from '../common/Logo';
import { useSchool } from '../../context/SchoolContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { settings } = useSchool();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-[#F3F4F6] border-b border-[#E5E7EB] py-1.5 px-4 text-xs text-[#555555]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#333333]">
              <MapPin className="w-3.5 h-3.5 text-[#555555]" />
              Hallikhed (B), Humanabad Taluk, Bidar Dist.
            </span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gray-700" />
              Karnataka State Board (Nursery to 10th Std)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919800000000"
              className="inline-flex items-center gap-1.5 hover:text-[#333333] transition-colors"
              title="School Office Phone"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Office:</span> {settings.phone?.split(' ')[0] || '+91 98XXX XXXXX'}
            </a>
            <span className="text-gray-300">|</span>
            <Link
              to="/admin/login"
              className="hover:text-black font-medium transition-colors text-[11px] underline underline-offset-2"
            >
              Staff Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className={`transition-all duration-200 border-b border-[#E5E7EB] ${scrolled ? 'py-2.5' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="group flex items-center gap-3 focus:outline-none">
            <Logo size={scrolled ? 'sm' : 'md'} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#F3F4F6] text-[#111111] font-semibold border-b-2 border-[#333333]'
                      : 'text-[#444444] hover:text-[#111111] hover:bg-[#F9FAFB]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Prominent Admissions Button */}
            <Link
              to="/admissions"
              className="ml-3 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-[#333333] hover:bg-[#1a1a1a] shadow-sm transition-all duration-150 transform hover:-translate-y-0.5"
            >
              Apply for Admission
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded text-white bg-[#333333] hover:bg-black"
            >
              Admissions
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#333333] hover:bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E5E7EB] bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg animate-fadeIn">
          <div className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#777777]">
            Navigation Menu
          </div>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-[#F3F4F6] text-[#111111] font-semibold pl-4 border-l-4 border-[#333333]'
                    : 'text-[#444444] hover:bg-[#F9FAFB] hover:text-[#111111]'
                }`
              }
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </NavLink>
          ))}

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link
              to="/admissions"
              className="w-full text-center py-2.5 px-4 text-sm font-semibold rounded-md text-white bg-[#333333] hover:bg-black"
            >
              Admission Enquiry Form
            </Link>
            <Link
              to="/admin/login"
              className="w-full text-center py-2 px-4 text-xs font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Staff & Administrator Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
