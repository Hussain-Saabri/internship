# Dashboard Layout Usage Guide

## Quick Start

### 1. Basic Dashboard Page

```tsx
// app/(dashboard)/my-page/page.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MyPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>My Page</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Your content here</p>
        </CardContent>
      </Card>
    </div>
  )
}
```

The layout is automatically applied to all pages in `app/(dashboard)/` !

---

## 2. Custom Layout Configuration

### Hide Platform Selector

```tsx
// app/(dashboard)/settings/layout.tsx
import { DashboardLayout } from "@/components/layout/DashboardLayout"

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout
      title="Settings"
      showPlatformSelector={false}  // Hide platform filter
    >
      {children}
    </DashboardLayout>
  )
}
```

### Hide All Filters

```tsx
<DashboardLayout
  showPlatformSelector={false}
  showDatePicker={false}
  showNotifications={false}
>
  {children}
</DashboardLayout>
```

---

## 3. Using Filter Store

### Access Current Filters

```tsx
"use client"

import { useFilterStore } from "@/stores/filterStore"

export default function MyComponent() {
  const { platform, dateRange, city } = useFilterStore()

  return (
    <div>
      <p>Platform: {platform}</p>
      <p>Date Range: {dateRange.start.toDateString()} - {dateRange.end.toDateString()}</p>
      <p>City: {city || "All"}</p>
    </div>
  )
}
```

### Update Filters Programmatically

```tsx
import { useFilterStore } from "@/stores/filterStore"

export default function MyComponent() {
  const { setPlatform, setDateRange } = useFilterStore()

  const handleFilterChange = () => {
    setPlatform("blinkit")
    setDateRange(new Date("2025-01-01"), new Date("2025-01-31"))
  }

  return <button onClick={handleFilterChange}>Apply Filters</button>
}
```

---

## 4. Managing Notifications

### Add Notification

```tsx
import { useNotificationStore } from "@/stores/notificationStore"

export default function MyComponent() {
  const { addNotification } = useNotificationStore()

  const handleLowStock = () => {
    addNotification({
      type: "low_stock",
      title: "Low Stock Alert",
      message: "Product ABC123 inventory below 7 days",
      data: { productId: "ABC123", doi: 5 }
    })
  }

  return <button onClick={handleLowStock}>Trigger Alert</button>
}
```

### Mark Notifications as Read

```tsx
import { useNotificationStore } from "@/stores/notificationStore"

export default function NotificationList() {
  const { notifications, markAsRead, markAllAsRead } = useNotificationStore()

  return (
    <div>
      <button onClick={markAllAsRead}>Mark All Read</button>
      {notifications.map((notif) => (
        <div key={notif.id} onClick={() => markAsRead(notif.id)}>
          {notif.title}
        </div>
      ))}
    </div>
  )
}
```

---

## 5. Navigation

### Programmatic Navigation

```tsx
"use client"

import { useRouter } from "next/navigation"

export default function MyComponent() {
  const router = useRouter()

  return (
    <button onClick={() => router.push("/sales")}>
      Go to Sales
    </button>
  )
}
```

### Active Route Detection

```tsx
"use client"

import { usePathname } from "next/navigation"

export default function MyComponent() {
  const pathname = usePathname()
  const isActive = pathname === "/sales"

  return (
    <div className={isActive ? "active" : ""}>
      Sales Page
    </div>
  )
}
```

---

## 6. Authentication

### Check Auth Status

```tsx
"use client"

import { useAuthStore } from "@/stores/authStore"

export default function MyComponent() {
  const { user, isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <div>Please log in</div>
  }

  return <div>Welcome, {user?.name}!</div>
}
```

### Logout

```tsx
import { useAuthStore } from "@/stores/authStore"
import { useRouter } from "next/navigation"

export default function LogoutButton() {
  const { logout } = useAuthStore()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return <button onClick={handleLogout}>Logout</button>
}
```

---

## 7. Styling Pages

### Use Design Tokens

```tsx
import { colors, spacing, borderRadius } from "@/lib/design-tokens"

const styles = {
  container: {
    backgroundColor: colors.sidebar.primary,
    padding: spacing.header.padding.horizontal,
    borderRadius: borderRadius.button,
  }
}
```

### Use Tailwind Classes

