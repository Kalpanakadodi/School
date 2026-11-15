import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';

// Context Providers
import { SchoolProvider } from './context/SchoolContext';
import { AuthProvider } from './context/AuthContext';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AdminLayout from './components/layout/AdminLayout';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';

// Admin Pages
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import EnquiriesManager from './admin/EnquiriesManager';
import MessagesManager from './admin/MessagesManager';
import AnnouncementsManager from './admin/AnnouncementsManager';
import GalleryManager from './admin/GalleryManager';
import SettingsManager from './admin/SettingsManager';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Public Layout Wrapper
function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <SchoolProvider>
        <ScrollToTop />
        <Routes>
          {/* Public Routes with Navbar and Footer */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Admin Authentication */}
          <Route path="/admin/login" element={<Login />} />

          {/* Admin Protected Dashboard */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="admissions" element={<EnquiriesManager />} />
            <Route path="messages" element={<MessagesManager />} />
            <Route path="announcements" element={<AnnouncementsManager />} />
            <Route path="gallery" element={<GalleryManager />} />
            <Route path="settings" element={<SettingsManager />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </SchoolProvider>
    </AuthProvider>
  );
}
