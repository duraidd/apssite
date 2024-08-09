import React from "react";
import Appheader from "./Appheader";
import { Button, IconButton } from "@mui/material";
import Img1 from "../asset/api.png";
import Img2 from "../asset/sal.png";
import Img3 from "../asset/mul.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScrollAnimation from 'react-animate-on-scroll';
import Box from "@mui/material/Box";




export default function Contact() {



  return (
    <div style={{ display: 'flex', flexDirection: "column", paddingTop: "20px", paddingBottom: "20px", overflow: 'hidden' }} >




      <div style={{ textAlign: "center", paddingLeft: "20px", paddingRight: "20px" }}>
        <ScrollAnimation animateIn="slideInRight" duration="1.5">
          <h1
            style={{
              fontFamily: "font-title",
              fontSize: "1.875rem",
              color: "#333",
            }}
          >
            Customized IT Services to Elevate your Business
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInLeft" duration="1.5">
          <p style={{ marginTop: "1rem", color: "#666" }}>
            Phi Dimensions is your one stop shop for technologically diverse
            solutions driven by top-notch platforms like MuleSoft, Salesforce,
            API (Application Programming Interface).
          </p>
        </ScrollAnimation>
      </div>

      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: "20px",
          flexWrap: "wrap",
          gap: "30px"
        }}
      >

        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "1rem",
            padding: "2rem",
            border: "1px solid",
            borderColor: 'rgb(255,179,180)',
            "&:hover":{boxShadow: "8px 12px 12px #f8a6b6"}
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem"
            }}
          >
            <div style={{ padding: '10px', borderRadius: "50%", boxShadow: "1px 12px 20px #f8a6b6" }}>
              <img
                src={Img1}
                width="50"
                height="50"
                style={{ objectFit: "fill" }}
                alt="API Logo"
              />
            </div>
          </div>
            <h2
              style={{ fontSize: "1.25rem", fontWeight: 600, color: "#333" }}
            >
              API Development
            </h2>
          <ScrollAnimation animateIn="slideInLeft" duration="1.5">
            <p style={{ marginTop: "1rem", color: "#666" }}>We provide comprehensive API development <br /> services to help businesses build scalable and <br /> secure APIs. Our expert team offers end-to <br /> -end solutions for API development, from design <br /> and development to testing and deployment.</p>
          </ScrollAnimation>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <IconButton
              style={{
                backgroundColor: "rgba(255, 94, 39, 0.1)",
                color: "#FF2A53",
                border: "none",
                borderRadius: '50%',
                padding: '10px'
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </Box>


        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "1rem",
            padding: "2rem",
            border: "1px solid",
            borderColor: 'rgb(255,179,180)',
            "&:hover":{ boxShadow: "8px 12px 12px #f8a6b6"} 
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem"
            }}
          >
            <div style={{ padding: '10px', borderRadius: "50%", boxShadow: "1px 12px 20px #f8a6b6" }}>
              <img
                src={Img2}
                width="50"
                height="50"
                style={{ objectFit: "fill" }}
                alt="API Logo"
              />
            </div>
          </div>
            <h2
              style={{ fontSize: "1.25rem", fontWeight: 600, color: "#333" }}
            >
              API Developmentff
            </h2>
          <ScrollAnimation animateIn="slideInLeft" duration="1.5">
            <p style={{ marginTop: "1rem", color: "#666" }}>We provide comprehensive API development <br /> services to help businesses build scalable and <br /> secure APIs. Our expert team offers end-to <br /> -end solutions for API development, from design <br /> and development to testing and deployment.</p>
          </ScrollAnimation>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center"
            }}
          >

            <IconButton
              style={{
                backgroundColor: "rgba(255, 94, 39, 0.1)",
                color: "#FF2A53",
                border: "none",
                borderRadius: '50%',
                padding: '10px'
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </div>

        </Box>


        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "1rem",
            padding: "2rem",
            border: "1px solid",
            borderColor: 'rgb(255,179,180)',            
           "&:hover":{ boxShadow: "8px 12px 12px #f8a6b6"} 
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem"
            }}
          >
            <div style={{ padding: '10px', borderRadius: "50%", boxShadow: "1px 12px 20px #f8a6b6" }}>
              <img
                src={Img3}
                width="50"
                height="50"
                style={{ objectFit: "fill" }}
                alt="API Logo"
              />
            </div>
          </div>
            <h2
              style={{ fontSize: "1.25rem", fontWeight: 600, color: "#333" }}
            >
              API Development
            </h2>
          <ScrollAnimation animateIn="slideInLeft" duration="1.5" >
            <p style={{ marginTop: "1rem", color: "#666" }}>We provide comprehensive API development <br /> services to help businesses build scalable and <br /> secure APIs. Our expert team offers end-to <br /> -end solutions for API development, from design <br /> and development to testing and deployment.</p>
          </ScrollAnimation>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center"
            }}
          >

            <IconButton
              style={{
                backgroundColor: "rgba(255, 94, 39, 0.1)",
                color: "#FF2A53",
                border: "none",
                borderRadius: '50%',
                padding: '10px'
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </Box>

      </div>

    </div>
  );
}
