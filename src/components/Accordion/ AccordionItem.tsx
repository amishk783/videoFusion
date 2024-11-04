import { cn } from "../../utils";

import { useAccordionContext } from "./Accordion";
import React, { useState } from "react";
import { motion } from "framer-motion";
type AccordionItemChildProps = {
  isOpen?: boolean;
  value?: number;
};
interface AccordionItemProps {
  children:
    | React.ReactElement<AccordionItemChildProps>
    | React.ReactElement<AccordionItemChildProps>[];
  value: number;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  children,
  className,
  ...props
}) => {
  const [displayState, setDisplayState] = useState<
    "default" | "hover" | "click"
  >("default");
  const handleMouseEnter = () => {
    setDisplayState("hover");
  };
  const handleMouseLeave = () => {
    setDisplayState("default");
  };
  const { activeIndexes } = useAccordionContext();
  const isOpen = activeIndexes.includes(value);
  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // onClick={onClick}
      initial={{ "--gradient-x": "0%", "--gradient-y": "0%" }}
      animate={
        displayState === "hover"
          ? { "--gradient-x": "50%", "--gradient-y": "50%" }
          : displayState === "click"
          ? { "--gradient-x": "50%", "--gradient-y": "70%" }
          : { "--gradient-x": "0%", "--gradient-y": "0%" }
      }
      style={{
        backgroundImage:
          "radial-gradient(50% 50% at var(--gradient-x) 0%, rgba(255, 255, 255, 0.15) var(--gradient-y), rgba(255, 255, 255, 0) 100%)",
      }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className={cn(
        "overflow-hidden rounded-xl transition-colors duration-500 ease-out  border-[1px] border-white/30 ",
        isOpen ? "bg-white" : "bg-white",
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<AccordionItemChildProps>(child)) {
          return React.cloneElement(child, { isOpen, value });
        }
        return child;
      })}
    </motion.div>
  );
};
