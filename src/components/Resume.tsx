import Light from "./Light";
import Section from "./Section";
import SectionHead from "./SectionHead";
export default function Resume() {
  return (
    <Section className="group flex flex-row justify-between items-center col-[1/14] md:col-[7/11] row-[4/5] md:row-[5/6]">
      <Light />
      <SectionHead>resume</SectionHead>
      <a href="/Raihan_Uddin_Resume.pdf" download="Raihan_Uddin_Resume.pdf">
        <div className="hover:bg-orange-500 cursor-pointer bg-primaryDim rounded-[20px] px-[20px] py-[10px] flex felx-row gap-4 items-center">
          <span className="hidden sm:inline md:hidden lg:inline font-Inter">
            download
          </span>
          <svg
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-iconColor"
          >
            <path d="M7 18C5.0697 18 3.42067 17.4066 2.05291 16.2198C0.684303 15.033 0 13.5824 0 11.8681C0 10.3987 0.498485 9.08948 1.49545 7.94035C2.49242 6.79121 3.79697 6.05651 5.40909 5.73626C5.89697 4.21036 6.804 2.92936 8.13018 1.89325C9.45551 0.857143 10.9879 0.22606 12.7273 0V9.12716L11.5818 8.13815C11.3485 7.93093 11.057 7.82731 10.7075 7.82731C10.357 7.82731 10.0545 7.94035 9.8 8.16641C9.56667 8.37363 9.45 8.63736 9.45 8.95761C9.45 9.27786 9.56667 9.5416 9.8 9.74882L13.1091 12.6876C13.3636 12.9137 13.6606 13.0267 14 13.0267C14.3394 13.0267 14.6364 12.9137 14.8909 12.6876L18.2 9.74882C18.4333 9.5416 18.5555 9.28239 18.5665 8.97118C18.5767 8.66072 18.4545 8.39246 18.2 8.16641C17.9667 7.95918 17.6752 7.85067 17.3256 7.84088C16.9752 7.83184 16.6727 7.93093 16.4182 8.13815L15.2727 9.12716V0C17.4576 0.263736 19.2767 1.13482 20.7302 2.61325C22.1828 4.09243 22.9091 5.83045 22.9091 7.82731C24.3727 7.97802 25.5873 8.53827 26.5529 9.50807C27.5176 10.4786 28 11.6138 28 12.9137C28 14.3265 27.4434 15.5277 26.3302 16.517C25.2161 17.5057 23.8636 18 22.2727 18H7Z" />
          </svg>
        </div>
      </a>
    </Section>
  );
}
