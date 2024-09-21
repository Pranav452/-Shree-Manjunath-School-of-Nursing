"use client";

import { useTransform, MotionValue, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Link from 'next/link';

const TrippyScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);

  return (
    <div ref={targetRef} className="relative z-0 h-[800vh] bg-neutral-200">
      <div className="sticky top-0 h-screen bg-white">
        <Trippy rotate={rotate} />
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center z-20"
          style={{ scale }}
        >
          <h1 className="text-8xl font-extrabold mb-8 glassy-text" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', background: 'linear-gradient(135deg, #00008B, #FF5733, #13FFAA, #1E67C6, #CE84CF, #DD335C)', backgroundClip: 'text', color: '#FF5733' }}>
            READY TO JOIN?
          </h1>

          <p className="text-4xl font-bold mb-8 glassy-text" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', background: 'linear-gradient(135deg, #00008B, #FF5733, #13FFAA, #1E67C6, #CE84CF, #DD335C)', backgroundClip: 'text', color: '#FF4500' }}>
            Shape Your Future at Our College
          </p>


          <Link href="/" passHref>
            <button className="px-8 py-4 text-2xl font-bold text-white rounded-full hover:bg-purple-700 transition-colors duration-300 glassy-button" style={{ backgroundColor: '#FF4500', color: '#FFFFFF' }}>
              Apply Now
            </button>
          </Link>
        </motion.div>
      </div>
      {/* College information */}
      
    </div>
  );
};

const NUM_SECTIONS = 25;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

const generateSections = (
  count: number,
  color: string,
  rotate: MotionValue
) => {
  if (count === NUM_SECTIONS) {
    return <></>;
  }

  const nextColor = color === "black" ? "white" : "black";

  return (
    <Section rotate={rotate} background={color}>
      {generateSections(count + 1, nextColor, rotate)}
    </Section>
  );
};

const Trippy = ({ rotate }: { rotate: MotionValue }) => {
  return (
    <motion.div className="absolute inset-0 overflow-hidden bg-black">
      {generateSections(0, "black", rotate)}
    </motion.div>
  );
};

const Section = ({
  background,
  children,
  rotate,
}: {
  background: string;
  rotate: MotionValue;
  children?: JSX.Element;
}) => {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{
        background,
        rotate,
        padding: PADDING,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TrippyScroll;