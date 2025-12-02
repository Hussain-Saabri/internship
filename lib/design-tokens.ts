/**
 * Design Tokens
 * Centralized design values extracted from Figma
 * Use these tokens for consistent styling across the application
 */

// Colors
export const colors = {
  // Sidebar
  sidebar: {
    primary: "#1e8e70",
    active: "#25b990",
    hover: "#23a083",
  },

  // Platform brands
  blinkit: {
    primary: "#f8cb46",
    light: "#fce8a8",
    dark: "#d4ab2a",
  },
  zepto: {
    primary: "#9b4dff",
    light: "#c9a8ff",
    dark: "#7a2ecc",
  },
  instamart: {
    primary: "#ff6b35",
    light: "#ffb5a0",
    dark: "#cc4f1f",
  },

  // Alerts & notifications
  alert: {
    red: "#e85454",
    orange: "#ff9f43",
    yellow: "#ffd93d",
    green: "#6bcf7f",
  },

  // Gray scale
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    500: "#6b7280",
    800: "#1f2937",
  },
} as const

// Spacing (from Figma design)
export const spacing = {
  sidebar: {
    padding: "16px",
    gap: {
      nav: "16px",
      section: "32px",
    },
  },
  header: {
    height: "52px",
    padding: {
      vertical: "12px",
      horizontal: "24px",
    },
  },
  button: {
    padding: {
      sm: "8px 12px",
      md: "8px 16px",
      lg: "12px 24px",
    },
  },
} as const

// Border Radius
export const borderRadius = {
  button: "12px",
  small: "10px",
  circle: "9999px",
  logo: "4px",
} as const

// Icon Sizes
export const iconSizes = {
  sm: "16px",
  md: "20px",
  lg: "24px",
} as const

// Component Dimensions
export const dimensions = {
  sidebar: {
    width: "72px",
    widthExpanded: "240px",
  },
  navButton: {
    size: "40px",
    iconSize: "20px",
  },
  userAvatar: {
    size: "40px",
  },
  platformBadge: {
    size: "16px",
  },
  notificationDot: {
    size: "8px",
  },
} as const

// Typography (from Figma design)
export const typography = {
  header: {
    title: {
      fontSize: "18px",
      lineHeight: "28px",
      fontWeight: 400,
      letterSpacing: "-0.4395px",
    },
  },
  platform: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
    letterSpacing: "-0.1504px",
  },
  platformLogo: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 700,
  },
  dateRange: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    letterSpacing: "-0.1504px",
  },
} as const

// Shadows (from Figma)
export const shadows = {
  platform: "0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)",
  card: "0px 1px 2px 0px rgba(0,0,0,0.05)",
  elevated: "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -1px rgba(0,0,0,0.06)",
} as const

// Transitions
export const transitions = {
  fast: "150ms ease-in-out",
  normal: "200ms ease-in-out",
  slow: "300ms ease-in-out",
} as const

// Z-Index layers
export const zIndex = {
  sidebar: 40,
  header: 50,
  dropdown: 1000,
  modal: 1100,
  toast: 1200,
} as const

// Breakpoints (responsive design)
export const breakpoints = {
  mobile: "640px",
  tablet: "768px",
  desktop: "1024px",
  wide: "1280px",
  ultrawide: "1536px",
} as const

// Export all as single object for convenience
export const designTokens = {
  colors,
  spacing,
  borderRadius,
  iconSizes,
  dimensions,
  typography,
  shadows,
  transitions,
  zIndex,
  breakpoints,
} as const

export default designTokens
