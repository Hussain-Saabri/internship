"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useAuthStore } from "@/stores/authStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/base/Logo"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const { setUser, setTokens } = useAuthStore()
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 800))

    if (email && password) {
      const mockUser = {
        id: "user_123",
        name: email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1),
        email: email,
        role: "owner" as const,
        company_id: "company_123",
      }

      const mockAccessToken = "mock_access_token_" + Date.now()
      const mockRefreshToken = "mock_refresh_token_" + Date.now()

      setUser(mockUser)
      setTokens(mockAccessToken, mockRefreshToken)
      router.push("/")
    } else {
      setError("Please enter email and password")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-[55%_45%] lg:overflow-hidden overflow-y-auto">
      {/* Left Panel - Login Form */}
      <div className="flex flex-col justify-center px-8 sm:px-16 md:px-24 lg:px-32 bg-[#FAF8F2] relative min-h-[100dvh] py-12 lg:py-0">
        <div className="w-full max-w-sm mx-auto">
          <div className="mb-6">
            <div className="mb-6">
              <Logo width={200} disableLink className="justify-start" />
            </div>
            <h1 className="text-3xl font-serif text-[#1A1A1A] mb-2">Welcome</h1>
            <p className="text-[#757575] text-sm">
              Please enter your details to access your dashboard.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-medium text-[#1A1A1A]">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="h-10 rounded-md border-[#D9D9D9] bg-white px-3 text-sm placeholder:text-[#888888] focus-visible:ring-1 focus-visible:ring-[#999999] focus-visible:border-[#999999]"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-xs font-medium text-[#1A1A1A]">
                  Password
                </Label>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="h-10 rounded-md border-[#D9D9D9] bg-white px-3 pr-10 text-sm placeholder:text-[#888888] focus-visible:ring-1 focus-visible:ring-[#999999] focus-visible:border-[#999999]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#1A1A1A] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              <div className="flex justify-end pt-0.5">
                <Link
                  href="/forgot-password"
                  className="text-xs text-[#757575] hover:text-[#1A1A1A] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-2.5 text-xs text-red-600 border border-red-100">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-[70%] h-10 rounded-md bg-[#3F4A36] hover:bg-[#2E3324] text-white text-sm font-medium transition-all duration-200 shadow-sm mt-2"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>


          </form>


        </div>
      </div>

      {/* Right Panel - Image */}
      <div className="hidden lg:block relative bg-[#2E3324] overflow-hidden">
        <Image
          src="/images/login-right.png"
          alt="Login Visual"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}