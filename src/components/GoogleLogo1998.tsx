import React from 'react';

interface GoogleLogo1998Props {
  className?: string;
  width?: number;
  height?: number;
}

export const GoogleLogo1998: React.FC<GoogleLogo1998Props> = ({
  className = '',
  width = 351,
  height = 113,
}) => {
  return (
    <div className={`inline-block select-none ${className}`}>
      {/* 
        Orijinal 1998 Google! Logosu:
        Larry Page ve Sergey Brin tarafından GIMP programında tasarlanan, 
        3D gölgeli ve ünlem işaretli (!) efsanevi ilk resmi beta logosu.
      */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 351 113"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full h-auto drop-shadow-[2px_3px_2px_rgba(0,0,0,0.35)]"
      >
        <defs>
          {/* 3D Bevel Filters and Linear Gradients for 1998 Authenticity */}
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="50%" stopColor="#2A5DB0" />
            <stop offset="100%" stopColor="#17366E" />
          </linearGradient>

          <linearGradient id="redGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EA4335" />
            <stop offset="50%" stopColor="#C5221F" />
            <stop offset="100%" stopColor="#801311" />
          </linearGradient>

          <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBBC05" />
            <stop offset="50%" stopColor="#E39C02" />
            <stop offset="100%" stopColor="#966100" />
          </linearGradient>

          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34A853" />
            <stop offset="50%" stopColor="#1E8238" />
            <stop offset="100%" stopColor="#0D4F1E" />
          </linearGradient>

          <filter id="retroShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="3" dy="4" stdDeviation="1.5" floodColor="#333333" floodOpacity="0.6" />
          </filter>
        </defs>

        <g filter="url(#retroShadow)" fontFamily="'Times New Roman', Times, 'Baskerville', serif" fontWeight="bold">
          {/* Letter G - Blue */}
          <text
            x="24"
            y="92"
            fontSize="98"
            fill="url(#blueGrad)"
            stroke="#17366E"
            strokeWidth="1.5"
            letterSpacing="-1"
          >
            G
          </text>

          {/* Letter o - Red */}
          <text
            x="100"
            y="92"
            fontSize="94"
            fill="url(#redGrad)"
            stroke="#801311"
            strokeWidth="1.5"
          >
            o
          </text>

          {/* Letter o - Yellow */}
          <text
            x="152"
            y="92"
            fontSize="94"
            fill="url(#yellowGrad)"
            stroke="#966100"
            strokeWidth="1.5"
          >
            o
          </text>

          {/* Letter g - Blue */}
          <text
            x="203"
            y="92"
            fontSize="94"
            fill="url(#blueGrad)"
            stroke="#17366E"
            strokeWidth="1.5"
          >
            g
          </text>

          {/* Letter l - Green */}
          <text
            x="254"
            y="92"
            fontSize="94"
            fill="url(#greenGrad)"
            stroke="#0D4F1E"
            strokeWidth="1.5"
          >
            l
          </text>

          {/* Letter e - Red */}
          <text
            x="281"
            y="92"
            fontSize="94"
            fill="url(#redGrad)"
            stroke="#801311"
            strokeWidth="1.5"
          >
            e
          </text>

          {/* Exclamation mark ! - Green (The iconic Yahoo!-inspired 1998 mark) */}
          <text
            x="326"
            y="92"
            fontSize="96"
            fill="url(#greenGrad)"
            stroke="#0D4F1E"
            strokeWidth="1.5"
          >
            !
          </text>
        </g>
      </svg>
    </div>
  );
};
