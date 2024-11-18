import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../utils";
import { SocialLinkItem } from "./SocialLinkItem";
import footerBg from "../assets/servicesBg.svg";
export const Footer = () => {
  const [displayState, setDisplayState] = useState<"default" | "hover">(
    "default"
  );
  const handleMouseEnter = () => {
    setDisplayState("hover");
  };
  const handleMouseLeave = () => {
    setDisplayState("default");
  };
  const variants = {
    default: {
      translateX: 0,
      rotate: "90deg",
    },
    hover: {
      width: "72px",
      height: "72px",
      translateX: 174,
      rotate: "45deg",
      opacity: 1,
    },
  };

  return (
    <section className=" flex items-center justify-center h-min overflow-hidden relative w-full font-syne ">
      <div className=" flex flex-grow justify-center items-center flex-col flex-shrink-0 basis-0 gap-14 max-w-[1900px]  relative overflow-visible w-full xl:px-12 py-24">
        <div
          style={{
            backgroundImage:
              "radial-gradient(132.5% 150% at 3.6999999999999997% 0%, rgba(255, 122, 59, 1) 2.914225630988854e-14%, rgba(255, 255, 255, 0.03) 37.63894966377917%)",
          }}
          className=" w-full h-min flex flex-col gap-8 p-8 rounded-3xl"
        >
          {/* background */}

          <div className=" h-full w-[90%] overflow-hidden -z-10 absolute pointer-events-none">
            <img
              className=" w-full h-full object-cover  object-center"
              src={footerBg}
            ></img>
          </div>
          <div className="flex w-full h-min justify-center items-center">
            <img src="logo.svg" width={320}></img>
          </div>
          <div className="w-full h-min xl:p-4 flex items-center flex-col gap-14 justify-center md:bg-white/10 rounded-3xl md:border-[1px] border-white/10 ">
            <div className=" flex flex-col gap-5 items-center justify-center">
              <div className=" py-4 font-syne">
                <h3 className="text-3xl xl:text-7xl text-center font-bold">
                  Not limited to video,<br></br> we're your creative comrades.
                </h3>
              </div>
              <div>
                <p className=" xl:text-3xl font-semibold  max-sm:text-center">
                  Got questions, porject ideas, or just want to say hi? We're
                  all ears!
                </p>
              </div>
            </div>

            {/* button part */}

            <motion.div
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              className="flex   w-full h-min items-center justify-center py-2"
            >
              <div
                className={cn(
                  "flex xl:min-w-[650px] rounded-full relative h-20 border-[1px] border-white gap-3 items-center justify-center max-sm:px-4 "
                )}
              >
                <motion.div
                  animate={
                    displayState === "hover" ? { opacity: 1 } : { opacity: 0 }
                  }
                  style={{
                    backgroundImage:
                      "radial-gradient(107.69999999999999% 333.3% at -11.799999999999999% 0%,  rgb(255, 122, 49)  33.33333333333336%, rgba(167, 127, 106, 1) 52.06583452308659%,  rgba(255, 255, 255, 0.1) 69.35047459782788%)",
                  }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  className=" absolute h-full w-full -z-10 rounded-full"
                ></motion.div>
                <motion.div
                  animate={
                    displayState === "hover" ? { opacity: 0 } : { opacity: 1 }
                  }
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  style={{
                    backgroundImage:
                      "radial-gradient(50% 50% at 4.7% 0%, rgba(255, 115, 0, 0.98) 0%, rgb(255, 122, 59, 1) 100%)",
                  }}
                  className=" absolute h-full w-full -z-10 rounded-full"
                ></motion.div>
                <div className=" flex w-full h-full items-center justify-center">
                  <motion.div
                    animate={
                      displayState === "hover"
                        ? { translateX: -150 }
                        : { translateX: 0 }
                    }
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                  >
                    <p className=" text-2xl font-semibold">Let's Collaborate</p>
                  </motion.div>
                  <motion.div
                    variants={variants}
                    animate={displayState}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="  rounded-full flex items-center justify-center relative overflow-visible w-11 h-11  "
                  >
                    <motion.div
                      animate={
                        displayState === "hover"
                          ? { opacity: 1 }
                          : { opacity: 0 }
                      }
                      className=" absolute w-full h-full -z-10 bg-white/30 rounded-full "
                    ></motion.div>
                    <div className=" aspect-square h-9 relative w-9 will-change-transform origin-center ">
                      <div className=" contents">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          className="w-9 h-9 text-white fill-current"
                        >
                          <g>
                            <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/*  footer about cards */}
          <div className=" w-full h-min  relative overflow-visible items-start flex flex-col xl:flex-row gap-5 xl:gap-10">
            <div className="flex w-full h-full p-6 xl:p-12 bg-white/10 rounded-3xl">
              <div className=" flex flex-col gap-12 w-full h-full">
                <div className=" flex flex-col gap-4">
                  <p className=" text-lg xl:text-xl ">
                    <span className="text-white font-semibold">Address: </span>{" "}
                    123 Artistic Lane, Suite 302, NY, USA M5V 1A1
                  </p>
                  <p className=" text-lg xl:text-xl ">
                    <span className="text-white font-semibold">Email: </span>{" "}
                    123 contact@storystream.com
                  </p>
                  <p className=" text-lg xl:text-xl ">
                    <span className="text-white font-semibold">Phone: </span>{" "}
                    123 (416) 555-1234
                  </p>
                  <p className=" text-lg xl:text-xl ">
                    <span className="text-white font-semibold">
                      Business Hours:
                    </span>{" "}
                    Sunday - Thursday : 9am to 5pm
                  </p>
                </div>
                <div className="flex flex-col w-full h-min gap-2">
                  <p className=" text-zinc-200 text-lg">
                    Subscribe to our newsletter
                  </p>
                  <div className="w-full h-full flex flex-col xl:flex-row gap-5 ">
                    <input
                      className=" w-full py-3 px-4 rounded-3xl bg-white/10"
                      placeholder="example@gmail.com"
                    ></input>
                    <button className=" px-10 rounded-full py-2 bg-[#ff7a3bd9]">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full h-min px-12 py-[52px] bg-white/10 rounded-3xl  ">
              <div className="w-full h-full flex flex-col xl:flex-row gap-10">
                <div className="flex flex-col gap-4 w-full h-full ">
                  <h4 className=" text-xl ">Quick Links</h4>
                  <div className=" flex flex-col gap-3">
                    <p className="text-white font-semibold text-[#ff7a3bd9] hover:text-orange-300 hover:underline transition-colors duration-300">
                      Home
                    </p>
                    <p className="text-white font-semibold hover:text-orange-300 hover:underline transition-colors duration-300">
                      Projects
                    </p>
                    <p className="text-white font-semibold hover:text-orange-300 hover:underline transition-colors duration-300">
                      Projects Simplified
                    </p>
                    <p className="text-white font-semibold hover:text-orange-300 hover:underline transition-colors duration-300">
                      About
                    </p>
                    <p className="text-white font-semibold hover:text-orange-300 hover:underline transition-colors duration-300">
                      Services
                    </p>
                    <p className="text-white font-semibold hover:text-orange-300 hover:underline transition-colors duration-300">
                      Contact
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full h-full">
                  <h4 className=" text-xl ">Legal</h4>
                  <div className=" flex flex-col gap-3">
                    <p className="text-white font-semibold hover:text-orange-300 hover:underline transition-colors duration-300">
                      Privacy Policy
                    </p>
                    <p className="text-white font-semibold hover:text-orange-300 hover:underline transition-colors duration-300">
                      Terms & Conditions
                    </p>
                    <p className="text-white font-semibold hover:text-orange-300 hover:underline transition-colors duration-300">
                      Refund Policy
                    </p>
                    <p className="text-white font-semibold hover:text-orange-300 hover:underline transition-colors duration-300">
                      Social Media
                    </p>
                    <p className="text-white font-semibold hover:text-orange-300 hover:underline transition-colors duration-300">
                      Facebook
                    </p>
                    <p className="text-white font-semibold hover:text-orange-300 hover:underline transition-colors duration-300">
                      Vimeo
                    </p>
                    <p className="text-white font-semibold hover:text-orange-300 hover:underline transition-colors duration-300">
                      TikTok
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*social media links */}

          <div className=" w-full h-min grid grid-cols-2 gap-2 ">
            {footerSocialMedialLinks.map((item, index) => (
              <SocialLinkItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const footerSocialMedialLinks = [
  {
    name: "TWITTER",
    link: ``,
    svgPath: (
      <g>
        <path
          d="M240,72l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12s32-12,48-36c0,0-55.15-32-47.22-120,0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24Z"
          opacity="0.2"
        ></path>
        <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.65,48.65,0,0,0,168.1,40a46.87,46.87,0,0,0-33.74,13.7A47.87,47.87,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.3,47.79,9.57,79.77,22,98.18a110.92,110.92,0,0,0,21.89,24.2C61.43,195.2,37.45,204.41,37.2,204.51a8,8,0,0,0-3.85,11.93c.74,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.68,0,129.72-54.42,135.76-124.44l29.9-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.52-6.25,27.56-17,37.88-32.48a8,8,0,0,0-2.61-11.34c-.13-.08-12.86-7.74-24.48-25.29C54.54,124.11,48,100.38,48,73.09c16,13,45.25,33.18,78.69,38.8A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.89,30.89,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
      </g>
    ),
  },
  {
    name: "Linkedin",
    link: "Linkedin",
    svgPath: (
      <g>
        <path
          d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z"
          opacity="0.2"
        ></path>
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
      </g>
    ),
  },
  {
    name: "",
    link: "Youtube",
    svgPath: (
      <g>
        <path
          d="M226.59,71.53a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128s3.07,47.46,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47S228.93,80.54,226.59,71.53ZM112,160V96l48,32Z"
          opacity="0.2"
        ></path>
        <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86.12,12s-54.37.18-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68C73.58,55.82,127.4,56,128.05,56s54.37-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"></path>
      </g>
    ),
  },
  {
    name: "",
    link: "Instagram",
    svgPath: (
      <g>
        <path
          d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
          opacity="0.2"
        ></path>
        <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
      </g>
    ),
  },
];
