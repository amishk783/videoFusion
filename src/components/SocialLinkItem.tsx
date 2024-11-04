import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../utils";

interface Props {
  svgPath: JSX.Element;
  name: string;
  link: string;
}

export const SocialLinkItem: React.FC<Props> = ({ svgPath, name, link }) => {
  const [displayState, setDisplayState] = useState<"default" | "hover">(
    "default"
  );
  const handleMouseEnter = () => {
    setDisplayState("hover");
  };
  const handleMouseLeave = () => {
    setDisplayState("default");
  };

  return (
    <motion.a
      href={link}
      animate={
        displayState === "hover"
          ? { borderWidth: "1px", borderColor: "rgb(255 255 255 / 0.3)" }
          : { borderWidth: "0px", borderColor: "rgb(255 255 255 / 0.0)" }
      }
      transition={{ ease: "easeIn", duration: 0.5 }}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={cn(
        "w-full h-min relative cursor-pointer flex overflow-hidden items-center justify-start will-change-transform  rounded-full    "
      )}
    >
      <motion.div
        animate={
          displayState === "hover"
            ? { borderRadius: "100px", marginRight: "10px" }
            : { borderRadius: "0px", marginRight: "0px" }
        }
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className=" relative px-5 py-8 justify-start flex items-center h-9 gap-3 w-full bg-white/10 "
      >
        <motion.div
          transition={{ ease: "easeInOut", duration: 0.5 }}
          animate={displayState === "hover" ? { scale: 1.2 } : { scale: 1 }}
          className={cn(
            " transition-colors duration-300  fill-current aspect-square h-7 w-7 ",
            displayState === "hover" ? " text-[#ff7a3bd9]" : "text-white"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
          >
            {svgPath}
          </svg>
        </motion.div>
        <p className="">{name}</p>
      </motion.div>
      <motion.div
        animate={
          displayState === "hover"
            ? { borderRadius: "100px" }
            : { borderRadius: "0px" }
        }
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className=" w-16 relative overflow-visible justify-center items-center aspect-square flex flex-col h-16 bg-white/10 rounded-full"
      >
        <motion.div
          animate={
            displayState === "hover" ? { rotate: "45deg" } : { rotate: "90deg" }
          }
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className=" aspect-square h-6 w-6 relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            className={cn(
              " transition-colors duration-300  fill-current",
              displayState === "hover" ? " text-[#ff7a3bd9]" : "text-white"
            )}
          >
            <g>
              <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"></path>
            </g>
          </svg>
        </motion.div>
      </motion.div>
    </motion.a>
  );
};
