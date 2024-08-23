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
        "tracking-widest text-textColor font-chaney text-[15px] xs:text-[20px]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
