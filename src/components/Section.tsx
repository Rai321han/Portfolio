import { twMerge } from "tailwind-merge";

type SectionType = {
  children: JSX.Element[];
  className: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Section({ children, className, ...rest }: SectionType) {
  return (
    <div
      className={twMerge(
        `relative  p-pdSecSmall xxs:p-pdSecMedium xs:p-pdSecLarge bg-primary border-y-[2px] border-borderColor rounded-[20px]`,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
