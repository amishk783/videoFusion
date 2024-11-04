import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  imageUrl: string;
  subTitle: string;
  title: string;
  author: string;
  date: string;
}

export const BlogItem: React.FC<Props> = ({
  imageUrl,
  subTitle,
  title,
  author,
  date,
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
  const variants = {
    default: {
      scale: 1,
      translateY: 0,
    },
    hover: {
      scale: 1,
      translateY: -20,
    },
  };

  return (
    <motion.div className="w-full h-min flex items-start ">
      <motion.div
        variants={variants}
        animate={displayState}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className=" flex flex-col gap-4"
      >
        <div className="w-full h-[343px] flex overflow-hidden justify-center items-end   relative  rounded-3xl will-change-transform">
          {/* button */}
          <motion.div
            initial={{ translateY: 0 }}
            animate={
              displayState === "default"
                ? { opacity: 0, translateY: 20 }
                : {
                    opacity: 1,
                    translateY: 0,
                  }
            }
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className=" absolute w-28 h-28 rounded-full bg-white/20 top-1/3 z-50 backdrop-blur-md border-[1px] border-solid border-white/40 flex items-center justify-center"
          >
            <p>Read Blog</p>
          </motion.div>
          {/* image part */}
          <motion.div
            initial={{ scale: 1, translateY: 0 }}
            animate={
              displayState === "default"
                ? {
                    translateY: 0,
                    filter: "grayscale(0%)",
                  }
                : {
                    translateY: 70,
                    filter: "grayscale(100%)",
                  }
            }
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className=" h-[120%] w-full  relative"
          >
            <div className="absolute w-full h-full">
              <img
                className="   w-full h-full object-center object-cover "
                src={imageUrl}
              ></img>
            </div>
          </motion.div>
          {/* text part */}
        </div>
        <div className="w-full h-full flex flex-col items-start justify-start gap-4 font-syne px-2">
          <p className=" text-sm text-orange-700">{subTitle}</p>
          <h5 className=" text-white font-semibold text-lg">{title}</h5>
          <div className="flex gap-2">
            <p className=" text-zinc-700">{author}</p>
            <div className=" w-1 h-1 rounded-full bg-zinc-700"></div>
            <p className=" text-zinc-700">{date}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
