type IconProps = {
  data: [JSX.Element, string];
  name?: string;
};

export default function Icon({ data }: IconProps) {
  return (
    <div className="relative hover:scale-125 duration-200 flex  items-center justify-center p-2 sm:p-5 md:p-2 rounded-[10px]">
      {data[0]}
      {/* <div className="group-hover:inline hidden border border-borderColor z-[10] top-[-10%] translate-y-[-50%] absolute bg-primaryDim p-[5px] shadow-md  rounded-md text-[15px] text-center leading-[18px]">
        {data[1]}
      </div> */}
    </div>
  );
}
