

import React from "react";
import Link from "next/link";
import { colors } from "@mui/material/styles";
import BorderAllIcon from "@mui/icons-material/BorderAll";

export const Footer = () => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <footer>
      <div style={style}>
        <Link href={{ pathname: "/" }}>Back To Top</Link>
      </div>
    </footer>
  );
};
