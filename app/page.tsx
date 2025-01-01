import { Button } from "@/components/shared/ui/Button/Button";
import { Header } from "@/components/widgets/Header/Header";
import {
  ArrowRight02Icon,
  CreditCardIcon,
  RoboticIcon,
  ChartBarLineIcon,
  ElearningExchangeIcon,
} from "hugeicons-react";
import BybitLogo from "/public/images/exchanges-logos/bybit-logo.svg";
import BinanceLogo from "/public/images/exchanges-logos/binance-logo.svg";
import BitgetLogo from "/public/images/exchanges-logos/bitget-logo.svg";
import GateioLogo from "/public/images/exchanges-logos/gateio-logo.svg";
import Kucoinlogo from "/public/images/exchanges-logos/kucoin-logo.svg";
import OkxLogo from "/public/images/exchanges-logos/okx-logo.svg";

const carouselItems = [
  {
    image: BybitLogo,
    alt: "Bybit logo",
    linkPath: "#",
  },
  {
    image: BinanceLogo,
    alt: "Binance logo",
    linkPath: "#",
  },
  {
    image: BitgetLogo,
    alt: "Bitget logo",
    linkPath: "#",
  },
  {
    image: GateioLogo,
    alt: "Gateio logo",
    linkPath: "#",
  },
  {
    image: Kucoinlogo,
    alt: "Kucoin logo",
    linkPath: "#",
  },
  {
    image: OkxLogo,
    alt: "Okx logo",
    linkPath: "#",
  },
];
import Link from "next/link";
import { Carousel } from "@/components/shared/ui/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-csDark">
        <div className="pt-10 md:pt-14 pb-10 md:pb-12 px-6">
          <div className="flex flex-col items-center mb-14">
            <Link
              href={"#"}
              className="flex items-center gap-2 p-2 mb-5 xsm:mb-6 max-w-96 sm:max-w-120 bg-white rounded-xl"
            >
              <div className="px-2 py-1 bg-csBlueLight rounded-md text-white font-sans text-[8px] xsm:text-[14px]">
                New
              </div>
              <div className="flex-1 text-primaryDarkBlack font-mono text-[10px] xsm:text-[16px] truncate">
                Introducing: Technical Analysis Tool
              </div>
              <ArrowRight02Icon size={20} />
            </Link>
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl text-center text-white font-poppins">
              Learn Trading with Pro Tools
            </h1>
            <h3 className="mb-8 xsm:mb-10 text-sm xsm:text-md md:text-lg xl:text-xl text-csGrey">
              Trade Smarter, Learn Faster, Earn More
            </h3>
            <Button size="xl" variant="secondary">
              Try Traydee for free
            </Button>
          </div>
          <div className="flex items-center justify-between mb-12 [&>*]:basis-1/4 [&>*]:place-content-center container mx-auto">
            {advantages.map((advantage, index) => {
              return (
                <AdvantagesCard
                  key={index}
                  Icon={advantage.Icon}
                  width={advantage.width}
                  height={advantage.height}
                  stressedInfo={advantage.stressedInfo}
                  textInfo={advantage.textInfo}
                  className="text-white"
                />
              );
            })}
          </div>
          <div className="container mx-auto mb-10">
            <div className="w-full h-120 rounded-lg bg-csGrey"></div>
          </div>
          <h3 className="container text-center uppercase text-csLight">Trusted by 9000 traders in 120+ countries</h3>
        </div>
        <div className="container">
          <Carousel width={"100%"} height={"80px"} speed="slow" axis="x" edges="blur" carouselItems={carouselItems} />
        </div>
      </main>
    </>
  );
}

const advantages: IAdvantagesCardProps[] = [
  { Icon: CreditCardIcon, width: 40, height: 40, stressedInfo: "No card", textInfo: "required" },
  { Icon: RoboticIcon, width: 40, height: 40, stressedInfo: "AI", textInfo: "trading" },
  { Icon: ElearningExchangeIcon, width: 40, height: 40, stressedInfo: "43+", textInfo: "courses" },
  { Icon: ChartBarLineIcon, width: 40, height: 40, stressedInfo: "Charts", textInfo: "integration" },
];
interface IAdvantagesCardProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  className?: string;
  stressedInfo: string;
  textInfo: string;
}

export const AdvantagesCard = ({ Icon, width, height, className, stressedInfo, textInfo }: IAdvantagesCardProps) => {
  return (
    <div className="flex items-center flex-col md:flex-row gap-2">
      <div className="flex justify-center items-center p-1 size-10 rounded-lg bg-csBgGreen">
        <Icon height={height || 40} width={width || 40} className={className} />
      </div>
      <p className="flex items-center flex-wrap flex-col md:flex-row gap-1 md:gap-0 text-white">
        <b className="text-xs xsm:text-sm lg:text-lg xl:text-xl">{stressedInfo}&nbsp;</b>
        <span className="text-xs xsm:text-sm lg:text-lg xl:text-xl">{textInfo}</span>
      </p>
    </div>
  );
};
