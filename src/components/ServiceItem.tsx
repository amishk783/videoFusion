import { motion } from "framer-motion";
import { useState } from "react";

import { cn } from "../utils";

interface Props {
  title: string;
  description: string;
  bgImageUrl: string;
}

export const ServiceItem: React.FC<Props> = ({
  title,
  description,
  bgImageUrl,
}) => {
  const [displayState, setDisplayState] = useState<
    "default" | "hover" | "click"
  >("default");
  const handleMouseEnter = () => {
    if (displayState === "click") return;
    setDisplayState("hover");
  };
  const handleMouseLeave = () => {
    if (displayState === "click") return;
    setDisplayState("default");
  };

  const handleOnClick = () => {
    setDisplayState((prevState) => (prevState === "click" ? "hover" : "click"));
  };
  const variants = {
    default: {
      translateX: 0,
      opacity: 0,
      rotate: "4deg",
      top: "-12rem",
      filter: "grayscale(100%)",
    },
    hover: {
      translateX: -400,
      opacity: 1,
      rotate: "-5deg",
      top: "-12rem",
      filter: "grayscale(100%)",
    },
    click: {
      translateX: -850,
      opacity: 1,
      rotate: "0deg",
      left: "50%",
      filter: "grayscale(0%)",
    },
  };

  return (
    <div
      onClick={handleOnClick}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className=" h-auto relative w-full "
    >
      <motion.div
        initial={{ "--gradient-x": "0%" }}
        animate={
          displayState === "hover"
            ? { "--gradient-x": "50%" }
            : { "--gradient-x": "0%" }
        }
        style={{
          backgroundImage:
            "radial-gradient(50% 50% at var(--gradient-x) 0%, rgba(255, 255, 255, 0.15) 2.21%, rgba(255, 255, 255, 0) 100%)",
        }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className=" flex items-start flex-col p-10 gap-5 h-min font-syne  justify-center relative border-[1px]  border-white/30 border-solid w-full rounded-3xl origin-center "
      >
        <div className="flex flex-col items-start relative">
          <h5 className="text-3xl font-semibold">{title}</h5>
        </div>
        <div>
          <p className=" text-lg">{description}</p>
        </div>
        <div className=" flex border-[1px] border-solid bg-black rounded-full items-center justify-center h-min relative py-1 px-2 gap-2">
          <div className=" flex flex-col items-center  relative">
            <p>Learn More</p>
          </div>
          <motion.div
            initial={{
              width: "100%",
            }}
            animate={
              displayState === "hover"
                ? {
                    width: "50px",
                  }
                : displayState === "click"
                ? {
                    width: "50px",
                  }
                : {
                    width: "32px",
                  }
            }
            transition={{ ease: "easeIn", duration: 0.5 }}
            className=" h-8 relative w-8 rounded-full  "
          >
            <motion.svg
              initial={{
                rotate: "-90deg",
                translateX: 0,
                x: 4,
                scale: 0,
              }}
              animate={
                displayState === "hover"
                  ? {
                      width: "32px",
                      rotate: "0deg",
                      translateX: 10,
                      x: 4,
                      scale: 1.1,
                    }
                  : displayState === "click"
                  ? {
                      width: "32px",
                      rotate: "180deg",
                      x: 4,
                      translateX: 10,
                      scale: 1.1,
                    }
                  : {
                      rotate: "-90deg",
                      translateX: 0,
                      width: "32px",
                      scale: 1,
                      x: 0,
                    }
              }
              transition={{ ease: "easeIn", duration: 1 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className={cn(
                displayState === "hover"
                  ? "text-[#FF703B] bg-[#FF703B]/20 rounded-full sroke-3"
                  : displayState === "click"
                  ? "text-[#095D5D] bg-[#095D5D]/20 rounded-full sroke-3"
                  : "text-white  transition-colors duration-300  rounded-full"
              )}
              style={{
                width: "32px",
                height: "32px",
                display: "inline-block",
                userSelect: "none",
              }}
            >
              <g>
                <path
                  d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm34.83-86.83a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,158.34V88a4,4,0,0,1,8,0v70.34l25.17-25.17A4,4,0,0,1,162.83,133.17Z"
                  stroke="currentColor"
                  strokeWidth="6"
                />
              </g>
            </motion.svg>
          </motion.div>
        </div>
        <motion.div
          variants={variants}
          animate={displayState}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className=" right-7   flex items-center justify-center flex-col overflow-visible absolute w-64 z-50 h-full"
        >
          <div className=" w-full h-full   rounded-2xl will-change-transform ">
            <div className=" absolute w-full   h-full z-50 ">
              <img
                className=" w-full h-full object-center object-cover rounded-lg"
                src={bgImageUrl}
              ></img>{" "}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
