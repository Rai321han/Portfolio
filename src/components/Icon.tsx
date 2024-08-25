type IconProps = {
  data: [JSX.Element, string];

  onHoverColorChange?: boolean;
  onHoverScale?: boolean;
  name?: string;
};

export default function Icon({
  data,
  onHoverColorChange,
  onHoverScale,
}: IconProps) {
  return (
    <div
      className={`relative group ${
        onHoverColorChange && "group-hover:[&>svg]:fill-orange-500"
      }   ${
        onHoverScale &&
        "group-hover:[&>svg]:scale-125 md:group-hover:[&>svg]:scale-150"
      } flex  items-center justify-center p-2 sm:p-5 md:p-2 rounded-[10px] [&>svg]:transition-transform duration-100`}
    >
      {data[0]}
    </div>
  );
}
