"use client";
import { useAnimate } from "framer-motion";
import React, { MouseEventHandler, ReactNode, useRef, useEffect } from "react";

export const Example = () => {
  const collegeInfo = [
    {
      title: "About Our College",
      content: "Shree Manjunath School of Nursing, Vaduj is a premier institution offering quality nursing education. Established with a vision to create skilled healthcare professionals, we are committed to excellence in nursing education and practice."
    },
    {
      title: "Admissions Open",
      content: "Join us for the 2024-25 academic year. We offer a 3-year G.N.M. (General Nursing and Midwifery) Diploma Course, recognized by the Indian Nursing Council and approved by the Maharashtra Nursing Council."
    },
    {
      title: "Our Facilities",
      content: "We provide state-of-the-art facilities including a 200+ bed hospital for hands-on training, comfortable hostel accommodations, a well-equipped computer lab, and a library with extensive resources."
    },
    {
      title: "Faculty & Training",
      content: "Learn from our experienced faculty members who are dedicated to nurturing the next generation of nurses. We offer comprehensive training, including rural health programs, to prepare you for diverse healthcare settings."
    },
    {
      title: "Career Support",
      content: "We offer job placement assistance and guidance for educational loans. Our aim is to support your career growth and help you succeed in the nursing profession."
    },
    {
      title: "Contact Us",
      content: "For more information, call us at 7385685431. We are located in Vaduj, Satara District. Visit us to explore the opportunities we offer in nursing education."
    }
  ];

  return (
    <MouseTextTrail
      renderTextBuffer={100}
      rotationRange={10}
      texts={collegeInfo}
    >
      <section className="grid h-screen w-full place-content-center bg-white">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-3xl font-bold uppercase text-black mb-2">
            <span>About Us</span>
          </p>
          <p className="text-gray-500 text-sm italic">(Move your cursor around to explore)</p>
        </div>
      </section>
    </MouseTextTrail>
  );
};

const MouseTextTrail = ({
  children,
  texts,
  renderTextBuffer,
  rotationRange,
}: {
  children: ReactNode;
  texts: { title: string; content: string }[];
  renderTextBuffer: number;
  rotationRange: number;
}) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const textRenderCount = useRef(0);

  // New function to render initial cards
  const renderInitialCards = () => {
    const initialCardCount = Math.min(3, texts.length);
    for (let i = 0; i < initialCardCount; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      renderCard(i, x, y);
    }
  };

  // Modified renderNextText function
  const renderNextText = () => {
    const textIndex = textRenderCount.current % texts.length;
    renderCard(textIndex, lastRenderPosition.current.x, lastRenderPosition.current.y);
    textRenderCount.current = textRenderCount.current + 1;
  };

  // New function to handle card rendering
  const renderCard = (index: number, x: number, y: number) => {
    const selector = `[data-mouse-move-index="${index}"]`;
    const el = document.querySelector(selector) as HTMLElement;

    if (el) {
      el.style.top = `${y}px`;
      el.style.left = `${x}px`;
      el.style.zIndex = textRenderCount.current.toString();

      const rotation = Math.random() * rotationRange;

      animate(
        selector,
        {
          opacity: [0, 1],
          transform: [
            `translate(-50%, -25%) scale(0.5) ${index % 2 ? `rotate(${rotation}deg)` : `rotate(-${rotation}deg)`}`,
            `translate(-50%, -50%) scale(1) ${index % 2 ? `rotate(-${rotation}deg)` : `rotate(${rotation}deg)`}`,
          ],
        },
        { type: "spring", damping: 15, stiffness: 200 }
      );

      animate(
        selector,
        { opacity: [1, 0] },
        { ease: "linear", duration: 0.5, delay: 8 }
      );
    }
  };

  // Use effect to render initial cards
  useEffect(() => {
    renderInitialCards();
  }, []);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;
    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderTextBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;
      renderNextText();
    }
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {texts.map((text, index) => (
        <div
          className="pointer-events-none absolute left-0 top-0 max-w-[300px] rounded-xl border-2 border-black bg-white p-4 opacity-0 shadow-md"
          key={index}
          data-mouse-move-index={index}
        >
          <h3 className="text-lg font-bold text-black mb-2">{text.title}</h3>
          <p className="text-sm text-black">{text.content}</p>
        </div>
      ))}
    </div>
  );
};

const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
};