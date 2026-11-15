import React from 'react';
import { BookOpen, CheckCircle2, ShieldCheck, GraduationCap, Award, Compass, FileCheck, Users } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';

export default function Academics() {
  const sections = [
    {
      title: "Pre-Primary Section (Nursery, LKG & UKG)",
      tag: "Early Years Foundation",
      description: "Our early childhood wing introduces young minds to English phonetics, numbers, shapes, drawing, and interactive play. Children learn in a caring, gentle atmosphere that makes going to school a joyful experience.",
      curriculum: [
        "English Alphabet Phonics & Vocabulary",
        "Number Concept & Counting (1 to 100)",
        "Coloring, Clay Modelling & Drawing",
        "Rhymes, Storytelling & Moral Lessons",
        "Sensory & Gross Motor Development"
      ]
    },
    {
      title: "Primary Education (1st to 5th Standard)",
      tag: "Foundational Literacy & Numeracy",
      description: "The primary education phase builds solid foundational literacy in English and Kannada, mathematical fluency, environmental consciousness, and creative self-expression under the Karnataka State curriculum.",
      curriculum: [
        "First Language: English (Reading, Writing, Grammar)",
        "Second Language: Kannada (State Board prescribed)",
        "Third Language / Foundation: Hindi",
        "Mathematics (Operations, Geometry, Fractions)",
        "Environmental Studies (EVS / General Science)",
        "Physical Training & Art Education"
      ]
    },
    {
      title: "Higher Primary School / HPS (6th to 7th Standard)",
      tag: "Conceptual Strengthening",
      description: "In the Higher Primary section, subject specialization begins. Students explore deeper scientific concepts, historical developments, regional and national geography, and advanced linguistic grammar.",
      curriculum: [
        "General Science: Physics, Chemistry & Life Sciences",
        "Social Science: History, Civics & Geography",
        "Mathematics: Pre-Algebra, Geometry & Data Handling",
        "Three-Language Formula (English, Kannada, Hindi)",
        "Introduction to Computer Education & Practical Lab",
        "Work Experience & Physical Education"
      ]
    },
    {
      title: "High School / HS (8th to 10th Standard - SSLC)",
      tag: "Karnataka State Board SSLC Preparation",
      description: "Our High School wing prepares students meticulously for the Karnataka Secondary Education Examination Board (KSEEB / KSEAB) SSLC examinations through systematic syllabus tracking, regular testing, and focused teacher mentorship.",
      curriculum: [
        "Full Karnataka State Board SSLC Syllabus Coverage",
        "Mathematics: Algebra, Theorems, Trigonometry & Mensuration",
        "Science: Physics, Chemistry & Biology with Experiments",
        "Social Science: National Movement, Economics & Governance",
        "Languages: Advanced English, Kannada & Hindi literature",
        "Weekly Preparatory Unit Tests & Model Board Exams"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Academic Curriculum & Education Wings"
        subtitle="Comprehensive educational journey from Nursery to 10th Standard under the Karnataka State Board syllabus."
        breadcrumb="Academics"
      />

      {/* Affiliation Banner */}
      <section className="bg-[#F3F4F6] border-b border-[#E5E7EB] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-subtle">
            <div className="flex items-center gap-3.5">
              <ShieldCheck className="w-8 h-8 text-[#333333] flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-[#222222]">
                  Karnataka State Board Affiliation
                </h3>
                <p className="text-xs text-[#666666]">
                  Augustine English Medium HPS & HS follows the curriculum and examination patterns prescribed by the Karnataka State Board of School Education.
                </p>
              </div>
            </div>
            <div className="text-xs text-[#555555] bg-[#F9FAFB] px-3.5 py-1.5 rounded-md border border-[#E5E7EB] flex-shrink-0">
              Medium of Instruction: <strong>English</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Class Sections */}
      <section className="py-14 md:py-20 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Classes Offered"
            title="Nursery to 10th Standard Structure"
            subtitle="Explore our age-appropriate curricula designed to foster analytical thinking, practical skills, and self-confidence."
          />

          <div className="space-y-8">
            {sections.map((section, idx) => (
              <div
                key={section.title}
                className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-8 shadow-subtle hover:shadow-card transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#777777] bg-[#F3F4F6] px-2.5 py-1 rounded">
                      {section.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#222222]">
                      {section.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5 bg-[#F9FAFB] p-5 rounded-lg border border-[#E5E7EB]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#333333] mb-3 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-gray-700" />
                      Key Curriculum Elements
                    </h4>
                    <ul className="space-y-2 text-xs text-[#444444]">
                      {section.curriculum.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#333333] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching & Learning Methodology */}
      <section className="py-14 md:py-20 bg-[#F3F4F6] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Teaching Methodology"
            title="Our Academic Approach"
            subtitle="Engaging every learner through clear instructional design, regular feedback, and supportive remediation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center text-[#333333]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#222222] font-serif">
                Conceptual Clarity
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Teachers focus on establishing core conceptual understanding before advancing to complex problems. Visual aids and real-world examples ensure lessons resonate with students.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center text-[#333333]">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#222222] font-serif">
                Continuous Evaluation
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Rather than relying solely on annual exams, we conduct regular class tests, unit tests, and notebook checks to monitor steady academic progress throughout the term.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center text-[#333333]">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#222222] font-serif">
                Student Mentorship
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Faculty members maintain close communication with students, providing additional guidance for students requiring reinforcement in Mathematics or English language mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Student Development */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Beyond Academics"
            title="Holistic Student Development"
            subtitle="Nurturing balanced individuals who are physically strong, morally resilient, and culturally appreciative."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F9FAFB] p-5 rounded-xl border border-[#E5E7EB]">
              <h4 className="text-sm font-bold text-[#222222] mb-1">
                Linguistic Competence
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed">
                Cultivating strong fluency in spoken and written English alongside respect and mastery of the state language, Kannada, and national Hindi.
              </p>
            </div>

            <div className="bg-[#F9FAFB] p-5 rounded-xl border border-[#E5E7EB]">
              <h4 className="text-sm font-bold text-[#222222] mb-1">
                Physical Fitness & Sports
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed">
                Daily physical training, yoga, outdoor sports, and athletics instill teamwork, resilience, discipline, and healthy life habits.
              </p>
            </div>

            <div className="bg-[#F9FAFB] p-5 rounded-xl border border-[#E5E7EB]">
              <h4 className="text-sm font-bold text-[#222222] mb-1">
                Moral & Ethical Values
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed">
                Morning assemblies, value education classes, and disciplined school life reinforce honesty, modesty, and community responsibility.
              </p>
            </div>

            <div className="bg-[#F9FAFB] p-5 rounded-xl border border-[#E5E7EB]">
              <h4 className="text-sm font-bold text-[#222222] mb-1">
                Cultural Heritage
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed">
                Active celebration of national festivals (Independence Day, Republic Day, Gandhi Jayanti, Kannada Rajyotsava) and school annual day events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
