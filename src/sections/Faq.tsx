import { Accordion } from "../components/Accordion/Accordion";

import { AccordionContent } from "../components/Accordion/AccordionContent";
import { AccordionItem } from "../components/Accordion/ AccordionItem";
import { AccordionTrigger } from "../components/Accordion/AccordionTrigger";
import faqBg from "../assets/servicesBg.svg";
const faqContent = [
  {
    question: "How do I get started with building a WordPress website?",
    answer:
      "Contact us to discuss your website needs, and we'll guide you through our streamlined process to design and develop a WordPress site that meets your goals.",
  },
  {
    question:
      "Is WordPress suitable for both small businesses and large enterprises?",
    answer:
      "Absolutely! WordPress is highly flexible and scalable, making it ideal for businesses of all sizes, from small startups to large enterprises.",
  },
  {
    question: "What kind of WordPress services do you offer?",
    answer:
      "We offer a full range of WordPress services including custom theme development, plugin integration, SEO optimization, and ongoing maintenance and support.",
  },
  {
    question: "Can I customize my WordPress website to fit my brand?",
    answer:
      "Yes, we provide fully customizable solutions, ensuring that your WordPress website perfectly reflects your brand's identity and meets your specific business needs.",
  },
  {
    question: "How do you ensure the security of my WordPress website?",
    answer:
      "We implement industry-leading security measures, including regular updates, security monitoring, and backups, to protect your WordPress website from threats.",
  },
];
export const Faq = () => {
  return (
    <div className=" flex items-center h-min overflow-visible relative w-full font-syne   ">
      <div className="flex flex-col items-start basis-0 flex-grow flex-shrink-0 h-min max-container xl:px-24 xl:py-12 relative bg-black/30 gap-60">
        <div className=" h-full w-[90%] overflow-hidden -z-10 absolute ">
          <img
            className=" w-full h-[90%] object-cover  object-center"
            src={faqBg}
          ></img>
        </div>
        <div className="flex flex-col w-full justify-center max-sm:px-2 gap-14  py-10 ">
          <div className="flex flex-col items-center justify-center  space-y-5  p-4 ">
            <h2 className="text-5xl bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-700 text-transparent inline-block">
              Curious? Check Out the Scoop! (FAQs)
            </h2>
          </div>
          <div className="w-full h-min flex items-center justify-center">
            <Accordion>
              {faqContent.map((item, index) => (
                <AccordionItem
                  key={index}
                  className=" text-white bg-transparent"
                  value={index + 1}
                >
                  <AccordionTrigger className="">
                    <div className=" py-2 text-lg">{item.question}</div>
                  </AccordionTrigger>
                  <AccordionContent className="">
                    <p className=" pb-4">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
