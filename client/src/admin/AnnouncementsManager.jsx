import React, { useState } from 'react';
import { Bell, Plus, Trash2, Edit, Check, X, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useSchool } from '../context/SchoolContext';

export default function AnnouncementsManager() {
  const { token } = useAuth();
  const { announcements, fetchAnnouncements } = useSchool();

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'General',
    isPinned: false,
    publishDate: new Date().toISOString().split('T')[0]
  });

  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState('');

  const openNewModal = () => {
    setIsEditing(true);
    setCurrentId(null);
    setFormData({
      title: '',
      content: '',
      category: 'General',
      isPinned: false,
      publishDate: new Date().toISOString().split('T')[0]
    });
  };

  const openEditModal = (item) => {
    setIsEditing(true);
    setCurrentId(item.id);
    setFormData({
      title: item.title,
      content: item.content,
      category: item.category || 'General',
      isPinned: Boolean(item.isPinned),
      publishDate: item.publishDate || new Date().toISOString().split('T')[0]
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Title and content are required.');
      return;
    }

    setSaving(true);
    try {
      const url = currentId ? `/api/announcements/${currentId}` : '/api/announcements';
      const method = currentId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        await fetchAnnouncements();
        setIsEditing(false);
        setFeedback(currentId ? 'Announcement updated!' : 'New announcement posted!');
        setTimeout(() => setFeedback(''), 3000);
      } else {
        alert(data.message || 'Error saving announcement');
      }
    } catch (err) {
      alert('Network or server error');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this announcement?')) return;
    try {
      const res = await fetch(`/api/announcements/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        await fetchAnnouncements();
        setFeedback('Announcement deleted.');
        setTimeout(() => setFeedback(''), 3000);
      }
    } catch (err) {
      alert('Error deleting');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#777777]">
            Notices & Updates
          </span>
          <h1 className="text-2xl font-bold font-serif text-[#222222]">
            School Announcements Manager
          </h1>
          <p className="text-xs text-[#666666] mt-0.5">
            Manage circulars and news displayed on the homepage ticker
          </p>
        </div>

        <button
          onClick={openNewModal}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#333333] hover:bg-black rounded-md shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>New Announcement</span>
        </button>
      </div>

      {feedback && (
        <div className="p-3 text-xs bg-green-50 border border-green-200 text-green-800 rounded-md">
          {feedback}
        </div>
      )}

      {/* Announcements List */}
      <div className="space-y-4">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-gray-400 transition-colors"
          >
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                {item.isPinned && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 px-2 py-0.5 rounded">
                    Pinned Alert
                  </span>
                )}
                <span className="text-xs text-gray-400">{item.publishDate}</span>
              </div>
              <h3 className="text-base font-bold font-serif text-[#222222]">
                {item.title}
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                {item.content}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => openEditModal(item)}
                className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded"
                title="Edit Announcement"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"
                title="Delete Announcement"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {isEditing && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsEditing(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 border border-[#E5E7EB] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base font-bold font-serif text-[#222222]">
                {currentId ? 'Edit Announcement' : 'Post New Announcement'}
              </h3>
              <button
                onClick={() => setIsEditing(false)}
                className="p-1 text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                  Announcement Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. SSLC Exam Preparation Schedule"
                  className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none"
                  >
                    <option value="Admissions">Admissions</option>
                    <option value="Academics">Academics</option>
                    <option value="Events">Events</option>
                    <option value="Activities">Activities</option>
                    <option value="General">General</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                    Publish Date
                  </label>
                  <input
                    type="date"
                    value={formData.publishDate}
                    onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                  Full Circular / Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write full circular or details..."
                  className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333]"
                  required
                ></textarea>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isPinned"
                  checked={formData.isPinned}
                  onChange={(e) => setFormData({ ...formData, isPinned: e.target.checked })}
                  className="rounded border-gray-300 text-[#333333] focus:ring-gray-400"
                />
                <label htmlFor="isPinned" className="text-xs font-medium text-[#444444]">
                  Pin to top of homepage announcements
                </label>
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#333333] hover:bg-black rounded disabled:opacity-50"
                >
                  {saving ? 'Saving...' : 'Save Announcement'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
