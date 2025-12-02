"use client"

import { Bell } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { useNotificationStore } from "@/stores/notificationStore"
import { formatDistanceToNow } from "date-fns"

export interface NotificationBellProps {
  className?: string
}

export function NotificationBell({ className }: NotificationBellProps) {
  const router = useRouter()
  const { notifications, unreadCount, markAsRead } = useNotificationStore()
  const hasUnread = unreadCount > 0

  // Get latest 3 notifications
  const recentNotifications = notifications.slice(0, 3)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            // Base styles from Figma
            "relative flex h-9 w-9 items-center justify-center rounded-[10px] transition-colors",
            "hover:bg-gray-100",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            className
          )}
          aria-label={`Notifications${hasUnread ? ` (${unreadCount} unread)` : ""}`}
        >
          <Bell size={16} className="text-gray-600" />
          {/* Red notification dot (matches Figma design) */}
          {hasUnread && (
            <div
              className="absolute right-[6px] top-[6px] h-2 w-2 rounded-full bg-alert-red"
              aria-hidden="true"
            />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {hasUnread && (
            <span className="text-xs font-normal text-muted-foreground">
              {unreadCount} unread
            </span>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {recentNotifications.length > 0 ? (
          <>
            {recentNotifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className="flex flex-col items-start gap-1 py-3 cursor-pointer"
                onClick={() => {
                  if (!notification.isRead) {
                    markAsRead(notification.id)
                  }
                }}
              >
                <div className="flex w-full items-start justify-between">
                  <span className={cn("font-medium", !notification.isRead && "text-sidebar-primary")}>
                    {notification.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {notification.message}
                </p>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="justify-center text-sm"
              onClick={() => router.push("/notifications")}
            >
              View all notifications
            </DropdownMenuItem>
          </>
        ) : (
          <div className="py-6 text-center text-sm text-muted-foreground">
            No new notifications
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NotificationBell
