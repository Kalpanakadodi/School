import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  MessageSquare,
  Bell,
  Image as ImageIcon,
  ArrowRight,
  TrendingUp,
  Clock,
  Phone,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useSchool } from '../context/SchoolContext';

export default function Dashboard() {
  const { token } = useAuth();
  const { settings, announcements, gallery } = useSchool();

  const [admissions, setAdmissions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminStats = async () => {
      try {
        const [admRes, msgRes] = await Promise.all([
          fetch('/api/admissions', { headers: { Authorization: `Bearer ${token}` } }),
          fetch('/api/contact', { headers: { Authorization: `Bearer ${token}` } })
        ]);

        if (admRes.ok) {
          const admData = await admRes.json();
          if (admData.success) setAdmissions(admData.data || []);
        }

        if (msgRes.ok) {
          const msgData = await msgRes.json();
          if (msgData.success) setMessages(msgData.data || []);
        }
      } catch (err) {
        console.error('Error fetching admin dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminStats();
  }, [token]);

  const newAdmissionsCount = admissions.filter((a) => a.status === 'new').length;
  const unreadMessagesCount = messages.filter((m) => m.status === 'unread').length;

  return (
    <div className="space-y-8">
      {/* Header Bar */}
      <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#777777]">
            Administrative Control Panel
          </span>
          <h1 className="text-2xl font-bold font-serif text-[#222222]">
            School Management Overview
          </h1>
          <p className="text-xs text-[#666666] mt-0.5">
            Augustine English Medium HPS & HS • Hallikhed (B), Bidar Dist.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/admin/admissions"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#333333] hover:bg-black rounded-md"
          >
            <Users className="w-3.5 h-3.5" />
            <span>Manage Enquiries</span>
          </Link>
          <Link
            to="/admin/settings"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#333333] bg-[#F3F4F6] hover:bg-[#E5E7EB] rounded-md border border-[#E5E7EB]"
          >
            Edit School Info
          </Link>
        </div>
      </div>

      {/* 4 Primary Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Metric 1 */}
        <div className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-subtle flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#777777] uppercase tracking-wider">
              Admission Enquiries
            </p>
            <p className="text-2xl font-bold font-serif text-[#222222] mt-1">
              {admissions.length}
            </p>
            <span className="text-[11px] text-green-700 font-medium">
              {newAdmissionsCount} new / pending review
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#333333]">
            <Users className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-subtle flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#777777] uppercase tracking-wider">
              Contact Queries
            </p>
            <p className="text-2xl font-bold font-serif text-[#222222] mt-1">
              {messages.length}
            </p>
            <span className="text-[11px] text-blue-700 font-medium">
              {unreadMessagesCount} unread queries
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#333333]">
            <MessageSquare className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-subtle flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#777777] uppercase tracking-wider">
              Active Announcements
            </p>
            <p className="text-2xl font-bold font-serif text-[#222222] mt-1">
              {announcements.length}
            </p>
            <span className="text-[11px] text-gray-500 font-medium">
              Displayed on public ticker
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#333333]">
            <Bell className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-subtle flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#777777] uppercase tracking-wider">
              Gallery Photos
            </p>
            <p className="text-2xl font-bold font-serif text-[#222222] mt-1">
              {gallery.length}
            </p>
            <span className="text-[11px] text-gray-500 font-medium">
              Uploaded campus photos
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#333333]">
            <ImageIcon className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Banner Notice Alert Status */}
      <div className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#333333]">
              Current Homepage Top Announcement Banner
            </h4>
            <p className="text-xs text-[#555555] mt-0.5">
              "{settings.bannerNotice || 'No announcement banner active'}"
            </p>
          </div>
        </div>
        <Link
          to="/admin/settings"
          className="text-xs font-semibold text-[#333333] hover:underline flex-shrink-0"
        >
          Change in Settings &rarr;
        </Link>
      </div>

      {/* Recent Admission Enquiries Table */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-subtle overflow-hidden">
        <div className="p-5 border-b border-[#E5E7EB] flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold font-serif text-[#222222]">
              Recent Admission Enquiries
            </h3>
            <p className="text-xs text-[#777777] mt-0.5">
              Parents who submitted the admission enquiry form online
            </p>
          </div>
          <Link
            to="/admin/admissions"
            className="text-xs font-semibold text-[#333333] hover:underline"
          >
            View All ({admissions.length}) &rarr;
          </Link>
        </div>

        {admissions.length === 0 ? (
          <div className="p-8 text-center text-xs text-gray-500">
            No admission enquiries submitted yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#444444]">
              <thead className="bg-[#F9FAFB] text-[#777777] uppercase text-[10px] tracking-wider border-b border-[#E5E7EB]">
                <tr>
                  <th className="py-3 px-4">Student Name</th>
                  <th className="py-3 px-4">Applying Class</th>
                  <th className="py-3 px-4">Parent / Guardian</th>
                  <th className="py-3 px-4">Contact Phone</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {admissions.slice(0, 5).map((adm) => (
                  <tr key={adm.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-[#222222]">
                      {adm.studentName}
                    </td>
                    <td className="py-3 px-4">{adm.applyingClass}</td>
                    <td className="py-3 px-4">{adm.parentName}</td>
                    <td className="py-3 px-4 font-mono">{adm.parentPhone}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          adm.status === 'new'
                            ? 'bg-amber-100 text-amber-800'
                            : adm.status === 'contacted'
                            ? 'bg-blue-100 text-blue-800'
                            : adm.status === 'admitted'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {adm.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        to="/admin/admissions"
                        className="text-xs text-[#333333] font-semibold hover:underline"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
