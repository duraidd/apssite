import React from "react";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/material/styles";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';


import { Typography } from "@mui/material";
// import { Fonts } from "../../constants";

export default function SideTip() {
  const SideStyle = styled("div")(({ theme }) => ({
    position: "fixed",
    right: 2,
    transform: `translateY(-50%)`,
    color: "white",
    padding: "0.5%",
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    borderRadius: "44px",
    background: `#FF2A53`,
    boxShadow: `3px 3px 5px #FF2A53,
-3px -3px 5px #FF2A53`,

    transition:'0.8s',

    "& .myText": {
      display: "none",
      paddingLeft: "10px",
    },
    "&:hover .myText": {
      display: "flex",
    },

    ".myText": {
      marginRight: "0.5%",
      whiteSpace: "nowrap",      
    },
  }));

  return (
    <div>
      
      {/* call stuff */}
      <SideStyle
        style={{ top: "45%" }}
        onClick={() => {
          window.open("tel:917305395976", "_self");
        }}
      >
        <CallIcon />
        <Typography className="myText"> Call Us </Typography>
      </SideStyle>

      <SideStyle
        style={{ top: "52%" }}
        onClick={() => {
          window.open("https://mail.google.com/mail/?view=cm&fs=1&to=contact@apstechnologies.co.in", "_blank");
        }}
        
      >
        <MailIcon />
        <Typography className="myText">Mail Us </Typography>
      </SideStyle>

      <SideStyle
        style={{ top: "59%" }}
        onClick={() => {
          window.open("https://wa.me/+917305395976");
        }}
      >
        <WhatsAppIcon />
        <Typography className="myText">WhatsApp </Typography>
      </SideStyle>


    </div>
  );
}