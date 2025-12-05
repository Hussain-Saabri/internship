/**
 * Custom Flaticon-style SVG Components
 * These icons replace lucide-react with custom Flaticon designs
 */

import React from "react";

export interface IconProps {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

// Dashboard Icon
export const DashboardIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="3"
      y="3"
      width="7"
      height="7"
      rx="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect
      x="14"
      y="3"
      width="7"
      height="7"
      rx="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect
      x="3"
      y="14"
      width="7"
      height="7"
      rx="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect
      x="14"
      y="14"
      width="7"
      height="7"
      rx="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
  </svg>
);

// Grid View Icon
export const GridIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="3"
      y="3"
      width="7"
      height="7"
      rx="1.5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect
      x="14"
      y="3"
      width="7"
      height="7"
      rx="1.5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect
      x="3"
      y="14"
      width="7"
      height="7"
      rx="1.5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect
      x="14"
      y="14"
      width="7"
      height="7"
      rx="1.5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <circle cx="6.5" cy="6.5" r="1" fill="currentColor" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    <circle cx="6.5" cy="17.5" r="1" fill="currentColor" />
    <circle cx="17.5" cy="17.5" r="1" fill="currentColor" />
  </svg>
);

// Sales/Trending Icon
export const SalesIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <polyline
      points="22 7 13.5 15.5 8.5 10.5 2 17"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="16 7 22 7 22 13"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Inventory/Package Icon
export const InventoryIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 5L16 9"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// Profitability/Dollar Icon
export const ProfitabilityIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line
      x1="12"
      y1="2"
      x2="12"
      y2="22"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Settings/Gear Icon
export const SettingsIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M19.4 15C19.1277 15.6171 18.7583 16.1936 18.3 16.7L19.5 18.5L18.5 19.5L16.7 18.3C16.1936 18.7583 15.6171 19.1277 15 19.4V21H13V19.4C12.3829 19.1277 11.8064 18.7583 11.3 18.3L9.5 19.5L8.5 18.5L9.7 16.7C9.24167 16.1936 8.87234 15.6171 8.6 15H7V13H8.6C8.87234 12.3829 9.24167 11.8064 9.7 11.3L8.5 9.5L9.5 8.5L11.3 9.7C11.8064 9.24167 12.3829 8.87234 13 8.6V7H15V8.6C15.6171 8.87234 16.1936 9.24167 16.7 9.7L18.5 8.5L19.5 9.5L18.3 11.3C18.7583 11.8064 19.1277 12.3829 19.4 13H21V15H19.4Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// User/Profile Icon
export const UserIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="12"
      cy="8"
      r="4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M6 21C6 17.6863 8.68629 15 12 15C15.3137 15 18 17.6863 18 21"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// Payout/Receipt Icon
export const PayoutIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <line
      x1="7"
      y1="7"
      x2="17"
      y2="7"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <line
      x1="7"
      y1="11"
      x2="17"
      y2="11"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <line
      x1="7"
      y1="15"
      x2="13"
      y2="15"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// Analytics/Bar Chart Icon
export const AnalyticsIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line
      x1="3"
      y1="21"
      x2="21"
      y2="21"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <rect
      x="7"
      y="14"
      width="3"
      height="7"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect
      x="14"
      y="8"
      width="3"
      height="13"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect
      x="4"
      y="10"
      width="3"
      height="11"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect
      x="17"
      y="4"
      width="3"
      height="17"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
  </svg>
);

// Ads/Megaphone Icon
export const AdsIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 8C20.2091 8 22 6.20914 22 4C22 6.20914 23.7909 8 26 8C23.7909 8 22 9.79086 22 12C22 9.79086 20.2091 8 18 8Z"
      transform="translate(-10 0)"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 11V13C3 13.2652 3.10536 13.5196 3.29289 13.7071C3.48043 13.8946 3.73478 14 4 14H6L10 18V8L6 12H4C3.73478 12 3.48043 12.1054 3.29289 12.2929C3.10536 12.4804 3 12.7348 3 13Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Team/Users Icon
export const TeamIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="9"
      cy="7"
      r="3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <circle
      cx="17"
      cy="7"
      r="3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M3 19C3 16.7909 4.79086 15 7 15H11C13.2091 15 15 16.7909 15 19"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M16 19C16 16.7909 17.7909 15 20 15H21"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// Bell/Notification Icon
export const BellIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Calendar Icon
export const CalendarIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <line
      x1="3"
      y1="10"
      x2="21"
      y2="10"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <line
      x1="8"
      y1="2"
      x2="8"
      y2="6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <line
      x1="16"
      y1="2"
      x2="16"
      y2="6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// ChevronLeft Icon (for collapse toggle)
export const ChevronLeftIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <polyline
      points="15 18 9 12 15 6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ChevronRight Icon (for expand toggle)
export const ChevronRightIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <polyline
      points="9 18 15 12 9 6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Shopping Cart Icon
