import React from "react";
import { Box, Slide } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import PopUp from "./PopUp";
import Header from "./Header";
import QuoteProlog from "./QuoteProlog";
import ProfileBride from "./ProfileBride";
import CountingDay from "./CountingDay";
import CovidProtocol from "./CovidProtocol";
import Galery from "./Galery";
import Gift from "./Gift";
import Rsvp from "./rsvp";
import Wish from "./Wish";
import Sound from "./sound";
import RsvpTable from "./rsvpTable";
import "aos/dist/aos.css";
import "./style.css";

export default function index() {
  const [popUpOpen, setPopUpOpen] = React.useState(false);
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  React.useEffect(() => {
    setTimeout(() => {
      AOS.init({
        // delay: 100,
        duration: 1000
      });
    }, 100);
  }, []);

  if(params?.page === "rsvp"){
    return <RsvpTable />
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fanni & Dimas | Hawede.id</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <style>
       
        </style>
      </Helmet>
      <PopUp
        handleOpen={() => {
          setPopUpOpen(true);
        }}
        name={params.to}
      />
      {popUpOpen ? (
        <Box>
          <Header />
          <QuoteProlog />
          <ProfileBride />
          <CountingDay />
          <Rsvp name={params.to} />
          <Gift />
          <Galery />
          <Wish name={params.to} />
          <CovidProtocol />
        </Box>
      ) : (
        <Box height="100vh" />
      )}
      <Sound />

    </>
  );
}
