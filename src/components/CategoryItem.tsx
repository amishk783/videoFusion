import { useState, useRef} from "react";
import { motion } from "framer-motion";
import { cn } from "../utils";

interface Props {
  className?: string;
  imageUrl: string;
}

export const CategoryItem: React.FC<Props> = ({ className, imageUrl }) => {
  const continerRef = useRef<HTMLDivElement | null>(null);

  const [displayState, setDisplayState] = useState<
    "default" | "hover" | "click"
  >("default");
  const handleMouseEnter = () => {
    setDisplayState("hover");
  };
  const handleMouseLeave = () => {
    setDisplayState("default");
  };

  return (
    <div
      ref={continerRef}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        backgroundImage:
          "radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.1) 2.21002%, rgba(255, 255, 255, 0) 100%)",
      }}
      className={cn(
        " flex flex-col  justify-between items-start will-change-transform overflow-hidden  w-full h-full font-syne relative rounded-3xl  backdrop-blur-md ",
        className
      )}
    >
      <motion.div
        initial={{ left: "-200px" }}
        animate={
          displayState === "hover"
            ? {
                left: "1200px",
              }
            : {
                left: "-220px",
              }
        }
        transition={{ ease: "easeIn", duration: 0.5 }}
        className="flex rotate-[9deg] bg-white/10  backdrop-blur-sm  absolute w-40 h-[140%] -top-10  overflow-visible justify-center  z-30  "
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(114deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 47%, rgba(255,255,255,0.008) 51%)",
          }}
          className=" h-full  w-full absolute opacity-20 will-change-transform  "
        ></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={
          displayState === "hover"
            ? {
                opacity: 0,
              }
            : {
                opacity: 1,
              }
        }
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className=" w-full  h-full overflow-visible absolute"
      >
        <img
          src={imageUrl}
          className=" w-full h-full object-center  object-cover  "
        ></img>
      </motion.div>
      {/* overlay */}
      <div
        className=" absolute z-0 w-full h-full opacity-90"
        style={{
          backgroundImage:
            "linear-gradient(165deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>
      <motion.div className=" h-full w-[90%] overflow-hidden -z-10 absolute pointer-events-none">
        <img
          className=" w-full h-full object-cover  object-center"
          src="/src/assets/servicesBg.svg"
        ></img>
      </motion.div>
      <div className=" flex flex-start h-min mix-blend-difference overflow-visible relative w-full p-5">
        <div className=" flex flex-col items-start justify-start h-auto ">
          <motion.h3
            initial={{
              x: 0,
              y: 0,
            }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            animate={
              displayState === "hover"
                ? {
                    x: 10,
                    y: 10,
                  }
                : {
                    x: 0,
                    y: 0,
                  }
            }
            className={cn(
              " text-2xl font-bold bg-clip-text text-transparent transition-colors duration-200 ",
              displayState === "hover" ? "bg-gradient-text " : "bg-white"
            )}
          >
            Corporate Videos
          </motion.h3>
        </div>
      </div>
      <motion.div
        initial={{
          x: 0,
          y: 0,
          opacity: 0,
        }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        animate={
          displayState === "hover"
            ? {
                x: 10,
                y: -10,
                opacity: 1,
              }
            : {
                x: 0,
                y: 0,
                opacity: 0,
              }
        }
        className="flex  will-change-transform h-auto relative w-full p-4"
      >
        <p className=" text-lg">
          Enhance your brand's impact with our corporate video expertise. We
          create engaging content for businesses, from promotions to training
          materials.
        </p>
      </motion.div>
    </div>
  );
};
