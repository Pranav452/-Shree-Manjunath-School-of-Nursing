"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useAnimate,
} from "framer-motion";
import { SlideTabs } from "./navbar";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from 'next/image';

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// New component for image hover cards
const ImageHoverCards = () => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const cardRenderCount = useRef(0);

  const images = [
    { src: "/lab.jpg", alt: "College Building" },
    { src: "/ward.jpg", alt: "Nursing Students" },
    { src: "/lecture-hall.png", alt: "Laboratory" },
    { src: "/library.png", alt: "Library" },
    { src: "/practical-lab.jpg", alt: "Hostel" },
  ];

  const renderCard = (index: number, x: number, y: number) => {
    const selector = `[data-image-card-index="${index}"]`;
    const el = document.querySelector(selector) as HTMLElement;

    if (el) {
      el.style.top = `${y}px`;
      el.style.left = `${x}px`;
      el.style.zIndex = cardRenderCount.current.toString();

      animate(
        selector,
        {
          opacity: [0, 1],
          scale: [0.5, 1],
          rotate: [Math.random() * 20 - 10, 0],
        },
        { type: "spring", damping: 15, stiffness: 200 }
      );

      animate(
        selector,
        { opacity: [1, 0] },
        { ease: "linear", duration: 0.5, delay: 5 }
      );
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const distance = Math.sqrt(
      Math.pow(clientX - lastRenderPosition.current.x, 2) +
      Math.pow(clientY - lastRenderPosition.current.y, 2)
    );

    if (distance >= 100) {
      lastRenderPosition.current = { x: clientX, y: clientY };
      renderCard(cardRenderCount.current % images.length, clientX, clientY);
      cardRenderCount.current++;
    }
  };

  return (
    <div
      ref={scope}
      className="absolute inset-0 z-10"
      onMouseMove={handleMouseMove}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="pointer-events-none absolute left-0 top-0 w-48 h-48 rounded-lg overflow-hidden opacity-0 shadow-lg"
          data-image-card-index={index}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]); // Add 'color' to the dependency array

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative min-h-screen overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-4">
        <SlideTabs />
      </div>

      {/* Image Hover Cards */}
      <ImageHoverCards />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full mt-16">
        <HoverBorderGradient className=" inline-block rounded-full bg- px-3 py-1.5 text-sm">
          Admissions Open for 2024-25!
        </HoverBorderGradient>

        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Shree Manjunath School of Nursing
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Special opportunity for rural boys and girls in the field of nursing!
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Apply Now
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};