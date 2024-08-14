import React from "react";
import Appheader from "./Appheader";
import Imah from "../asset/Banner.jpg";
import "./../App.css"
import { Button, Icon, IconButton } from "@mui/material";
import About from "./About";
import Contact from "./Contact";
import ScrollAnimation from 'react-animate-on-scroll';
import Custcard from "./Custcard";
import Experirnce from "./Experirnce";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from "@mui/material/Box";
import Empower from "./Empower";
import Discuss from "./Discuss";
import Timepage from "./Timepage";
import Footer from "./Footer";
import Flag from "./Flag";



export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Appheader />
      <div className="saple"
        style={{
          backgroundImage: `url(${Imah})`, marginTop: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: '100%'
        }}
      >
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", paddingLeft: "20px", paddingRight: "20px" }}>
          <ScrollAnimation animateIn="swing" >
            <h1>MuleSoft API Development <br />
              From Idea to Product</h1>
          </ScrollAnimation>
          <div>
            <Button variant="contained" sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "red" } }} >Get Started</Button>
          </div>
        </div>

      </div>
      <About />
      <Contact />
      <Custcard />
      <Experirnce />
      <Empower />
      <Discuss />
      <Flag/>
      <Timepage />
      <Footer />

      <Box sx={{
        position: 'fixed',
        bottom: 10,
        right: 10,
        zIndex: 999
      }} >
        <a href="https://wa.me/917305395976" target="_blank">
          <IconButton sx={{
            '&:hover': {
              backgroundColor: "#E0FBE2"
            }
          }}>
            <WhatsAppIcon style={{ color: 'green', fontSize: "50px" }} />
          </IconButton>
        </a>
      </Box>

    </div>
  );
}
