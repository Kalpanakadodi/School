import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <section className="bg-[#F3F4F6] border-b border-[#E5E7EB] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs text-[#777777]">
            <Link to="/" className="hover:text-[#333333] flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="font-semibold text-[#333333]">{breadcrumb || title}</span>
          </nav>

          {/* Heading */}
          <div className="mt-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#222222] font-serif">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-sm md:text-base text-[#666666] max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
