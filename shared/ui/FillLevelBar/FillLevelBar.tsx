export interface IFillLevelBarProps {
  maxLvl: number
  currentLvl: number
  tone?: 'positive' | 'negative' | 'neutral'
}

export const FillLevelBar = ({ maxLvl, currentLvl, tone }: IFillLevelBarProps) => {
  return (
    <div className=''>
      {new Array(maxLvl).fill(0).map((_: number, index: number) => {
        return <span key={index} className=''></span>
      })}
    </div>
  )
}
