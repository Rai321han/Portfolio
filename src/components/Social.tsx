import Icon from "./Icon";
import { LINKEDIN_ICON, MAIL_ICON, GITHUB_ICON, SHARE_ICON } from "./icons";
import Light from "./Light";
import Section from "./Section";
export default function Social() {
  return (
    <div className=" col-[1/14] md:col-[7/11] row-[6/7] md:row-[4/5]  flex flex-row flex-wrap gap-2  [&>a]:flex-grow item-center justify-between">
      <div className="flex flex-row flex-grow gap-2">
        <a
          href="https://github.com/Rai321han"
          target="_blank"
          className="flex-grow group"
        >
          <Section>
            <Light />

            <Icon data={[GITHUB_ICON, "GitHub"]} />
          </Section>
        </a>
        <a
          className="flex-grow group"
          href="https://www.linkedin.com/in/raihan-uddin-6681411b2"
          target="_blank"
        >
          <Section>
            <Light />
            <Icon data={[LINKEDIN_ICON, "LinkedIn"]} />
          </Section>
        </a>
      </div>
      <div className="flex flex-row flex-grow gap-2">
        <a
          className="flex-grow group"
          href="mailto:uddinraihan797@gmail.com?subject=Please%20add%20a%20subject%20line!"
          target="_blank"
        >
          <Section>
            <Light />
            <Icon data={[MAIL_ICON, "Mail"]} />
          </Section>
        </a>
        <Section className="group flex-grow">
          <Light />
          <Icon data={[SHARE_ICON, "Share this protfolio"]} />
        </Section>
      </div>
    </div>
  );
}
