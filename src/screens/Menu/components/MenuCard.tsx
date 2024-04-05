import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

interface Props {
  imgUrl: string;
  text: string;
  href?: string;
}

export default function MenuCard({ imgUrl, text, href }: Props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActionArea href={href || "#"}>
        <CardMedia
          component={"img"}
          sx={{ height: 140 }}
          image={imgUrl}
          alt={`Foto de una pizza ${text}`}
        />
        <CardContent>
          <Typography variant="h6">{text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
