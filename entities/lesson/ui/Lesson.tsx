import classNames from 'classnames'
import { ILesson } from '../model/types'

export interface ILessonProps {
  lesson: ILesson
}

export const Lesson = ({ lesson }: ILessonProps) => {
  const { title, description, stepsAmount, stepsCompleted, maxExperience, experienceGained, status } = lesson

  // Status badge styling using classnames
  const statusBadgeClasses = classNames('px-2 py-1 rounded-md text-xs font-medium border', {
    'bg-green-100 text-green-800 border-green-200': status === 'completed',
    'bg-blue-100 text-blue-800 border-blue-200': status === 'started',
    'bg-gray-100 text-gray-800 border-gray-200': status === 'unlocked',
    'bg-gray-100 text-gray-400 border-gray-200': status === 'locked',
  })

  // Card classes with conditional opacity for locked status
  const cardClasses = classNames('bg-white rounded-lg border shadow-sm overflow-hidden mb-3', {
    'opacity-60': status === 'locked',
  })

  // Progress calculation
  const progressPercentage = (stepsCompleted / stepsAmount) * 100
  const xpProgressPercentage = (experienceGained / maxExperience) * 100

  return (
    <div className={cardClasses}>
      <div className='p-4'>
        <div className='flex justify-between items-start mb-2'>
          <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>
          <span className={statusBadgeClasses}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
        </div>

        <p className='text-sm text-gray-600 mb-3'>{description}</p>

        <div className='flex justify-between mb-1 text-xs text-gray-500'>
          <span>
            Steps: {stepsCompleted}/{stepsAmount}
          </span>
          <span>
            XP: {experienceGained}/{maxExperience}
          </span>
        </div>

        <div className='grid grid-cols-2 gap-2'>
          {/* Steps Progress */}
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div className='bg-purple-500 h-2 rounded-full' style={{ width: `${progressPercentage}%` }}></div>
          </div>

          {/* XP Progress */}
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div className='bg-yellow-500 h-2 rounded-full' style={{ width: `${xpProgressPercentage}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
