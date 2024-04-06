import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "#/components/ui/Link";

interface Props {
    currentPageName : string
}

export default function MyBreadcrumbs({currentPageName} : Props) {
  return (
    <Breadcrumbs>
      <Link href="/menu">Nuestra carta</Link>
      <Typography color="text.primary">{currentPageName}</Typography>
    </Breadcrumbs>
  );
}
