'use client'

import React, { useState } from 'react'
import { Card, CardHeader, CardBody } from '@/shared/ui/Card/Card'
import { Button } from '@/shared/ui/Button/Button'
import { useUserStore } from '@/shared/store/store'

export const ProfileSettings: React.FC = () => {
  const { user, updateUser } = useUserStore()

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    notifications: user.preferences.notifications,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    updateUser({
      name: formData.name,
      email: formData.email,
      preferences: {
        ...user.preferences,
        notifications: formData.notifications,
      },
    })

    alert('Profile settings updated successfully!')
  }

  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <h2 className='text-xl font-semibold text-dark-900 dark:text-white'>Account Settings</h2>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1'>
                Display Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                className='w-full px-3 py-2 border border-dark-300 dark:border-dark-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800 dark:text-white'
                required
              />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                className='w-full px-3 py-2 border border-dark-300 dark:border-dark-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800 dark:text-white'
                required
              />
            </div>

            <div className='flex items-center'>
              <input
                type='checkbox'
                id='notifications'
                name='notifications'
                checked={formData.notifications}
                onChange={handleInputChange}
                className='h-4 w-4 text-primary-600 focus:ring-primary-500 border-dark-300 dark:border-dark-700 rounded'
              />
              <label htmlFor='notifications' className='ml-2 block text-sm text-dark-700 dark:text-dark-300'>
                Enable email notifications
              </label>
            </div>

            <Button btnType='submit' variant='primary' className='mt-2'>
              Save Changes
            </Button>
          </form>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h2 className='text-xl font-semibold text-dark-900 dark:text-white'>Appearance</h2>
        </CardHeader>
        <CardBody>
          <div className='space-y-4'>
            <div>
              <p className='text-sm font-medium text-dark-700 dark:text-dark-300 mb-2'>Theme</p>
              <div className='flex space-x-4'>
                <button
                  type='button'
                  className={`flex items-center justify-center px-4 py-2 rounded-md ${
                    user.preferences.theme === 'light'
                      ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 border border-primary-500'
                      : 'bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 border border-transparent'
                  }`}
                  // onClick={() => {
                  //   if (user.preferences.theme !== 'light') {
                  //     toggleTheme()
                  //   }
                  // }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mr-2'
                  >
                    <circle cx='12' cy='12' r='5'></circle>
                    <line x1='12' y1='1' x2='12' y2='3'></line>
                    <line x1='12' y1='21' x2='12' y2='23'></line>
                    <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
                    <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
                    <line x1='1' y1='12' x2='3' y2='12'></line>
                    <line x1='21' y1='12' x2='23' y2='12'></line>
                    <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
                    <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
                  </svg>
                  Light
                </button>

                <button
                  type='button'
                  className={`flex items-center justify-center px-4 py-2 rounded-md ${
                    user.preferences.theme === 'dark'
                      ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 border border-primary-500'
                      : 'bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 border border-transparent'
                  }`}
                  // onClick={() => {
                  //   if (user.preferences.theme !== 'dark') {
                  //     toggleTheme()
                  //   }
                  // }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mr-2'
                  >
                    <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
                  </svg>
                  Dark
                </button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h2 className='text-xl font-semibold text-dark-900 dark:text-white'>Subscription</h2>
        </CardHeader>
        <CardBody>
          <div className='space-y-4'>
            <div className='flex items-center justify-between p-4 border border-dark-200 dark:border-dark-700 rounded-lg bg-dark-50 dark:bg-dark-800'>
              <div>
                <p className='font-medium text-dark-900 dark:text-white'>Current Plan: Free</p>
                <p className='text-sm text-dark-600 dark:text-dark-400'>Access to basic courses and features</p>
              </div>
              <Button variant='primary'>Upgrade</Button>
            </div>

            <div className='rounded-lg border border-primary-200 dark:border-primary-900 p-4 bg-primary-50 dark:bg-primary-900/20'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 p-1 bg-primary-100 dark:bg-primary-800 rounded-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='text-primary-600 dark:text-primary-400'
                  >
                    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                    <polyline points='22 4 12 14.01 9 11.01'></polyline>
                  </svg>
                </div>
                <div className='ml-3'>
                  <h3 className='text-sm font-medium text-primary-800 dark:text-primary-300'>Premium Benefits</h3>
                  <div className='mt-2 text-sm text-primary-700 dark:text-primary-400'>
                    <ul className='list-disc pl-5 space-y-1'>
                      <li>Access to all advanced courses</li>
                      <li>Exclusive expert-led webinars</li>
                      <li>Priority support</li>
                      <li>Ad-free experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
