import "./style.css";
import { twMerge } from "tailwind-merge";

type InfiniteSlideType = {
  items: JSX.Element[];
  time: number;
  className?: string;
  reverse?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function InfiniteSlide({
  items,
  time,
  className,
  reverse,
  ...rest
}: InfiniteSlideType) {
  const aniamtionStyle1 = {
    animationDelay: `calc(${time}s * -1)`,
    animationDuration: `${time}s`,
    transform: reverse ? "translateX(-100%)" : "translateX(100%)",
  };
  const aniamtionStyle2 = {
    animationDelay: `calc(${time}s / -2)`,
    animationDuration: `${time}s`,
    transform: reverse ? "translateX(-200%)" : "translateX(0%)",
  };

  const animationClass1 = reverse ? "reverseAnimation1" : "forwardAnimation1";
  const animationClass2 = reverse ? "reverseAnimation2" : "forwardAnimation2";

  return (
    <div
      className={twMerge(
        `[justify-between mask-image:radial-gradient(circle,#000_0%,transparent_100%)] overflow-hidden flex items-center`,
        className
      )}
      {...rest}
    >
      <div
        className={`justify-between [&>*]:mx-2 flex flex-row ${animationClass1} whitespace-nowrap`}
        style={aniamtionStyle1}
      >
        {items}
      </div>
      <div
        className={`justify-between [&>*]:mx-2 flex flex-row ${animationClass2} whitespace-nowrap`}
        style={aniamtionStyle2}
      >
        {items}
      </div>
    </div>
  );
}
