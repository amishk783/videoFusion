import { cn } from "../../utils";

import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
}

export const Slider: React.FC<Props> = ({
  children,
  className,
  direction = "left",
  speed = 36,
}) => {
  const slides = React.Children.toArray(children);

  const slideSpeed = `${speed}s`;
  return (
    <>
      <div
        style={
          {
            "--slide-speed": slideSpeed,
          } as React.CSSProperties
        }
        data-direction={direction}
        className={cn(" slider flex ")}
      >
        <div className={cn("  inner_slider ", className)}>
          {slides.map((slide, index) => (
            <React.Fragment key={`slide-${index}`}>{slide}</React.Fragment>
          ))}
        </div>
        <div className={cn("  inner_slider ", className)}>
          {slides.map((slide, index) => (
            <React.Fragment key={`slide-duplicate-${index}`}>
              {slide}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
