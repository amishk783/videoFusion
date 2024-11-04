import { CategoryItem } from "../components/CategoryItem";

export const Category = () => {
  return (
    <section className=" flex items-center justify-center h-min overflow-hidden relative w-full font-syne  bg-black">
      <div className=" flex flex-grow justify-center items-center flex-col flex-shrink-0 basis-0 gap-14 xl:max-w-[1900px]  relative overflow-visible w-full xl:px-12 py-24">
        <div className=" flex flex-col items-center h-min justify-center overflow-hidden relative w-full xl:w-1/2">
          <div className=" flex justify-center text-center w-full h-full">
            <h2 className=" font-bold text-xl xl:text-3xl">
              We're Video Pros in Many Industries!
            </h2>
          </div>
        </div>
        <div className=" flex items-center justify-center h-min overflow-hidden relative w-full flex-col ">
          <div className="grid grid-cols-1 xl:grid-cols-10 xl:grid-rows-9  w-full h-full gap-5 max-sm:px-4 xl:min-h-[1000px]">
            <CategoryItem
              imageUrl="/src/assets/categoryItem/categoryItem1.jpg"
              className=" xl:col-span-5 xl:row-span-3 xl:row-start-1 "
            />
            <CategoryItem
              className=" xl:col-span-3 xl:row-span-3 xl:row-start-1 "
              imageUrl="/src/assets/categoryItem/categoryItem2.jpg"
            />
            <CategoryItem
              className=" xl:col-span-2 xl:row-span-6 xl:row-start-1"
              imageUrl="/src/assets/categoryItem/categoryItem3.jpg"
            />
            <CategoryItem
              className=" xl:col-span-2  xl:row-span-3   "
              imageUrl="/src/assets/categoryItem/categoryItem4.jpg"
            />
            <CategoryItem
              className=" xl:col-span-6 xl:row-span-3"
              imageUrl="/src/assets/categoryItem/categoryItem5.jpg"
            />
            <CategoryItem
              className=" xl:col-span-5 xl:row-span-3"
              imageUrl="/src/assets/categoryItem/categoryItem6.jpg"
            />
            <CategoryItem
              className=" xl:col-span-5 xl:row-span-3"
              imageUrl="/src/assets/categoryItem/categoryItem7.jpg"
            />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};
