import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Notification {
  id: string
  type: "low_stock" | "stockout" | "high_sales" | "payout_discrepancy" | "alert"
  title: string
  message: string
  isRead: boolean
  createdAt: string
  data?: any
}

interface NotificationState {
  notifications: Notification[]
  unreadCount: number
  addNotification: (notification: Omit<Notification, "id" | "isRead" | "createdAt">) => void
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  removeNotification: (id: string) => void
  clearAll: () => void
}

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set, get) => ({
      notifications: [],
      unreadCount: 0,

      addNotification: (notification) => {
        const newNotification: Notification = {
          ...notification,
          id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          isRead: false,
          createdAt: new Date().toISOString(),
        }

        set((state) => ({
          notifications: [newNotification, ...state.notifications],
          unreadCount: state.unreadCount + 1,
        }))
      },

      markAsRead: (id) => {
        set((state) => {
          const notification = state.notifications.find((n) => n.id === id)
          if (!notification || notification.isRead) {
            return state
          }

          return {
            notifications: state.notifications.map((n) =>
              n.id === id ? { ...n, isRead: true } : n
            ),
            unreadCount: Math.max(0, state.unreadCount - 1),
          }
        })
      },

      markAllAsRead: () => {
        set((state) => ({
          notifications: state.notifications.map((n) => ({ ...n, isRead: true })),
          unreadCount: 0,
        }))
      },

      removeNotification: (id) => {
        set((state) => {
          const notification = state.notifications.find((n) => n.id === id)
          const wasUnread = notification && !notification.isRead

          return {
            notifications: state.notifications.filter((n) => n.id !== id),
            unreadCount: wasUnread
              ? Math.max(0, state.unreadCount - 1)
              : state.unreadCount,
          }
        })
      },

      clearAll: () => {
        set({
          notifications: [],
          unreadCount: 0,
        })
      },
    }),
    {
      name: "notification-storage",
      partialize: (state) => ({
        notifications: state.notifications.slice(0, 50), // Keep only last 50
        unreadCount: state.unreadCount,
      }),
    }
  )
)
