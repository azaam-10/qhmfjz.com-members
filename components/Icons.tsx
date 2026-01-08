
import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  active?: boolean;
  flip?: boolean;
  strokeWidth?: number;
}

export const CustomAvatarIcon: React.FC<IconProps> = ({ size = 64 }) => {
  // SVG for the 5-pentagon logo
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="white" />
      <g transform="translate(50, 48)">
        {/* Red Pentagon (Top) */}
        <polygon 
          points="0,-28 17,-15 11,5 -11,5 -17,-15" 
          fill="#E55353" 
          transform="translate(0, -6)"
        />
        {/* Yellow Pentagon (Right) */}
        <polygon 
          points="0,-28 17,-15 11,5 -11,5 -17,-15" 
          fill="#FBC02D" 
          transform="rotate(72) translate(0, -6)"
        />
        {/* Purple Pentagon (Bottom Right) */}
        <polygon 
          points="0,-28 17,-15 11,5 -11,5 -17,-15" 
          fill="#9575CD" 
          transform="rotate(144) translate(0, -6)"
        />
        {/* Blue Pentagon (Bottom Left) */}
        <polygon 
          points="0,-28 17,-15 11,5 -11,5 -17,-15" 
          fill="#4FC3F7" 
          transform="rotate(216) translate(0, -6)"
        />
        {/* Green Pentagon (Left) */}
        <polygon 
          points="0,-28 17,-15 11,5 -11,5 -17,-15" 
          fill="#81C784" 
          transform="rotate(288) translate(0, -6)"
        />
      </g>
    </svg>
  );
};

export const ChatIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 9H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 13H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WalletActionIcon: React.FC<IconProps> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGrad" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1F6AE1"/>
        <stop offset="1" stopColor="#0B4DB8"/>
      </linearGradient>
    </defs>
    <path d="M26 10H6C4.89543 10 4 10.8954 4 12V24C4 25.1046 4.89543 26 6 26H26C27.1046 26 28 25.1046 28 24V12C28 10.8954 27.1046 10 26 10Z" fill="url(#blueGrad)"/>
    <path d="M28 14H24C23.4477 14 23 14.4477 23 15V19C23 19.5523 23.4477 20 24 20H28" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 14H6" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 6L26 8" stroke="url(#blueGrad)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CardActionIcon: React.FC<IconProps> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="24" height="18" rx="3" fill="url(#blueGrad)"/>
    <rect x="4" y="12" width="24" height="4" fill="white" fillOpacity="0.2"/>
    <rect x="7" y="20" width="4" height="2" rx="0.5" fill="white" fillOpacity="0.8"/>
  </svg>
);

export const TeamIcon: React.FC<IconProps> = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="#F9A825" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 16.66 14.67 14 12 14Z" />
  </svg>
);

export const RecordFeatureIcon: React.FC<IconProps> = ({ color = "#4DB6AC", size = 34, flip = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ transform: flip ? 'scaleX(-1)' : 'none' }} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H17V12H7V10ZM7 14H17V16H7V14ZM7 6H17V8H7V6Z" />
  </svg>
);

export const WalletManagementIcon: React.FC<IconProps> = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="#EF5350" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10.12V3.48L19 4.3C17.7 4.83 16.48 5 15.5 5C14.5 5 13.5 4.7 12.5 4.3L12 4.1L11.5 4.3C10.5 4.7 9.5 5 8.5 5C7.5 5 6.3 4.8 5 4.3L3 3.48V10.12C3 15.19 6.42 19.89 11.23 21.05L12 21.23L12.77 21.05C17.58 19.89 21 15.19 21 10.12Z" />
    <path d="M12 15L15 12H13V8H11V12H9L12 15Z" fill="white" />
  </svg>
);

export const InviteIcon: React.FC<IconProps> = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="#42A5F5" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
  </svg>
);

export const ProfileIcon: React.FC<IconProps> = ({ color = "#333", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2"/>
    <line x1="7" y1="8" x2="17" y2="8"/>
    <line x1="7" y1="12" x2="17" y2="12"/>
    <line x1="7" y1="16" x2="12" y2="16"/>
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#BBBBBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#333" : "#8e96a4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

export const ServiceIcon: React.FC<IconProps> = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#333" : "#8e96a4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#333" : "#8e96a4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

export const RecordIcon: React.FC<IconProps> = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#333" : "#8e96a4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></rect>
    <line x1="8" y1="2" x2="8" y2="6"></rect>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

export const MineIcon: React.FC<IconProps> = ({ active, color, size = 22, strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || (active ? "#333" : "#8e96a4")} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);