export const ShoppingCartIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="9"
      cy="21"
      r="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <circle
      cx="20"
      cy="21"
      r="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Package/Box Icon (for avg order value)
export const PackageIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21 8V16C21 16.5304 20.7893 17.0391 20.4142 17.4142C20.0391 17.7893 19.5304 18 19 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V8"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 4C1 3.46957 1.21071 2.96086 1.58579 2.58579C1.96086 2.21071 2.46957 2 3 2H21C21.5304 2 22.0391 2.21071 22.4142 2.58579C22.7893 2.96086 23 3.46957 23 4V8C23 8.53043 22.7893 9.03914 22.4142 9.41421C22.0391 9.78929 21.5304 10 21 10H3C2.46957 10 1.96086 9.78929 1.58579 9.41421C1.21071 9.03914 1 8.53043 1 8V4Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 6H14"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// Trending Down Icon (for returns)
export const TrendingDownIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <polyline
      points="22 17 13.5 8.5 8.5 13.5 2 7"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="16 17 22 17 22 11"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Trending Up Icon (for positive trends)
export const TrendingUpIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <polyline
      points="22 7 13.5 15.5 8.5 10.5 2 17"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="16 7 22 7 22 13"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Percentage/Discount Icon
export const PercentageIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line
      x1="19"
      y1="5"
      x2="5"
      y2="19"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="7"
      cy="7"
      r="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <circle
      cx="17"
      cy="17"
      r="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
  </svg>
);

// Arrow Up Icon (small, for trend indicators)
export const ArrowUpIcon: React.FC<IconProps> = ({
  size = 12,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 10V2M6 2L2 6M6 2L10 6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Arrow Down Icon (small, for trend indicators)
export const ArrowDownIcon: React.FC<IconProps> = ({
  size = 12,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 2V10M6 10L10 6M6 10L2 6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Map Pin Icon (for location markers)
export const MapPinIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="10"
      r="3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
  </svg>
);

// Search Icon (for keywords and search functionality)
export const SearchIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="11"
      cy="11"
      r="8"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M21 21L16.65 16.65"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Clock Icon (for time and ageing)
export const ClockIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M12 6V12L16 14"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AlertTriangleIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer triangle */}
    <path
      d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Exclamation mark */}
    <line
      x1="12"
      y1="9"
      x2="12"
      y2="13"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

export const WarningCircleIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer Circle */}
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Exclamation line */}
    <line
      x1="12"
      y1="8"
      x2="12"
      y2="13"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Dot */}
    <circle cx="12" cy="16.5" r="1" fill="currentColor" />
  </svg>
);

export const WarehouseIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Roof Outline */}
    <path
      d="M3 10L12 3L21 10V21H3V10Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Door Rectangle */}
    <rect
      x="8"
      y="14"
      width="8"
      height="7"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Door lines */}
    <line
      x1="9"
      y1="16"
      x2="15"
      y2="16"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <line
      x1="9"
      y1="18"
      x2="15"
      y2="18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({
  size = 20,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Arrow down */}
    <path
      d="M12 3V15"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Arrow head */}
    <path
      d="M7 10L12 15L17 10"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Bottom bar container */}
    <path
      d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowUpDownIcon: React.FC<IconProps> = ({
  size = 14,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3 h-3"
  >
    {/* Down Arrow */}
    <path d="m21 16-4 4-4-4" />
    <path d="M17 20V4" />

    {/* Up Arrow */}
    <path d="m3 8 4-4 4 4" />
    <path d="M7 4v16" />
  </svg>
);

export const PlatformIcon = ({ size = 40, className = "" }) => (
  <div
    className={className}
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: "#22c55e", // Tailwind green-500
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "4px solid white",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      fontWeight: "700",
      color: "white",
      fontSize: size * 0.5,
      fontFamily: "Inter, sans-serif",
      userSelect: "none",
    }}
  >
    P
  </div>
);

export const PlatformPIcon = ({ size = 40, className = "" }) => (
  <div
    className={className}
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: "#22c55e", // Tailwind green-500
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "4px solid white",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      fontWeight: "700",
      color: "white",
      fontSize: size * 0.5,
      fontFamily: "Inter, sans-serif",
      userSelect: "none",
    }}
  >
    P
  </div>
);
export const CloseIcon = ({ size = 40, className = "" }) => (
  <div
    className={className}
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: "#22c55e", // Tailwind green-500
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "4px solid white",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      fontWeight: "700",
      color: "white",
      fontSize: size * 0.5,
      fontFamily: "Inter, sans-serif",
      userSelect: "none",
    }}
  >
    X
  </div>
);

export const CubeIcon: React.FC<IconProps> = ({
  size = 16,
  className = "",
  strokeWidth = 2,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Front face */}
    <path d="M12 2 20 6v6l-8 4-8-4V6l8-4z" />

    {/* Left face */}
    <path d="M4 6l8 4v10" />

    {/* Right face */}
    <path d="M20 6l-8 4" />
  </svg>
);
