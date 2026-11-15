import React, { useState } from 'react';
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Bell,
  Image as ImageIcon,
  Settings,
  LogOut,
  ExternalLink,
  Menu,
  X,
  ShieldCheck
} from 'lucide-react';
import Logo from '../common/Logo';
import { useAuth } from '../../context/AuthContext';
import { useSchool } from '../../context/SchoolContext';

export default function AdminLayout() {
  const { isAuthenticated, logout, user } = useAuth();
  const { settings } = useSchool();
  const navigate = useNavigate();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-card border border-[#E5E7EB] text-center max-w-md">
          <ShieldCheck className="w-12 h-12 text-[#333333] mx-auto mb-3" />
          <h2 className="text-xl font-bold font-serif text-[#222222]">Admin Authentication Required</h2>
          <p className="text-xs text-[#666666] mt-2 mb-6">
            You must be signed in as an administrator to access the school management panel.
          </p>
          <Link
            to="/admin/login"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#333333] text-white rounded-md text-xs font-semibold hover:bg-black"
          >
            Go to Admin Login
          </Link>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard Overview', path: '/admin', icon: LayoutDashboard, end: true },
    { name: 'Admission Enquiries', path: '/admin/admissions', icon: Users },
    { name: 'Contact Messages', path: '/admin/messages', icon: MessageSquare },
    { name: 'Announcements', path: '/admin/announcements', icon: Bell },
    { name: 'Photo Gallery', path: '/admin/gallery', icon: ImageIcon },
    { name: 'School Info & Banner', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col lg:flex-row">
      {/* Mobile Top Header */}
      <div className="lg:hidden bg-[#1F2937] text-white p-4 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Logo size="sm" showText={false} />
          <div>
            <span className="text-xs font-bold block font-serif">Augustine Admin</span>
            <span className="text-[10px] text-gray-400">School Portal</span>
          </div>
        </div>
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-2 text-white hover:bg-gray-700 rounded-md"
        >
          {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`w-64 bg-[#1F2937] text-white flex-shrink-0 flex flex-col justify-between transition-all duration-200 z-40 fixed inset-y-0 left-0 lg:static ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-5">
          {/* Logo Brand Header */}
          <div className="flex items-center gap-3 pb-5 border-b border-gray-700">
            <div className="bg-white p-1.5 rounded-lg">
              <Logo size="sm" showText={false} />
            </div>
            <div>
              <h2 className="text-xs font-bold text-white font-serif leading-tight">
                Augustine School
              </h2>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                Admin Panel
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.end}
                  onClick={() => setMobileSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? 'bg-white text-[#1F2937] font-semibold'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-5 border-t border-gray-700 space-y-3">
          <Link
            to="/"
            target="_blank"
            className="flex items-center justify-between text-xs text-gray-400 hover:text-white p-2 rounded hover:bg-gray-800 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              View Public Website
            </span>
            &rarr;
          </Link>

          <div className="pt-2 border-t border-gray-800 flex items-center justify-between">
            <div className="text-left text-[11px] text-gray-400">
              <span className="block font-semibold text-white">Signed in as</span>
              <span>{user?.username || 'admin'}</span>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-800 rounded transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
