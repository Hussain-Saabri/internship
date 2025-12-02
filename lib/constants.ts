// Platform constants
export const PLATFORMS = {
  ALL: "all",
  BLINKIT: "blinkit",
  ZEPTO: "zepto",
  INSTAMART: "instamart",
} as const

export type Platform = typeof PLATFORMS[keyof typeof PLATFORMS]

export const PLATFORM_LABELS: Record<Platform, string> = {
  all: "All Platforms",
  blinkit: "Blinkit",
  zepto: "Zepto",
  instamart: "Instamart",
}

export const PLATFORM_COLORS: Record<Exclude<Platform, "all">, string> = {
  blinkit: "#f8cb46",
  zepto: "#9b4dff",
  instamart: "#ff6b35",
}

// User roles
export const USER_ROLES = {
  OWNER: "owner",
  ADMIN: "admin",
  MEMBER: "member",
} as const

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES]

// Date range presets
export const DATE_RANGES = {
  LAST_7_DAYS: { label: "Last 7 days", days: 7 },
  LAST_30_DAYS: { label: "Last 30 days", days: 30 },
  LAST_90_DAYS: { label: "Last 90 days", days: 90 },
  THIS_MONTH: { label: "This month", days: 0 },
  LAST_MONTH: { label: "Last month", days: 0 },
  CUSTOM: { label: "Custom", days: 0 },
}

// Order status
export const ORDER_STATUS = {
  PENDING: "pending",
  PROCESSING: "processing",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
  RETURNED: "returned",
} as const

export type OrderStatus = typeof ORDER_STATUS[keyof typeof ORDER_STATUS]

// Inventory thresholds
export const INVENTORY_THRESHOLDS = {
  LOW_STOCK_DAYS: 7,
  OPTIMAL_STOCK_DAYS: 30,
  OVERSTOCK_DAYS: 60,
  OUT_OF_STOCK: 0,
}

// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    REFRESH: "/auth/refresh",
    LOGOUT: "/auth/logout",
  },
  SALES: {
    SUMMARY: "/sales/summary",
    BY_PRODUCT: "/sales/by-product",
    BY_CITY: "/sales/by-city",
    BY_CATEGORY: "/sales/by-category",
    DRR: "/sales/drr",
    UPLOAD: "/sales/upload",
  },
  INVENTORY: {
    SUMMARY: "/inventory/summary",
    CURRENT: "/inventory/current",
    BY_WAREHOUSE: "/inventory/by-warehouse",
    BY_PINCODE: "/inventory/by-pincode",
    DOI: "/inventory/doi",
    LOW_STOCK: "/inventory/low-stock",
  },
  PROFITABILITY: {
    SUMMARY: "/profitability/summary",
    BY_PRODUCT: "/profitability/by-product",
    COSTS: "/profitability/costs",
    COMMISSION: "/profitability/commission",
  },
  PAYOUT: {
    REPORTS: "/payout/reports",
    UPLOAD: "/payout/upload",
    RECONCILE: "/payout/reconcile",
  },
  ANALYTICS: {
    COMPETITOR_SALES: "/analytics/competitor-sales",
    SOV: "/analytics/sov",
    MARKET_SHARE: "/analytics/market-share",
  },
  ADS: {
    SUMMARY: "/ads/summary",
    BY_CAMPAIGN: "/ads/by-campaign",
  },
  NOTIFICATIONS: {
    LIST: "/notifications",
    MARK_READ: "/notifications/mark-read",
    ALERT_RULES: "/notifications/alert-rules",
  },
}

// Pagination
export const DEFAULT_PAGE_SIZE = 20
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100]

// File upload
export const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB
export const ACCEPTED_FILE_TYPES = {
  CSV: ".csv",
  EXCEL: ".xls,.xlsx",
  ALL_DATA: ".csv,.xls,.xlsx",
}

// Chart colors
export const CHART_COLORS = {
  primary: "#3b82f6",
  secondary: "#8b5cf6",
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#06b6d4",
}

// Navigation menu items (matches Figma sidebar design)
export const NAV_ITEMS = [
  { label: "Dashboard", href: "/", icon: "dashboard" as const },
  { label: "Sales", href: "/sales", icon: "sales" as const },
  { label: "Inventory", href: "/inventory", icon: "inventory" as const },
  { label: "Profitability", href: "/profitability", icon: "profitability" as const },
  { label: "Settings", href: "/settings", icon: "settings" as const },
]

// Full navigation items (for expanded sidebar or mobile menu)
export const FULL_NAV_ITEMS = [
  { label: "Dashboard", href: "/", icon: "dashboard" as const },
  { label: "Sales Analytics", href: "/sales", icon: "sales" as const },
  { label: "Inventory", href: "/inventory", icon: "inventory" as const },
  { label: "Profitability", href: "/profitability", icon: "profitability" as const },
  { label: "Payout", href: "/payout", icon: "payout" as const },
  { label: "Analytics", href: "/analytics", icon: "analytics" as const },
  { label: "Ads", href: "/ads", icon: "ads" as const },
  { label: "Team", href: "/team", icon: "team" as const },
  { label: "Settings", href: "/settings", icon: "settings" as const },
]

// App metadata
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "QUAP"
export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0"
export const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV || "development"
