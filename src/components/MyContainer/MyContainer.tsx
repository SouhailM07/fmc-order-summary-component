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
      <Container className="" maxWidth="xl" id="Container">
        <Card className="w-[30rem] text-center !rounded-3xl  pb-[1.5rem]">
          <CardMedia image={img} component="img" className="h-[14rem]" />
          <Box className="sm:px-[2rem] px-[1rem]">
            <CardContent>
              <Typography
                variant="h4"
                className="!font-bold !my-[1rem] text-DarkBlue"
              >
                Order Summary
              </Typography>
              <p className="text-DesaturatedBlue sm:px-[1rem] sm:text-[1.3rem] text-[1.25rem]">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </p>
              {/*  */}
              <MusicCard />
              {/*  */}
            </CardContent>
            <CardActions className="flex flex-col items-center space-y-[1.6rem]">
              <Button className="!capitalize !bg-BrightBlue w-full !py-[1rem] !text-white !rounded-xl !font-black hover:!bg-violet-500">
                Proceed to Payment
              </Button>
              <Button className="!capitalize !text-DesaturatedBlue !font-bold hover:!text-black ">
                Cancel Order
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Container>
    </>
  );
}
