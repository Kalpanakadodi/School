import React, { createContext, useContext, useState, useEffect } from 'react';

const SchoolContext = createContext();

export function SchoolProvider({ children }) {
  const [settings, setSettings] = useState({
    schoolName: "Augustine English Medium HPS & HS",
    tagline: "Nurturing Minds, Building Character, Inspiring Excellence",
    location: "Hallikhed (B), Humanabad Taluk, Bidar District, Karnataka, India",
    address: "Augustine English Medium HPS & HS, Post: Hallikhed (B), Taluk: Humanabad, District: Bidar, Karnataka - 585414",
    board: "Karnataka State Board",
    classes: "Nursery to 10th Standard",
    phone: "+91 98XXX XXXXX [Editable Placeholder - Update in Admin]",
    alternatePhone: "+91 94XXX XXXXX [Office Placeholder]",
    email: "contact@augustineschool.edu.in [Editable Placeholder]",
    officeHours: "Monday to Saturday: 8:45 AM - 4:30 PM (Sunday Closed)",
    principalName: "Principal [Name Placeholder - Update in Admin]",
    principalMessage: "Welcome to Augustine English Medium HPS & HS, Hallikhed (B). Our educational mission is founded upon instilling sound moral values, academic diligence, and holistic personality development in every student. We provide a supportive, disciplined, and culturally rooted learning environment that enables children from Nursery to 10th Standard to discover their potential and excel in life under the Karnataka State Board syllabus.",
    bannerNotice: "Admissions Open for Academic Year from Nursery to 10th Standard. Contact school office or submit an enquiry online.",
    isBannerActive: true,
    customLogoUrl: ""
  });

  const [announcements, setAnnouncements] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings');
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setSettings(json.data);
        }
      }
    } catch (err) {
      console.warn("Using offline settings fallback:", err);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const res = await fetch('/api/announcements');
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setAnnouncements(json.data);
        }
      }
    } catch (err) {
      console.warn("Announcements fetch fallback:", err);
    }
  };

  const fetchGallery = async () => {
    try {
      const res = await fetch('/api/gallery');
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setGallery(json.data);
        }
      }
    } catch (err) {
      console.warn("Gallery fetch fallback:", err);
    }
  };

  const refreshAll = async () => {
    setLoading(true);
    await Promise.all([fetchSettings(), fetchAnnouncements(), fetchGallery()]);
    setLoading(false);
  };

  useEffect(() => {
    refreshAll();
  }, []);

  return (
    <SchoolContext.Provider value={{
      settings,
      setSettings,
      announcements,
      gallery,
      loading,
      refreshAll,
      fetchSettings,
      fetchAnnouncements,
      fetchGallery
    }}>
      {children}
    </SchoolContext.Provider>
  );
}

export function useSchool() {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
}
