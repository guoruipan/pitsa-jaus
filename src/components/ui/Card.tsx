import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Props {
  imgUrl: string;
  text: string;
}

export default function MyCard({ imgUrl, text }: Props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imgUrl}
        title={`Foto de una pizza ${text}`}
      />
      <CardContent>
        {/* gutterBottom aplica margin-bottom */}
        <Typography variant="h6" color="text.primary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
