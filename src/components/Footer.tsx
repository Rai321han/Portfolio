import FadingLeft from "./FadingLeft";
import FadingRight from "./FadingRight";
import Section from "./Section";

export default function Footer() {
  return (
    <Section className="col-[1/14] md:col-[1/11] row-[10/11] md:row-[10/11]">
      <p className="text-textColorDim text-center text-[0.8rem] md:text-[1rem]">
        All Rights Reserved By Raihan Uddin@2024
      </p>
      <FadingLeft />
      <FadingRight />
    </Section>
  );
}
