import { ILesson } from '../../lesson'

interface ICourse {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  maxExperiencePoints: number
  experienceGained: number
  lessonsCount: number
  lessons: ILesson[]
}

export type { ICourse }
