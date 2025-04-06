import React from 'react'
import classNames from 'classnames'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hoverable?: boolean
  bordered?: boolean
  padding?: 'none' | 'small' | 'medium' | 'large'
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  onClick,
  hoverable = true,
  bordered = false,
  padding = 'medium',
}) => {
  const paddingMap = {
    none: 'p-0',
    small: 'p-2',
    medium: 'p-4',
    large: 'p-6',
  }

  const cardClasses = classNames(
    'bg-white dark:bg-dark-800 rounded-xl transition-all duration-300',
    {
      'shadow-card': !bordered,
      'hover:shadow-card-hover': hoverable && !bordered,
      'border border-dark-200 dark:border-dark-700': bordered,
      'cursor-pointer': !!onClick,
    },
    paddingMap[padding],
    className,
  )

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return <div className={classNames('mb-4', className)}>{children}</div>
}

interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return (
    <div className={classNames('mt-4 pt-4 border-t border-dark-200 dark:border-dark-700', className)}>{children}</div>
  )
}
