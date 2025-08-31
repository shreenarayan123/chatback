import { create } from 'zustand'

interface User {
  id: string
  name: string
  email: string
  image: string
}

interface authStoreType {
  isAuthenticated: boolean
  user: User | null

  setAuth: (userData: { isAuthenticated: boolean; user: User | null }) => void
  logout: () => void
}

export const useAuthStore = create<authStoreType>((set) => ({
  isAuthenticated: false,
  user: null,
  setAuth: (authData) => set(authData),
  logout: () => set({ isAuthenticated: false, user: null }),
}))
