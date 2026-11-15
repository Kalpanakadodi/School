import React, { useState, useEffect } from 'react';
import { MessageSquare, Mail, Phone, Trash2, CheckCircle2, Clock, Eye, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function MessagesManager() {
  const { token } = useAuth();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMsg, setSelectedMsg] = useState(null);
  const [statusMsg, setStatusMsg] = useState('');

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setMessages(data.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [token]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/contact/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setMessages((prev) =>
          prev.map((m) => (m.id === id ? { ...m, status: newStatus } : m))
        );
        if (selectedMsg && selectedMsg.id === id) {
          setSelectedMsg({ ...selectedMsg, status: newStatus });
        }
        setStatusMsg('Status updated.');
        setTimeout(() => setStatusMsg(''), 3000);
      }
    } catch (err) {
      alert('Error updating status');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this message permanently?')) return;
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setMessages((prev) => prev.filter((m) => m.id !== id));
        if (selectedMsg && selectedMsg.id === id) {
          setSelectedMsg(null);
        }
        setStatusMsg('Message deleted.');
        setTimeout(() => setStatusMsg(''), 3000);
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
            Secretariat Mailbox
          </span>
          <h1 className="text-2xl font-bold font-serif text-[#222222]">
            Contact Enquiries & Messages
          </h1>
          <p className="text-xs text-[#666666] mt-0.5">
            Messages received via public website contact form
          </p>
        </div>
      </div>

      {statusMsg && (
        <div className="p-3 text-xs bg-green-50 border border-green-200 text-green-800 rounded-md">
          {statusMsg}
        </div>
      )}

      {/* Messages List */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-subtle overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-xs text-gray-500">Loading messages...</div>
        ) : messages.length === 0 ? (
          <div className="p-10 text-center text-xs text-gray-500">
            No contact queries received yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#444444]">
              <thead className="bg-[#F9FAFB] text-[#777777] uppercase text-[10px] tracking-wider border-b border-[#E5E7EB]">
                <tr>
                  <th className="py-3 px-4">Sender Name</th>
                  <th className="py-3 px-4">Subject</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Phone</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {messages.map((msg) => (
                  <tr key={msg.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-[#222222]">{msg.name}</td>
                    <td className="py-3 px-4 font-medium text-[#333333] max-w-xs truncate">
                      {msg.subject || 'General'}
                    </td>
                    <td className="py-3 px-4">
                      <a href={`mailto:${msg.email}`} className="text-blue-600 hover:underline">
                        {msg.email}
                      </a>
                    </td>
                    <td className="py-3 px-4 font-mono">{msg.phone || '—'}</td>
                    <td className="py-3 px-4 text-gray-500">
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <select
                        value={msg.status}
                        onChange={(e) => handleStatusChange(msg.id, e.target.value)}
                        className={`text-[10px] font-bold uppercase rounded px-2 py-0.5 border ${
                          msg.status === 'unread'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : msg.status === 'read'
                            ? 'bg-blue-50 text-blue-800 border-blue-200'
                            : 'bg-green-50 text-green-800 border-green-200'
                        }`}
                      >
                        <option value="unread">Unread</option>
                        <option value="read">Read</option>
                        <option value="replied">Replied</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedMsg(msg)}
                        className="p-1 text-gray-600 hover:text-black"
                        title="Read Message"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="p-1 text-gray-400 hover:text-red-600"
                        title="Delete Message"
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

      {/* Message Modal */}
      {selectedMsg && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedMsg(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 border border-[#E5E7EB] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#777777]">
                  Message From
                </span>
                <h3 className="text-base font-bold font-serif text-[#222222]">
                  {selectedMsg.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedMsg(null)}
                className="p-1 text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#555555]">
              <div className="bg-gray-50 p-3 rounded border text-xs space-y-1">
                <p><strong>Subject:</strong> {selectedMsg.subject || 'General Enquiry'}</p>
                <p><strong>Email:</strong> <a href={`mailto:${selectedMsg.email}`} className="text-blue-600 underline">{selectedMsg.email}</a></p>
                <p><strong>Phone:</strong> {selectedMsg.phone || 'Not provided'}</p>
                <p><strong>Received:</strong> {new Date(selectedMsg.createdAt).toLocaleString()}</p>
              </div>

              <div>
                <strong className="block text-[#222222] mb-1">Message Content:</strong>
                <p className="bg-white p-3 rounded border border-gray-200 text-[#333333] leading-relaxed whitespace-pre-wrap">
                  {selectedMsg.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
