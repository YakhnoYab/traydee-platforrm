import { create } from 'zustand'
import { ICourse } from './types'
import { coursesList } from '@/mockData'

interface ICourseStore {
  courses: ICourse[]
}

export const useCourseStore = create<ICourseStore>(set => ({
  courses: coursesList,
}))
