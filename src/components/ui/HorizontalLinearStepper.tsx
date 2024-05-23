"use client";

import React from "react";
import { Box, Step, StepLabel, Stepper, Button, Stack } from "@mui/material";

interface Props {
  steps: string[];
  screens: React.JSX.Element[];
  activeStep: number; // React.useState<number>(0)
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

// TOOD maybe refactor to accept steps {name, screen}[]

export default function HorizontalLinearStepper({
  steps,
  screens,
  activeStep,
  setActiveStep,
}: Props) {
  if (steps.length !== screens.length)
    throw new Error(
      "HorizontalLinearStepper steps and screens must be same length",
    );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {screens[activeStep]}
      <Stack direction={"row"} pt={2} justifyContent={"space-between"}>
        <Button onClick={handleBack} disabled={activeStep === 0}>
          Anterior
        </Button>
        <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
          Siguiente
        </Button>
      </Stack>
    </Box>
  );
}
