import { PaperGrid } from "#/components/containers/PaperGrid";
import H2 from "#/components/texts/H2";
import { Box, Button, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function HomeScreen() {
  return (
    <>
      <PaperGrid alignItems={"center"}>
        <Grid item xs={12} md={6}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignContent={"center"}
          >
            <H2 mb={"1rem"}>¿Te apetece?</H2>
            <Button variant="contained">Pide ya</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src={"/pizza_transparent.png"}
            width={300}
            height={300}
            alt="Pizza"
          ></Image>
        </Grid>
      </PaperGrid>
    </>
  );
}
