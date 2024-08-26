"use client";
import { useState } from "react";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  children,
  name,
}: {
  children: JSX.Element;
  name: string;
}) => {
  //   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    // const target = event.target;
    const target = event.currentTarget as HTMLDivElement;
    const halfWidth = target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      <div
        className="-mr-4 relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="popLayout">
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: -10, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-[80%] -translate-y-1/2 -left-1/2 translate-x-1/2 flex text-xs
                flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
            >
              <div
                className="absolute inset-x-10 z-30 w-[20%] -bottom-px 
              bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px "
              />
              <div
                className="absolute left-10 w-[40%] z-30
               -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px "
              />
              <div className="font-bold text-white relative z-55 text-base">
                {name}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className="object-cover !m-0 !p-0 object-top rounded-full group-hover:scale-105 group-hover:z-30 relative transition duration-500"
          onMouseMove={handleMouseMove}
        >
          {children}
        </div>
      </div>
    </>
  );
};
