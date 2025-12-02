import { format as dateFnsFormat } from "date-fns"

/**
 * Format a number as Indian currency (₹)
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

/**
 * Format a number with Indian numbering system (lakhs, crores)
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-IN").format(value)
}

/**
 * Format a number as a compact string (e.g., 1.2K, 1.5M)
 */
export function formatCompactNumber(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    notation: "compact",
    compactDisplay: "short",
  }).format(value)
}

/**
 * Format a number as a percentage
 */
export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`
}

/**
 * Format a date as a readable string
 */
export function formatDate(date: Date | string, formatStr: string = "MMM dd, yyyy"): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return dateFnsFormat(dateObj, formatStr)
}

/**
 * Format a date as YYYY-MM-DD (API format)
 */
export function formatDateForAPI(date: Date): string {
  return dateFnsFormat(date, "yyyy-MM-dd")
}

/**
 * Format a number with unit suffix (e.g., 1.2K units, 1.5M units)
 */
export function formatWithUnit(value: number, unit: string): string {
  return `${formatCompactNumber(value)} ${unit}`
}

/**
 * Format days of inventory (DOI)
 */
export function formatDOI(days: number): string {
  if (days < 0) return "N/A"
  if (days === 0) return "Out of Stock"
  if (days < 7) return `${days.toFixed(0)} days (Low)`
  if (days < 30) return `${days.toFixed(0)} days`
  return `${days.toFixed(0)} days (High)`
}

/**
 * Get color class based on DOI value
 */
export function getDOIColor(days: number): string {
  if (days < 0) return "text-gray-500"
  if (days === 0) return "text-red-600"
  if (days < 7) return "text-orange-500"
  if (days < 30) return "text-green-600"
  return "text-blue-600"
}

/**
 * Format a file size in bytes to human-readable string
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i]
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}
