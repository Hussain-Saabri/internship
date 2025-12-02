import axios, { AxiosError } from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1"
const API_TIMEOUT = parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || "30000")

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor (add auth token)
apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage (will be updated when we create authStore)
    const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor (handle token refresh)
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as any

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        // Get refresh token from localStorage
        const refreshToken = typeof window !== "undefined" ? localStorage.getItem("refreshToken") : null

        if (!refreshToken) {
          // No refresh token, redirect to login
          if (typeof window !== "undefined") {
            window.location.href = "/login"
          }
          return Promise.reject(error)
        }

        const response = await axios.post(`${API_URL}/auth/refresh`, {
          refresh_token: refreshToken,
        })

        const { access_token, refresh_token } = response.data

        // Update tokens in localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("accessToken", access_token)
          localStorage.setItem("refreshToken", refresh_token)
        }

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${access_token}`
        return apiClient(originalRequest)
      } catch (refreshError) {
        // Refresh failed, clear tokens and redirect to login
        if (typeof window !== "undefined") {
          localStorage.removeItem("accessToken")
          localStorage.removeItem("refreshToken")
          window.location.href = "/login"
        }
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default apiClient
