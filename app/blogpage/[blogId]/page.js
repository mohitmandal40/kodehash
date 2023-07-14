import React from "react";
import { Box } from "@mui/material";
import getCategoryId from "@/services/getCategoryId";
import { redirect } from "next/navigation";

const BlogId = async ({ params }) => {
  const categoryList = await getCategoryId(+params.blogId || 4);
  redirect(`/blogpage/${params.blogId}/${categoryList[0].slug}`);
  // return null;
  // return <>Blog Id</>;
};

export default BlogId;
