import classNames from 'classnames'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface IButtonProps {
  children: React.ReactNode | string
  btnType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'secondary' | 'reject'
  className?: string
}

export const Button = ({
  children,
  btnType = 'button',
  disabled = false,
  size = 'md',
  variant = 'primary',
  className,
}: IButtonProps) => {
  const buttonClasses = classNames(
    'inline-flex items-center justify-center font-semibold rounded-lg focus:outline-none focus:ring transition duration-150',
    {
      'px-2 py-1 text-sm': size === 'sm',
      'px-4 py-2 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
      'px-8 py-4 text-xl': size === 'xl',
      'bg-csBlue text-csLight hover:bg-csBgBlueLight hover:text-csLightBrightest focus:bg-csGrey':
        variant === 'primary',
      'bg-csLight text-csBlue hover:bg-csBgBlueLight hover:text-csLight focus:bg-csGrey': variant === 'secondary',
      'bg-csReject text-csLight hover:bg-csRejectHover focus:bg-csGrey': variant === 'reject',
      'bg-gray-300 text-gray-500 cursor-not-allowed': disabled,
      className,
    },
  )
  return (
    <button type={btnType} className={buttonClasses} disabled={disabled} aria-disabled={disabled}>
      {children}
    </button>
  )
}
