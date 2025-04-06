'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardBody } from '@/shared/ui/Card/Card'
import { ProgressBar } from '@/shared/ui/ProgressBar/ProgressBar'
import { Badge } from '@/shared/ui/Badge/Badge'
import { useUserStore } from '@/shared/store/store'

export const UserProfile: React.FC = () => {
  const { user } = useUserStore()

  return (
    <Card className='overflow-hidden'>
      <div className='h-24 bg-gradient-to-r from-primary-600 to-secondary-600'></div>

      <div className='px-6 pb-6'>
        <div className='flex flex-col sm:flex-row items-center sm:items-end -mt-12 mb-4'>
          <div className='relative h-24 w-24 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-lg'>
            <Image src={user.avatar} alt={user.name} fill className='object-cover' />
          </div>

          <div className='mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left'>
            <h2 className='text-xl font-bold text-dark-900 dark:text-white'>{user.name}</h2>
            <div className='flex items-center justify-center sm:justify-start mt-1 space-x-2'>
              <Badge variant='primary' size='md'>
                Level {user.level}
              </Badge>
              <Badge variant={user.role === 'expert' ? 'gold' : 'secondary'} size='md'>
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </Badge>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <p className='text-sm font-medium text-dark-700 dark:text-dark-300 mb-2'>Experience</p>
            <ProgressBar value={user.experience} max={user.maxExperience} showLabel size='lg' color='primary' />
          </div>

          <div>
            <p className='text-sm font-medium text-dark-700 dark:text-dark-300 mb-2'>Gold Balance</p>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-5 h-5 text-gold mr-2'
              >
                <circle cx='12' cy='12' r='10'></circle>
                <path d='M8 14s1.5 2 4 2 4-2 4-2'></path>
                <line x1='9' y1='9' x2='9.01' y2='9'></line>
                <line x1='15' y1='9' x2='15.01' y2='9'></line>
              </svg>
              <span className='text-lg font-semibold text-dark-900 dark:text-white'>{user.gold}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
