/**
 * Icon Mapping Utility
 * Maps route/feature names to Flaticon components
 * Used for sidebar navigation and other icon references
 */

import React from "react"
import {
  DashboardIcon,
  GridIcon,
  SalesIcon,
  InventoryIcon,
  ProfitabilityIcon,
  SettingsIcon,
  PayoutIcon,
  AnalyticsIcon,
  AdsIcon,
  TeamIcon,
  UserIcon,
  BellIcon,
  CalendarIcon,
  type IconProps as FlaticonProps,
} from "./flaticons"

export type IconName =
  | "dashboard"
  | "grid"
  | "sales"
  | "inventory"
  | "profitability"
  | "payout"
  | "analytics"
  | "ads"
  | "team"
  | "settings"
  | "user"
  | "bell"
  | "calendar"

// Icon component type
export type IconComponent = React.ComponentType<FlaticonProps>

// Map icon names to Flaticon components
export const iconMap: Record<IconName, IconComponent> = {
  dashboard: DashboardIcon,
  grid: GridIcon,
  sales: SalesIcon,
  inventory: InventoryIcon,
  profitability: ProfitabilityIcon,
  payout: PayoutIcon,
  analytics: AnalyticsIcon,
  ads: AdsIcon,
  team: TeamIcon,
  settings: SettingsIcon,
  user: UserIcon,
  bell: BellIcon,
  calendar: CalendarIcon,
}

/**
 * Get icon component by name
 * @param name - Icon name key
 * @returns Flaticon component
 */
export function getIcon(name: IconName): IconComponent {
  return iconMap[name] || DashboardIcon
}

/**
 * Helper component to render icon by name
 */
interface IconProps {
  name: IconName
  size?: number | string
  className?: string
  strokeWidth?: number
}

export function Icon({ name, size = 20, className = "", strokeWidth = 2 }: IconProps) {
  const IconComponent = getIcon(name)
  // eslint-disable-next-line react-hooks/static-components
  return <IconComponent size={size} className={className} strokeWidth={strokeWidth} />
}

export default iconMap
