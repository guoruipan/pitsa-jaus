"use client";

import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import photo from "@/public/landscape_pizza.png";
// https://nextjs.org/docs/app/building-your-application/optimizing/images#responsive

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Image
        src={photo}
        sizes="100vw"
        alt="Imagen promocional descuento pizza"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Box>
  );
}
