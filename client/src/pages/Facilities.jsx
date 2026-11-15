import React from 'react';
import {
  Building,
  BookOpen,
  FlaskConical,
  Monitor,
  Trophy,
  Droplets,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';

export default function Facilities() {
  const facilityList = [
    {
      id: 'classrooms',
      name: 'Classrooms',
      subtitle: 'Spacious, Ventilated & Natural Light',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
      description: 'The school features spacious, airy, and well-lit classrooms designed to maintain an optimal student-to-teacher ratio. Each room is equipped with ergonomic student desks and benches, quality writing boards, bulletin boards for student artwork, and adequate natural ventilation.',
      features: [
        'Optimal natural light and cross ventilation',
        'Age-appropriate wooden desks and benches',
        'Large blackboards & display pin-up boards',
        'Orderly and disciplined seating arrangement'
      ]
    },
    {
      id: 'library',
      name: 'School Library & Reading Room',
      subtitle: 'Resource Center for Curious Minds',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
      description: 'A dedicated library room that houses an expanding collection of prescribed academic textbooks, reference materials, children’s storybooks, dictionaries, maps, and moral literature in English, Kannada, and Hindi to cultivate regular reading habits.',
      features: [
        'Curriculum reference guides and textbooks',
        'Children’s illustrated storybooks & encyclopedias',
        'Quiet study desks for independent reading',
        'Weekly dedicated library periods for all classes'
      ]
    },
    {
      id: 'science-lab',
      name: 'Science Laboratory',
      subtitle: 'Hands-on Experimental Demonstration',
      icon: FlaskConical,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
      description: 'The science laboratory provides practical apparatus, scientific charts, biological specimens, microscopes, and chemical reagents conforming to Karnataka State Board primary and high school curricula, allowing students to observe scientific concepts firsthand.',
      features: [
        'Demonstration apparatus for Physics & Mechanics',
        'Chemical glassware and basic laboratory safety kit',
        'Biological models (human anatomy, botany specimens)',
        'Faculty-supervised experimental sessions'
      ]
    },
    {
      id: 'computer-lab',
      name: 'Computer Education',
      subtitle: 'Foundational Digital Literacy',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
      description: 'Understanding the importance of technological familiarity, the computer education facility introduces students to computer fundamentals, operating systems, word processing, basic presentation skills, and keyboard proficiency.',
      features: [
        'Desktop computer terminals for practical sessions',
        'Fundamental IT & keyboard skills curriculum',
        'Basic office software and painting tools',
        'Structured computer education classes for students'
      ]
    },
    {
      id: 'sports',
      name: 'Sports and Playground',
      subtitle: 'Active Physical Fitness & Team Spirit',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
      description: 'The school campus provides an open playground utilized for daily morning prayers and mass drills, physical education classes, athletic sprints, cricket, volleyball, and traditional regional outdoor games like kho-kho and kabaddi.',
      features: [
        'Open ground for athletics and field games',
        'Courts for volleyball, badminton and regional sports',
        'Daily morning assembly & physical drill',
        'Annual sports day athletic competitions'
      ]
    },
    {
      id: 'drinking-water',
      name: 'Clean Drinking Water',
      subtitle: 'Safe, Filtered & Purified Water Supply',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
      description: 'Student health is a primary priority. The school maintains a dedicated, protected Reverse Osmosis (RO) drinking water filtration system providing continuous access to potable and safe drinking water for all students, teachers, and campus staff.',
      features: [
        'Dedicated RO filtration drinking water unit',
        'Multiple accessible hygienic taps for students',
        'Regular maintenance and quality inspection',
        'Convenient placement near classroom corridors'
      ]
    },
    {
      id: 'sanitation',
      name: 'Sanitation & Hygiene Facilities',
      subtitle: 'Clean, Separate & Well-Maintained Washrooms',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1584697964190-7bb9b3e155b9?auto=format&fit=crop&w=1000&q=80',
      description: 'The school is committed to strict sanitary standards, featuring completely separate, secure, and clean washroom facilities for boys, girls, and staff members, with running water, soap dispensers, and scheduled daily housekeeping.',
      features: [
        'Completely separate washroom wings for boys and girls',
        'Dedicated washrooms for faculty and administrative staff',
        'Continuous running water and handwashing stations',
        'Regular daily sanitization and cleanliness protocol'
      ]
    },
    {
      id: 'other-facilities',
      name: 'Other School Facilities',
      subtitle: 'Safety, Connectivity & Administrative Support',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
      description: 'Additional confirmed campus infrastructure supporting daily administrative operations, campus safety, visitor guidance, and school transport accessibility for parents residing in Hallikhed (B) and surrounding villages.',
      features: [
        'School Administrative Office for parent assistance',
        'Secured campus perimeter boundary and gatekeeper',
        'First-aid kit and emergency medical support',
        'Convenient approach road connectivity from Humanabad taluk'
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="School Campus Facilities"
        subtitle="Explore our verified campus amenities supporting quality education, health, safety, and physical development in Hallikhed (B)."
        breadcrumb="Facilities"
      />

      {/* Verified Notice */}
      <section className="bg-[#F3F4F6] border-b border-[#E5E7EB] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#555555] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#333333]" />
            <span>Official Policy: Only verified and confirmed facilities currently operational on campus are published.</span>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Verified Infrastructure"
            title="Comprehensive Facilities for Students"
            subtitle="Built to deliver an encouraging, safe, and academically fertile environment for every child from Nursery to 10th Standard."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {facilityList.map((facility) => {
              const Icon = facility.icon;
              return (
                <div
                  key={facility.id}
                  className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 flex flex-col group"
                >
                  {/* Photo Banner */}
                  <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded backdrop-blur-sm">
                          {facility.subtitle}
                        </span>
                        <h3 className="text-xl font-bold font-serif mt-1">
                          {facility.name}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/90 text-[#333333] flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {facility.description}
                    </p>

                    <div className="bg-[#F9FAFB] p-4 rounded-xl border border-[#E5E7EB]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#333333] mb-2.5">
                        Features & Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#555555]">
                        {facility.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#333333] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
