"use client";
// import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { GoLinkExternal } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";

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
          <div className="fixed inset-0  grid place-items-center z-[100] p-3">
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
              className="w-full max-w-[900px]  h-full md:h-fit md:max-h-[90%]  flex flex-col  bg-primary dark:bg-neutral-900 sm:rounded-3xl overflow-auto [&::-webkit-scrollbar]:hidden p-10"
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

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="font-Inter tracking-widest uppercase text-sm  rounded-full font-bold  text-secondary flex items-center"
                  >
                    <div className="bg-primaryDim px-10 py-5 rounded-full ">
                      {active.ctaText}
                    </div>
                    <div className="px-5 py-5 rounded-full bg-primaryDim">
                      <GoLinkExternal className="w-5 h-5 fill-secondary" />
                    </div>
                  </motion.a>
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
                      <ul className="pl-5 flex flex-col gap-3">
                        {active.techs?.map((tech, index) => (
                          <li key={index}>
                            <div className="flex gap-2 items-center">
                              <CiCircleCheck className="w-5 h-5" />
                              <p>{tech}</p>
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
      "TripPlanner is an AI-driven travel platform offering personalized hotel recommendations, day-wise itineraries, and secure trip management with Google authentication.",
    title: "Trip Planner",
    src: "/images/project1.webp",
    ctaText: "Visit",
    features: [
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
          making travel planning seamless and customized for every user.,
        </p>
      );
    },
  },
  {
    description:
      "TripPlanner is an AI-driven travel platform offering personalized hotel recommendations, day-wise itineraries, and secure trip management with Google authentication.",
    title: "Mitran Di Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
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
];
