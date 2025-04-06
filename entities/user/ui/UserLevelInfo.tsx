'use client'

import React from 'react'
import Image from 'next/image'
import { ProgressBar } from '@/shared/ui/ProgressBar/ProgressBar'

interface UserLevelInfoProps {
  level: number
  experience: number
  maxExperience: number
  gold: number
  avatar: string
}

export const UserLevelInfo: React.FC<UserLevelInfoProps> = ({ level, experience, maxExperience, gold, avatar }) => {
  return (
    <div className='flex items-center space-x-3'>
      <div className='hidden md:flex flex-col mr-4'>
        <div className='flex items-center mb-1'>
          <span className='text-xs font-medium text-dark-500 dark:text-dark-400 mr-2'>Level {level}</span>
          <div className='w-24'>
            <ProgressBar value={experience} max={maxExperience} size='sm' />
          </div>
        </div>
        <div className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-3 h-3 text-gold mr-1'
          >
            <circle cx='12' cy='12' r='10'></circle>
            <line x1='8' y1='12' x2='16' y2='12'></line>
          </svg>
          <span className='text-xs font-medium text-dark-500 dark:text-dark-400'>{gold}</span>
        </div>
      </div>

      <div className='relative h-10 w-10 rounded-full overflow-hidden border-2 border-primary-200 dark:border-primary-800'>
        <Image src={avatar} alt='User avatar' fill className='object-cover' />
      </div>
    </div>
  )
}
