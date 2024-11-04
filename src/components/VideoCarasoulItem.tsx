import { useRef, useEffect } from "react";

interface Props {
  video: string;
  title: string;
  subTitle: string;
  isVideoPlay: boolean;
}
export const VideoCarasoulItem: React.FC<Props> = ({
  video,
  title,
  subTitle,
  isVideoPlay,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlay) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlay]);
  return (
    <div className=" aspect-square h-[200px] xl:h-[425px] relative w-full xl:w-[425px] cursor-none">
      <div className=" w-full h-full rounded-3xl  flex items-center justify-center overflow-hidden relative will-change-transform z-10 cursor-none">
        <div className=" w-full h-full relative ">
          <video
            ref={videoRef}
            loop
            muted
            preload="auto"
            playsInline
            className=" cursor-none w-full h-full block object-cover object-center "
            src={video}
          ></video>
        </div>
        <div className=" flex flex-col h-min  bg-blend-difference absolute w-min z-10 bottom-10 left-10  ">
          <h2 className=" text-2xl font-bold ">{title}</h2>
          <p className=" text-md">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};
