import { ArrowBigRight, CircleCheck } from 'lucide-react'

import Link from 'next/link'
import React from 'react'
import { FC, RefAttributes } from 'react'
interface ToolCardProps {
  icon: React.ElementType
  iconAlt: string
  title: string
  description: string
  features: string[]
  cardColor: string
  linkPath: string
}

export const ToolCard: React.FC<ToolCardProps> = ({
  icon,
  iconAlt,
  title,
  description,
  features,
  cardColor,
  linkPath,
}) => {
  const IconComponent = icon
  const iconElement = <IconComponent aria-hidden='true' role='img' aria-label={iconAlt} />

  return (
    <div className='flex flex-col items-start p-8 rounded-[28px] bg-csLight shadow-sm transition-shadow hover:shadow-md'>
      <div className='flex items-center gap-3 mb-4'>
        <div className={`rounded-md p-2 ${cardColor}`}>{iconElement}</div>
        <h4 className='text-xl text-csBlue font-semibold font-sans'>{title}</h4>
      </div>

      <p className='text-lg text-csGrey font-poppins font-normal mb-6'>{description}</p>

      <div className='block w-full h-[1px] bg-slate-200 mb-6'></div>

      <ul className='space-y-4 w-full mb-6'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center gap-3 text-csBlue font-poppins'>
            <span className={`flex items-center justify-center p-1.5 rounded-full ${cardColor}`}>
              <CircleCheck size={16} aria-hidden='true' />
            </span>
            <span className='text-lg'>{feature}</span>
          </li>
        ))}
      </ul>

      <div className='mt-auto pt-2'>
        <Link
          href={linkPath}
          className={`group flex items-center gap-2 text-csBlue hover:underline transition-all font-medium`}
        >
          <span>Learn more</span>
          <ArrowBigRight className='group-hover:translate-x-1 transition-transform' />
        </Link>
      </div>
    </div>
  )
}
