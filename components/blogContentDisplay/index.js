"use client";
import React, { useEffect, useState } from "react";
import xss from "xss";
import { Box } from "@mui/material";

const Dumb = ({ data }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Box width={0.8} display="flex" flexDirection="column" marginX="auto">
          <img src={data[0]?.image} alt={data[0]?.alt_image} />
          <div
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{
              __html: xss(data[0]?.long_description),
            }}
          ></div>
        </Box>
      )}
    </>
  );
};

export default Dumb;
