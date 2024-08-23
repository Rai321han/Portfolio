import FadingLeft from "./FadingLeft";
import FadingRight from "./FadingRight";
import Section from "./Section";

export default function Footer() {
  return (
    <Section className="col-[1/14] row-[10/11]">
      <p className="text-textColorDim text-center text-[0.8rem]">
        All Rights Reserved By Raihan Uddin@2024
      </p>
      <FadingLeft />
      <FadingRight />
    </Section>
  );
}
