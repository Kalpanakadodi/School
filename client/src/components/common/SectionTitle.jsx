import React from 'react';

export default function SectionTitle({ badge, title, subtitle, centered = true }) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#333333] bg-[#E5E7EB] rounded-full mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#222222] font-serif">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-[#666666] leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-1.5 ${centered ? 'justify-center' : ''}`}>
        <span className="w-12 h-1 bg-[#333333] rounded-full"></span>
        <span className="w-3 h-1 bg-[#9CA3AF] rounded-full"></span>
        <span className="w-1.5 h-1 bg-[#D1D5DB] rounded-full"></span>
      </div>
    </div>
  );
}
