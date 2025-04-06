interface ILesson {
  id: string
  title: string
  description: string
  stepsAmount: number
  stepsCompleted: number
  experienceGained: number
  maxExperience: number
  status: 'completed' | 'started' | 'unlocked' | 'locked'
}

export type { ILesson }
