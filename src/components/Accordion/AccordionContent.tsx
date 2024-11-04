import { cn } from "../../utils";
import { useRef } from "react";

interface AccordionContent {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

export const AccordionContent: React.FC<AccordionContent> = ({
  children,
  isOpen,
  className,
}) => {
  const containerHeight = useRef<HTMLDivElement>(null);

  let height;
  if (containerHeight.current?.scrollHeight) {
    height = containerHeight.current.scrollHeight;
  }

  return (
    <div
      style={isOpen ? { height: `${height}px` } : { height: "0px" }}
      ref={containerHeight}
      className={cn(
        "px-4  transition-all ease-in-out transform duration-700",
        className
      )}
    >
      {children}
    </div>
  );
};
