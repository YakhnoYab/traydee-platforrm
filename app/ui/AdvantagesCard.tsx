import { CreditCard, Bot, ChartLine, BrainCircuit } from 'lucide-react'
export const advantages: IAdvantagesCardProps[] = [
  {
    Icon: CreditCard,
    width: 40,
    height: 40,
    stressedInfo: 'No card',
    textInfo: 'required',
  },
  {
    Icon: Bot,
    width: 40,
    height: 40,
    stressedInfo: 'AI',
    textInfo: 'trading',
  },
  {
    Icon: BrainCircuit,
    width: 40,
    height: 40,
    stressedInfo: '43+',
    textInfo: 'courses',
  },
  {
    Icon: ChartLine,
    width: 40,
    height: 40,
    stressedInfo: 'Charts',
    textInfo: 'integration',
  },
]
interface IAdvantagesCardProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  width?: number
  height?: number
  className?: string
  stressedInfo: string
  textInfo: string
}

export const AdvantagesCard = ({ Icon, width, height, className, stressedInfo, textInfo }: IAdvantagesCardProps) => {
  return (
    <div className='flex items-center flex-col md:flex-row gap-2'>
      <div className='flex justify-center items-center p-1 size-10 rounded-lg bg-csBgGreen'>
        <Icon height={height || 40} width={width || 40} className={className} />
      </div>
      <p className='flex items-center flex-wrap flex-col md:flex-row gap-1 md:gap-0 text-white'>
        <b className='text-xs xsm:text-sm lg:text-lg xl:text-xl'>{stressedInfo}&nbsp;</b>
        <span className='text-xs xsm:text-sm lg:text-lg xl:text-xl'>{textInfo}</span>
      </p>
    </div>
  )
}