```tsx
<div className="bg-sidebar-primary text-white p-6 rounded-xl">
  Styled with Figma colors!
</div>
```

### Platform-Specific Styling

```tsx
<div className="bg-blinkit text-black">Blinkit</div>
<div className="bg-zepto text-white">Zepto</div>
<div className="bg-instamart text-white">Instamart</div>
```

---

## 8. Using Icons

### From Icon Map

```tsx
import { Icon } from "@/lib/icon-map"

export default function MyComponent() {
  return (
    <div>
      <Icon name="dashboard" size={20} />
      <Icon name="sales" size={24} className="text-blue-500" />
    </div>
  )
}
```

### Direct from Lucide

```tsx
import { TrendingUp, Package } from "lucide-react"

export default function MyComponent() {
  return (
    <div>
      <TrendingUp size={20} />
      <Package size={24} className="text-green-500" />
    </div>
  )
}
```

---

## 9. Responsive Design

### Hide on Mobile

```tsx
<div className="hidden md:block">
  Only visible on tablet and up
</div>
```

### Mobile-Specific Layout

```tsx
<div className="flex flex-col md:flex-row gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

### Responsive Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
  <Card>Card 4</Card>
</div>
```

---

## 10. Common Patterns

### KPI Card Grid

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
      <DollarSign className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">₹45,231</div>
      <p className="text-xs text-muted-foreground">+20% from last month</p>
    </CardContent>
  </Card>
</div>
```

### Loading State

```tsx
import { Skeleton } from "@/components/ui/skeleton"

{isLoading ? (
  <Skeleton className="h-32 w-full" />
) : (
  <Card>Your content</Card>
)}
```

### Empty State

```tsx
<div className="flex flex-col items-center justify-center h-64 text-center">
  <Package className="h-12 w-12 text-muted-foreground mb-4" />
  <h3 className="text-lg font-semibold mb-2">No data found</h3>
  <p className="text-sm text-muted-foreground">
    Try adjusting your filters or date range
  </p>
</div>
```

---

## 11. Data Fetching with TanStack Query

### Basic Query

```tsx
import { useQuery } from "@tanstack/react-query"
import { salesApi } from "@/api/sales"
import { useFilterStore } from "@/stores/filterStore"

export default function SalesData() {
  const { platform, dateRange } = useFilterStore()

  const { data, isLoading, error } = useQuery({
    queryKey: ["sales", platform, dateRange],
    queryFn: () => salesApi.getSummary({
      platform,
      start_date: dateRange.start,
      end_date: dateRange.end
    })
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>

  return <div>Sales: {data.total_sales}</div>
}
```

### Auto-Refetch on Filter Change

The query automatically refetches when `platform` or `dateRange` changes!

---

## 12. TypeScript Types

### Component Props

```tsx
import type { HeaderProps } from "@/components/layout/Header"
import type { SidebarProps } from "@/components/layout/Sidebar"
import type { NavItemProps } from "@/components/layout/NavItem"
```

### Data Models

```tsx
import type {
  User,
  Product,
  SalesSummary
} from "@/types/models"
```

### Filter Types

```tsx
import type { Platform } from "@/lib/constants"
```

---

## 🎯 Pro Tips

1. **Always use filterStore** for global filters (platform, date range)
2. **Use TanStack Query** for server state, Zustand for UI state
3. **Prefer composition** over prop drilling
4. **Use design tokens** for consistent spacing/colors
5. **Test responsiveness** at 3 breakpoints (mobile, tablet, desktop)
6. **Add loading states** for better UX
7. **Use TypeScript** to catch errors early

---

## 🐛 Troubleshooting

### Layout not applying?
- Make sure you're inside `app/(dashboard)/` directory
- Check that `layout.tsx` exists in `app/(dashboard)/`

### Filters not working?
- Import from `@/stores/filterStore`
- Use the hook in a client component (`"use client"`)

### Icons not showing?
- Check icon name matches `IconName` type
- Import from `@/lib/icon-map`

### Build errors?
- Run `npm run build` to see TypeScript errors
- Fix any type mismatches

---

## 📚 Further Reading

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Zustand Docs](https://zustand-demo.pmnd.rs/)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [shadcn/ui Docs](https://ui.shadcn.com/)

---

**Happy coding! 🚀**
