import { AuroraHero } from "../components/aurora";
import { HoverImageLinks } from "../components/footer";
import TrippyScroll from "../components/trippyeffect";
import { Example } from "../components/aboutus";
import VerticalAccordion from "../components/admission";
import { FacilitiesSection } from "@/components/facility";
import { ProfessionalStudentContact } from "@/components/professional-student-contact";

export default function Home() {
  return (
   <>
      <AuroraHero />
   
      <Example />
      <VerticalAccordion />
      <FacilitiesSection />
      <ProfessionalStudentContact />
      <TrippyScroll />
      <HoverImageLinks />
    </>
  );
}
