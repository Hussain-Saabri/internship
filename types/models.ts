// User types
export interface User {
  id: string
  name: string
  email: string
  role: "owner" | "admin" | "member"
  company_id?: string
  created_at?: string
  updated_at?: string
}

// Company types
export interface Company {
  id: string
  name: string
  gst_number?: string
  pan_number?: string
  address?: string
  city?: string
  state?: string
  pincode?: string
  created_at: string
  updated_at: string
}

// Product types
export interface Product {
  item_id: string
  product_name: string
  brand_name?: string
  category?: string
  mrp: number
  selling_price: number
  image_url?: string
  description?: string
}

// Sales types
export interface SalesSummary {
  total_sales: number
  total_orders: number
  total_units: number
  avg_order_value: number
  total_customers?: number
  start_date: string
  end_date: string
}

export interface ProductSales {
  item_id: string
  product_name: string
  brand_name?: string
  category?: string
  total_sales: number
  total_orders: number
  total_units: number
  avg_selling_price: number
  platform?: string
}

export interface CitySales {
  city: string
  total_sales: number
  total_orders: number
  total_units: number
  percentage_of_total: number
}

export interface DRRData {
  item_id: string
  product_name: string
  daily_run_rate: number
  days_analyzed: number
  platform?: string
}

// Inventory types
export interface InventorySummary {
  total_sku_count: number
  total_stock_value: number
  total_quantity: number
  low_stock_count: number
  stockout_count: number
  avg_doi: number
}

export interface InventoryItem {
  item_id: string
  product_name: string
  brand_name?: string
  quantity: number
  mrp: number
  stock_value: number
  warehouse_name?: string
  pincode?: string
  city?: string
  platform: string
  doi?: number
  last_updated: string
}

export interface WarehouseInventory {
  warehouse_name: string
  city?: string
  total_quantity: number
  total_value: number
  sku_count: number
  avg_doi?: number
}

export interface PincodeInventory {
  pincode: string
  city?: string
  total_quantity: number
  total_value: number
  sku_count: number
  avg_doi?: number
}

// Profitability types
export interface ProfitabilitySummary {
  total_revenue: number
  total_cost: number
  gross_profit: number
  gross_margin_percentage: number
  net_profit: number
  net_margin_percentage: number
  start_date: string
  end_date: string
}

export interface ProductProfitability {
  item_id: string
  product_name: string
  revenue: number
  total_cost: number
  gross_profit: number
  gross_margin_percentage: number
  units_sold: number
  platform?: string
}

export interface CostBreakdown {
  product_cost: number
  platform_commission: number
  shipping_cost: number
  packaging_cost: number
  payment_gateway_cost: number
  other_costs: number
  total_cost: number
}

// Payout types
export interface PayoutReport {
  id: string
  report_month: string
  platform: string
  total_orders: number
  total_amount: number
  reconciled_amount: number
  discrepancy_amount: number
  status: "pending" | "reconciled" | "discrepancy"
  uploaded_at: string
  reconciled_at?: string
}

export interface PayoutDiscrepancy {
  order_id: string
  platform: string
  internal_amount: number
  platform_amount: number
  difference: number
  reason?: string
}

// Analytics types
export interface CompetitorSales {
  product_name: string
  our_sales: number
  competitor_sales: number
  market_share_percentage: number
  platform: string
}

export interface SOVData {
  keyword: string
  our_position: number
  total_positions: number
  sov_percentage: number
  platform: string
}

// Ad types
export interface AdSummary {
  total_spend: number
  total_impressions: number
  total_clicks: number
  total_conversions: number
  ctr: number
  cpc: number
  roas: number
  start_date: string
  end_date: string
}

export interface CampaignPerformance {
  campaign_id: string
  campaign_name: string
  platform: string
  spend: number
  impressions: number
  clicks: number
  conversions: number
  revenue: number
  roas: number
}

// Notification types
export interface Notification {
  id: string
  type: "low_stock" | "stockout" | "high_sales" | "payout_discrepancy" | "alert"
  title: string
  message: string
  is_read: boolean
  created_at: string
  data?: any
}

export interface AlertRule {
  id: string
  name: string
  type: "low_stock" | "stockout" | "high_sales" | "low_sales" | "profitability"
  condition: {
    operator: "less_than" | "greater_than" | "equals"
    value: number
  }
  product_ids?: string[]
  notification_channels: ("email" | "in_app" | "sms")[]
  is_active: boolean
  created_at: string
}

// Filter types
export interface SalesFilters {
  company_id: string
  start_date: string
  end_date: string
  platform?: string
  city?: string
  category?: string
  product_id?: string
}

export interface InventoryFilters {
  company_id: string
  platform?: string
  city?: string
  warehouse?: string
  pincode?: string
  category?: string
  low_stock_only?: boolean
}

// Chart data types
export interface TimeSeriesData {
  date: string
  value: number
  label?: string
}

export interface PieChartData {
  name: string
  value: number
  color?: string
}

export interface BarChartData {
  category: string
  value: number
  label?: string
}
