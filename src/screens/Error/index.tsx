import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import H1 from "#/components/ui/H1";

export default function ErrorScreen(params: { reset: Function }) {
  return (
    <Box>
      <H1 gutterBottom>¡Algo ha ido mal!</H1>
      <Button
        variant={"contained"}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => params.reset()
        }
      >
        Inténtalo de nuevo
      </Button>
    </Box>
  );
}
