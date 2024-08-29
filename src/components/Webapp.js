import Appheader from './Appheader'
import Footer from './Footer'
import ScrollAnimation from 'react-animate-on-scroll';



import { React, useState, useMemo, useEffect } from "react";
import { styled } from "@mui/system";
import {
  Typography,
  // Breadcrumbs,
  // Link,
  Card,
  CardContent,
} from "@mui/material";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import webAppDevImg from "../images/servicePageImages/WebApplicationDevlopment/webAppDevelopment.jpg";

import frontEndArchitecture from "../images/servicePageImages/WebApplicationDevlopment/front-end-architecture.svg";
import testing from "../images/servicePageImages/WebApplicationDevlopment/testing-performance.svg";
import responsive from "../images/servicePageImages/WebApplicationDevlopment/responsive.svg";
import uiuxdesign from "../images/servicePageImages/WebApplicationDevlopment/uiuxdesign.svg";
import cmsEcommerce from "../images/servicePageImages/WebApplicationDevlopment/cms-ecommerce.svg";
import javascriptSolutions from "../images/servicePageImages/WebApplicationDevlopment/javascript-solutions.svg";

// import ReactPlayer from "react-player";

import ComputerIcon from "@mui/icons-material/Computer";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import location from "../../images/projectPageImages/smart-Classroom/location.svg";
// import bgImg from "../../images/projectPageImages/smart-Classroom/grey-washed-wall.png";

// import about1 from "../../images/allPageBanner/abouts-03.png";
// import StarsIcon from "@mui/icons-material/Stars";

import reactLogo from "../images/servicePageImages/WebApplicationDevlopment/mernLogo/reactLogo.svg";
import nodeLogo from "../images/servicePageImages/WebApplicationDevlopment/mernLogo/nodeLogo.svg";
import expressLogo from "../images/servicePageImages/WebApplicationDevlopment/mernLogo/expressLogo.svg";
import jsLogo from "../images/servicePageImages/WebApplicationDevlopment/mernLogo/js.svg";
import mongoLogo from "../images/servicePageImages/WebApplicationDevlopment/mernLogo/mango db.svg";

import muiLogo from "../images/servicePageImages/WebApplicationDevlopment/mernLogo/mui.svg";
import htmlLogo from "../images/servicePageImages/WebApplicationDevlopment/mernLogo/HTML.svg";
import cssLogo from "../images/servicePageImages/WebApplicationDevlopment/mernLogo/Css.svg";
import AWSLogo from "../images/servicePageImages/WebApplicationDevlopment/mernLogo/AWS.svg";





