import React from "react";

import Dumb from "@/components/blogContentDisplay";
import getCategoryId from "@/services/getCategoryId";

export async function generateMetadata({ params }) {
  const res = await getCategoryId(params.blogId);

  const data = res.filter((item) => item.slug === params.blogContent);

  return {
    title: data[0]?.blog_title,
    description: data[0]?.blog_title,
  };
}

const BlogContent = async ({ params }) => {
  const res = await getCategoryId(params.blogId);

  const data = res.filter((item) => item.slug === params.blogContent);

  return <Dumb data={data} />;
};

export default BlogContent;

// export async function generateStaticParams() {
//   const blogIdList = await getAllLinks();
//   const promises = blogIdList.map(async (item) => {
//     return getCategoryId(item.id);
//   });
//   const data = await Promise.all(promises);
//   const allContent = data.reduce((acc, cur) => {
//     acc.push(...cur?.data);
//     return acc;
//   }, []);
//   return allContent;
// }
