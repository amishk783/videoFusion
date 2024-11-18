import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import slide1 from "../assets/slides/slide1.svg";
import slide2 from "../assets/slides/slide2.svg";
import slide3 from "../assets/slides/slide3.svg";
import slide4 from "../assets/slides/slide4.svg";
import slide5 from "../assets/slides/slide5.svg";
import slide6 from "../assets/slides/slide6.svg";
import slide7 from "../assets/slides/slide7.svg";
import slide8 from "../assets/slides/slide8.svg";
import testimonial from "../assets/testimonial.jpg";
import heroBg from "../assets/heroBg.png";
import serviceBg from "../assets/servicesBg.svg";
import reelVideo from "../assets/video.mp4";



export {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  testimonial,
  heroBg,
  serviceBg,
  reelVideo,
};
