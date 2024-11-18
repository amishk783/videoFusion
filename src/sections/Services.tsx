import { Button } from "../components/Button";
import { ServiceItem } from "../components/ServiceItem";

import serviceImage1 from "../assets/serviceItem/serviceItem1.jpg";
import serviceImage2 from "../assets/serviceItem/serviceItem2.jpg";
import serviceImage3 from "../assets/serviceItem/serviceItem3.jpg";

import serviceBg from "../assets/servicesBg.svg";
const services = [
  {
    title: "Pre Production",
    description:
      "Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.",
    bgImageUrl: serviceImage1,
  },
  {
    title: "Production",
    description:
      "Production represents the dynamic phase of a creative project, where the plans from pre-production spring to life, with cameras rolling, actors delivering their performances, and the realization of the creative vision.",
    bgImageUrl: serviceImage2,
  },
  {
    title: "Post Production",
    description:
      "Post-production emerges as the pivotal phase in creative projects, wherein raw content undergoes a transformation into its refined, polished state where editing, sound design, visual effects, and essential adjustments to breathe life into the project.",
    bgImageUrl: serviceImage3,
  },
];

export const Services = () => {
  return (
    <div className=" flex items-center h-min overflow-visible relative w-full   ">
      <div className="flex flex-col xl:flex-row items-start basis-0 flex-grow flex-shrink-0 h-min xl:max-container xl:px-24 xl:py-12 relative bg-black/30 gap-10 xl:gap-20">
        {/* background */}

        <div className=" h-full w-[90%] overflow-hidden -z-10 absolute pointer-events-none">
          <img
            className=" w-full h-full object-cover  object-center"
            src={serviceBg}
          ></img>
        </div>
        {/* left part */}
        <div className="flex items-start  self-stretch flex-col h-auto justify-between  overflow-visible relative z-20  flex-grow-[0.5] flex-shrink-0 basis-0  mix-blend-difference  ">
          <div className=" flex items-start flex-col h-min  justify-center sticky w-full will-change-transform z-30 top-11  mix-blend-difference   xl:pb-24 ">
            <div className="flex flex-col justify-start h-auto  w-full xl:max-w-[900px]  ">
              <h2 className=" font-syne  font-semibold text-xl xl:text-4xl whitespace-nowrap max-sm:text-center ">
                From Concept To Completion:<br></br> We've Got You Covered!
              </h2>
            </div>
          </div>
          <div className="hidden xl:block">
            <Button>Explore Services</Button>
          </div>
        </div>
        <div className="flex basis-0 w-full max-sm:px-4 flex-shrink-0 flex-grow flex-col gap-7 h-min justify-center items-center relative z-10">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service}></ServiceItem>
          ))}
        </div>
      </div>
    </div>
  );
};
