import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface ICarouselItem {
  content?: React.ReactNode
  image?: string | StaticImageData
  itemWidth?: number | `${number}`
  itemHeight?: number | `${number}`
  alt: string
  linkPath?: string
}

interface ICarouselProps {
  isMoving: boolean
  width?: number | `${number}` | string
  height?: number | `${number}` | string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  autoPlay?: boolean
  interval?: number
  speed: 'slow' | 'normal' | 'fast'
  axis: 'x' | 'y'
  edges: 'normal' | 'blur' | 'shadow'
  carouselItems: ICarouselItem[]
}

export const Carousel = ({
  isMoving = false,
  width,
  height,
  size = 'md',
  speed = 'normal',
  axis = 'x',
  edges = 'normal',
  carouselItems,
  autoPlay = false,
  interval = 3000,
}: ICarouselProps) => {
  const carouselClasses = classNames(
    `relative flex items-center justify-between overflow-hidden w-[${width}] h-${height}`,
    {
      'flex-col': axis === 'y',
    },
  )

  const carouselItemClasses = classNames(
    `flex items-center justify-center shrink-0 basis-[20%] h-full w-full`,
    {},
  )

  const renderCarouselItem = (item: ICarouselItem, index: number) => {
    const { image, alt, linkPath, content, itemWidth, itemHeight } = item

    const imageComponent = image && (
      <Image
        src={image}
        alt={alt}
        width={itemWidth}
        style={{ height: 'auto' }}
      />
    )

    const contentRes = image ? imageComponent : content

    if (linkPath) {
      return (
        <Link key={index} href={linkPath} className={carouselItemClasses}>
          {contentRes}
        </Link>
      )
    }
    return (
      <div key={index} className={carouselItemClasses}>
        contentRes
      </div>
    )
  }

  return (
    <div className={carouselClasses}>
      {carouselItems.map((item, index) => {
        return renderCarouselItem(item, index)
      })}
      {/* <div className="absolute top-0 left-0 h-full w-1/5 pointer-events-none bg-gradient-to-r from-white/90 to-transparent" />
       <div className="absolute top-0 right-0 h-full w-1/5 pointer-events-none bg-gradient-to-l from-white/90 to-transparent" /> */}
    </div>
  )
}
