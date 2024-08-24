import { twMerge } from "tailwind-merge";

type SectionHeadProp = {
  children: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function SectionHead({
  children,
  className,
  ...rest
}: SectionHeadProp) {
  return (
    <div
      className={twMerge(
        " text-textColor font-Inter font-extrabold text-[2rem] xs:text-[2rem]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
