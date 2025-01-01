import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ICarouselItem {
  content?: React.ReactNode;
  image?: string | StaticImageData;
  itemWidth?: number | `${number}`;
  itemHeight?: number | `${number}`;
  alt: string;
  linkPath?: string;
}

interface ICarouselProps {
  width?: number | `${number}` | string;
  height?: number | `${number}` | string;
  autoPlay?: boolean;
  interval?: number;
  speed: "slow" | "normal" | "fast";
  axis: "x" | "y";
  edges: "normal" | "blur" | "shadow";
  carouselItems: ICarouselItem[];
}

export const Carousel = ({
  width = "100%",
  height = "400px",
  speed = "normal",
  axis = "x",
  edges = "normal",
  carouselItems,
  autoPlay = false,
  interval = 3000,
}: ICarouselProps) => {
  const carouselClasses = classNames("flex", {
    "flex-col": axis === "y",
  });
  const carouselItemClasses = classNames({});
  const renderCarouselItem = (item: ICarouselItem, index: number) => {
    const { image, alt, linkPath, content, itemWidth, itemHeight } = item;

    const imageComponent = image && (
      <Image src={image} alt={alt} width={itemWidth} height={itemHeight} className="w-full h-full object-cover" />
    );

    const contentWrapper = (
      <div key={index} className={carouselItemClasses}>
        {image ? imageComponent : content}
      </div>
    );

    if (linkPath) {
      return <Link href={linkPath}>{contentWrapper}</Link>;
    }
    return <div key={index}>{contentWrapper}</div>;
  };

  return (
    <div className={carouselClasses}>
      {carouselItems.map((item, index) => {
        return renderCarouselItem(item, index);
      })}
    </div>
  );
};
