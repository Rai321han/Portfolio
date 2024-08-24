import Icon from "./Icon";
import { LINKEDIN_ICON, MAIL_ICON, GITHUB_ICON, SHARE_ICON } from "./icons";
import Section from "./Section";
export default function Social() {
  return (
    <div className=" col-[1/14] md:col-[7/11] row-[6/7] md:row-[4/5]  flex flex-row flex-wrap gap-2  [&>a]:flex-grow item-center justify-between">
      <div className="flex flex-row flex-grow gap-2">
        <Section className="flex-grow">
          <a href="https://github.com/Rai321han" target="_blank">
            <Icon data={[GITHUB_ICON, "GitHub"]} />
          </a>
        </Section>
        <Section className="flex-grow">
          <a
            href="https://www.linkedin.com/in/raihan-uddin-6681411b2"
            target="_blank"
          >
            <Icon data={[LINKEDIN_ICON, "LinkedIn"]} />
          </a>
        </Section>
      </div>
      <div className="flex flex-row flex-grow gap-2">
        <Section className="flex-grow">
          <a
            href="mailto:uddinraihan797@gmail.com?subject=Please%20add%20a%20subject%20line!"
            target="_blank"
          >
            <Icon data={[MAIL_ICON, "Mail"]} />
          </a>
        </Section>
        <Section className="flex-grow">
          <Icon data={[SHARE_ICON, "Share this protfolio"]} />
        </Section>
      </div>
    </div>
  );
}
