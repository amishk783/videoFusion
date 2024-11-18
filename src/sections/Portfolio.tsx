import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../components/Button";
import { VideoCarasoulItem } from "../components/VideoCarasoulItem";
import { useRef, useEffect, useState, useCallback } from "react";
import { useIsMobile } from "../hooks/useMobile";

import video1 from "../assets/featuresVideo/video1.mp4";
import video2 from "../assets/featuresVideo/video2.mp4";
import video3 from "../assets/featuresVideo/video3.mp4";
import video4 from "../assets/featuresVideo/video4.mp4";
import video5 from "../assets/featuresVideo/video5.mp4";

interface videoItemType {
  title: string;
  subTitle: string;
  video: string;
}

const videoItem: videoItemType[] = [
  {
    title: "Green Waves",
    subTitle: "Eco Warriors",
    video: video1,
  },
  {
    title: "Mystic Horizons",
    subTitle: "ModeElite",
    video: video2,
  },
  {
    title: "Pixel Fusion",
    subTitle: "Techno",
    video: video3,
  },
  {
    title: "EcoExplorer",
    subTitle: "GreenEarth",
    video: video4,
  },
  {
    title: "Urban Uplift",
    subTitle: "Metroscope",
    video: video5,
  },
];
export const Portfolio = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: sectionRef,
  });
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };
  const [cursonVariant, setCursorVariant] = useState("default");
  const [textCursor, setCursorText] = useState<string>("");
  const [isVideoIndex, setIsVideoIndex] = useState<number | null>(null);

  const projectEnter = useCallback(() => {
    setCursorVariant("project");

    setCursorText("Play");
  }, []);
  const projectLeave = useCallback(() => {
    setCursorVariant("default");
    setIsVideoIndex(null);
    setCursorText("");
  }, []);
  const variant = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#FFF",
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,

      color: "#000",
      height: 110,
      width: 110,
      fontSize: "18px",
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };
  return (
    <section
      ref={sectionRef}
      className=" flex justify-center items-start bg-black xl:h-[400vh] h-full overflow-visible relative w-full max-sm:py-10"
    >
      <div className=" flex xl:flex-grow xl:flex-shrink-0 xl:basis-0 flex-col xl:h-screen overflow-hidden justify-center sticky xl:top-0 will-change-transform z-10 gap-10 xl:gap-16">
        <div className=" flex justify-between items-center h-min overflow-hidden px-12 relative w-full z-10">
          <div className=" flex  relative h-auto text-white ">
            <h2 className=" font-syne text-2xl max-sm:text-center xl:text-3xl font-semibold">
              Our Handpicked Featured Portfolio
            </h2>
          </div>
          <div className="hidden xl:block h-16 relative w-auto">
            <Button>See all Projects</Button>
          </div>
        </div>

        {/* custom cursor */}
        <motion.div
          className=" hidden xl:flex items-center justify-center w-24 z-50 h-24 bg-white/30 rounded-full fixed top-0 left-0 backdrop-blur-sm pointer-events-none"
          variants={variant}
          animate={!isMobile && cursonVariant}
          transition={spring}
        >
          <p className=" text-white">{textCursor}</p>
        </motion.div>
        <motion.div
          style={{
            perspective: "1200px",
            translateX: useTransform(scrollYProgress2, [0, 0.8], [-100, -2500]), // left-to-right movement
            transformStyle: "preserve-3d",
          }}
          transition={{ ease: "easeInOut", duration: 5 }}
          className="hidden xl:flex flex-col w-full xl:flex-row items-center  justify-center relative xl:w-[300%] z-10 overflow-hidden h-min gap-2 cursor-none  "
        >
          {videoItem.map((item, index) => (
            <div
              onMouseMove={() => setIsVideoIndex(index)}
              onMouseEnter={() => {
                projectEnter();
                setIsVideoIndex(index);
              }}
              onMouseLeave={projectLeave}
              key={index}
            >
              <VideoCarasoulItem
                {...item}
                isVideoPlay={isVideoIndex === index ? true : false}
              />
            </div>
          ))}
        </motion.div>

        <div className="flex flex-col sm:hidden w-full gap-4 px-4 ">
          {videoItem.map((item, index) => (
            <VideoCarasoulItem
              {...item}
              key={index}
              isVideoPlay={isVideoIndex === index ? true : false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
