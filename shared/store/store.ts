// 'use client'

// import { create } from 'zustand'
// import {
//   User,
//   Course,
//   BlogArticle,
//   NewsItem,
//   ContentType,
//   UserRole,
//   DifficultyLevel,
//   LessonStatus,
// } from '@/shared/lib/types'
// import { initialUser } from '@/mockData'
// import { initialCourses } from '@/mockData'
// import { initialBlogArticles } from '@/mockData'
// import { initialNewsItems } from '@/mockData'

// // Define store state interface
// interface AppState {
//   user: User
//   courses: Course[]
//   blogArticles: BlogArticle[]
//   newsItems: NewsItem[]
//   activeNewsFilters: ContentType[]

//   // Actions
//   updateUser: (userData: Partial<User>) => void
//   toggleCourseExpand: (courseId: string) => void
//   completeLesson: (courseId: string, lessonId: string) => void
//   toggleTheme: () => void
//   toggleNewsFilter: (filter: ContentType) => void
//   setActiveNewsFilters: (filters: ContentType[]) => void
// }

// // Create store
// export const useAppStore = create<AppState>(set => ({
//   user: initialUser,
//   courses: initialCourses,
//   blogArticles: initialBlogArticles,
//   newsItems: initialNewsItems,
//   activeNewsFilters: [ContentType.NEWS, ContentType.ARTICLE, ContentType.PROMOTION],

//   // Action implementations
//   updateUser: userData =>
//     set(state => ({
//       user: { ...state.user, ...userData },
//     })),

//   toggleCourseExpand: courseId =>
//     set(state => ({
//       courses: state.courses.map(course =>
//         course.id === courseId ? { ...course, expanded: !course.expanded } : course,
//       ),
//     })),

//   completeLesson: (courseId, lessonId) =>
//     set(state => ({
//       courses: state.courses.map(course =>
//         course.id === courseId
//           ? {
//               ...course,
//               lessons: course.lessons.map(lesson =>
//                 lesson.id === lessonId ? { ...lesson, status: LessonStatus.COMPLETED } : lesson,
//               ),
//             }
//           : course,
//       ),
//     })),

//   toggleTheme: () =>
//     set(state => ({
//       user: {
//         ...state.user,
//         preferences: {
//           ...state.user.preferences,
//           theme: state.user.preferences.theme === 'light' ? 'dark' : 'light',
//         },
//       },
//     })),

//   toggleNewsFilter: filter =>
//     set(state => {
//       const isActive = state.activeNewsFilters.includes(filter)

//       if (isActive) {
//         // Remove the filter if it's the only one active
//         if (state.activeNewsFilters.length === 1) {
//           return { activeNewsFilters: [filter] }
//         }
//         // Otherwise, remove the filter from the active filters
//         return {
//           activeNewsFilters: state.activeNewsFilters.filter(f => f !== filter),
//         }
//       } else {
//         // Add the filter to active filters
//         return {
//           activeNewsFilters: [...state.activeNewsFilters, filter],
//         }
//       }
//     }),

//   setActiveNewsFilters: filters =>
//     set({
//       activeNewsFilters: filters,
//     }),
// }))

// // Helper hooks for each entity
// export const useUserStore = () => {
//   const { user, updateUser, toggleTheme } = useAppStore()
//   return { user, updateUser, toggleTheme }
// }

// export const useCourseStore = () => {
//   const { courses, toggleCourseExpand, completeLesson } = useAppStore()
//   return { courses, toggleCourseExpand, completeLesson }
// }

// export const useBlogStore = () => {
//   const { blogArticles } = useAppStore()
//   return { blogArticles }
// }

// export const useNewsStore = () => {
//   const { newsItems, activeNewsFilters, toggleNewsFilter, setActiveNewsFilters } = useAppStore()

//   const filteredNewsItems = newsItems.filter(item => activeNewsFilters.includes(item.type as ContentType))

//   return {
//     newsItems,
//     filteredNewsItems,
//     activeNewsFilters,
//     toggleNewsFilter,
//     setActiveNewsFilters,
//   }
// }
