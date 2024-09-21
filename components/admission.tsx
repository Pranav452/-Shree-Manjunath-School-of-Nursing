"use client";
import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useWindowSize } from "./usewindow";
import { IconType } from "react-icons";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="p-4 bg-black">
      <h2 className="text-4xl font-bold text-white text-center mb-2">Admission</h2>
      <p className="text-xl text-white text-center mb-6">(Open for 2024-2025)</p>

      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  Icon: IconType;
  title: string;
  description: { heading: string; content: string }[];
}

const Panel = ({
  open,
  setOpen,
  id,
  Icon,
  title,
  description,
}: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-bold rotate-180 text-black"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-bold text-black">{title}</span>
        <div className="w-8 lg:w-full aspect-square bg-indigo-600 text-white grid place-items-center">
          <Icon size={24} />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-full h-full overflow-y-auto relative bg-white flex items-start"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-6 py-4 text-black"
            >
              {description.map((item, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-xl font-semibold mb-2">{item.heading}</h4>
                  <p className="text-lg">{item.content}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Admission Process",
    Icon: FiDollarSign,
    description: [
      {
        heading: "Application Submission",
        content: "Submit the application form along with required documents either online or in person at our admission office.",
      },
      {
        heading: "Entrance Examination",
        content: "Qualified candidates will be invited to take our nursing entrance exam, testing basic science and general knowledge.",
      },
      {
        heading: "Personal Interview",
        content: "Shortlisted candidates will undergo a personal interview to assess their aptitude and motivation for nursing.",
      },
      {
        heading: "Merit List",
        content: "Final selection is based on a composite score of 12th grade marks, entrance exam performance, and interview results.",
      },
    ],
  },
  {
    id: 2,
    title: "Eligibility Criteria",
    Icon: FiPlay,
    description: [
      {
        heading: "Educational Qualification",
        content: "Passed 12th Grade with a minimum of 45% marks in Arts / Science / Commerce from a recognized board.",
      },
      {
        heading: "Age Limit",
        content: "Candidates must be between 17 to 35 years of age as of December 31st of the admission year.",
      },
      {
        heading: "Language Proficiency",
        content: "Good command over English is recommended, as the medium of instruction is English.",
      },
      {
        heading: "Physical Fitness",
        content: "Candidates should be medically fit to pursue the nursing program.",
      },
    ],
  },
  {
    id: 3,
    title: "Required Documents",
    Icon: FiBell,
    description: [
      {
        heading: "Academic Records",
        content: "10th and 12th grade mark sheets and passing certificates.",
      },
      {
        heading: "Proof of Identity",
        content: "Aadhaar card, PAN card, or any government-issued ID.",
      },
      {
        heading: "Domicile and Caste Certificates",
        content: "Domicile certificate and caste certificate (if applicable for reservation category).",
      },
      {
        heading: "Other Documents",
        content: "Recent passport-size photographs, school leaving certificate, and medical fitness certificate.",
      },
    ],
  },
  {
    id: 4,
    title: "Fee Structure",
    Icon: FiBarChart,
    description: [
      {
        heading: "Tuition Fee",
        content: "Annual tuition fee is ₹75,000, payable at the beginning of each academic year.",
      },
      {
        heading: "Additional Expenses",
        content: "Hostel fees (₹30,000/year), uniform charges (₹5,000), and book expenses (approximately ₹10,000/year).",
      },
      {
        heading: "Scholarships",
        content: "Merit-based scholarships and financial aid available for eligible students.",
      },
      {
        heading: "Payment Options",
        content: "Fees can be paid in installments. Educational loan assistance is available for eligible candidates.",
      },
    ],
  },
];

export default VerticalAccordion;