import { Button } from '@/shared/ui/Button/Button'
import { Header } from '@/widgets/header'
import { ChartCandlestick, ArrowRight, BriefcaseBusiness } from 'lucide-react'
import BybitLogo from '/public/images/exchanges-logos/bybit-logo.svg'
import BinanceLogo from '/public/images/exchanges-logos/binance-logo.svg'
import BitgetLogo from '/public/images/exchanges-logos/bitget-logo.svg'
import GateioLogo from '/public/images/exchanges-logos/gateio-logo.svg'
import Kucoinlogo from '/public/images/exchanges-logos/kucoin-logo.svg'
import OkxLogo from '/public/images/exchanges-logos/okx-logo.svg'
import HtxLogo from '/public/images/exchanges-logos/htx-logo.svg'
import KrakenLogo from '/public/images/exchanges-logos/kraken-logo.svg'
import BitrueLogo from '/public/images/exchanges-logos/bitrue-logo.svg'
import MexcLogo from '/public/images/exchanges-logos/mexc-logo.svg'
import Link from 'next/link'
import { Carousel } from '@/shared/ui/Carousel/Carousel'
import { ToolCard } from './ui/ToolCard'
import { advantages, AdvantagesCard } from './ui/AdvantagesCard'

const carouselItems = [
  {
    image: BybitLogo,
    alt: 'Bybit logo',
    linkPath: '#',
    itemWidth: 100,
    itemHeight: 100,
  },
  {
    image: BitgetLogo,
    alt: 'Bitget logo',
    linkPath: '#',
    itemWidth: 150,
    itemHeight: 100,
  },
  {
    image: GateioLogo,
    alt: 'Gateio logo',
    linkPath: '#',
    itemWidth: 85,
    itemHeight: 100,
  },
  {
    image: BinanceLogo,
    alt: 'Binance logo',
    linkPath: '#',
    itemWidth: 180,
    itemHeight: 180,
  },
  {
    image: OkxLogo,
    alt: 'Okx logo',
    linkPath: '#',
    itemWidth: 100,
    itemHeight: 100,
  },
  {
    image: HtxLogo,
    alt: 'Htx logo',
    linkPath: '#',
    itemWidth: 60,
    itemHeight: 80,
  },
  {
    image: Kucoinlogo,
    alt: 'Kucoin logo',
    linkPath: '#',
    itemWidth: 160,
    itemHeight: 100,
  },
  {
    image: KrakenLogo,
    alt: 'Kraken logo',
    linkPath: '#',
    itemWidth: 90,
    itemHeight: 100,
  },
  {
    image: BitrueLogo,
    alt: 'Bitrue logo',
    linkPath: '#',
    itemWidth: 100,
    itemHeight: 100,
  },
  {
    image: MexcLogo,
    alt: 'Mexc logo',
    linkPath: '#',
    itemWidth: 100,
    itemHeight: 100,
  },
]

