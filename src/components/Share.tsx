import { shareIcon } from "./icons";
import Icon from "./Icon";
import FadingRight from "./FadingRight";

export default function Share() {
  return (
    <div className="relative col-[10/14] row-[6/7] bg-primary p-[30px] rounded-[20px] border-y-2 border-borderColor">
      <Icon data={[shareIcon, "Share this protfolio"]} />
      <FadingRight />
    </div>
  );
}
