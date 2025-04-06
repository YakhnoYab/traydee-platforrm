export enum UserRole {
  STUDENT = 'student',
  EXPERT = 'expert',
  ADMIN = 'admin',
}

export interface IUser {
  id: string
  name: string
  email: string
  role: UserRole
  level: number
  experience: number
  maxExperience: number
  gold: number
  avatar: string
  preferences: {
    theme: 'light' | 'dark'
    notifications: boolean
  }
}
