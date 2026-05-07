"use client";

import { createContext, useContext } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

const FadeInStaggerContext = createContext(false);

const viewport = { once: false, amount: 0.2 };

type FadeInProps = HTMLMotionProps<"div">;

export function FadeIn(props: FadeInProps) {
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 80 }, // 🔥 bottom → top strong motion
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
}

export function FadeInStagger({ faster = false, ...props }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{
          staggerChildren: faster ? 0.1 : 0.18,
        }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
