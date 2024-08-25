import Section from "./Section";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function HeaderMarquee() {
  const data = (
    <>
      <div className="flex flex-row gap-4">
        <p className="font-prosto text-textColorDim">PERSONAL</p>
        <p className="font-chaney text-textColor">PORTFOLIO</p>
        <p className="font-prosto text-textColorDim">|</p>
      </div>
    </>
  );

  const items = Array.from({ length: 10 }, (_, index) => (
    <li key={index}>{data}</li>
  ));

  return (
    <Section className="col-[1/14] md:col-[1/11] row-[2/3] overflow-x-hidden !py-[4px] lg:!py-[10px] text-[12px] text-textColor">
      <InfiniteMovingCards
        items={items}
        direction="left"
        speed="slow"
        pauseOnHover={false}
      />
    </Section>
  );
}
