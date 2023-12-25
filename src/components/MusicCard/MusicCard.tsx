import "./musiccard.css";
// assets
import logo from "/icon-music.svg";
// mui
import { Card, CardContent, CardMedia, Box, Link } from "@mui/material";

export default function MusicCard() {
  return (
    <>
      <Card className="flex items-center justify-between px-6 py-[0.7rem] !bg-VeryPaleBlue mt-[1rem] !shadow-none">
        <Box className="flex items-center">
          <CardMedia image={logo} component="img" />
          <CardContent className="!py-[1rem]">
            <p className="font-bold text-DarkBlue">Annual Plan</p>
            <p className="text-DesaturatedBlue">$59.99/year</p>
          </CardContent>
        </Box>
        <Link
          underline="always"
          href="#"
          className="!text-BrightBlue !decoration-BrightBlue hover:no-underline cursor-pointer !font-bold"
        >
          Change
        </Link>
      </Card>
    </>
  );
}
