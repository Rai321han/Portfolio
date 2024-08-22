type IconProps = {
  data: JSX.Element;
};

export default function Icon({ data }: IconProps) {
  return (
    <div className="flex flex-grow items-center justify-center  p-5 bg-primaryDim rounded-[10px]">
      {data}
    </div>
  );
}
