"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./sectionheader";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-left">
        I'm currently an undergraduate studying{" "}
        <span className="font-medium">Computer Science and Economics</span> at
        the University of Washington. I’ve had the opportunity to design,
        deploy, and scale <span className="font-medium">AI tools</span> across
        various company sizes and diverse industries, ranging from consumer
        products and DevOps to chip manufacturing.
      </p>

      <p className="text-left">
        At the University, I've been involved in research in{" "}
        <span className="font-medium">social and healthcare computing</span> at
        two Allen School Labs, and I assist in teaching various
        undergraduate-level CS courses.
      </p>
    </motion.section>
  );
}
