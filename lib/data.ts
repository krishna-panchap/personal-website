import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
// import amazonImg from "@/public/amazon.png";  // Assuming images for the companies
// import tenstorrentImg from "@/public/tenstorrent.png";
// import arcadeImg from "@/public/arcade.png";
// import hereticImg from "@/public/heretic.png";
import chapteritImg from "@/public/chapterit.png";
import mezzoImg from "@/public/Mezzo.jpg";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Intern",
    location: "Amazon Shipping, Bellevue, WA",
    description:
      "Developed and deployed a full-stack dashboard for shippers, providing real-time status updates and AI-driven insights using React, AWS Lambda, and DynamoDB. Projected to reduce the Shipper Escalation Metric by 30%.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - September 2024",
    // imageUrl: amazonImg,
  },
  {
    title: "AI/ML Applied Scientist Intern",
    location: "Tenstorrent, Santa Clara, CA",
    description:
      "Led a joint-effort with Chipstack.ai to deploy AI-assisted chip verification. Built and deployed an inference server using Tenstorrent hardware, increasing system adoption with 5000+ inference requests.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2024 - June 2024",
    // imageUrl: tenstorrentImg,
  },
  {
    title: "Machine Learning, AI Engineering Intern",
    location: "Arcade.ai, Remote",
    description:
      "Reduced average completion time by 33% by refactoring the AI pipeline. Fine-tuned text-to-image models, improving manufacturability score by 30%.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023 - February 2024",
    // imageUrl: arcadeImg,
  },
  {
    title: "Software Engineering Intern",
    location: "Heretic Ventures, San Francisco, CA",
    description:
      "Refactored 30+ Python scripts into a full-stack Django REST service MVP. Created an automated data pipeline using web scraping to reduce model training time by 25%.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - September 2023",
    // imageUrl: hereticImg,
  },
] as const;

export const projectsData = [
  {
    title: "Chapterit",
    description:
      "Developed a live AI-powered web app that chapters videos using a custom GPT-3.5 prompt layer. Deployed using Flask, PostgreSQL, and Heroku, serving over 400 users.",
    tags: ["Python", "Flask", "PostgreSQL", "Heroku", "NLP"],
    imageUrl: chapteritImg,
  },
  {
    title: "Mezzo",
    description:
      "Architected and built a 3-tier software platform for event planning using React Native and Spring Boot. Launched to 40 active users, planning over 100 events.",
    tags: ["React Native", "Java", "Spring Boot", "Azure"],
    imageUrl: mezzoImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "C/C++",
  "SQL",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Docker",
  "Kubernetes",
  "AWS Lambda",
  "Firebase",
  "TensorFlow",
  "PyTorch",
] as const;
