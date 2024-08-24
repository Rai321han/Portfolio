type IconProps = {
  data: [JSX.Element, string];
  name?: string;
};

export default function Icon({ data }: IconProps) {
  return (
    <div className="relative group hover:outline hover:outline-blue-400 flex  items-center justify-center p-2 sm:p-5 md:p-2 bg-primaryDim rounded-[10px]">
      {data[0]}
      <div className="group-hover:inline hidden border border-borderColor z-[10] top-[-10%] translate-y-[-50%] absolute bg-primaryDim p-[5px] shadow-md  rounded-md text-[15px] text-center leading-[18px]">
        {data[1]}
      </div>
    </div>
  );
}
