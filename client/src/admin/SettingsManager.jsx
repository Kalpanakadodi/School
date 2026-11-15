import React, { useState } from 'react';
import { Settings, Save, AlertCircle, Building, Phone, Mail, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useSchool } from '../context/SchoolContext';

export default function SettingsManager() {
  const { token } = useAuth();
  const { settings, setSettings, fetchSettings } = useSchool();

  const [formData, setFormData] = useState({ ...settings });
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setStatusMessage('');

    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        setSettings(data.data);
        setStatusMessage('School information and settings saved successfully!');
        setTimeout(() => setStatusMessage(''), 4000);
      } else {
        alert(data.message || 'Error saving settings');
      }
    } catch (err) {
      alert('Network or server error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#777777]">
            Institution Configuration
          </span>
          <h1 className="text-2xl font-bold font-serif text-[#222222]">
            School Information & Banner Settings
          </h1>
          <p className="text-xs text-[#666666] mt-0.5">
            Update contact details, official address, leadership messages, and website banners
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#333333] hover:bg-black rounded-md shadow-sm disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? 'Saving...' : 'Save All Changes'}</span>
        </button>
      </div>

      {statusMessage && (
        <div className="p-3 text-xs bg-green-50 border border-green-200 text-green-800 rounded-md flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-green-700" />
          <span>{statusMessage}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Section 1: Homepage Top Banner */}
        <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-subtle space-y-4">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <AlertCircle className="w-4 h-4 text-[#333333]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#222222]">
              Homepage Announcement Banner (Top Ticker)
            </h3>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                Banner Notice Text
              </label>
              <input
                type="text"
                name="bannerNotice"
                value={formData.bannerNotice || ''}
                onChange={handleChange}
                placeholder="e.g. Admissions Open for Academic Year from Nursery to 10th Standard."
                className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333]"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isBannerActive"
                name="isBannerActive"
                checked={Boolean(formData.isBannerActive)}
                onChange={handleChange}
                className="rounded border-gray-300 text-[#333333] focus:ring-gray-400"
              />
              <label htmlFor="isBannerActive" className="text-xs font-medium text-[#444444]">
                Enable announcement ticker on public website
              </label>
            </div>
          </div>
        </div>

        {/* Section 2: Contact Details */}
        <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-subtle space-y-4">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <Phone className="w-4 h-4 text-[#333333]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#222222]">
              Contact & Location Placeholders
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                Primary Contact Number (Phone)
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone || ''}
                onChange={handleChange}
                placeholder="+91 98XXX XXXXX"
                className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                Alternate / Office Phone
              </label>
              <input
                type="text"
                name="alternatePhone"
                value={formData.alternatePhone || ''}
                onChange={handleChange}
                placeholder="+91 94XXX XXXXX"
                className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                Official Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                placeholder="contact@augustineschool.edu.in"
                className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                School Office Working Hours
              </label>
              <input
                type="text"
                name="officeHours"
                value={formData.officeHours || ''}
                onChange={handleChange}
                placeholder="Mon to Sat: 8:45 AM - 4:30 PM"
                className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                Official Campus Full Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address || ''}
                onChange={handleChange}
                placeholder="Hallikhed (B), Humanabad Taluk, Bidar District, Karnataka"
                className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Leadership & Messages */}
        <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-subtle space-y-4">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <MessageSquare className="w-4 h-4 text-[#333333]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#222222]">
              Principal & Academic Leadership
            </h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                Principal Name
              </label>
              <input
                type="text"
                name="principalName"
                value={formData.principalName || ''}
                onChange={handleChange}
                placeholder="Principal [Name Placeholder]"
                className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                Principal's Message Content
              </label>
              <textarea
                name="principalMessage"
                rows="4"
                value={formData.principalMessage || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none leading-relaxed"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2.5 text-xs font-semibold text-white bg-[#333333] hover:bg-black rounded-md shadow-sm disabled:opacity-50"
          >
            {saving ? 'Saving Settings...' : 'Save All Settings'}
          </button>
        </div>
      </form>
    </div>
  );
}
