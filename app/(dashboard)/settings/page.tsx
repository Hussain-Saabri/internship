"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useAuthStore } from "@/stores/authStore"

export default function SettingsPage() {
  const { user, updateUser } = useAuthStore()

  const [activeTab, setActiveTab] = useState("profile")

  const [name, setName] = useState(user?.name || "")
  const [email, setEmail] = useState(user?.email || "")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [theme, setTheme] = useState("light")
  const [language, setLanguage] = useState("en")

  const [emailNotifications, setEmailNotifications] = useState(true)
  const [dateFormat, setDateFormat] = useState("dd-mm-yyyy")

  const handleProfileUpdate = () => {
    if (user) {
      updateUser({ name, email })
      alert("Profile updated successfully!")
    }
  }

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!")
      return
    }
    if (newPassword.length < 8) {
      alert("Password must be at least 8 characters long!")
      return
    }
    alert("Password changed successfully!")
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  return (
    <div className="space-y-6">

      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* CUSTOM TABS */}
      <div className="flex overflow-x-auto gap-4 border-b pb-2 no-scrollbar">
        {[
          { key: "profile", label: "Profile" },
          { key: "password", label: "Password" },
          { key: "preferences", label: "Preference" },

        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              px-3 py-2 whitespace-nowrap text-gray-500
]
              ${activeTab === tab.key
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT SECTIONS */}

      {activeTab === "profile" && (
        <Card className="border-gray-200 border rounded-[12px] ">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Update your account profile information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" value={user?.role || "N/A"} disabled className="bg-muted" />
            </div>

            <Button onClick={handleProfileUpdate}>Save Changes</Button>
          </CardContent>
        </Card>
      )}

      {activeTab === "password" && (
        <Card className="border border-gray-200 rounded-[12px] ">
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>
              Update your password to keep your account secure.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Current Password</Label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
              />
            </div>

            <div className="space-y-2">
              <Label>New Password</Label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
              />
            </div>

            <div className="space-y-2">
              <Label>Confirm New Password</Label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
              />
            </div>

            <Button onClick={handlePasswordChange}>Update Password</Button>
          </CardContent>
        </Card>
      )}

      {activeTab === "preferences" && (
        <Card className="border border-gray-200 rounded-[12px] ">
          <CardHeader>
            <CardTitle>App Preferences</CardTitle>
            <CardDescription>
              Customize your application preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Theme</Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger>
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Language</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Date Format</Label>
              <Select value={dateFormat} onValueChange={setDateFormat}>
                <SelectTrigger>
                  <SelectValue placeholder="Select date format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                  <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                  <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button>Save Preferences</Button>
          </CardContent>
        </Card>
      )}


    </div>
  )
}

