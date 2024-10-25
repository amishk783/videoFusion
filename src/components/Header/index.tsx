import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className="  flex items-center justify-center  w-full z-50  fixed ">
      <div className="w-[90%] pt-4  h-min relative md:max-w-[900px]">
        <div className=" bg-gradient-to-t sm:hidden from-white/20 to-black  absolute -z-10 w-full h-14 rounded-full text-center flex items-end text-xl"></div>
        <div className=" relative w-full pb-2 pl-5 pr-2 pt-2  backdrop-blur z-40 bg-[#0D0D0D] bg-opacity-10 rounded-full ">
          <div className="flex justify-between   h-full  md:justify-normal  md:gap-28 items-center">
            <img className=" w-40 h-full " src="/logo.svg"></img>
            <div className="flex flex-col sm:hidden items-center justify-center gap-2  bg-black w-[44px] aspect-square rounded-full backdrop-blur-md bg-white/10">
              <div className=" w-5 bg-white h-[2px]"></div>
              <div className=" mr-2 w-3 bg-white h-[2px]"></div>
              <div className=" w-5 bg-white h-[2px]"></div>
            </div>
            <div className="flex items-center gap-10">
              <Navbar></Navbar>
              <button className=" w-36 bg-white rounded-full text-black py-2 ">
                {" "}
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
