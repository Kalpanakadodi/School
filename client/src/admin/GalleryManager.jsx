import React, { useState } from 'react';
import { Image as ImageIcon, Plus, Trash2, Upload, Link as LinkIcon, Check, X, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useSchool } from '../context/SchoolContext';

const CATEGORIES = [
  "Classroom activities",
  "Cultural celebrations",
  "Annual day functions",
  "Sports activities",
  "Student activities",
  "School events"
];

export default function GalleryManager() {
  const { token } = useAuth();
  const { gallery, fetchGallery } = useSchool();

  const [isAdding, setIsAdding] = useState(false);
  const [uploadMode, setUploadMode] = useState('url'); // 'url' or 'file'
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('School events');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const [uploading, setUploading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleAddPhoto = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Photo title is required');
      return;
    }

    setUploading(true);
    setFeedback('');

    try {
      if (uploadMode === 'file' && selectedFile) {
        // Multipart upload
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('title', title.trim());
        formData.append('category', category);
        formData.append('description', description.trim());

        const res = await fetch('/api/gallery', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: formData
        });

        const data = await res.json();
        if (data.success) {
          await fetchGallery();
          resetForm();
          setFeedback('Photo uploaded successfully!');
          setTimeout(() => setFeedback(''), 3000);
        } else {
          alert(data.message || 'Upload failed');
        }
      } else {
        // Direct URL
        if (!imageUrl.trim()) {
          alert('Please enter image URL');
          setUploading(false);
          return;
        }

        const res = await fetch('/api/gallery', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            title: title.trim(),
            category,
            description: description.trim(),
            imageUrl: imageUrl.trim()
          })
        });

        const data = await res.json();
        if (data.success) {
          await fetchGallery();
          resetForm();
          setFeedback('Photo added to gallery!');
          setTimeout(() => setFeedback(''), 3000);
        } else {
          alert(data.message || 'Failed to add photo');
        }
      }
    } catch (err) {
      alert('Server error while saving image');
    } finally {
      setUploading(false);
    }
  };

  const resetForm = () => {
    setIsAdding(false);
    setTitle('');
    setDescription('');
    setImageUrl('');
    setSelectedFile(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this photo from gallery?')) return;
    try {
      const res = await fetch(`/api/gallery/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        await fetchGallery();
        setFeedback('Photo deleted successfully.');
        setTimeout(() => setFeedback(''), 3000);
      }
    } catch (err) {
      alert('Failed to delete photo');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#777777]">
            Media Repository
          </span>
          <h1 className="text-2xl font-bold font-serif text-[#222222]">
            School Photo Gallery Manager
          </h1>
          <p className="text-xs text-[#666666] mt-0.5">
            Total Photos: <strong>{gallery.length}</strong>
          </p>
        </div>

        <button
          onClick={() => setIsAdding(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#333333] hover:bg-black rounded-md shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Upload / Add Photo</span>
        </button>
      </div>

      {feedback && (
        <div className="p-3 text-xs bg-green-50 border border-green-200 text-green-800 rounded-md">
          {feedback}
        </div>
      )}

      {/* Photos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {gallery.map((photo) => (
          <div
            key={photo.id}
            className="bg-white rounded-xl border border-[#E5E7EB] shadow-subtle overflow-hidden flex flex-col justify-between group hover:border-gray-400 transition-colors"
          >
            <div className="relative h-44 bg-gray-100 overflow-hidden">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white px-2 py-0.5 rounded backdrop-blur-sm">
                {photo.category}
              </span>
            </div>

            <div className="p-3.5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#222222] truncate">{photo.title}</h4>
                {photo.description && (
                  <p className="text-[11px] text-[#666666] line-clamp-2 mt-0.5">
                    {photo.description}
                  </p>
                )}
              </div>

              <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-[10px] text-gray-400">
                  {new Date(photo.createdAt).toLocaleDateString()}
                </span>
                <button
                  onClick={() => handleDelete(photo.id)}
                  className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                  title="Delete Photo"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Photo Modal */}
      {isAdding && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsAdding(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 border border-[#E5E7EB] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base font-bold font-serif text-[#222222]">
                Add Photo to Gallery
              </h3>
              <button onClick={() => setIsAdding(false)} className="p-1 text-gray-400 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Upload Method Switch */}
            <div className="flex border border-[#E5E7EB] rounded-lg p-1 bg-gray-50 text-xs">
              <button
                type="button"
                onClick={() => setUploadMode('url')}
                className={`flex-1 py-1.5 rounded font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                  uploadMode === 'url' ? 'bg-white text-[#222222] shadow-sm' : 'text-gray-600'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5" />
                <span>Image URL</span>
              </button>
              <button
                type="button"
                onClick={() => setUploadMode('file')}
                className={`flex-1 py-1.5 rounded font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                  uploadMode === 'file' ? 'bg-white text-[#222222] shadow-sm' : 'text-gray-600'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>File Upload</span>
              </button>
            </div>

            <form onSubmit={handleAddPhoto} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                  Photo Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Science Lab Experiment 9th Std"
                  className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {uploadMode === 'url' ? (
                <div>
                  <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                    Image Direct URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none"
                    required={uploadMode === 'url'}
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                    Select Image File <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                    className="w-full text-xs text-gray-500 file:mr-2 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#333333] file:text-white hover:file:bg-black"
                    required={uploadMode === 'file'}
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                  Brief Description
                </label>
                <textarea
                  rows="2"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Optional brief note about this activity..."
                  className="w-full px-3 py-2 text-xs bg-white border border-[#D1D5DB] rounded-md focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-4 py-2 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#333333] hover:bg-black rounded disabled:opacity-50"
                >
                  {uploading ? 'Uploading...' : 'Save to Gallery'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
