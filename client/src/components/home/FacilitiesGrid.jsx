import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Monitor, FlaskConical, Trophy, Droplets, Sparkles, Building, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export const confirmedFacilities = [
  {
    id: 'classrooms',
    title: 'Well-Ventilated Classrooms',
    category: 'Academic Spaces',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    description: 'Spacious, illuminated, and airy classrooms equipped with age-appropriate seating, writing boards, and educational wall charts.'
  },
  {
    id: 'library',
    title: 'School Library & Reading Corner',
    category: 'Learning Resources',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    description: 'Curated collection of academic textbooks, reference encyclopedias, Kannada and English literature, periodicals, and quiet reading desks.'
  },
  {
    id: 'science-lab',
    title: 'Science Laboratory',
    category: 'Practical Learning',
    icon: FlaskConical,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    description: 'Basic laboratory equipment and models for practical experiments in Physics, Chemistry, and Biology under faculty supervision.'
  },
  {
    id: 'computer-lab',
    title: 'Computer Education Lab',
    category: 'Digital Literacy',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    description: 'Computer systems providing students from middle to high school with fundamental computer literacy, keyboarding, and digital skills.'
  },
  {
    id: 'sports',
    title: 'Sports & Open Playground',
    category: 'Physical Education',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    description: 'Open ground for athletics, team sports (cricket, volleyball, kho-kho), morning assembly, and structured physical training sessions.'
  },
  {
    id: 'water-sanitation',
    title: 'Clean Drinking Water & Sanitation',
    category: 'Health & Hygiene',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    description: 'Purified RO drinking water points across campus and separate, well-maintained, hygienic washrooms for boys, girls, and staff members.'
  }
];

export default function FacilitiesGrid({ preview = true }) {
  const displayItems = preview ? confirmedFacilities.slice(0, 6) : confirmedFacilities;

  return (
    <section className="py-16 md:py-24 bg-[#F3F4F6] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Campus Facilities"
          title="Designed for Safe, Wholesome & Engaging Learning"
          subtitle="Our campus provides standard, verified educational infrastructure supporting both intellectual growth and physical well-being."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayItems.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.id}
                className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-subtle hover:shadow-hover transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold text-[#333333] shadow-sm flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-gray-700" />
                    <span>{facility.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#222222] font-serif group-hover:text-black transition-colors">
                      {facility.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {preview && (
          <div className="mt-12 text-center">
            <Link
              to="/facilities"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#333333] text-sm font-semibold rounded-md text-[#333333] bg-white hover:bg-[#333333] hover:text-white transition-all duration-200"
            >
              <span>Explore All Verified Facilities</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
