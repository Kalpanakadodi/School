import React, { useState, useEffect } from 'react';
import { Users, Search, Trash2, CheckCircle2, Phone, Mail, Clock, Eye, X, Filter } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function EnquiriesManager() {
  const { token } = useAuth();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [actionMessage, setActionMessage] = useState('');

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admissions', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.data || []);
      }
    } catch (err) {
      console.error('Error fetching enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [token]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/admissions/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
        );
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
        }
        setActionMessage('Enquiry status updated successfully.');
        setTimeout(() => setActionMessage(''), 3000);
      }
    } catch (err) {
      alert('Failed to update status.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry record?')) return;
    try {
      const res = await fetch(`/api/admissions/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry(null);
        }
        setActionMessage('Enquiry record deleted.');
        setTimeout(() => setActionMessage(''), 3000);
      }
    } catch (err) {
      alert('Failed to delete.');
    }
  };

  const filtered = enquiries.filter((item) => {
    const matchesSearch =
      item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.parentPhone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#777777]">
            Admissions Department
          </span>
          <h1 className="text-2xl font-bold font-serif text-[#222222]">
            Online Admission Enquiries
          </h1>
          <p className="text-xs text-[#666666] mt-0.5">
            Total Enquiries: <strong>{enquiries.length}</strong>
          </p>
        </div>
      </div>

      {actionMessage && (
        <div className="p-3 text-xs bg-green-50 border border-green-200 text-green-800 rounded-md">
          {actionMessage}
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-subtle flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by student, parent or phone..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333]"
          />
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-3.5 h-3.5 text-gray-500" />
          <span className="text-xs text-[#555555]">Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-xs px-2.5 py-1.5 bg-white border border-[#D1D5DB] rounded-md focus:outline-none"
          >
            <option value="all">All Enquiries</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="admitted">Admitted</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-subtle overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-xs text-gray-500">Loading enquiries...</div>
        ) : filtered.length === 0 ? (
          <div className="p-10 text-center text-xs text-gray-500">
            No admission enquiries match the current filter.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#444444]">
              <thead className="bg-[#F9FAFB] text-[#777777] uppercase text-[10px] tracking-wider border-b border-[#E5E7EB]">
                <tr>
                  <th className="py-3 px-4">Student Name</th>
                  <th className="py-3 px-4">Class</th>
                  <th className="py-3 px-4">Parent Name</th>
                  <th className="py-3 px-4">Phone Number</th>
                  <th className="py-3 px-4">Date Submitted</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#222222]">
                      {item.studentName}
                    </td>
                    <td className="py-3 px-4 font-medium text-[#333333]">{item.applyingClass}</td>
                    <td className="py-3 px-4">{item.parentName}</td>
                    <td className="py-3 px-4 font-mono">
                      <a href={`tel:${item.parentPhone}`} className="hover:underline text-blue-600">
                        {item.parentPhone}
                      </a>
                    </td>
                    <td className="py-3 px-4 text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className={`text-[11px] font-bold uppercase rounded px-2 py-0.5 border focus:outline-none cursor-pointer ${
                          item.status === 'new'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : item.status === 'contacted'
                            ? 'bg-blue-50 text-blue-800 border-blue-200'
                            : item.status === 'admitted'
                            ? 'bg-green-50 text-green-800 border-green-200'
                            : 'bg-gray-50 text-gray-700 border-gray-200'
                        }`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="admitted">Admitted</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedEnquiry(item)}
                        className="p-1 text-gray-600 hover:text-[#222222]"
                        title="View Full Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1 text-gray-400 hover:text-red-600"
                        title="Delete Enquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal for viewing single enquiry */}
      {selectedEnquiry && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedEnquiry(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 border border-[#E5E7EB] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <span className="text-xs font-bold uppercase text-[#777777]">
                  Enquiry Details
                </span>
                <h3 className="text-lg font-bold font-serif text-[#222222]">
                  {selectedEnquiry.studentName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="p-1 text-gray-400 hover:text-gray-700 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#444444]">
              <div className="grid grid-cols-2 gap-3 bg-[#F9FAFB] p-3 rounded-lg border border-[#E5E7EB]">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#888888] block">Class Applying For</span>
                  <span className="font-semibold text-sm text-[#222222]">{selectedEnquiry.applyingClass}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#888888] block">Submission Date</span>
                  <span className="text-gray-700">{new Date(selectedEnquiry.createdAt).toLocaleString()}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-[#888888] block">Parent / Guardian Name</span>
                <span className="font-semibold text-sm text-[#222222]">{selectedEnquiry.parentName}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-[#888888] block">Contact Number</span>
                <a href={`tel:${selectedEnquiry.parentPhone}`} className="font-mono text-blue-600 hover:underline">
                  {selectedEnquiry.parentPhone}
                </a>
              </div>

              {selectedEnquiry.email && (
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#888888] block">Email Address</span>
                  <a href={`mailto:${selectedEnquiry.email}`} className="text-blue-600 hover:underline">
                    {selectedEnquiry.email}
                  </a>
                </div>
              )}

              <div>
                <span className="text-[10px] uppercase font-bold text-[#888888] block">Parent's Message / Notes</span>
                <p className="bg-gray-50 p-3 rounded border border-gray-200 text-[#333333] leading-relaxed mt-1">
                  {selectedEnquiry.message || 'No additional note provided.'}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                <span className="text-xs font-semibold text-[#555555]">Update Status:</span>
                <select
                  value={selectedEnquiry.status}
                  onChange={(e) => handleStatusChange(selectedEnquiry.id, e.target.value)}
                  className="text-xs px-3 py-1.5 bg-white border border-[#D1D5DB] rounded font-semibold"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="admitted">Admitted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
