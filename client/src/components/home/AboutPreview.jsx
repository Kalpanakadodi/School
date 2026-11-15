import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Target, HeartHandshake, Quote } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { useSchool } from '../../context/SchoolContext';

export default function AboutPreview() {
  const { settings } = useSchool();

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="About Our School"
          title="Fostering Academic Diligence & Sound Character"
          subtitle="Augustine English Medium HPS & HS is dedicated to providing students in Hallikhed (B) with an empowering educational foundation based on ethics, curiosity, and community service."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: School Overview */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed">
              <p>
                Established to serve the educational aspirations of families in <strong className="text-[#333333]">Hallikhed (B), Humanabad Taluk, Bidar District</strong>, <strong className="text-[#333333]">Augustine English Medium HPS & HS</strong> provides structured, English-medium education from early childhood through high school graduation.
              </p>
              <p>
                Following the prescribed curriculum of the <strong className="text-[#333333]">Karnataka State Board</strong>, the school places equal emphasis on strong foundational literacy, scientific inquiry, mathematical problem solving, moral values, and regional language competence (Kannada and English).
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#F3F4F6] p-4 rounded-lg border border-[#E5E7EB]">
                <Target className="w-6 h-6 text-[#333333] mb-2" />
                <h4 className="text-sm font-bold text-[#222222]">Our Vision</h4>
                <p className="text-xs text-[#666666] mt-1 leading-normal">
                  To nurture enlightened, disciplined, and compassionate citizens prepared for higher learning.
                </p>
              </div>

              <div className="bg-[#F3F4F6] p-4 rounded-lg border border-[#E5E7EB]">
                <Compass className="w-6 h-6 text-[#333333] mb-2" />
                <h4 className="text-sm font-bold text-[#222222]">Our Mission</h4>
                <p className="text-xs text-[#666666] mt-1 leading-normal">
                  To provide quality, affordable education with dedicated mentorship and practical life skills.
                </p>
              </div>

              <div className="bg-[#F3F4F6] p-4 rounded-lg border border-[#E5E7EB]">
                <HeartHandshake className="w-6 h-6 text-[#333333] mb-2" />
                <h4 className="text-sm font-bold text-[#222222]">Core Values</h4>
                <p className="text-xs text-[#666666] mt-1 leading-normal">
                  Integrity, mutual respect, hard work, discipline, and commitment to social responsibility.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#333333] hover:text-black group"
              >
                <span>Read Full School History & Philosophy</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Principal's Message Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full relative">
              <Quote className="w-10 h-10 text-gray-300 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#777777] block">
                  Principal's Message
                </span>
                <p className="text-sm sm:text-base text-[#444444] italic leading-relaxed">
                  "{settings.principalMessage}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-bold text-[#222222]">
                    {settings.principalName}
                  </h5>
                  <p className="text-xs text-[#777777]">
                    Principal, Augustine English Medium HPS & HS
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center font-serif text-sm font-bold text-[#333333]">
                  A
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
