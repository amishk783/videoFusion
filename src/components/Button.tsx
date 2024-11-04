import { motion } from "framer-motion";
export const Button: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <button className=" h-14 w-auto relative group">
      <div className=" border-2 border-solid backdrop-blur-md  bg-button-black h-full rounded-full ">
        <div className=" flex items-center h-full overflow-hidden relative w-full will-change-transform transition-transform transform  duration-1000 delay-75 scale-110  ease-in-out  py-4 pr-7  ">
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 0.2, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=" bg-button-radial-gradient origin-center h-full overflow-visible absolute w-full z-0 rounded-full"
          ></motion.div>

          <div className=" hidden group-hover:block ml-4 w-4 h-4 bg-red-700 rounded-full group-hover:animation-record"></div>
          <div className=" pl-2 flex z-50 text-white">{children}</div>
        </div>
      </div>
    </button>
  );
};
