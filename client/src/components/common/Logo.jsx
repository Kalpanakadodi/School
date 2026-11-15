import React from 'react';
import { useSchool } from '../../context/SchoolContext';

export default function Logo({ size = 'md', showText = true, lightTheme = false }) {
  const { settings } = useSchool();
  const customLogo = settings?.customLogoUrl;

  // Use the actual school logo image as default
  const logoSrc = customLogo || '/school-logo.jpg';

  const sizeClasses = {
    sm: { box: 'w-10 h-10', textTitle: 'text-sm font-bold', textSub: 'text-[10px]' },
    md: { box: 'w-14 h-14', textTitle: 'text-base font-bold', textSub: 'text-xs' },
    lg: { box: 'w-20 h-20', textTitle: 'text-xl font-bold', textSub: 'text-sm' },
    xl: { box: 'w-28 h-28', textTitle: 'text-2xl font-bold', textSub: 'text-base' }
  }[size] || { box: 'w-14 h-14', textTitle: 'text-base font-bold', textSub: 'text-xs' };

  return (
    <div className="flex items-center gap-3">
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={settings?.schoolName || "Augustine English Medium HPS & HS"}
          className={`${sizeClasses.box} object-contain bg-white`}
          style={{ borderRadius: '0' }}
        />
      ) : (
        <div className={`${sizeClasses.box} relative flex-shrink-0`}>
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-sm select-none"
            aria-label="Augustine English Medium HPS & HS Emblem"
          >
            {/* Outer Circular Rim */}
            <circle cx="100" cy="100" r="96" fill="#FFFFFF" stroke="#333333" strokeWidth="5" />
            <circle cx="100" cy="100" r="90" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2" />
            <circle cx="100" cy="100" r="82" fill="#FFFFFF" stroke="#333333" strokeWidth="2" strokeDasharray="3 3" />

            {/* Circular Path for Text */}
            <defs>
              <path
                id="textPathTop"
                d="M 28 100 A 72 72 0 1 1 172 100"
                fill="none"
              />
              <path
                id="textPathBottom"
                d="M 172 100 A 72 72 0 0 1 28 100"
                fill="none"
              />
            </defs>

            {/* Shield Body */}
            <path
              d="M 64 65 L 136 65 C 136 110 100 135 100 148 C 100 135 64 110 64 65 Z"
              fill="#F9FAFB"
              stroke="#333333"
              strokeWidth="3.5"
            />

            {/* Shield Partition Line */}
            <line x1="100" y1="65" x2="100" y2="145" stroke="#E5E7EB" strokeWidth="2" />

            {/* Central Symbol: Open Book */}
            <path
              d="M 78 104 Q 100 110 100 96 Q 100 110 122 104 L 122 84 Q 100 90 100 78 Q 100 90 78 84 Z"
              fill="#FFFFFF"
              stroke="#333333"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <line x1="100" y1="78" x2="100" y2="96" stroke="#333333" strokeWidth="2" />

            {/* Flaming Lamp / Torch of Knowledge */}
            <path
              d="M 100 44 C 95 53 91 57 97 64 C 100 59 103 58 100 54 C 105 57 107 61 103 65 C 109 59 106 50 100 44 Z"
              fill="#333333"
            />

            {/* Motto Ribbon */}
            <path
              d="M 45 152 L 155 152 L 145 166 L 100 162 L 55 166 Z"
              fill="#333333"
              stroke="#222222"
              strokeWidth="1.5"
            />
            <text
              x="100"
              y="160"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="8.5"
              fontWeight="bold"
              letterSpacing="1"
              fontFamily="sans-serif"
            >
              WISDOM • EXCELLENCE
            </text>

            {/* Stars */}
            <polygon points="100,172 102,176 106,176 103,178 104,182 100,180 96,182 97,178 94,176 98,176" fill="#333333" />
            <polygon points="50,100 51,103 54,103 52,105 53,108 50,106 47,108 48,105 46,103 49,103" fill="#333333" />
            <polygon points="150,100 151,103 154,103 152,105 153,108 150,106 147,108 148,105 146,103 149,103" fill="#333333" />
          </svg>
        </div>
      )}

      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <span className={`${sizeClasses.textTitle} tracking-tight font-serif text-[#333333]`}>
            Augustine English Medium
          </span>
          <span className={`${sizeClasses.textSub} font-semibold uppercase tracking-wider text-[#777777]`}>
            HPS & HS • Hallikhed (B)
          </span>
          <span className="text-[10px] text-gray-500 font-medium">
            Karnataka State Board (Nursery – 10th Std)
          </span>
        </div>
      )}
    </div>
  );
}
