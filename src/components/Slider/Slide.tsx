import { cn } from "../../utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Slide: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex-shrink transition-all delay-100",
        className
      )}
    >
      {children}
    </div>
  );
};
