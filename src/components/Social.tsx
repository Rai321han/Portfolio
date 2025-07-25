import Icon from "./Icon";
import { LINKEDIN_ICON, MAIL_ICON, GITHUB_ICON, LEETCODE_ICON } from "./icons";
import Light from "./Light";
import Section from "./Section";
export default function Social() {
  return (
    <div className=" col-[1/14] md:col-[7/11] row-[6/7] md:row-[4/5]  flex flex-row flex-wrap gap-2  [&>a]:flex-grow item-center justify-between">
      <div className="flex flex-row flex-grow gap-2">
        <a
          href="https://github.com/Rai321han"
          target="_blank"
          className="flex-grow group hover:[&>div>div>div>svg]:fill-orange-500"
        >
          <Section>
            <Light />

            <Icon
              data={[GITHUB_ICON, "GitHub"]}
              onHoverColorChange={true}
              onHoverScale={true}
            />
          </Section>
        </a>
        <a
          className="flex-grow group"
          href="https://www.linkedin.com/in/raihan-uddin-6681411b2"
          target="_blank"
        >
          <Section>
            <Light />
            <Icon
              data={[LINKEDIN_ICON, "LinkedIn"]}
              onHoverColorChange={true}
              onHoverScale={true}
            />
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
            <Icon
              data={[MAIL_ICON, "Mail"]}
              onHoverColorChange={true}
              onHoverScale={true}
            />
          </Section>
        </a>
        <a
          className="flex-grow group"
          href="https://leetcode.com/u/Raihan_321"
          target="_blank"
        >
          <Section>
            <Light />
            <Icon
              data={[LEETCODE_ICON, "LeetCode"]}
              onHoverColorChange={true}
              onHoverScale={true}
            />
          </Section>
        </a>
        {/* <Section className="group flex-grow">
          <Light />
          <Icon
            data={[SHARE_ICON, "Share this protfolio"]}
            onHoverColorChange={true}
            onHoverScale={true}
          />
        </Section> */}
      </div>
    </div>
  );
}
