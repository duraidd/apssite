import React, { useEffect, useRef, useState } from "react";
import Appheader from "./Appheader";
import Imah from "../asset/Banner.jpg";
import "./../App.css"
import { Button, Icon, IconButton, Typography } from "@mui/material";
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
import { ScrollToTop } from "react-simple-scroll-up";
import { useLocation } from "react-router-dom";




export default function Home() {



  const about = useRef();
  const home = useRef();
  const discuss = useRef();
  const contact = useRef();
  const location = useLocation();
  const section = location.state?.section || "home"
  const [first, setfirst] = useState(section);
  const [second, setsecond] = useState("");


console.log("first",first)



  useEffect(() => {



    if (first === "about") {
      window.scrollTo({ top: about.current.offsetTop, behavior: "smooth" });
    }

    if (first === "home") {
      // window.scrollTo({ top: home.current.offsetTop, behavior: "smooth" });
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    if (first === "contact") {
      window.scrollTo({ top: discuss.current.offsetTop, behavior: "smooth" });
    }

    if (first === "contactform") {
      window.scrollTo({ top: contact.current.offsetTop, behavior: "smooth" });
    }

  }, [first])





  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"       
      }}
    >

      <ScrollToTop bgColor="#ff0400" symbol="&#8593;" strokeFillColor="white" style={{ zIndex: 999 }} />



      <Appheader passChildData={setfirst} addData={second} first={first} />
      <div ref={home} className="saple"
        style={{
          backgroundImage: `url(${Imah})`, marginTop: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: '100%'
        }}
      >
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", paddingLeft: "20px", paddingRight: "20px" }}>
          <ScrollAnimation animateIn="swing" animateOnce >
            <Typography variant='h2' color={'black'} >Software Development <br />
              From Idea to Product</Typography>
          </ScrollAnimation>
          <div>
            <Button variant="contained" sx={{ backgroundColor: "#FF2A53", "&:hover": { backgroundColor: "#FF2A53" } }} >Get Started</Button>
          </div>
        </div>

      </div>
      <div ref={about}><About /></div>

      <Contact />
      <Custcard />
      <Experirnce />
      <Empower />
      <div ref={discuss} style={{width:'100%'}} ><Discuss passData={setfirst} /></div>
      <Flag />
      <div style={{ width: '100%' }} ref={contact} >
        <Timepage />
      </div>
      <Footer passFooter={setfirst} fn={setsecond} />
      <Box sx={{
        position: 'fixed',
        bottom: 80,
        right: 10,
        zIndex: 999
      }} >
        <a href="https://wa.me/+917305395976" target="_blank">
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
