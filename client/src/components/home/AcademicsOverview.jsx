import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, CheckCircle, ArrowRight, Layers } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export const academicStages = [
  {
    grade: "Nursery, LKG & UKG",
    level: "Pre-Primary Wing",
    age: "Ages 3 - 5 Years",
    summary: "Activity-based, playway learning encouraging early language, number curiosity, social manners, and motor skill development in a warm environment.",
    features: ["Rhymes & Storytelling", "Phonics & Motor Skills", "Art & Play Activities"]
  },
  {
    grade: "1st to 5th Standard",
    level: "Primary School",
    age: "Ages 6 - 10 Years",
    summary: "Foundational English medium education emphasizing conceptual mathematics, environmental studies, Kannada language, and ethical values.",
    features: ["Core Subjects Mastery", "Continuous Evaluation", "Moral & Value Education"]
  },
  {
    grade: "6th to 7th Standard",
    level: "Higher Primary (HPS)",
    age: "Ages 11 - 12 Years",
    summary: "Transitional stage strengthening reasoning abilities, scientific thinking, social studies, and introductory computer science fundamentals.",
    features: ["Integrated Science & Social", "Language Proficiency", "Project & Group Work"]
  },
  {
    grade: "8th to 10th Standard",
    level: "High School (HS)",
    age: "Ages 13 - 15 Years",
    summary: "Rigorous preparation for Karnataka State Board SSLC examinations with systematic syllabus completion, regular unit tests, and remedial guidance.",
    features: ["State Board Curriculum", "Intensive SSLC Preparation", "Lab Demonstrations"]
  }
];

export default function AcademicsOverview() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Academic Framework"
          title="Structured Learning from Nursery to 10th Standard"
          subtitle="Affiliated to the Karnataka State Board, our structured curriculum builds intellectual curiosity, linguistic competence, and disciplined work habits."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicStages.map((stage, idx) => (
            <div
              key={stage.level}
              className="bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] p-6 hover:border-gray-400 hover:bg-white hover:shadow-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-200 px-2 py-0.5 rounded">
                    Step 0{idx + 1}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{stage.age}</span>
                </div>

                <h3 className="text-lg font-bold text-[#222222] font-serif">
                  {stage.level}
                </h3>
                <p className="text-xs font-semibold text-[#555555] mb-3">
                  {stage.grade}
                </p>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-4">
                  {stage.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <ul className="space-y-1.5 text-xs text-[#444444]">
                  {stage.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-gray-700 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Board Affiliation Note */}
        <div className="mt-12 bg-[#F3F4F6] rounded-xl p-6 border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Award className="w-6 h-6 text-[#333333]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#222222]">
                Karnataka State Board Syllabus
              </h4>
              <p className="text-xs text-[#666666]">
                Instruction followed strictly in accordance with Karnataka State Board guidelines for primary and secondary school education.
              </p>
            </div>
          </div>
          <Link
            to="/academics"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#333333] hover:bg-black rounded-md transition-colors"
          >
            <span>Learn About Teaching Approach</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
