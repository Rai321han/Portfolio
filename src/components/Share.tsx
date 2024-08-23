import { SHARE_ICON } from "./icons";
import Icon from "./Icon";
import FadingRight from "./FadingRight";
import Section from "./Section";

export default function Share() {
  return (
    <Section className="col-[10/14] row-[6/7]">
      <Icon data={[SHARE_ICON, "Share this protfolio"]} />
      <FadingRight />
    </Section>
  );
}
