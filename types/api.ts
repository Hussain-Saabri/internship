// Generic API response wrapper
export interface ApiResponse<T = any> {
  data: T
  message?: string
  success: boolean
}

// Paginated response
export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    page_size: number
    total_count: number
    total_pages: number
  }
}

// Error response
export interface ApiError {
  message: string
  errors?: Record<string, string[]>
  status_code: number
}

// Auth responses
export interface LoginResponse {
  user: {
    id: string
    name: string
    email: string
    role: "owner" | "admin" | "member"
    company_id?: string
  }
  access_token: string
  refresh_token: string
}

export interface RefreshTokenResponse {
  access_token: string
  refresh_token: string
}

// Upload responses
export interface UploadResponse {
  file_id: string
  file_name: string
  file_size: number
  uploaded_at: string
  status: "processing" | "completed" | "failed"
  rows_processed?: number
  rows_failed?: number
  errors?: string[]
}

// Generic success response
export interface SuccessResponse {
  message: string
  success: boolean
}
