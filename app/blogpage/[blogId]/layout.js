import React from "react";
import styles from "./blogId.module.css";
import Sidebar from "@/components/Sidebar";
import getCategoryId from "@/services/getCategoryId";

export default async function BlogIdLayout({ children, params }) {
  const res = await getCategoryId(params.blogId);

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar data={res} blogId={params.blogId} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
