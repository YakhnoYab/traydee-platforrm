import { create } from 'zustand'
import { IUser } from './types'
import { initialUser } from '@/mockData'

interface UserState {
  user: IUser
  updateUser: (userData: Partial<IUser>) => void
  toggleTheme: () => void
  toggleNotifications: () => void
}

export const useUserStore = create<UserState>(set => ({
  user: initialUser,

  updateUser: userData =>
    set(state => ({
      user: { ...state.user, ...userData },
    })),
  toggleTheme: () =>
    set(state => ({
      user: {
        ...state.user,
        preferences: {
          ...state.user.preferences,
          theme: state.user.preferences.theme === 'light' ? 'dark' : 'light',
        },
      },
    })),
  toggleNotifications: () =>
    set(state => ({
      user: {
        ...state.user,
        preferences: {
          ...state.user.preferences,
          notifications: !state.user.preferences.notifications,
        },
      },
    })),
}))
