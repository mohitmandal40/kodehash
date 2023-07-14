"use client";
import React, { useContext, useState } from "react";
import classes from "./sidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ data, blogId }) => {
  const pathname = usePathname();

  return (
    <ul className={classes.NavItems}>
      {data?.map((item) => (
        <li
          key={item.id}
          className={`${classes.NavItem} ${
            pathname === `/blogpage/${blogId}/${item.slug}`
              ? classes.active
              : null
          }`}
        >
          <Link href={`/blogpage/${blogId}/${item.slug}`}>
            {item.blog_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
