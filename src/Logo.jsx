import React from 'react';

const NepaliImposterLogo = ({ size = 80, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Body of Imposter */}
    <path d="M30 40C30 28.9543 38.9543 20 50 20C61.0457 20 70 28.9543 70 40V80H30V40Z" fill="#EF4444"/>
    <path d="M30 60C30 60 25 60 25 70V85H35V60H30Z" fill="#B91C1C"/> {/* Backpack */}
    
    {/* Visor/Glass */}
    <rect x="45" y="35" width="30" height="15" rx="7.5" fill="#93C5FD" stroke="white" strokeWidth="2"/>
    
    {/* Dhaka Topi */}
    <path d="M28 25L50 10L72 25L70 32H30L28 25Z" fill="#8B0000"/> {/* Base Red */}
    <path d="M35 22L42 15L50 22L58 15L65 22" stroke="#FFD700" strokeWidth="1.5"/> {/* Pattern */}
    <circle cx="50" cy="18" r="1.5" fill="white"/> {/* Small Detail */}
  </svg>
);

export default NepaliImposterLogo;