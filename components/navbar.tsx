"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


export const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border border-white/20 bg-black p-1"
    >
      
     <Link href="/about" > <Tab setPosition={setPosition}>About</Tab> </Link> 
      <Link href="/admissions" > <Tab setPosition={setPosition}>Admissions</Tab> </Link> 
      <Link href="/facilities" > <Tab setPosition={setPosition}>Facilities</Tab> </Link> 



        <Link href="/contact" > <Tab setPosition={setPosition}>Contact</Tab> </Link> 

      <Cursor position={position} />

    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white/20 md:h-12"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};