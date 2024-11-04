import { useAccordionContext } from "./Accordion";
import { Plus } from "lucide-react";
import { cn } from "../../utils";
import { motion } from "framer-motion";

interface AccordionTrigger {
  children: React.ReactNode;
  isOpen?: boolean;
  value?: number;
  className?: string;
}

export const AccordionTrigger: React.FC<AccordionTrigger> = ({
  children,
  isOpen,
  className,
  value,
}) => {
  const { toggleItems } = useAccordionContext();

  return (
    <motion.button
      onClick={() => value && toggleItems(value)}
      className={cn(
        "flex justify-between w-full py-4 px-5 text-left md:items-center  cursor-pointer",
        className
      )}
    >
      {children}
      <Plus
        className={cn(
          "transition-transform duration-300  ",
          isOpen ? "transform  rotate-45 " : ""
        )}
      />
    </motion.button>
  );
};
