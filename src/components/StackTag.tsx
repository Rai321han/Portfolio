export default function StackTag({ stacks }: { stacks: JSX.Element[] }) {
  const renderedStack = stacks.map((stack, index) => (
    <div key={index} className="[&>svg]:w-[20px] sm:[&>svg]:w-[26px]">
      {stack}
    </div>
  ));

  return (
    <div
      key={"stackTag"}
      className="animate-ScaleXanimation origin-left flex items-center flex-row gap-3 flex-wrap p-[8px] xs:p-[15px] bg-primaryDim rounded-[15px]"
    >
      {renderedStack}
    </div>
  );
}
