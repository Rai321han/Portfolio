"use client";
// import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { CiCircleCheck } from "react-icons/ci";
import {
  FIREBASE_ICON,
  GEMINI_ICON,
  JS_ICON,
  REACT_ICON,
  TAILWIND_ICON,
} from "../icons";

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] p-3 bg-primaryDim">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[900px]  h-full md:h-fit md:max-h-[90%] border-2 border-primaryDim  flex flex-col  bg-primary dark:bg-neutral-900 sm:rounded-3xl overflow-auto [&::-webkit-scrollbar]:hidden p-10 shadow-3xl shadow-black"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                {/* <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                /> */}
                <img
                  //   priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-center py-10 pl-0">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-Inter font-extrabold text-secondaryDim dark:text-neutral-200 text-4xl"
                    >
                      {active.title}
                    </motion.h3>
                    {/* <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p> */}
                  </div>
                  <div className="flex flex-row items-center">
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      className="font-Inter tracking-widest uppercase text-sm   rounded-full font-bold  text-secondary flex items-center"
                    >
                      <div className="bg-primaryDim px-10 py-5 rounded-full hover:bg-secondary hover:text-primaryDim transition-all">
                        {active.ctaText}
                      </div>
                    </motion.a>
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.githubLink}
                      target="_blank"
                      className="font-Inter tracking-widest uppercase text-sm  rounded-full font-bold  text-secondary flex items-center group"
                    >
                      <div className="px-5 py-5 rounded-full bg-primaryDim hover:bg-secondary transition-all">
                        {/* <GoLinkExternal className="w-5 h-5 fill-secondary" /> */}
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-iconColor group-hover:fill-primaryDim"
                        >
                          <path d="M12.6576 1.05479C9.61288 1.02385 6.68045 2.20305 4.50477 4.33324C2.3291 6.46342 1.0882 9.37029 1.05481 12.415C1.06654 14.8211 1.84057 17.1617 3.26573 19.1004C4.69089 21.0392 6.69384 22.4764 8.9869 23.2056C9.56703 23.311 9.77799 22.963 9.77799 22.6571C9.77799 22.3512 9.77799 21.6761 9.77799 20.7268C6.55031 21.4124 5.86469 19.2079 5.86469 19.2079C5.64983 18.5158 5.19303 17.9242 4.57784 17.5413C3.52304 16.8451 4.66222 16.8557 4.66222 16.8557C5.02681 16.9044 5.37564 17.0351 5.68254 17.2378C5.98944 17.4406 6.24644 17.7102 6.43428 18.0265C6.76162 18.5941 7.29873 19.0105 7.93 19.1861C8.56127 19.3617 9.23624 19.2824 9.80964 18.9653C9.86861 18.3876 10.1302 17.8496 10.548 17.4464C7.97429 17.1616 5.274 16.1912 5.274 11.8348C5.25099 10.6985 5.67086 9.59772 6.44483 8.76537C6.09235 7.78975 6.13397 6.71517 6.56086 5.76974C6.56086 5.76974 7.54182 5.46385 9.72525 6.93002C11.6259 6.42355 13.626 6.42355 15.5266 6.93002C17.7417 5.46385 18.691 5.76974 18.691 5.76974C19.1179 6.71517 19.1596 7.78975 18.8071 8.76537C19.599 9.58247 20.0417 10.6758 20.0412 11.8137C20.0412 16.1806 17.3198 17.1405 14.7672 17.4253C15.0467 17.6966 15.2626 18.0266 15.3994 18.3913C15.5362 18.7561 15.5904 19.1466 15.5583 19.5349V22.6465C15.5583 22.6465 15.7693 23.311 16.3494 23.195C18.6359 22.4613 20.6321 21.0238 22.0529 19.0878C23.4736 17.1518 24.2463 14.8163 24.2604 12.415C24.227 9.37029 22.9861 6.46342 20.8104 4.33324C18.6347 2.20305 15.7023 1.02385 12.6576 1.05479Z" />
                        </svg>
                      </div>
                    </motion.a>
                  </div>
                </div>
                {/* 
                <div className="pt-4s relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-secondaryDim text-sm md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div> */}
                <div className="pt-4 relative ">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-secondaryDim text-sm md:text-sm lg:text-base  md:h-fit pb-8 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <div className="font-Inter font-extrabold text-2xl tracking-wide">
                      Description
                    </div>
                  </motion.div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-secondaryDim text-sm md:text-sm lg:text-base  md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>

                <div className="pt-4 relative ">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-secondaryDim text-sm md:text-sm lg:text-base  md:h-fit pb-8 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <div className="font-Inter font-extrabold text-2xl tracking-wide">
                      Features
                    </div>
                  </motion.div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-secondaryDim text-sm md:text-sm lg:text-base md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <div>
                      <ul className="pl-5 flex flex-col gap-3">
                        {active.features?.map((feature, index) => (
                          <li key={index}>
                            <div className="flex gap-2 items-center">
                              <CiCircleCheck className="w-5 h-5" />
                              <p>{feature}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                <div className="pt-4 relative ">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-secondaryDim text-sm md:text-sm lg:text-base  md:h-fit pb-8 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <div className="font-Inter font-extrabold text-2xl tracking-wide">
                      Techs
                    </div>
                  </motion.div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-secondaryDim text-sm md:text-sm lg:text-base md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <div>
                      <ul className="pl-5 flex flex-row gap-3 items-center">
                        {active.techs?.map((tech, index) => (
                          <li key={index}>
                            <div className="flex gap-4 items-center">
                              {/* <CiCircleCheck className="w-5 h-5" />
                              <p>{tech}</p> */}
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className=" w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col bg-primary h-full  hover:bg-primaryDim dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full h-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                {/* <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                /> */}

                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center flex-col gap-5">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-Inter font-semibold text-[2rem] sm:text-[3rem] leading-[2.5rem] sm:leading-[3.5rem] text-neutral-800 dark:text-neutral-200 text-lett md:text-left text-2xl text-secondary"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600  dark:text-neutral-400 text-left md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "AI-driven travel platform offering personalized hotel recommendations, day-wise itineraries, and secure trip management with Google authentication.",
    title: "The Wild Oasis",
    src: "/images/project2.webp",
    ctaText: "Visit",
    fearues: [
      "AI-Powered Recommendations",
      "User Authentication",
      "Personalized Trip Planning",
    ],
    techs: [
      "JS",
      "React",
      "Tailwind CSS",
      "Firebase",
      "Google OAuth",
      "Gemini API",
    ],
    ctaLink: "https://ui.aceternity.com/templates",
    githubLink: "https://github.com/Rai321han/AI-Trip-Planner",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },
  {
    description:
      "TripPlanner is an AI-driven travel platform offering personalized hotel recommendations, day-wise itineraries, and secure trip management with Google authentication.",
    title: "Trip Planner",
    src: "/images/project1.webp",
    ctaText: "Visit",
    features: [
      "AI-Powered Recommendations",
      "User Authentication",
      "Personalized Trip Planning",
    ],
    techs: [JS_ICON, REACT_ICON, TAILWIND_ICON, FIREBASE_ICON, GEMINI_ICON],
    ctaLink: "https://ai-trip-planner-raihan.vercel.app/",
    githubLink: "https://github.com/Rai321han/AI-Trip-Planner",
    content: () => {
      return (
        <p>
          TripPlanner is an AI-integrated travel platform that delivers
          personalized hotel recommendations and day-by-day trip itineraries
          based on users' travel preferences. Powered by Google’s Gemini AI, the
          platform adapts to individual travel styles, ensuring tailored and
          relevant suggestions. Users can securely log in via Google to create
          and manage trips, with their plans stored in Firebase for easy access.
          TripPlanner combines intuitive UI with intelligent recommendations,
          making travel planning seamless and customized for every user.
        </p>
      );
    },
  },
];