const toolsCardItems = [
  {
    icon: ChartCandlestick,
    iconAlt: 'Chart Icon',
    title: 'Technical Analysis Tool',
    description: 'A tool that helps you analyze the market and make better trading decisions',
    feautures: ['Real-time data', 'Customizable indicators', 'Advanced charting tools'],
    cardColor: 'bg-csBgGreen',
    linkPath: '#',
  },
  {
    icon: BriefcaseBusiness,
    iconAlt: 'Briefcase Icon',
    title: 'Asses Management Tool',
    description: 'A tool to help you analyze your cryptocurrency portfolio and make data-driven decisions',
    feautures: ['Real-time data', 'Customizable indicators', 'Advanced charting tools'],
    cardColor: 'bg-csBgGreen',
    linkPath: '#',
  },
  {
    icon: ChartCandlestick,
    iconAlt: 'Chart Icon',
    title: 'Technical Analysis Tool',
    description: 'A tool that helps you analyze the market and make better trading decisions',
    feautures: ['Real-time data', 'Customizable indicators', 'Advanced charting tools'],
    cardColor: 'bg-csBgGreen',
    linkPath: '#',
  },
  {
    icon: ChartCandlestick,
    iconAlt: 'Chart Icon',
    title: 'Technical Analysis Tool',
    description: 'A tool that helps you analyze the market and make better trading decisions',
    feautures: ['Real-time data', 'Customizable indicators', 'Advanced charting tools'],
    cardColor: 'bg-csBgGreen',
    linkPath: '#',
  },
  {
    icon: ChartCandlestick,
    iconAlt: 'Chart Icon',
    title: 'Technical Analysis Tool',
    description: 'A tool that helps you analyze the market and make better trading decisions',
    feautures: ['Real-time data', 'Customizable indicators', 'Advanced charting tools'],
    cardColor: 'bg-csBgGreen',
    linkPath: '#',
  },
  {
    icon: ChartCandlestick,
    iconAlt: 'Chart Icon',
    title: 'Technical Analysis Tool',
    description: 'A tool that helps you analyze the market and make better trading decisions',
    feautures: ['Real-time data', 'Customizable indicators', 'Advanced charting tools'],
    cardColor: 'bg-csBgGreen',
    linkPath: '#',
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-csDark'>
        <div className='pt-10 md:pt-14 pb-10 md:pb-12 px-6'>
          <div className='flex flex-col items-center mb-14'>
            <Link
              href={'#'}
              className='flex items-center gap-2 p-2 mb-5 xsm:mb-6 max-w-96 sm:max-w-120 bg-white rounded-xl'
            >
              <div className='px-2 py-1 bg-csBlueLight rounded-md text-white font-sans text-[8px] xsm:text-[14px]'>
                New
              </div>
              <div className='flex-1 text-primaryDarkBlack font-mono text-[10px] xsm:text-[16px] truncate'>
                Introducing: Technical Analysis Tool
              </div>
              <ArrowRight size={20} />
            </Link>
            <h1 className='mb-6 text-5xl md:text-6xl lg:text-7xl text-center text-white font-poppins'>
              Learn Trading with Pro Tools
            </h1>
            <h3 className='mb-8 xsm:mb-10 text-sm xsm:text-md md:text-lg xl:text-xl text-csGrey'>
              Trade Smarter, Learn Faster, Earn More
            </h3>
            <Button size='xl' variant='secondary'>
              Try Traydee for free
            </Button>
          </div>
          <div className='flex items-center justify-between mb-12 [&>*]:basis-1/4 [&>*]:place-content-center container mx-auto'>
            {advantages.map((advantage, index) => {
              return (
                <AdvantagesCard
                  key={index}
                  Icon={advantage.Icon}
                  width={advantage.width}
                  height={advantage.height}
                  stressedInfo={advantage.stressedInfo}
                  textInfo={advantage.textInfo}
                  className='text-white'
                />
              )
            })}
          </div>
          <div className='container mx-auto mb-10'>
            <div className='w-full h-120 rounded-lg bg-csGrey'></div>
          </div>
          <h3 className='container mx-auto text-center uppercase text-csLight'>
            Trusted by 9000 traders in 120+ countries
          </h3>
        </div>
        <div className='container mx-auto'>
          <Carousel isMoving={true} size='sm' speed='slow' axis='x' edges='blur' carouselItems={carouselItems} />
        </div>
        <div className='container mx-auto px-6 py-10 text-center'>
          <h2 className='mb-4 text-white text-xl font-poppins'>
            A platform that accompanies you throughout your trading journey
          </h2>
          <p className='mb-8 xsm:mb-10 text-sm xsm:text-md md:text-lg xl:text-xl text-csGrey font-poppins'>
            Each tool on our platform is a solution to a specific trading problem. When used together, they&apos;re a
            gamechanger.
          </p>
          <Button size='xl' variant='secondary'>
            Automate trading for free
          </Button>
        </div>
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mb-8 px-6 py-10'>
          {toolsCardItems.map((toolCardItem, index) => {
            return (
              <ToolCard
                key={index}
                icon={toolCardItem.icon}
                iconAlt={toolCardItem.iconAlt}
                title={toolCardItem.title}
                description={toolCardItem.description}
                features={toolCardItem.feautures}
                cardColor={toolCardItem.cardColor}
                linkPath={toolCardItem.linkPath}
              />
            )
          })}
        </div>
        <div className='container mx-auto px-6 max-w-6xl'>
          <div className='rounded-xl border border-csLight p-8 md:p-10 text-center shadow-sm'>
            <div className='max-w-3xl mx-auto mb-8'>
              <h2 className='text-2xl md:text-3xl font-bold text-csBlue mb-4'>
                All the news that matters to you in one place
              </h2>
              <p className='text-lg text-csGrey mb-6'>
                Stay updated with the latest trends, insights, and breaking news from the top sources in the crypto
                world—all in one convenient place. Our platform gathers and curates news from the most trusted names in
                the industry, ensuring you never miss an important update.
              </p>
              <Link
                href='/news'
                className='inline-flex items-center gap-2 px-6 py-3 bg-csBlue text-white rounded-lg font-medium transition-all hover:bg-opacity-90'
              >
                Read the latest
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14M12 5l7 7-7 7' />
                </svg>
              </Link>
            </div>

            <div className='space-y-6'>
              <Carousel isMoving={true} size='sm' speed='slow' axis='x' edges='blur' carouselItems={carouselItems} />
              <Carousel isMoving={true} size='sm' speed='slow' axis='x' edges='blur' carouselItems={carouselItems} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
