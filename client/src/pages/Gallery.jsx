import React, { useState, useMemo } from 'react';
import { Eye, Filter, Image as ImageIcon, Sparkles, Tag } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import Lightbox from '../components/common/Lightbox';
import { useSchool } from '../context/SchoolContext';

const CATEGORIES = [
  "All",
  "Classroom activities",
  "Cultural celebrations",
  "Annual day functions",
  "Sports activities",
  "Student activities",
  "School events"
];

export default function Gallery() {
  const { gallery, loading } = useSchool();
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "All") return gallery;
    return gallery.filter((item) => item.category === activeCategory);
  }, [gallery, activeCategory]);

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Photo Gallery & Campus Life"
        subtitle="Visual memories from classrooms, annual cultural days, national celebrations, sports meets, and student projects."
        breadcrumb="Gallery"
      />

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-[#E5E7EB]">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#333333] text-white shadow-sm'
                      : 'bg-[#F3F4F6] text-[#555555] hover:bg-[#E5E7EB] hover:text-[#222222]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Photo Count Status */}
          <div className="flex items-center justify-between text-xs text-[#777777] mb-6 px-1">
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              Showing <strong>{filteredPhotos.length}</strong> {filteredPhotos.length === 1 ? 'photo' : 'photos'} in <em>{activeCategory}</em>
            </span>
            <span className="text-gray-400">Click any image to view full screen</span>
          </div>

          {/* Photo Grid */}
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-16 bg-[#F9FAFB] rounded-xl border border-dashed border-[#D1D5DB] p-8">
              <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h4 className="text-base font-semibold text-[#333333]">No photos in this category yet</h4>
              <p className="text-xs text-[#777777] mt-1 max-w-sm mx-auto">
                Authorized staff can upload photographs for this category in the Admin Portal.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id || index}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-[#E5E7EB] shadow-subtle hover:shadow-hover transition-all duration-300 bg-gray-100 flex flex-col justify-end"
                >
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300"></div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-[#333333]">
                    {photo.category}
                  </div>

                  {/* Hover View Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Captions */}
                  <div className="relative z-10 p-4 text-white">
                    <h4 className="text-sm font-semibold leading-tight line-clamp-1 group-hover:underline underline-offset-2">
                      {photo.title}
                    </h4>
                    {photo.description && (
                      <p className="text-[11px] text-gray-300 line-clamp-2 mt-1">
                        {photo.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1))}
          onNext={() => setLightboxIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0))}
        />
      )}
    </div>
  );
}
