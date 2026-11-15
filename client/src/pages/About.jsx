import React from 'react';
import { Target, Compass, BookOpen, Quote, Shield, Award, CheckCircle, Clock } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import { useSchool } from '../context/SchoolContext';

export default function About() {
  const { settings } = useSchool();

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="About Augustine English Medium HPS & HS"
        subtitle="Learn about our institution's founding ethos, educational mission, guiding leadership, and moral objectives in Hallikhed (B)."
        breadcrumb="About Us"
      />

      {/* 1. Introduction to the School */}
      <section className="py-14 md:py-20 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-[#444444] text-sm sm:text-base leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-wider text-[#777777] bg-[#F3F4F6] px-3 py-1 rounded-full border border-[#E5E7EB]">
                Institution Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#222222]">
                A Pillar of School Education in Hallikhed (B)
              </h2>
              <p>
                <strong className="text-[#222222]">Augustine English Medium Higher Primary School & High School (HPS & HS)</strong> is an esteemed co-educational institution situated in <strong className="text-[#222222]">Hallikhed (B), Humanabad Taluk, Bidar District, Karnataka</strong>.
              </p>
              <p>
                Operating in full affiliation with the <strong className="text-[#222222]">Karnataka State Board</strong>, the institution delivers structured instruction from early childhood (Nursery, LKG, UKG) through Higher Primary (1st to 7th Standards) and High School (8th to 10th Standards / SSLC).
              </p>
              <p>
                Our educational approach is designed to balance academic rigor with emotional resilience, moral integrity, physical health, and respectful social consciousness, ensuring students develop into thoughtful, productive citizens.
              </p>

              {/* Editable Information Placeholder Banner */}
              <div className="bg-[#F3F4F6] border-l-4 border-[#333333] p-4 rounded text-xs text-[#555555] space-y-1">
                <p className="font-semibold text-[#222222]">
                  Institutional Notice & Verification
                </p>
                <p>
                  Official establishment record: <span className="font-mono bg-white px-1.5 py-0.5 rounded border border-gray-300">[Established Year: {settings.establishedYear || "To be updated via Admin Panel"}]</span>.
                  Affiliation: Karnataka State Board. School details are managed directly by the authorized school administration.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-card bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
                  alt="Students at Morning Assembly - Augustine English Medium School"
                  className="w-full h-80 object-cover"
                />
                <div className="p-5 bg-white border-t border-[#E5E7EB]">
                  <h4 className="text-sm font-bold text-[#222222]">
                    Dedicated Learning Atmosphere
                  </h4>
                  <p className="text-xs text-[#666666] mt-1">
                    Hallikhed (B), Humanabad Taluk, Bidar District, Karnataka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. School History */}
      <section className="py-14 md:py-20 bg-[#F3F4F6] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Our Heritage"
            title="School History & Growth"
            subtitle="Founded to meet the need for comprehensive, values-driven English medium education in the rural and semi-urban belt of Bidar district."
          />

          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-10 shadow-subtle space-y-6 max-w-4xl mx-auto text-sm sm:text-base text-[#444444] leading-relaxed">
            <p>
              The foundation of <strong className="text-[#222222]">Augustine English Medium HPS & HS</strong> arose from a deep conviction that children in Hallikhed (B) and neighboring communities deserve access to standard English education without needing to commute far away.
            </p>
            <p>
              Beginning with foundational primary grades, the school steadily expanded its infrastructure, teaching faculty, and laboratory resources, gradually introducing Higher Primary (HPS) and High School (HS) sections to complete the full continuum from Nursery up to 10th Standard (SSLC).
            </p>

            <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-4 rounded-lg text-xs space-y-1">
              <span className="font-bold text-[#333333] uppercase tracking-wider block">
                Historical Milestone Records [Editable Placeholder]
              </span>
              <p className="text-[#666666]">
                • <strong className="text-[#333333]">Inception & Early Years:</strong> [Official founding archive details and founding committee records - Managed via Admin Portal].
              </p>
              <p className="text-[#666666]">
                • <strong className="text-[#333333]">High School Wing Addition:</strong> Extension to 10th Standard preparing students for Karnataka State SSLC board examinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision and Mission */}
      <section className="py-14 md:py-20 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center text-[#333333] mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#222222] mb-3">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                  "To be a distinguished center of foundational and secondary education where students from diverse backgrounds are nurtured into enlightened, morally upright, intellectually confident, and socially responsible citizens who excel in higher learning and contribute meaningfully to society."
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#777777]">
                <Shield className="w-4 h-4 text-gray-700" />
                <span>Excellence • Integrity • Enlightenment</span>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center text-[#333333] mb-5">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#222222] mb-3">
                  Our Mission
                </h3>
                <ul className="text-sm sm:text-base text-[#555555] space-y-3 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0 mt-1" />
                    <span>Deliver rigorous, student-centered instruction aligned with the Karnataka State Board syllabus.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0 mt-1" />
                    <span>Cultivate disciplined study habits, ethical decision making, and mutual respect among all learners.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0 mt-1" />
                    <span>Provide a secure, inclusive, and encouraging campus setting with modern learning facilities.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#777777]">
                <Award className="w-4 h-4 text-gray-700" />
                <span>Empowering Rural & Semi-Urban Youth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Educational Philosophy */}
      <section className="py-14 md:py-20 bg-[#F3F4F6] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Guiding Methodology"
            title="Our Educational Philosophy"
            subtitle="Believing that every child possesses unique talents and potentials that bloom when provided with patience, structure, and encouragement."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-subtle">
              <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center font-bold text-sm text-[#333333] mb-4">
                01
              </div>
              <h4 className="text-base font-bold text-[#222222] font-serif mb-2">
                Holistic Development
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Education is not confined to textbooks. We synthesize classroom learning with physical sports, creative arts, moral discourses, and cultural programs to nurture the complete personality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-subtle">
              <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center font-bold text-sm text-[#333333] mb-4">
                02
              </div>
              <h4 className="text-base font-bold text-[#222222] font-serif mb-2">
                Foundational Clarity
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Rote memorization is replaced with clear comprehension of core concepts in Mathematics, Science, and Languages (English, Kannada, Hindi) ensuring enduring mastery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-subtle">
              <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center font-bold text-sm text-[#333333] mb-4">
                03
              </div>
              <h4 className="text-base font-bold text-[#222222] font-serif mb-2">
                Moral & Civic Consciousness
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Students are mentored to practice honesty, empathy, respect for elders, civic cleanliness, and constitutional patriotism in daily school life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Principal's Message */}
      <section className="py-14 md:py-20 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 sm:p-12 shadow-card relative">
            <Quote className="w-12 h-12 text-gray-200 absolute top-8 right-8 pointer-events-none" />

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#777777]">
                  From the Head of Institution
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#222222] mt-1">
                  Principal's Message
                </h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#444444] leading-relaxed italic border-l-2 border-[#333333] pl-4 sm:pl-6">
                <p>
                  "{settings.principalMessage}"
                </p>
                <p>
                  "We believe that every child stepping through our school gates carries immense promise. As educators and mentors, our responsibility is to provide guidance, modern tools, and steady encouragement so that they can face tomorrow with confidence."
                </p>
              </div>

              <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-[#222222]">
                    {settings.principalName}
                  </h4>
                  <p className="text-xs text-[#777777]">
                    Principal, Augustine English Medium HPS & HS
                  </p>
                  <p className="text-[11px] text-[#999999]">
                    Hallikhed (B), Humanabad Taluk, Bidar Dist., Karnataka
                  </p>
                </div>

                <div className="text-xs text-gray-500 bg-[#F3F4F6] px-3 py-1.5 rounded border border-[#E5E7EB]">
                  Official Academic Leadership
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. School Values & Objectives */}
      <section className="py-14 md:py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Institutional Character"
            title="School Values & Objectives"
            subtitle="The fundamental standards and goals that govern our daily interactions and academic programs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-subtle">
              <h4 className="text-base font-bold text-[#222222] font-serif mb-2">
                1. Academic Rigor
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Consistent attendance, structured homework, periodic revision tests, and thorough completion of the Karnataka State Board syllabus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-subtle">
              <h4 className="text-base font-bold text-[#222222] font-serif mb-2">
                2. Integrity & Ethics
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Fostering truthfulness, fair play on the playground, academic honesty in examinations, and courteous speech.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-subtle">
              <h4 className="text-base font-bold text-[#222222] font-serif mb-2">
                3. Discipline & Punctuality
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Cultivating respect for school timings, clean uniform standards, orderly queues, and attentive listening in classrooms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-subtle">
              <h4 className="text-base font-bold text-[#222222] font-serif mb-2">
                4. Community & Inclusivity
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Treating all children equally irrespective of socioeconomic background, fostering peer empathy, and active participation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
