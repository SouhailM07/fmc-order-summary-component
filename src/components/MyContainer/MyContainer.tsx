import "./mycontainer.css";
// components
import { MusicCard } from "../../components/";
// mui
import {
  Container,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
} from "@mui/material";

// assets
import img from "/illustration-hero.svg";

export default function MyContainer() {
  return (
    <>
      <Container
        className="bg-gray-400 h-screen !flex items-center justify-center"
        maxWidth="xl"
      >
        <Card className="w-[30rem] text-center !rounded-3xl  pb-[1rem]">
          <CardMedia image={img} component="img" className="h-[15rem]" />
          <Box className="px-[2rem]">
            <CardContent>
              <Typography variant="h4" className="!font-bold !my-[1rem] ">
                Order Summary
              </Typography>
              <Typography variant="h6">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </Typography>
              {/*  */}
              <MusicCard />
              {/*  */}
            </CardContent>
            <CardActions className="flex flex-col items-center space-y-[2rem]">
              <Button className="!bg-BrightBlue w-full !py-[1rem] !text-white !rounded-xl">
                Proceed to Payment
              </Button>
              <Button className="!text-DesaturatedBlue !font-bold">
                Cancel Order
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Container>
    </>
  );
}
