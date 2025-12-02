import { z } from "zod"

// Auth validation schemas
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  company_name: z.string().min(2, "Company name must be at least 2 characters"),
})

// File upload validation
export const fileUploadSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 50 * 1024 * 1024, "File size must be less than 50MB")
    .refine(
      (file) =>
        [
          "text/csv",
          "application/vnd.ms-excel",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        ].includes(file.type),
      "File must be a CSV or Excel file"
    ),
})

// Payout upload validation
export const payoutUploadSchema = z.object({
  file: fileUploadSchema.shape.file,
  month: z.string().regex(/^\d{4}-\d{2}$/, "Month must be in YYYY-MM format"),
  platform: z.enum(["blinkit", "zepto", "instamart"]),
})

// Commission settings validation
export const commissionSchema = z.object({
  platform: z.enum(["blinkit", "zepto", "instamart"]),
  commission_percentage: z
    .number()
    .min(0, "Commission must be at least 0%")
    .max(100, "Commission cannot exceed 100%"),
})

// Cost defaults validation
export const costDefaultsSchema = z.object({
  platform: z.enum(["blinkit", "zepto", "instamart"]),
  shipping_cost: z.number().min(0, "Shipping cost must be at least 0"),
  packaging_cost: z.number().min(0, "Packaging cost must be at least 0"),
  payment_gateway_percentage: z
    .number()
    .min(0, "Payment gateway percentage must be at least 0%")
    .max(100, "Payment gateway percentage cannot exceed 100%"),
})

// Team member invitation validation
export const inviteMemberSchema = z.object({
  email: z.string().email("Invalid email address"),
  role: z.enum(["admin", "member"]),
  product_ids: z.array(z.string()).optional(),
})

// Alert rule validation
export const alertRuleSchema = z.object({
  name: z.string().min(2, "Alert name must be at least 2 characters"),
  type: z.enum(["low_stock", "stockout", "high_sales", "low_sales", "profitability"]),
  condition: z.object({
    operator: z.enum(["less_than", "greater_than", "equals"]),
    value: z.number(),
  }),
  product_ids: z.array(z.string()).optional(),
  notification_channels: z.array(z.enum(["email", "in_app", "sms"])),
})

// Date range validation
export const dateRangeSchema = z.object({
  start_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Start date must be in YYYY-MM-DD format"),
  end_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "End date must be in YYYY-MM-DD format"),
})

// Product validation
export const productSchema = z.object({
  item_id: z.string(),
  product_name: z.string().min(1, "Product name is required"),
  brand_name: z.string().optional(),
  category: z.string().optional(),
  mrp: z.number().min(0, "MRP must be at least 0"),
  selling_price: z.number().min(0, "Selling price must be at least 0"),
})

// Validation helper functions
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhoneNumber(phone: string): boolean {
  const phoneRegex = /^[6-9]\d{9}$/
  return phoneRegex.test(phone)
}

export function validatePincode(pincode: string): boolean {
  const pincodeRegex = /^[1-9][0-9]{5}$/
  return pincodeRegex.test(pincode)
}

export function validateGST(gst: string): boolean {
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
  return gstRegex.test(gst)
}

export function validatePAN(pan: string): boolean {
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
  return panRegex.test(pan)
}
