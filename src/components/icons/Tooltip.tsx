import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { IconButton, Tooltip } from "@mui/material";

export function SimpleTooltip({ text }: { text: string }) {
  return (
    <Tooltip title={text}>
      <IconButton>
        <HelpOutlineIcon />
      </IconButton>
    </Tooltip>
  );
}
