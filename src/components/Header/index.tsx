import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  console.log("🚀 ~ Header ~ isMobileMenuOpen:", isMobileMenuOpen);

  const handleMenuClick = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="  flex items-center justify-center  w-full z-50 fixed  ">
      <div className="w-[90%] pt-4  h-min relative md:max-w-[900px]">
        {/* <div className=" bg-gradient-to-t sm:hidden from-white/20 to-black  absolute -z-10 w-full h-14 rounded-full text-center flex items-end text-xl"></div> */}
        <motion.div
          animate={
            isMobileMenuOpen
              ? { borderRadius: "14px" }
              : { borderRadius: "40px" }
          }
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="relative w-full pb-2 pl-5 pr-2 pt-2 backdrop-blur z-40 bg-[#0D0D0D] bg-opacity-20"
        >
          <div className="flex justify-between   h-full  md:justify-normal  md:gap-28 items-center">
            <img className=" w-40 h-full " src="/logo.svg"></img>
            <motion.div
              onClick={handleMenuClick}
              className="flex flex-col sm:hidden items-center justify-center gap-2  bg-black w-[44px] aspect-square rounded-full bg-white/10"
            >
              <div className=" w-5 bg-white h-[2px]"></div>
              <div className=" mr-2 w-3 bg-white h-[2px]"></div>
              <div className=" w-5 bg-white h-[2px]"></div>
            </motion.div>
            <div className=" hidden xl:flex items-center gap-10">
              <Navbar></Navbar>
              <button className=" w-36 bg-white rounded-full text-black py-2 ">
                {" "}
                Let's Talk
              </button>
            </div>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={
              isMobileMenuOpen
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              opacity: { delay: isMobileMenuOpen ? 0 : 0.2 },
            }}
            className=" transition-transform duration-1000"
          >
            <nav className="flex gap-4 flex-col py-5 items-center">
              <p className=" text-lg">Home</p>
              <p className=" text-lg">Projects</p>
              <p className=" text-lg">About</p>
              <p className=" text-lg">Services</p>
              <p className=" text-lg">Blogs</p>
            </nav>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
