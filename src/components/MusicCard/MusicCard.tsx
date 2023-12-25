import "./musiccard.css";
// assets
import logo from "/icon-music.svg";
// mui
import { Card, CardContent, CardMedia, Box, Link } from "@mui/material";

export default function MusicCard() {
  return (
    <>
      <Card className="flex items-center justify-between px-6 !bg-VeryPaleBlue mt-[1rem]">
        <Box className="flex items-center">
          <CardMedia image={logo} component="img" />
          <CardContent className="!py-[1rem]">
            <p className="font-bold">Annual Plan</p>
            <p>$59.99/year</p>
          </CardContent>
        </Box>
        <Link underline="always" href="#" className="!text-BrightBlue">
          Change
        </Link>
      </Card>
    </>
  );
}
