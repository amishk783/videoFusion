import React, { useContext, useState } from "react";

import { cn } from "../../utils";
import { createContext } from "react";

export interface AccordionContextType {
  activeIndexes: number[];
  toggleItems: (item: number) => void;
}

export const AccordionContext = createContext<AccordionContextType | null>(
  null
);

export const Accordion: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleItems = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };
  return (
    <AccordionContext.Provider value={{ activeIndexes, toggleItems }}>
      <div className={cn("max-w-3xl w-full ")}>
        <div className="flex flex-col space-y-5">{children}</div>
      </div>
    </AccordionContext.Provider>
  );
};

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};
