import { twMerge } from "tailwind-merge";

type SectionType = {
  children: JSX.Element[] | JSX.Element;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Section({ children, className, ...rest }: SectionType) {
  return (
    <div
      className={twMerge(
        `backdrop-blur-lg relative p-pdSecSmall xxs:p-pdSecMedium xs:p-pdSecLarge md:p-pdSecMedium lg:p-pdSecLarge bg-gradient-to-r from-grad1 to-grad2 border md:border-[2px] border-borderColor rounded-[20px]`,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
