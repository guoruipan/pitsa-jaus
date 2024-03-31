import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface Props {
  imgUrl: string;
  text: string;
}

export default function MyCard({ imgUrl, text }: Props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Image
          src={imgUrl}
          width={500}
          height={500}
          alt={`Foto de una pizza ${text}`}
        />
        {/* gutterBottom aplica margin-bottom */}
        <Typography variant="h6" color="text.primary" gutterBottom>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
