"use client";

import { motion } from "framer-motion";
import React from "react";

const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      {children}
    </motion.div>
  );
};

const FadeInComponent = ({ children }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <FadeIn key={index}>{child}</FadeIn>
      ))}
    </>
  );
};

export default FadeInComponent;
