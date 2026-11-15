import React, { useState } from 'react';
import {
  FileText,
  CheckCircle,
  HelpCircle,
  AlertCircle,
  Clock,
  Phone,
  Mail,
  Send,
  Sparkles,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import { useSchool } from '../context/SchoolContext';

const AVAILABLE_CLASSES = [
  "Nursery",
  "LKG",
  "UKG",
  "1st Standard",
  "2nd Standard",
  "3rd Standard",
  "4th Standard",
  "5th Standard",
  "6th Standard",
  "7th Standard",
  "8th Standard",
  "9th Standard",
  "10th Standard (SSLC)"
];

export default function Admissions() {
  const { settings } = useSchool();

  // Form state
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    applyingClass: '',
    parentPhone: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [serverMessage, setServerMessage] = useState('');

  const validate = () => {
    const errors = {};
    if (!formData.parentName.trim()) {
      errors.parentName = 'Parent or Guardian Name is required';
    }
    if (!formData.studentName.trim()) {
      errors.studentName = 'Student Name is required';
    }
    if (!formData.applyingClass) {
      errors.applyingClass = 'Please select the class applying for';
    }
    if (!formData.parentPhone.trim()) {
      errors.parentPhone = 'Parent Contact Number is required';
    } else {
      const clean = formData.parentPhone.replace(/[\s-]/g, '');
      if (clean.length < 10) {
        errors.parentPhone = 'Please enter a valid 10-digit mobile number';
      }
    }
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please provide a valid email format';
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerMessage('');

    try {
      const res = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmittedSuccess(true);
        setFormData({
          parentName: '',
          studentName: '',
          applyingClass: '',
          parentPhone: '',
          email: '',
          message: ''
        });
      } else {
        setServerMessage(data.message || 'Error submitting enquiry. Please try again.');
      }
    } catch (err) {
      setServerMessage('Unable to reach server. Please try calling the school office directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Admissions & Online Enquiry"
        subtitle="Learn about our admission procedure, classes open for enrollment, necessary documents, and submit an enquiry."
        breadcrumb="Admissions"
      />

      {/* Official Guidelines Disclaimer */}
      <section className="bg-[#F3F4F6] border-b border-[#E5E7EB] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#555555]">
          <p className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-gray-700 flex-shrink-0" />
            <span>
              <strong>Official Notice:</strong> Admission eligibility, age criteria, exact fee structures, and academic calendar dates are subject to Karnataka State Board and school management notifications. Please contact the school office directly for the verified schedule.
            </span>
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 7 Columns: Guidelines, Classes, Procedures, Documents */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* 1. Classes Available */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-8 shadow-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-[#777777] bg-[#F3F4F6] px-2.5 py-1 rounded">
                  Enrollment Opportunities
                </span>
                <h3 className="text-xl font-bold font-serif text-[#222222] mt-2 mb-4">
                  Classes Available for Admission
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] mb-4 leading-relaxed">
                  Admissions are considered for students seeking enrollment across all levels, subject to vacancy and Karnataka State Board norms:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-[#333333] font-medium">
                  {AVAILABLE_CLASSES.map((cls) => (
                    <div key={cls} className="bg-[#F9FAFB] border border-[#E5E7EB] p-2.5 rounded flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />
                      <span>{cls}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Step-by-Step Procedure */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-8 shadow-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-[#777777] bg-[#F3F4F6] px-2.5 py-1 rounded">
                  Step-by-Step
                </span>
                <h3 className="text-xl font-bold font-serif text-[#222222] mt-2 mb-4">
                  Admission Procedure
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#555555]">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-[#222222]">Enquiry & Registration</h4>
                      <p className="text-xs text-[#666666] mt-0.5">
                        Submit the online enquiry form below or visit the school administrative office in Hallikhed (B) to collect the prospectus and registration form.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-[#222222]">Parent & Student Interaction</h4>
                      <p className="text-xs text-[#666666] mt-0.5">
                        An informal discussion with the school head to understand the child's academic background and ensure alignment with the Karnataka State syllabus.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-[#222222]">Document Verification</h4>
                      <p className="text-xs text-[#666666] mt-0.5">
                        Submission of previous marks card/report sheet, birth certificate, transfer certificate (TC), and Aadhaar copies at the office.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#333333] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-[#222222]">Admission Confirmation</h4>
                      <p className="text-xs text-[#666666] mt-0.5">
                        Completion of official enrollment paperwork, issuance of student admission register number, uniform guidelines, and booklist.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Required Documents */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-8 shadow-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-[#777777] bg-[#F3F4F6] px-2.5 py-1 rounded">
                  Checklist
                </span>
                <h3 className="text-xl font-bold font-serif text-[#222222] mt-2 mb-4">
                  Required Documents Checklist
                </h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#444444]">
                  <li className="flex items-start gap-2 bg-[#F9FAFB] p-3 rounded border border-[#E5E7EB]">
                    <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" />
                    <span>Original Birth Certificate (Nursery, LKG, UKG, 1st Std)</span>
                  </li>
                  <li className="flex items-start gap-2 bg-[#F9FAFB] p-3 rounded border border-[#E5E7EB]">
                    <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" />
                    <span>Original Transfer Certificate (TC) from previous school</span>
                  </li>
                  <li className="flex items-start gap-2 bg-[#F9FAFB] p-3 rounded border border-[#E5E7EB]">
                    <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" />
                    <span>Previous Academic Year Marksheet / Report Card</span>
                  </li>
                  <li className="flex items-start gap-2 bg-[#F9FAFB] p-3 rounded border border-[#E5E7EB]">
                    <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" />
                    <span>Copy of Student & Parent Aadhaar Cards</span>
                  </li>
                  <li className="flex items-start gap-2 bg-[#F9FAFB] p-3 rounded border border-[#E5E7EB]">
                    <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" />
                    <span>Recent passport-size color photographs of the student</span>
                  </li>
                  <li className="flex items-start gap-2 bg-[#F9FAFB] p-3 rounded border border-[#E5E7EB]">
                    <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" />
                    <span>Caste / Income Certificate (if applicable for state records)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right 5 Columns: Admission Enquiry Form */}
            <div className="lg:col-span-5 sticky top-24">
              <div className="bg-[#F3F4F6] rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 shadow-card">
                <span className="text-xs font-bold uppercase tracking-wider text-[#777777] block mb-1">
                  Online Registration
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#222222]">
                  Admission Enquiry Form
                </h3>
                <p className="text-xs text-[#666666] mt-1 mb-6">
                  Please provide accurate details. Our office will review and get in touch with you.
                </p>

                {submittedSuccess ? (
                  <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] text-center space-y-4 animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-[#222222]">
                      Enquiry Submitted Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      Thank you for your interest in Augustine English Medium HPS & HS, Hallikhed (B). The school office has recorded your enquiry and will contact you via your provided mobile number.
                    </p>
                    <button
                      onClick={() => setSubmittedSuccess(false)}
                      className="mt-2 inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded text-white bg-[#333333] hover:bg-black"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {serverMessage && (
                      <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded">
                        {serverMessage}
                      </div>
                    )}

                    {/* Parent/Guardian Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                        Parent / Guardian Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Patil"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333] transition-colors ${
                          formErrors.parentName ? 'border-red-400' : 'border-[#D1D5DB]'
                        }`}
                      />
                      {formErrors.parentName && (
                        <p className="text-[11px] text-red-500 mt-1">{formErrors.parentName}</p>
                      )}
                    </div>

                    {/* Student Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                        Student Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Patil"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333] transition-colors ${
                          formErrors.studentName ? 'border-red-400' : 'border-[#D1D5DB]'
                        }`}
                      />
                      {formErrors.studentName && (
                        <p className="text-[11px] text-red-500 mt-1">{formErrors.studentName}</p>
                      )}
                    </div>

                    {/* Applying Class */}
                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                        Applying Class <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="applyingClass"
                        value={formData.applyingClass}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333] transition-colors ${
                          formErrors.applyingClass ? 'border-red-400' : 'border-[#D1D5DB]'
                        }`}
                      >
                        <option value="">-- Select Class --</option>
                        {AVAILABLE_CLASSES.map((cls) => (
                          <option key={cls} value={cls}>
                            {cls}
                          </option>
                        ))}
                      </select>
                      {formErrors.applyingClass && (
                        <p className="text-[11px] text-red-500 mt-1">{formErrors.applyingClass}</p>
                      )}
                    </div>

                    {/* Parent Contact Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                        Parent Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleChange}
                        placeholder="e.g. 9845012345"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333] transition-colors ${
                          formErrors.parentPhone ? 'border-red-400' : 'border-[#D1D5DB]'
                        }`}
                      />
                      {formErrors.parentPhone && (
                        <p className="text-[11px] text-red-500 mt-1">{formErrors.parentPhone}</p>
                      )}
                    </div>

                    {/* Email Address (optional) */}
                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                        Email Address <span className="text-[#888888] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. parent@example.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333] transition-colors ${
                          formErrors.email ? 'border-red-400' : 'border-[#D1D5DB]'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-red-500 mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                        Any Specific Question or Message
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mention any queries regarding previous schooling, medium of instruction, or fee schedule..."
                        className="w-full px-3.5 py-2 text-sm bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333] transition-colors"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-sm font-semibold rounded-md text-white bg-[#333333] hover:bg-black transition-all duration-150 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          <span>Submit Admission Enquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
