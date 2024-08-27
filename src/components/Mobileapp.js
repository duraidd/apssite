import { React, useState, useMemo, useEffect } from "react";
import { styled } from "@mui/system";
import {
    Typography,
    // Breadcrumbs,
    // Link,
    Card,
    CardContent,
} from "@mui/material";




import "animate.css/animate.min.css";

import service from "../images/servicePageImages/MobApplicationDevelopment/service.svg";
import serviceMob from "../images/servicePageImages/MobApplicationDevelopment/serviceMob.jpg";


import mobFirstScreen from "../images/servicePageImages/MobApplicationDevelopment/mobFirstScreen.jpg";

import Appheader from "./Appheader";
import Footer from "./Footer";

export default function Mobileapp() {


    const MobAppDevStepsSection = styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingLeft: "15%",
        paddingRight: "15%",
        [theme.breakpoints.down("xl")]: {
            paddingLeft: "5%",
            paddingRight: "5%",
        },
        [theme.breakpoints.between("md", "lg")]: {
            paddingLeft: "5%",
            paddingRight: "5%",
        },
        [theme.breakpoints.down("md")]: {
            paddingLeft: "5%",
            paddingRight: "5%",
        },
    }));

    const MobAppDevStepsCards = (theme) => ({
        height: 300,
        width: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: 5,

        [theme.breakpoints.down("md")]: {
            width: "100%",
            textAlign: "center",
            height: 280,
        },
        [theme.breakpoints.between("md", "lg")]: {
            height: 380,
        },
        [theme.breakpoints.between("lg", "xl")]: {
            height: 300,
        },

        [theme.breakpoints.up("xl")]: {
            height: 300,
        },
    });

    const DivStyle1 = styled("div")(({ theme }) => ({
        display: "flex",
        paddingLeft: "5%",
        paddingRight: "5%",
        marginTop:'20px',
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

   
    const appProcess = [
        { title: "Discovery", text: "We work with clients to understand their business and we merge their initial concept with everything the team knows about mobile. We'll assess the possible challenges and identify the ways to overcome them." },
        { title: "Features & Architecture", text: " We establish what features go into the product and how they will work together. Here, we're drafting a skeletal framework for the app in the form of wireframes." },
        { title: "Design & Development", text: "When it comes to first impressions, it's all about design. We'll put our passion for good design to work and based on approved wireframes we'll design all screens.The development process is broken down into sprints based on feature sets. Our development process will allow you to regularly review and assess what we're building." },
        { title: "Quality Assurance", text: " Our Quality Assurance team will test the app after each development sprint and once all major functionality is implemented." },
        { title: "Launch", text: " After passing the Beta Build through a final round of QA and refinements, we'll have in our hands a Release Candidate Build. We can either submit the app to the App Stores or provide you witheverything you need to do it yourself." },
        { title: "Maintenance", text: " We provide our clients with a 3 months bug fixing period, free of charge, and maintenance packages that cover everything from small updates all the way to whole new versions." }
    ]


    const [width, setWidth] = useState(window.innerWidth);

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>



            <Appheader />
            

            <div style={{ width: "100%", marginTop: "80px" }}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',paddingLeft:'10px'}}>
                <Typography variant='h4' style={{ textDecoration: 'underline',textDecorationColor:'#FF2A53' }} >Mobile Application Development</Typography>
            </div>
                {/* 67% middle of page */}
                <DivStyle1>
                    {/* Left Side */}
                    <DivStyle2>
                        <Typography
                            variant="body1"
                            style={{ textAlign: "justify", marginTop: 20 ,color:'black'}}
                        >
                            Mobile App Development is the process of developing and helping to
                            implement apps that run on{" "}
                            <span style={{ fontWeight: "bold" }}>Android</span> and{" "}
                            <span style={{ fontWeight: "bold" }}> iOS</span> Powered Mobile
                            devices and a typical mobile application utilizes a network
                            connection to work with remote computing resources.
                        </Typography>
                        <Typography
                            variant="body1"
                            style={{ textAlign: "justify", marginTop: 7 ,color:'black' }}
                        >
                            Many of you will think that ―Our business style doesn't need an
                            app to sell products to our clients! And maybe that would have
                            been the case in the past. But if you want to prepare for the
                            future and start seeing the massive benefits right out the gate,
                            you'll definitely need a mobile app for your business development.
                        </Typography>
                    </DivStyle2>
                    {/* Ride Side */}
                    <DivStyle3>
                        {/* React Player Div */}
                        <div className="container">
                            <img
                                width="100%"
                                style={{ top: 0, left: 0, height: "300px" }}
                                src={mobFirstScreen}
                                alt="mobFirstScreen"
                            ></img>
                        </div>
                        {/* React Player Div */}
                    </DivStyle3>
                </DivStyle1>
            </div>

            {/* Full vertical page */}
            <div style={{ width: "100%", marginTop: 25, marginBottom: 50 }}>
                <DivStyle1 style={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                        variant="h6"
                        style={{
                            textAlign: "justify",
                            marginTop: 7,
                            color:'black'
                        }}
                    >
                        {" "}
                        What does a Mobile App actually do?{" "}
                    </Typography>
                    <Typography
                        variant="body1"
                        style={{ textAlign: "justify", marginTop: 7 ,color:'black' }}
                    >
                        Mobile Applications would permit the users to have functional access
                        to any products, information, process or services that they would
                        demand in real-time.
                        <br />
                        It enables the business to send notifications about changes in
                        products and services or something new.
                    </Typography>
                </DivStyle1>
            </div>

            {/* Full vertical page */}
            <MobAppDevStepsSection>
                {appProcess.map((obj) => (
                    <Card elevation={3} sx={MobAppDevStepsCards}>
                        <CardContent>
                            <Typography variant="h6" >
                                {obj.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{ marginTop: 10, textAlign: "justify",color:'black' }}
                            >
                                {obj.text}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </MobAppDevStepsSection>

            {/* Full vertical page */}
            <div style={{ width: "100%", marginTop: 25, marginBottom: 50 }}>
                <DivStyle1>
                    <img
                        src={width < 800 ? serviceMob : service}
                        alt="service"
                        width="100%"
                        height={width < 800 ? "350px" : "400px"}
                    />
                </DivStyle1>
            </div>

            {/* Full vertical page */}
            <div style={{ width: "100%", marginTop: 25 }}>
                <DivStyle1>
                    <DivStyle2>
                        <Typography
                            variant="h6"
                            style={{
                                textAlign: "justify",
                                marginTop: 7,
                                color:'black'
                            }}
                        >
                            {" "}
                            What you can achieve by that?{" "}
                        </Typography>
                        <ul>
                            <Typography
                                variant="body1"
                                style={{
                                    textAlign: "justify",
                                    marginTop: 7,
                                    color:'black'
                                }}
                            >
                                Through that regular contact with your target clients, you're
                                fostering their trust.
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{
                                    textAlign: "justify",
                                    marginTop: 2,
                                    color:'black'
                                }}
                            >
                                The more your clients trust you, the more likely they'll be to
                                listen to later sales pitches and would commit to your products
                                and services.
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{
                                    textAlign: "justify",
                                    marginTop: 2,
                                    color:'black'
                                }}
                            >
                                APS Technologies will create you a highly customized, client-friendly
                                mobile application for making all your business operations and
                                promotions easier.
                            </Typography>
                        </ul>
                    </DivStyle2>

                    <DivStyle3>
                        <Typography
                            variant="h6"
                            style={{
                                textAlign: "justify",
                                marginTop: 7,
                                color:'black'
                            }}
                        >
                            {" "}
                            Our Developing Strategies for Brand & Online Presence{" "}
                        </Typography>
                        <ul>
                            <Typography
                                variant="body1"
                                style={{ textAlign: "justify", marginTop: 7 ,color:'black'}}
                            >
                                Android Mobile & Tablet Application Development
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{ textAlign: "justify", marginTop: 2 , color:'black'}}
                            >
                                iOS Application Development
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{ textAlign: "justify", marginTop: 2 ,color:'black'}}
                            >
                                E-commerce Development
                            </Typography>
                        </ul>
                    </DivStyle3>
                </DivStyle1>
            </div>

            <Footer />
        </>
    );
}