function Webapp() {


      const DivStyle1 = styled("div")(({ theme }) => ({
        display: "flex",
        padding:'5% 10%',                
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          paddingLeft: "5%",
          paddingRight: "5%",
        },
        [theme.breakpoints.only("md")]: {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          paddingLeft: "5%",
          paddingRight: "5%",
        },
        [theme.breakpoints.up("lg")]: {
          flexDirection: "row",
          justifyContent: "space-between",
        },
        [theme.breakpoints.up("xl")]: {
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: "15%",
          paddingRight: "15%",
        },
      }));
      const DivStyle2 = styled("div")(({ theme }) => ({
        ".container": {
          position: "relative",
          marginTop: 10,
          "&:hover": {
            opacity: 1,
          },
        },
    
        ".overlay": {
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
          alignItems: "flex-end",
          display: "flex",
          transition: ".5s ease",
          opacity: 0,
          padding: "20px",
          "&:hover": {
            opacity: 1,
          },
        },
        [theme.breakpoints.down("md")]: {
          width: "100%",
          margin: "0 auto",
        },
        [theme.breakpoints.only("md")]: {
          width: "100%",
          margin: "0 auto",
        },
        [theme.breakpoints.up("lg")]: {
          width: "47%",
        },
      }));
      const DivStyle3 = styled("div")(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
          width: "100%",
          margin: "0 auto",
        },
        [theme.breakpoints.only("md")]: {
          width: "100%",
        },
        [theme.breakpoints.up("lg")]: {
          width: "47%",
        },
      }));
    
      const cardStyle = (theme) => ({

        '&:hover':{boxShadow: "5px 5px 10px red"},

        [theme.breakpoints.only("sm")]: {
          height: 480,
          marginTop: 3,
        },
        [theme.breakpoints.between("sm", "md")]: {
          height: 420,
          marginTop: 3,
        },
        [theme.breakpoints.only("md")]: {
          height: 300,
        },
        [theme.breakpoints.up("md")]: {
          height: 300,
        },
    
        [theme.breakpoints.up("lg")]: {
          height: 380,
        },
        [theme.breakpoints.up("xl")]: {
          height: 380,
        },
      });
    
      const cardStyle1 = (theme) => ({
        '&:hover':{boxShadow: "5px 5px 10px red"},

        [theme.breakpoints.down("md")]: {
          height: 500,
          marginTop: 3,
        },
        [theme.breakpoints.up("md")]: {
          height: 300,
        },
    
        [theme.breakpoints.up("lg")]: {
          height: 380,
        },
        [theme.breakpoints.up("xl")]: {
          height: 380,
        },
      });
    
      const ProductCards = styled("div")(({ theme }) => ({
        height: 300,
        width: "30%",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)`,
        padding:'2%', 
        borderRadius:'3%',
    
        [theme.breakpoints.down("md")]: {
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          height: 250,
        },
        [theme.breakpoints.between("md", "lg")]: {
          height: 300,
        },
        [theme.breakpoints.between("lg", "xl")]: {
          height: 300,
        },
    
        [theme.breakpoints.up("xl")]: {
          height: 310,
        },
      }));
    
      const DevelopmentServiceCards = styled("div")(({ theme }) => ({
        height: 300,
        width: "30%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 60,
    
        [theme.breakpoints.down("sm")]: {
          width: "100%",
    
          height: 200,
        },
    
        [theme.breakpoints.only("md")]: {
          width: "100%",
    
          height: 250,
        },
        [theme.breakpoints.between("md", "lg")]: {
          height: 250,
        },
        [theme.breakpoints.between("lg", "xl")]: {
          height: 250,
        },
    
        [theme.breakpoints.up("xl")]: {
          height: 250,
        },
      }));
    
    
    
      const handleChange = (event, newValue) => {
        console.log("value:  " + newValue);
    
        setValue(newValue);
    
        if (newValue === "1") {
          setcolorTextTab1("#FF2A53");
        } else {
          setcolorTextTab1("black");
        }
    
        if (newValue === "2") {
          setcolorTextTab2("#FF2A53");
        } else {
          setcolorTextTab2("black");
        }
    
        if (newValue === "3") {
          setcolorTextTab3("#FF2A53");
        } else {
          setcolorTextTab3("black");
        }
    
        if (newValue === "4") {
          setcolorTextTab4("#FF2A53");
        } else {
          setcolorTextTab4("black");
        }
    
        if (newValue === "5") {
          setcolorTextTab5("#FF2A53");
        } else {
          setcolorTextTab5("black");
        }
      };
    
      const [value, setValue] = useState("1");
    
      const [colorTextTab1, setcolorTextTab1] = useState("#FF2A53");
      const [colorTextTab2, setcolorTextTab2] = useState("black");
      const [colorTextTab3, setcolorTextTab3] = useState("black");
      const [colorTextTab4, setcolorTextTab4] = useState("black");
      const [colorTextTab5, setcolorTextTab5] = useState("black");
    
      const services = [
        {
          imageUrl: frontEndArchitecture,
          text: "Front End Architecture & Design",
        },
        {
          imageUrl: testing,
          text: "Testing & Performance Tuning",
        },
        {
          imageUrl: responsive,
          text: "Responsive Design",
        },
        {
          imageUrl: uiuxdesign,
          text: "UI / UX Development",
        },
        {
          imageUrl: cmsEcommerce,
          text: "CMS & eCommerce Theme Development",
        },
        {
          imageUrl: javascriptSolutions,
          text: "Custom JavaScript Solutions",
        },
      ];
    
      const howWeWork = [
        {
          imageUrl: frontEndArchitecture,
          title: "Analysis",
          text: "The process will involve proper understanding of the project need and requirements, so that both the parties have clear scope and vision of the project and the technologies that will be used to develop the site.",
        },
        {
          imageUrl: testing,
          title: "Design",
          text: "Design will focus on how the site is going to look and feel. In this process only we will decide on the functionalities, utilities and requirements that will make a seamless working website.",
        },
        {
          imageUrl: responsive,
          title: "Responsive Development",
          text: "Development process will involve converting the application design to workable information applications. After this the project cycle will enter the testing phase.",
        },
        {
          imageUrl: uiuxdesign,
          title: "Testing & Bug Fixes",
          text: "This phase will include proper testing of the web application, which will help deciding the capabilities and deficiencies.  ",
        },
        {
          imageUrl: cmsEcommerce,
          title: "Deployment",
          text: "It will be the final step of the development process where we deliver the product to the clients.",
        },
        {
          imageUrl: javascriptSolutions,
          title: "Maintenance & Support",
          text: "This will include software upgrades, repairs and fixes. We will also monitor the performance of the software so you don't face any issues.",
        },
      ];
    
      const webAppBuss = [
        "Businesses from all corners of the world, offering a huge range of products, have begun migrating from the physical world of handing out leaflets, printing advertisements, and hanging billboards, to the digital realm",
        "The business world is evolving every single day, thus increasing your competitors and hurdles making it hard to sustain like yesterday. So the only solution to standout in the crowd is to attracting clients and new offers by showcasing your work style, products and skills in the light.",
      ];
    
      const whyNetcom = [
        "APS Technologies will help you in developing your company web application that would help increasing the pace and scale of your Business expansion.",
        "We will create and customize your website highlighting all the services and features of your business firms in a cost effective way.",
        "Our strength is our small and highly expertise teams of Web Development Pros, who are in turn complemented by our experience.",
      ];


      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"        
      }} >
        <Appheader/>
       

        <div style={{ width: "100%", marginTop: "2%" ,backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)` }}>
        {/* 67% middle of page */}

        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',paddingLeft:'10px',marginTop:'80px'}}>
                <Typography variant='h4' style={{ textDecoration: 'underline',textDecorationColor:'white' }} >Web Application Development</Typography>
            </div>

        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 20,
                color:'black'
              }}
            >
              Web Application Development is the creation of application program
              that reside on remote servers and are delivered to the user's
              device over the internet.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                color:'black'
              }}
            >
              APS Technologies development process will typically have a short development
              life-cycle lead by a small and efficient development team.
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                color:'black'
              }}
            >
              Our web development company has been developing web applications
              for the custom business requirements of all our esteemed clients.
              Our developer's skills & experience and cutting-edge technology
              will deliver you with Robust Web Applications.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7, 
                color:'black'
              }}
            >
              As leading Web Development company, delivering quality
              applications is always our priority. Discover our wide range of
              services and work with us!
            </Typography>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            {/* React Player Div */}
            
            <div style={{padding:'0px 10px'}} >
            <ScrollAnimation animateIn="zoomIn">
              <img
                width="100%"
                style={{ top: 0, left: 0, height: "300px" }}
                src={webAppDevImg}
                alt="webAppDevImg"
              ></img>
              </ScrollAnimation>
            </div>
            {/* React Player Div */}
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%"  }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
          <ScrollAnimation animateIn="flipInY">

            <Card
              sx={cardStyle}
              style={{
                paddingLeft: 30,
                paddingRight: 30,
                borderTopRightRadius: 30,
                borderBottomLeftRadius: 30,
                backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)`
              }}
              elevation={3}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 30, 
                    color:'black',
                    marginTop: 15,
                  }}
                >
                  Web Application for your Business
                </Typography>

                {webAppBuss.map((text) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 7,
                    }}
                  >
                    <ComputerIcon  />
                    <Typography
                      variant="body1"
                      sx={{
                        color:'black',
                        paddingLeft: 1,
                        textAlign: "justify",
                        marginBottom: 1,
                      }}
                    >
                      {" "}
                      {text}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
            </ScrollAnimation>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            <ScrollAnimation animateIn="flipInY">
            <Card
              sx={cardStyle1}
              style={{
                paddingLeft: 30,
                paddingRight: 30,
                borderTopRightRadius: 30,
                borderBottomLeftRadius: 30,
                backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)`
              }}
              elevation={3}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 30, 
                    color:'black',
                    marginTop: 15,
                  }}
                >
                  Why to approach APS Technologies ?
                </Typography>

                {whyNetcom.map((text) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 7,
                    }}
                  >
                    <CheckCircleIcon  />
                    <Typography
                      variant="body1"
                      sx={{
                        color:'black',
                        paddingLeft: 1,
                        textAlign: "justify",
                        marginBottom: 1,
                      }}
                    >
                      {" "}
                      {text}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
            </ScrollAnimation>
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%" , backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)` }}>
        {/* 67% middle of page */}
        <DivStyle1 style={{ flexDirection: "column" }}>
          <Typography
            variant="h4"
            style={{
              display: "flex",
              margin: "0 auto",
            }}
          >
            Web Application Development Services
          </Typography>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: "7%",
              flexWrap: "wrap",
              gap: 15,
            }}
          >
            {services.map((obj) => (
              <DevelopmentServiceCards>
                <ScrollAnimation animateIn="zoomIn">
                <img src={obj.imageUrl} alt="objImageUrl" width="50%" />
                </ScrollAnimation>
                <Typography variant="h6" >{obj.text}</Typography>
              </DevelopmentServiceCards>
            ))}
          </div>
        </DivStyle1>
      </div>

      <div style={{ width: "100%"}}>
        {/* 67% middle of page */}
        <DivStyle1 style={{ flexDirection: "column" }}>
          <Typography
            variant="h4"
            style={{
              display: "flex",
              margin: "0 auto",
             
            }}
          >
            How We Work
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: "2%",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {howWeWork.map((obj) => (
              <ProductCards>
                <img src={obj.imageUrl} alt="objImageUrl" width="20%" />
                <Typography
                  variant="h6"
                  style={{
                    marginTop: 15,
                    marginBottom: 15,
                   color:'black',
                    fontWeight: "bold"
                  }}
                >
                  {obj.title}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ textAlign: "justify", lineHeight: "26px",color:'black'}}
                >
                  {obj.text}
                </Typography>
              </ProductCards>
            ))}
          </div>
        </DivStyle1>
      </div>

      <div style={{ width: "100%" }}>
        {/* 67% middle of page */}

        <DivStyle1 style={{ flexDirection: "column" }}>
          <Typography
            variant="h4"
            style={{
              display: "flex",
              margin: "0 auto",
              
            }}
          >
            Web Application Development Stack
          </Typography>

          <Box sx={{ width:'100%',typography: "body1", marginTop: "7%" }}>
            <TabContext value={value}>
              {" "}
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "#FF2A53",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Tabs
                  value={value}
                  variant="scrollable"
                  allowScrollButtonsMobile
                  onChange={handleChange}
                  TabIndicatorProps={{ style: { background: "#FF2A53" } }}
                  textColor="inherit"
                >
                  <Tab
                    sx={{ color: colorTextTab1, textTransform: "none" }}
                    label={
                      <Typography variant="h5" style={{ cursor: "pointer" }}>
                        Languages{" "}
                      </Typography>
                    }
                    value="1"
                  />
                  <Tab
                    sx={{ color: colorTextTab2, textTransform: "none" }}
                    label={
                      <Typography variant="h5" style={{ cursor: "pointer" }}>
                        Front-end{" "}
                      </Typography>
                    }
                    value="2"
                  />
                  <Tab
                    sx={{ color: colorTextTab3, textTransform: "none" }}
                    label={
                      <Typography variant="h5" style={{ cursor: "pointer" }}>
                        Back-end{" "}
                      </Typography>
                    }
                    value="3"
                  />
                  <Tab
                    sx={{ color: colorTextTab4, textTransform: "none" }}
                    label={
                      <Typography variant="h5" style={{ cursor: "pointer" }}>
                        Database
                      </Typography>
                    }
                    value="4"
                  />
                </Tabs>
              </Box>
              <TabPanel value="1">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                  }}
                >
                  <fieldset
                    style={{
                      width: "100%",
                      border: "3px solid #FF2A53",
                      fontSize: 20,
                    }}
                  >
                    <legend align="center">Languages</legend>

                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        // flexWrap: "wrap",
                        flexDirection: "row",
                        alignItems: "center",                        
                      }}
                    >
                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__zoomOut"
                        >
                          <img src={htmlLogo} alt="htmlLogo" width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            HTML
                          </Typography>
                        </AnimationOnScroll>
                      </div>

                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__zoomOut"
                        >
                          <img src={cssLogo} alt="cssLogo" width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            CSS
                          </Typography>
                        </AnimationOnScroll>
                      </div>

                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__zoomOut"
                        >
                          <img src={jsLogo} alt="jsLogo" width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            JavaScript
                          </Typography>
                        </AnimationOnScroll>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                  }}
                >
                  <fieldset
                    style={{
                      width: "100%",
                      border: "3px solid #FF2A53",
                      fontFamily: "nunito",
                      fontSize: 20,
                    }}
                  >
                    <legend align="center"> Frameworks & CSS</legend>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__zoomOut"
                          animateOnce={true}
                        >
                          <img src={reactLogo} alt="reactLogo" width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            React JS
                          </Typography>
                        </AnimationOnScroll>
                      </div>

                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOnce={true}
                        >
                          <img src={muiLogo} alt="muiLogo" width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            MUI
                          </Typography>
                        </AnimationOnScroll>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </TabPanel>
              <TabPanel value="3">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                  }}
                >
                  <fieldset
                    style={{
                      width: "100%",
                      border: "3px solid #FF2A53",
                      fontFamily: "nunito",
                      fontSize: 20,
                    }}
                  >
                    <legend align="center">Languages & Framework</legend>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__zoomOut"
                          animateOnce={true}
                          duration={2}
                        >
                          <img src={nodeLogo} alt="nodeLogo" width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            Node JS
                          </Typography>
                        </AnimationOnScroll>
                      </div>

                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__zoomOut"
                          animateOnce={true}
                          duration={2}
                        >
                          <img src={expressLogo} alt="expressLogo" width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            Express JS
                          </Typography>
                        </AnimationOnScroll>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </TabPanel>
              <TabPanel value="4">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                  }}
                >
                  <fieldset
                    style={{
                      width: "100%",
                      border: "3px solid #FF2A53",
                      fontFamily: "nunito",
                      fontSize: 20,
                    }}
                  >
                    <legend align="center">Storage & Cloud Storage</legend>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__fadeInDown"
                        >
                          <img src={mongoLogo} alt="mongoLogo" width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            Mongo DB
                          </Typography>
                        </AnimationOnScroll>
                      </div>

                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__fadeInDown"
                        >
                          <img src={AWSLogo} alt="AWSLogo" width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            AWS
                          </Typography>
                        </AnimationOnScroll>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </DivStyle1>
      </div>

    
        <Footer />
    </div>
  )
}

export default Webapp