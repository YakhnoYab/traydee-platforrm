'use client'

import { BookOpenCheck, Clock4 } from 'lucide-react'
import { ICourse } from '../model/types'
import { AnimatedDropdown } from '@/shared/ui/AnimatiedDropdown/AnimatedDropdown'
import { ILesson, Lesson } from '@/entities/lesson'
import { useDropdownContext } from '@/shared/context/DropdownContext'
import { useClickOutside } from '@/shared/hooks/useClickOutside'
import { useRef } from 'react'
import classNames from 'classnames'
interface ICourseProps {
  course: ICourse
}

export function Course({ course }: ICourseProps) {
  const { id, title, description, lessonsCount, difficulty, maxExperiencePoints, experienceGained } = course

  const difficultyBadgeClasses = classNames('px-3 py-1 rounded-full text-sm font-medium', {
    'bg-green-100 text-green-800': difficulty.toLowerCase() === 'beginner',
    'bg-yellow-100 text-yellow-800': difficulty.toLowerCase() === 'intermediate',
    'bg-orange-100 text-orange-800': difficulty.toLowerCase() === 'advanced',
    'bg-red-100 text-red-800': difficulty.toLowerCase() === 'expert',
    'bg-gray-100 text-gray-800': !['beginner', 'intermediate', 'advanced', 'expert'].includes(difficulty.toLowerCase()),
  })

  const progressPercentage = (experienceGained / maxExperiencePoints) * 100

  const { openDropdownId, setOpenDropdownId } = useDropdownContext()
  const dropdownId = course.id
  const isOpen = openDropdownId === dropdownId

  const cardRef = useRef<HTMLDivElement>(null)
  useClickOutside(cardRef, () => setOpenDropdownId(isOpen ? null : dropdownId), isOpen)

  const handleExpandCourse = () => {
    setOpenDropdownId(isOpen ? null : dropdownId)
  }

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg mb-4'>
      <div className='cursor-pointer p-6' ref={cardRef} onClick={handleExpandCourse}>
        <div className='flex justify-between items-start mb-2'>
          <h2 className='text-xl font-bold text-gray-800'>{title}</h2>
          <span className={difficultyBadgeClasses}>{difficulty}</span>
        </div>

        <p className='text-gray-600 mb-4'>{description}</p>

        <div className='flex flex-wrap gap-4 text-sm text-gray-500'>
          <div className='flex items-center'>
            <BookOpenCheck className='h-5 w-5 mr-1' />
            {lessonsCount} Lessons
          </div>
          <div className='flex items-center'>
            <Clock4 className='h-5 w-5 mr-1' />
            {maxExperiencePoints} XP
          </div>
        </div>

        <div className='mt-4'>
          <div className='flex justify-between mb-1'>
            <span className='text-sm font-medium text-gray-700'>Progress</span>
            <span className='text-sm font-medium text-gray-700'>
              {experienceGained}/{maxExperiencePoints} XP
            </span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2.5'>
            <div className='bg-blue-600 h-2.5 rounded-full' style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
      </div>

      <AnimatedDropdown content={<LessonsList lessons={course.lessons} />} id={dropdownId} />
    </div>
  )
}

interface ILessonsListProps {
  lessons: ILesson[]
}

const LessonsList = ({ lessons }: ILessonsListProps) => {
  return (
    <ul className='flex flex-col gap-2 items-center'>
      {lessons.map((lesson: ILesson, index: number) => {
        return (
          <li key={index} className='w-full p-1 bg-lime-500 border-[0.5px] border-gray-200 rounded-lg'>
            <Lesson lesson={lesson} />
          </li>
        )
      })}
    </ul>
  )
}
