import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PageTitle from "#/components/ui/PageTitle";

export default function ErrorScreen(params: { reset: Function }) {
  return (
    <Box>
      <PageTitle gutterBottom>¡Algo ha ido mal!</PageTitle>
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
