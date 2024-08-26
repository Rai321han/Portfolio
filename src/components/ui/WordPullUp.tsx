"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "../../lib/utils";

interface WordPullUpProps {
  // words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export default function WordPullUp({
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}: WordPullUpProps) {
  return (
    <motion.h1
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      <motion.span
        variants={framerProps}
        style={{ display: "inline-block", paddingRight: "8px" }}
      >
        Passionate
      </motion.span>
      <motion.span
        variants={framerProps}
        style={{ display: "inline-block", paddingRight: "8px" }}
      >
        About
      </motion.span>
      <motion.span
        variants={framerProps}
        style={{ display: "inline-block", paddingRight: "8px" }}
      >
        Solving
      </motion.span>
      <br />
      <motion.span
        variants={framerProps}
        style={{ display: "inline-block", paddingRight: "8px" }}
      >
        <span className="text-textColor">Frontend</span>
      </motion.span>
      <motion.span
        variants={framerProps}
        style={{ display: "inline-block", paddingRight: "8px" }}
      >
        Problems
      </motion.span>
    </motion.h1>
  );
}
