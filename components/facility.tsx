"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBuildingHospital,
  IconSchool,
  IconBed,
  IconBriefcase,
  IconDeviceLaptop,
  IconBooks,
  IconNurse,
  IconStethoscope,
  IconHeartbeat,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from 'react';

export function FacilitiesSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-12 text-black tracking-wide">FACILITIES</h2>
        <BentoGrid className="md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg] bg-black text-white", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const MotionWrapper = ({ children }: { children: ReactNode }) => (
  <motion.div
    className="w-full h-full flex items-center justify-center"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const items = [
  {
    title: "Clinical Training",
    description: (
      <span className="text-base font-semibold text-white">
        Excellent facilities at Narayangaon Rural Health Research for hands-on experience.
      </span>
    ),
    header: (
      <MotionWrapper>
        <IconBuildingHospital className="w-16 h-16 text-white" />
      </MotionWrapper>
    ),
    className: "md:col-span-1",
    icon: <IconBuildingHospital className="h-4 w-4 text-white" />,
  },
  {
    title: "200+ Bed Hospital",
    description: (
      <span className="text-base font-semibold text-white">
        Full-fledged general hospital with over 200 beds available for training.
      </span>
    ),
    header: (
      <MotionWrapper>
        <IconBed className="w-16 h-16 text-white" />
      </MotionWrapper>
    ),
    className: "md:col-span-1",
    icon: <IconBed className="h-4 w-4 text-white" />,
  },
  {
    title: "Experienced Faculty",
    description: (
      <span className="text-base font-semibold text-white">
        Training with experienced teachers in rural and private hospitals.
      </span>
    ),
    header: (
      <MotionWrapper>
        <IconSchool className="w-16 h-16 text-white" />
      </MotionWrapper>
    ),
    className: "md:col-span-1",
    icon: <IconSchool className="h-4 w-4 text-white" />,
  },
  {
    title: "Job Opportunities",
    description: (
      <span className="text-base font-semibold text-white">
        Guaranteed job placement after completing the nursing course.
      </span>
    ),
    header: (
      <MotionWrapper>
        <IconBriefcase className="w-16 h-16 text-white" />
      </MotionWrapper>
    ),
    className: "md:col-span-1",
    icon: <IconBriefcase className="h-4 w-4 text-white" />,
  },
  {
    title: "Computer Lab",
    description: (
      <span className="text-base font-semibold text-white">
        Well-equipped computer lab for enhancing digital skills in healthcare.
      </span>
    ),
    header: (
      <MotionWrapper>
        <IconDeviceLaptop className="w-16 h-16 text-white" />
      </MotionWrapper>
    ),
    className: "md:col-span-1",
    icon: <IconDeviceLaptop className="h-4 w-4 text-white" />,
  },
  {
    title: "Library Resources",
    description: (
      <span className="text-base font-semibold text-white">
        Extensive collection of medical books and journals for research.
      </span>
    ),
    header: (
      <MotionWrapper>
        <IconBooks className="w-16 h-16 text-white" />
      </MotionWrapper>
    ),
    className: "md:col-span-1",
    icon: <IconBooks className="h-4 w-4 text-white" />,
  },
  {
    title: "Nursing Skills Lab",
    description: (
      <span className="text-base font-semibold text-white">
        State-of-the-art lab for practicing essential nursing procedures.
      </span>
    ),
    header: (
      <MotionWrapper>
        <IconNurse className="w-16 h-16 text-white" />
      </MotionWrapper>
    ),
    className: "md:col-span-1",
    icon: <IconNurse className="h-4 w-4 text-white" />,
  },
  {
    title: "Medical Equipment",
    description: (
      <span className="text-base font-semibold text-white">
        Access to modern medical equipment for hands-on training.
      </span>
    ),
    header: (
      <MotionWrapper>
        <IconStethoscope className="w-16 h-16 text-white" />
      </MotionWrapper>
    ),
    className: "md:col-span-1",
    icon: <IconStethoscope className="h-4 w-4 text-white" />,
  },
  {
    title: "Health Monitoring",
    description: (
      <span className="text-base font-semibold text-white">
        Advanced health monitoring systems for practical experience.
      </span>
    ),
    header: (
      <MotionWrapper>
        <IconHeartbeat className="w-16 h-16 text-white" />
      </MotionWrapper>
    ),
    className: "md:col-span-1",
    icon: <IconHeartbeat className="h-4 w-4 text-white" />,
  },
];
