import FadingLeft from "./FadingLeft";
import Icon from "./Icon";
import { LINKEDIN_ICON, MAIL_ICON, GITHUB_ICON } from "./icons";
import Section from "./Section";
export default function Social() {
  return (
    <Section className="col-[1/10] row-[6/7]  flex felx-row gap-2  [&>a]:flex-grow item-center justify-between">
      <a href="https://github.com/Rai321han" target="_blank">
        <Icon data={[GITHUB_ICON, "GitHub"]} />
      </a>
      <a
        href="https://www.linkedin.com/in/raihan-uddin-6681411b2"
        target="_blank"
      >
        <Icon data={[LINKEDIN_ICON, "LinkedIn"]} />
      </a>
      <a
        href="mailto:uddinraihan797@gmail.com?subject=Please%20add%20a%20subject%20line!"
        target="_blank"
      >
        <Icon data={[MAIL_ICON, "Mail"]} />
      </a>

      <FadingLeft />
    </Section>
  );
}
