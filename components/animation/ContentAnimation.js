"use client";

import { motion } from "framer-motion";

export default function ContentAnimation({
  children,
  initial,
  whileInView,
  delay = 0,
}) {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={{ ease: "easeInOut", duration: 0.5, delay: delay }}
    >
      {children}
    </motion.div>
  );
}
