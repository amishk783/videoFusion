import { useRef } from "react";
import { Slider } from "./components/Slider/Slider";
import { Slide } from "./components/Slider/Slide";
import "./App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "./components/Button";

import { Portfolio } from "./sections/Portfolio";
import { Services } from "./sections/Services";
import { Category } from "./sections/Category";
import { Faq } from "./sections/Faq";
import { Blog } from "./sections/Blog";
import { Footer } from "./components/Footer";
function App() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const section2Ref = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: section2Ref,
  });

  const slides: string[] = [
    "/src/assets/slides/slide1.svg",
    "/src/assets/slides/slide2.svg",
    "/src/assets/slides/slide3.svg",
    "/src/assets/slides/slide4.svg",
    "/src/assets/slides/slide5.svg",
    "/src/assets/slides/slide6.svg",
    "/src/assets/slides/slide7.svg",
    "/src/assets/slides/slide8.svg",
  ];

  const rotateX = useTransform(scrollYProgress, [1, 0.5], ["-30deg", "0deg"]);
  const translateY = useTransform(scrollYProgress, [1, 0.5], [1, 0.6]);
  const scale = useTransform(scrollYProgress, [1, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const videoScale = useTransform(scrollYProgress1, [0, 1], [0, 1]);

  return (
    <main className="flex justify-center items-center h-min relative w-full flex-col">
      <motion.section
        ref={ref}
        style={{
          perspective: "1200px",
          scale,
          opacity,
          transformStyle: "preserve-3d",
        }}
        className="sticky overflow-hidden will-change-transform z-30 w-full md:h-screen flex items-center justify-center flex-col max-sm:min-h-[500px] "
      >
        <motion.div
          style={{
            perspective: "1200px",
            rotateX,
            translateY,
            transformStyle: "preserve-3d",
          }}
          className="absolute h-full w-full contrast-125 brightness-50 left-0 overflow-hidden top-0 z-0 mask bg-black"
        >
          <motion.div className="absolute w-full h-screen will-change-transform">
            <img
              className="w-full h-full object-center object-cover"
              src="/src/assets/heroBg.png"
              alt="Background"
            />
          </motion.div>
        </motion.div>
        <div className="xl:max-container pt-20 pb-10 xl:py-40 h-min  overflow-visible relative ">
          <div className="flex flex-col gap-5 items-center justify-center">
            <h2 className=" text-4xl xl:text-8xl text-center bg-clip-text bg-gradient-to-r from-white via-zinc-50 to-zinc-700 text-transparent">
              Turning Video into <span>Vibrant Conversations.</span>
            </h2>
            <div className=" w-[90%] xl:w-[60%]">
              <p className=" xl:text-xl text-center">
                We're your friendly video wizards creating fantastic
                commercials, corporate videos, social ads, and many more.
              </p>
            </div>
            <Button>Buy this template</Button>
          </div>
        </div>
      </motion.section>

      {/* Showreel Section */}
      <motion.section
        ref={section2Ref}
        className="w-full flex  flex-col items-start overflow-visible  xl:h-[200vh] relative p-0 bg-black"
      >
        <div className=" max-sm:hidden  bg-gradient-to-t from-black to-transparent  h-28 overflow-visible absolute -top-28 w-full z-50 "></div>
        <div className=" flex w-full flex-col basis-0  flex-shrink-0 h-screen justify-center sticky top-0   will-change-transform z-10 overflow-visible">
          <div className="flex p-6 my-6 gap-10 overflow-visible  sticky top-0  h-min  will-change-transform -z-30 w-full font-syne justify-center items-center ">
            <motion.div
              style={{
                perspective: "1200px",
                scale: useTransform(scrollYProgress1, [0.5, 1], [1, 0.4]),

                opacity: useTransform(scrollYProgress, [0.5, 1], [0, 1]),
              }}
              className="hidden xl:flex flex-col w-full flex-shrink-0 will-change-transform overflow-hidden py-10   absolute h-min z-20 justify-center items-center top-0 left-0 right-0 "
            >
              <p className="text-8xl scale-[270%] font-bold leading-none tracking-tighter w-full text-center bg-clip-text bg-gradient-to-r h-full from-white via-zinc-400 to-zinc-700 text-transparent">
                SHOWREEL
              </p>
            </motion.div>
            <p className="text-5xl md:hidden font-bold leading-none tracking-tighter w-full text-center bg-clip-text bg-gradient-to-r h-full from-white via-zinc-400 to-zinc-700 text-transparent">
              SHOWREEL
            </p>
          </div>
          <motion.div
            style={{
              perspective: "1200px",
              scale: videoScale, // Scaling transformation
              translateY: useTransform(scrollYProgress1, [0, 0.4], [800, 0]), // Bottom-to-center movement
              transformOrigin: "center center",
              transformStyle: "preserve-3d",
            }}
            className=" hidden xl:flex items-center justify-center w-full rounded-3xl z-40 overflow-hidden h-screen gap-4 sticky top-0    "
          >
            <div className=" h-auto left-1/2 -translate-x-1/2  translate-y-1/2 w-auto z-50  absolute ">
              <a className=" flex flex-col items-center h-min relative w-min overflow-hidden cursor-pointer">
                <div className=" flex items-center justify-center w-28 h-28 rounded-full bg-white/30 ">
                  <Play size={56} />
                </div>
              </a>
            </div>
            <div className=" h-full relative w-full">
              <video
                src="/src/assets/video.mp4"
                loop
                muted
                autoPlay
                preload="auto"
                playsInline
                className=" cursor-auto w-full h-full block object-cover bg-black object-center"
              ></video>
            </div>
          </motion.div>
          <div className=" w-full h-full px-4 sm:hidden rounded-3xl pb-10">
            {" "}
            <video
              src="/src/assets/video.mp4"
              loop
              muted
              autoPlay
              preload="auto"
              playsInline
              className=" cursor-auto w-full rounded-3xl h-full block object-cover bg-black object-center"
            ></video>
          </div>
        </div>
      </motion.section>

      <section className=" flex items-center justify-center h-min  w-full overflow-hidden py-10 xl:py-24 px-11 ">
        <div className=" max-container flex flex-col items-center justify-center gap-10 overflow-hidden relative">
          <div className=" font-syne text-2xl xl:text-3xl font-bold max-sm:text-center ">
            <p>Standing Tall with Our Esteemed Brand Partners</p>
          </div>
          <div className=" relative w-full rounded-full border-[1px] border-zinc-500   p-4">
            <div className=" mx-2 w-full mask-container ">
              <Slider
                className="flex items-center  "
                speed={4}
                direction="right"
              >
                {slides.map((slide, index) => (
                  <Slide
                    className="text-primary text-2xl  group  hover:text-orange-200 "
                    key={index}
                  >
                    <div className=" flex  w-52 ">
                      <img src={slide} className=" w-32 h-12 "></img>
                    </div>
                  </Slide>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <Portfolio />
      {/* service  */}
      <Services />
      {/* category collage */}
      <Category />

      {/* about us */}
      <div className=" flex items-center h-min overflow-visible relative w-full font-syne max-sm:bg-black max-sm:px-5  ">
        <div className="flex flex-col xl:flex-row items-start basis-0 flex-grow flex-shrink-0 h-min max-container xl:px-24 xl:py-20 relative bg-black/30 gap-5 xl:gap-60">
          {/* bg  */}
          <div className=" h-full w-[90%] overflow-hidden -z-10 absolute pointer-events-none">
            <img
              className=" w-full h-full object-cover  object-center"
              src="/src/assets/servicesBg.svg"
            ></img>
          </div>
          {/* left part */}
          <div className="flex items-start  self-stretch flex-col h-auto justify-between  overflow-visible relative z-20  flex-grow-[0.5] flex-shrink-0 basis-0 whitespace-nowrap   ">
            <div className=" flex items-start flex-col h-min justify-center sticky w-full will-change-transform z-30 top-11  mix-blend-difference xl:pb-24 ">
              <div className="flex flex-col justify-start h-auto w-full xl:max-w-[900px]  ">
                <h2 className=" font-syne  font-semibold text-2xl xl:text-4xl ">
                  About Our Agency
                </h2>
              </div>
            </div>
            <div className="hidden flex:block">
              <Button>Explore Services</Button>
            </div>
          </div>

          {/* right part */}
          <div className=" flex flex-col gap-28 h-min overflow-hidden relative items-start justify-start ">
            {/* text part */}
            <div className=" flex flex-col gap-10 h-min relative w-full items-center">
              <p className=" text-xl xl:text-4xl font-medium text-zinc-500 ">
                Established in 2015, we have dedicated ourselves to
                <span className=" text-white">
                  {" "}
                  crafting captivating visual narratives{" "}
                </span>
                defined by creativity, innovation, and an unwavering commitment
                to{" "}
                <span className=" text-white">
                  {" "}
                  excellence in video production.
                </span>
              </p>
              <div>
                <p className=" text-md xl:text-xl">
                  Our mission is clear: to transform ideas into compelling
                  visual stories. We believe that every project is an
                  opportunity to create something extraordinary. Whether it's a
                  corporate video, a commercial, an event coverage, or an
                  animation, we approach each endeavor with creativity,
                  enthusiasm, and a commitment to exceeding our clients'
                  expectations.
                </p>
              </div>
            </div>

            {/* numbers part  */}
            <div className="w-full h-min grid grid-cols-1 xl:grid-cols-2 gap-20 pb-10">
              <div className=" h-28 w-28 z-10  left-[45%]  overflow-hidden opacity-10 absolute">
                {/*  cross svg */}
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg,#000000 0%,hsl(0,0%,100%) 49.549549549549546%,rgba(255,255,255,0) 100%)",
                  }}
                  className=" bottom-0 left-1/2 absolute w-1 top-0"
                ></div>
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg,#000000 0%,hsl(0,0%,100%) 49.549549549549546%,rgba(255,255,255,0) 100%)",
                  }}
                  className=" rotate-90 bottom-0 left-1/2 absolute w-1 top-0"
                ></div>
              </div>
              <div className="w-full flex h-min flex-col items-center relative">
                <div className="flex items-center justify-center absolute -z-10 h-full w-full max-sm:z-10 ">
                  <p className=" text-8xl xl:text-8xl opacity-50">15+</p>
                </div>
                <p className="text-md uppercase font-bold">
                  Years of experience
                </p>
              </div>
              <div className="w-full flex h-min flex-col items-center justify-center relative">
                <div className="flex items-center justify-center absolute -z-10 h-full w-full max-sm:z-10  ">
                  <p className=" text-8xl opacity-50">200+</p>
                </div>
                <p className="text-md uppercase font-bold">
                  Years of experience
                </p>
              </div>
              <div className="w-full flex h-min flex-col items-center relative">
                <div className="flex items-center justify-center absolute -z-10 h-full w-full max-sm:z-10  ">
                  <p className=" text-8xl opacity-50">478</p>
                </div>
                <p className="text-md uppercase font-bold">
                  Years of experience
                </p>
              </div>
              <div className="w-full flex h-min flex-col items-center relative">
                <div className="flex items-center justify-center absolute -z-10 h-full w-full max-sm:z-10  ">
                  <p className=" text-8xl opacity-50">250+</p>
                </div>
                <p className="text-md uppercase font-bold">
                  Years of experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}
      <section className="w-full h-min  relative   overflow-hidden flex-col items-center min-h-[900px] ">
        <div className=" h-full w-full overflow-hidden -z-10 absolute pointer-events-none">
          <img
            className=" w-full h-full object-cover  object-center"
            src="src/assets/testimonial.jpg"
          ></img>
        </div>
        <div className=" w-full h-full px-12 py-28 relative ">
          <div className="w-full h-min font-syne text-4xl text-center">
            <h3 className=" ">
              Our Client Chronicles: <br></br>Stories that Make Us Smile!
            </h3>
          </div>
        </div>
      </section>
      <Faq />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
