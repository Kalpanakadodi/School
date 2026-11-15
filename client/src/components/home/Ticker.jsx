import React from 'react';
import { Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSchool } from '../../context/SchoolContext';

export default function Ticker() {
  const { announcements, settings } = useSchool();
  const pinnedOrLatest = announcements.length > 0 ? announcements[0] : null;

  if (!pinnedOrLatest && !settings.bannerNotice) return null;

  return (
    <div className="bg-[#1F2937] text-white border-b border-gray-700 py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 w-full sm:w-auto overflow-hidden">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-gray-100 text-[#1F2937] font-bold uppercase tracking-wider text-[10px] flex-shrink-0 animate-pulse">
            <Bell className="w-3 h-3" />
            Announcement
          </span>
          <p className="truncate text-gray-200">
            {pinnedOrLatest ? (
              <span>
                <strong className="text-white font-medium">{pinnedOrLatest.title}:</strong>{' '}
                {pinnedOrLatest.content}
              </span>
            ) : (
              settings.bannerNotice
            )}
          </p>
        </div>

        <Link
          to="/admissions"
          className="flex-shrink-0 inline-flex items-center gap-1 text-gray-300 hover:text-white font-medium underline underline-offset-2 transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
