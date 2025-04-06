import React from 'react'
import classNames from 'classnames'

interface ProgressBarProps {
  value: number
  max: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'gold'
  className?: string
  labelClassName?: string
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  showLabel = false,
  size = 'md',
  color = 'primary',
  className,
  labelClassName,
}) => {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100)

  const heightMap = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  }

  const colorMap = {
    primary: 'bg-primary-600',
    secondary: 'bg-secondary-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-500',
    danger: 'bg-red-600',
    gold: 'bg-gold',
  }

  return (
    <div className={classNames('w-full', className)}>
      <div className={classNames('w-full bg-dark-200 dark:bg-dark-700 rounded-full overflow-hidden', heightMap[size])}>
        <div
          className={classNames('transition-all duration-300 rounded-full', colorMap[color])}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {showLabel && (
        <div className={classNames('text-xs mt-1 text-dark-600 dark:text-dark-400', labelClassName)}>
          {value} / {max}
        </div>
      )}
    </div>
  )
}
