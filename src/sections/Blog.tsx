import { BlogItem } from "../components/BlogItem";
import { Button } from "../components/Button";
import blog1 from "../assets/blogItem/blogItem1.jpg";
import blog2 from "../assets/blogItem/blogItem2.png";
import blog3 from "../assets/blogItem/blogItem3.jpg";
const blogs = [
  {
    imageUrl: blog1,
    subTitle: "News",
    title:
      " StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: "Micheal Cartar",
    date: "Aug 29,2023",
  },
  {
    imageUrl: blog2,
    subTitle: "News",
    title:
      " StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: "Micheal Cartar",
    date: "Aug 29,2023",
  },
  {
    imageUrl: blog3,
    subTitle: "News",
    title:
      " StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: "Micheal Cartar",
    date: "Aug 29,2023",
  },
];

export const Blog = () => {
  return (
    <section className=" flex items-center justify-center h-min overflow-hidden relative w-full font-syne ">
      <div className=" flex flex-grow justify-center items-center flex-col flex-shrink-0 basis-0 gap-14 xl:max-w-[1900px]  relative overflow-visible w-full px-4 xl:px-12 py-5 xl:py-24">
        <div className=" flex flex-col items-center h-min justify-center overflow-hidden relative xl:w-1/2 gap-10">
          <div className=" flex justify-center text-center w-full h-full">
            <h2 className=" font-bold text-2xl xl:text-3xl">
              Dive into our blogs
            </h2>
          </div>
          <Button>Read All Blogs</Button>
        </div>
        <div className="flex flex-col xl:flex-row gap-5 w-full h-full">
          {blogs.map((blog, index) => (
            <BlogItem key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};
