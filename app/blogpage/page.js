import getAllLinks from "@/services/getLinks";
import { redirect } from "next/navigation";

const BlogPage = async ({ params }) => {
  const categoryList = await getAllLinks();
  // if (pathname === "/" || pathname === "/blogpage") {
  redirect(`/blogpage/${categoryList[0].id}`);
  // }
};

export default BlogPage;
