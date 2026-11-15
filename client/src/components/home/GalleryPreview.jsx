import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, Image as ImageIcon } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Lightbox from '../common/Lightbox';
import { useSchool } from '../../context/SchoolContext';

export default function GalleryPreview() {
  const { gallery } = useSchool();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const previewList = gallery.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Campus Moments"
          title="Life & Activities at Augustine English Medium School"
          subtitle="Glimpses of daily morning assemblies, classroom lessons, scientific exploration, cultural celebrations, and sports meets."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewList.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-[#E5E7EB] shadow-subtle hover:shadow-hover transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-[#333333]">
                {item.category}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="text-sm font-semibold leading-tight line-clamp-1 group-hover:underline underline-offset-2">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-xs text-gray-300 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#333333] text-sm font-semibold rounded-md text-[#333333] bg-white hover:bg-[#333333] hover:text-white transition-all duration-200"
          >
            <ImageIcon className="w-4 h-4 mr-2" />
            <span>View Full Photo Gallery</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={previewList}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : previewList.length - 1))}
          onNext={() => setLightboxIndex((prev) => (prev < previewList.length - 1 ? prev + 1 : 0))}
        />
      )}
    </section>
  );
}
