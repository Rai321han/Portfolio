import FadingLeft from "./FadingLeft";
import Icon from "./Icon";
import { linkedinIcon, mailIcon, githubIcon } from "./icons";

export default function Social() {
  return (
    <div className="relative col-[1/10] row-[6/7] ">
      <div className="flex felx-row gap-2  bg-primary p-[30px] rounded-[20px] border-y-2 border-borderColor">
        <a
          href="https://github.com/Rai321han"
          target="_blank"
          className="flex-grow"
        >
          <Icon data={[githubIcon, "GitHub"]} />
        </a>
        <a
          href="https://www.linkedin.com/in/raihan-uddin-6681411b2"
          target="_blank"
          className="flex-grow"
        >
          <Icon data={[linkedinIcon, "LinkedIn"]} />
        </a>
        <a
          href="mailto:uddinraihan797@gmail.com?subject=Please%20add%20a%20subject%20line!"
          className="flex-grow"
          target="_blank"
        >
          <Icon data={[mailIcon, "Mail"]} />
        </a>
        {/* <Icon data={[whatsAppIcon, "WhatsApp"]} /> */}
      </div>
      <FadingLeft />
    </div>
  );
}
