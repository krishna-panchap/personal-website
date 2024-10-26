"use client";
import React from "react";
import Image from "next/image";
import meImg from "@/public/me.png";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/activesectioncontext";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
          >
            <Image
              src={meImg}
              alt="A photo of me!"
              priority={true}
              className="h-24 w-24 rounded-2xl object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I&apos;m Krishna!</span>
      </motion.h1>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xltext-xl sm:text-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        CS + Econ @ University of Washington <br />
        Prev Eng/AI @ Amazon, Tenstorrent, Arcade.ai <br />
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <a
          className=" bg-gray-900 text-white hover:text-white p-4 flex items-center gap-2 rounded-xl focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-gray-2"
          href="https://linkedin.com/in/kpanchap"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>

        <a
          className=" bg-gray-900 text-white hover:text-white p-[0.89rem] flex items-center gap-2 text-[1.35rem] rounded-xl focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border  border-gray-2"
          href="https://github.com/krishna-panchap/networking"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-xl outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-gray-2"
          href="/Krishna_Panchap_resume.pdf"
          target="_blank"
        >
          Resume
          <IoDocumentTextOutline className="opacity-60 group-hover:translate-x-1 transition" />
        </a>
        <a
          href="mailto:kpanchap@gmail.com"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-xl outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-gray-2"
          onClick={() => {
            setTimeOfLastClick(Date.now());
          }}
        >
          Email{" "}
          <MdOutlineMail className="opacity-70 group-hover:translate-x-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
