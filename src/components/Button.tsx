import { motion } from "framer-motion";
import { useState } from "react";
export const Button: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
    <button
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className=" h-14 w-auto relative group cursor-pointer "
    >
      <motion.div
        style={{
          backgroundImage:
            "linear-gradient(112deg,  rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.11) 100%)",
        }}
        className="flex items-center justify-center border-[1px] p-[2px] border-white/40 border-solid backdrop-blur-md  h-full rounded-full   text-lg  xl:text-xl font-medium "
      >
        <motion.div
          animate={
            displayState === "hover" ? { paddingLeft: 26 } : { paddingLeft: 0 }
          }
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className=" flex w-full h-full items-center justify-center border-[2px] rounded-full border-white/40  bg-black/40 pointer-events-none "
        >
          <motion.div
            style={{
              backgroundImage:
                "radial-gradient(127.89999999999999% 258% at -40.300000000000004% 0%, rgb(255, 122, 59)  51.69569534721884%, rgb(237, 153, 29) 75.40622818511069%, rgb(9, 93, 93) 100%)",
            }}
            initial={{ scale: 1, opacity: 1 }}
            animate={
              displayState === "hover"
                ? { scale: 0, translateX: -100 }
                : { scale: 1, translateX: 0 }
            }
            transition={{ duration: 0.5 }}
            className="  origin-center h-[90%] overflow-visible absolute w-[97%] z-0 rounded-full pointer-events-none "
          ></motion.div>

          <div className=" flex items-center justify-center h-full overflow-hidden relative w-full pointer-events-none  will-change-transform transition-transform transform  duration-1000 delay-75 scale-110  ease-in-out  py-4 pr-8  ">
            <motion.div
              animate={
                displayState === "hover" ? { opacity: 1 } : { opacity: 0 }
              }
              className=" relative w-9 h-9"
            >
              <div className=" absolute ml-2 mt-[10px]  w-4 h-4 -z-10 bg-red-700 rounded-full group-hover:animation-record"></div>
            </motion.div>
            <div className=" flex z-50 text-white">{children}</div>
          </div>
        </motion.div>
      </motion.div>
    </button>
  );
};
