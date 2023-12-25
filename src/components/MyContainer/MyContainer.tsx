import "./mycontainer.css";
// mui
import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
} from "@mui/material";

// assets
import img from "/illustration-hero.svg";

export default function MyContainer() {
  return (
    <>
      <Container
        className="border-2 border-black h-screen !flex items-center justify-center"
        maxWidth="xl"
      >
        <Card className="border-2 border-red-500 w-[30rem] text-center">
          <CardMedia
            image={img}
            component="img"
            className="h-[15rem] rounded-t-3xl"
          />
          <CardContent>
            <Typography variant="h4" className="!font-bold !my-[1rem]">
              Order Summary
            </Typography>
            <Typography variant="h6">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
