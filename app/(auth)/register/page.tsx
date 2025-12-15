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

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { setUser, setTokens } = useAuthStore()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation
    if (!name || !email || !companyName || !password || !confirmPassword) {
      setError("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock registration
    const mockUser = {
      id: "user_" + Date.now(),
      name: name,
      email: email,
      role: "owner" as const,
      company_id: "company_" + Date.now(),
    }

    // Mock tokens
    const mockAccessToken = "mock_access_token_" + Date.now()
    const mockRefreshToken = "mock_refresh_token_" + Date.now()

    // Set user and tokens in store (auto-login after registration)
    setUser(mockUser)
    setTokens(mockAccessToken, mockRefreshToken)

    // Redirect to dashboard
    router.push("/")

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-[55%_45%] lg:overflow-hidden overflow-y-auto">
      {/* Left Panel - Register Form */}
      <div className="flex flex-col justify-start pt-16 pb-12 lg:justify-center lg:pt-0 lg:pb-0 px-8 sm:px-16 md:px-24 lg:px-32 bg-[#FAF8F2] relative min-h-[100dvh]">
        <div className="w-full max-w-sm mx-auto">
          <div className="mt-2">
            
            <h1 className="text-3xl text-[#1A1A1A] mb-2 font-bold">Create an account</h1>
            
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-xs font-medium text-[#1A1A1A]">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter Your First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
                className="h-10 rounded-md border-[#D9D9D9] bg-white px-3 text-sm placeholder:text-[#888888] focus-visible:ring-1 focus-visible:ring-[#999999] focus-visible:border-[#999999]"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-medium text-[#1A1A1A]">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="h-10 rounded-md border-[#D9D9D9] bg-white px-3 text-sm placeholder:text-[#888888] focus-visible:ring-1 focus-visible:ring-[#999999] focus-visible:border-[#999999]"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="companyName" className="text-xs font-medium text-[#1A1A1A]">
                Company Name
              </Label>
              <Input
                id="companyName"
                type="text"
                placeholder="Your Company"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                disabled={isLoading}
                className="h-10 rounded-md border-[#D9D9D9] bg-white px-3 text-sm placeholder:text-[#888888] focus-visible:ring-1 focus-visible:ring-[#999999] focus-visible:border-[#999999]"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-xs font-medium text-[#1A1A1A]">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
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
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="confirmPassword" className="text-xs font-medium text-[#1A1A1A]">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="h-10 rounded-md border-[#D9D9D9] bg-white px-3 pr-10 text-sm placeholder:text-[#888888] focus-visible:ring-1 focus-visible:ring-[#999999] focus-visible:border-[#999999]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#1A1A1A] transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
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
              className="w-[70%] h-10 rounded-md bg-[#3F4A36] hover:bg-[#2E3324] text-white text-sm font-medium transition-all duration-200 shadow-sm mt-4"
            >
              {isLoading ? "Creating account..." : "Create account"}
            </Button>

            <div className="flex justify-start pt-2">
              <span className="text-sm text-[#757575]">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#1A1A1A] font-medium hover:underline"
                >
                  Sign in
                </Link>
              </span>
            </div>
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
