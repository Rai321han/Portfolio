import Section from "./Section";

export default function Contact() {
  return (
    <Section className=" col-[1/14] md:col-[1/11] row-[11/12] md:row-[11/12] grid grid-cols-[1fr_3fr_1fr] grid-rows-2">
      <p className="text-center font-Inter font-semibold text-[1.8rem] md:text-[3rem] md:leading-[4rem] col-[1/4] row-[1/2] place-content-center">
        <span className="text-[#8a8a93]"> I'd love to hear from you!</span>
        <br />
      </p>
      <a
        target="_blank"
        className="hover:bg-orange-600 min-w-full block cursor-pointer font-Inter font-bold text-[2rem] px-3 xs:px-5 max-w-[500px] py-5 xs:py-8 bg-orange-500 rounded-[20px] text-center md:col-[2/3] col-[1/4] row-[]2/3"
        href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Please+add+a+subject+line!&to=uddinraihan797@gmail.com"
      >
        send an email
      </a>
    </Section>
  );
}
