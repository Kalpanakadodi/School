import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Send,
  CheckCircle2,
  AlertCircle,
  Building
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import { useSchool } from '../context/SchoolContext';

export default function Contact() {
  const { settings } = useSchool();

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg(true);
        setContactForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setErrorMsg(data.message || 'Error sending message. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Server unavailable. Please call the school office directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Contact Augustine English Medium HPS & HS"
        subtitle="We welcome parent inquiries, campus visits, and academic consultations in Hallikhed (B), Humanabad Taluk, Bidar."
        breadcrumb="Contact Us"
      />

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Official School Contact Info & Directions */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Institution Identity Card */}
              <div className="bg-[#F3F4F6] rounded-xl border border-[#E5E7EB] p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#777777] block">
                    Official School Secretariat
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#222222] mt-1">
                    {settings.schoolName || "Augustine English Medium HPS & HS"}
                  </h3>
                  <p className="text-xs text-[#666666] mt-0.5">
                    Hallikhed (B), Humanabad Taluk, Bidar District, Karnataka
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#444444]">
                  {/* Full Address */}
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-[#E5E7EB]">
                    <MapPin className="w-5 h-5 text-[#333333] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#222222] font-semibold">Campus Address:</strong>
                      <span>Hallikhed (B), Humanabad Taluk, Bidar District, Karnataka, India - 585414</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-[#E5E7EB]">
                    <Phone className="w-5 h-5 text-[#333333] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#222222] font-semibold">School Office Contact Number:</strong>
                      <span>{settings.phone || "+91 98XXX XXXXX [Editable Placeholder - Update in Admin]"}</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-[#E5E7EB]">
                    <Mail className="w-5 h-5 text-[#333333] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#222222] font-semibold">Email Address:</strong>
                      <span className="break-all">{settings.email || "contact@augustineschool.edu.in [Editable Placeholder - Update in Admin]"}</span>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-[#E5E7EB]">
                    <Clock className="w-5 h-5 text-[#333333] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#222222] font-semibold">Office Working Hours:</strong>
                      <span>{settings.officeHours || "Monday to Saturday: 8:45 AM – 4:30 PM (Sunday Closed)"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions Section */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-8 shadow-subtle space-y-4">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#333333]" />
                  <h4 className="text-base font-bold text-[#222222] font-serif">
                    Directions & Travel Accessibility
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Hallikhed (B) is a prominent town in Humanabad Taluk, Bidar District, Karnataka.
                </p>

                <ul className="space-y-2.5 text-xs text-[#555555]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#333333] mt-1.5 flex-shrink-0"></span>
                    <span><strong>From Humanabad (Taluk HQ):</strong> Located approximately 25-30 km away with frequent KSRTC and local bus connectivity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#333333] mt-1.5 flex-shrink-0"></span>
                    <span><strong>From Bidar District Center:</strong> Convenient state highway route via Humanabad / Hallikhed road.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#333333] mt-1.5 flex-shrink-0"></span>
                    <span><strong>Local Landmark:</strong> Situated in Hallikhed (B) with direct road approach and accessible auto-rickshaws.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Contact Message Form */}
            <div className="lg:col-span-6 space-y-8">
              <div className="bg-[#F3F4F6] rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 shadow-card">
                <span className="text-xs font-bold uppercase tracking-wider text-[#777777] block mb-1">
                  Send a Message
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#222222]">
                  Contact Enquiry Form
                </h3>
                <p className="text-xs text-[#666666] mt-1 mb-6">
                  Have questions about transfer certificates, timings, or general administration? Submit your message below.
                </p>

                {successMsg ? (
                  <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] text-center space-y-4 animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-[#222222]">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      Thank you for contacting Augustine English Medium HPS & HS. Our office administration has received your message and will respond shortly.
                    </p>
                    <button
                      onClick={() => setSuccessMsg(false)}
                      className="mt-2 inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded text-white bg-[#333333] hover:bg-black"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded">
                        {errorMsg}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Kulkarni"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleChange}
                          placeholder="e.g. anand@example.com"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={contactForm.phone}
                          onChange={handleChange}
                          placeholder="e.g. 9845000000"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                        Subject / Query Purpose
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleChange}
                        placeholder="e.g. School Timings or Document Verification"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        value={contactForm.message}
                        onChange={handleChange}
                        placeholder="Write your detailed inquiry here..."
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333]"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-sm font-semibold rounded-md text-white bg-[#333333] hover:bg-black transition-all duration-150 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Embed */}
          <div className="mt-14 bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-card">
            <div className="p-4 bg-[#F3F4F6] border-b border-[#E5E7EB] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#333333]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                  Google Maps Location: Hallikhed (B), Humanabad Taluk, Bidar District
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Hallikhed+B+Humanabad+Bidar+Karnataka"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#333333] hover:underline"
              >
                Open in Full Google Maps &rarr;
              </a>
            </div>

            <div className="w-full h-80 bg-gray-200">
              <iframe
                title="Augustine English Medium HPS & HS Location Map"
                src="https://maps.google.com/maps?q=Hallikhed+(B),+Humanabad,+Bidar,+Karnataka&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
