"use client";

import React from "react";
import { Box, Step, StepLabel, Stepper, Button, Stack } from "@mui/material";

interface Step {
  name: string;
  screen: React.JSX.Element;
}

interface Props {
  steps: Step[];
  initialStep: number;
}

export default function HorizontalLinearStepper({ steps, initialStep }: Props) {
  const [activeStep, setActiveStep] = React.useState(initialStep);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ pb: 4 }}>
        {steps.map((step) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={step.name} {...stepProps}>
              <StepLabel>{step.name}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {steps[activeStep].screen}
      <Stack direction={"row"} pt={4} justifyContent={"space-between"}>
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
