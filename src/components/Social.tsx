import FadingLeft from "./FadingLeft";
import Icon from "./Icon";
import { whatsAppIcon, linkedinIcon, mailIcon, githubIcon } from "./icons";

export default function Social() {
  return (
    <div className="relative col-[1/10] row-[9/11] ">
      <div className="flex felx-row gap-2 col-[2/8] bg-primary p-[30px] rounded-[20px] border-y-2 border-borderColor">
        <Icon data={githubIcon} />
        <Icon data={linkedinIcon} />
        <Icon data={mailIcon} />
        <Icon data={whatsAppIcon} />
      </div>
      <FadingLeft />
    </div>
  );
}
