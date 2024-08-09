import React from "react";
import Appheader from "./Appheader";
import { Button, IconButton } from "@mui/material";
import Img1 from "../asset/api.png";
import Img2 from "../asset/sal.png";
import Img3 from "../asset/mul.png";
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import ScrollAnimation from 'react-animate-on-scroll';
import Box from "@mui/material/Box";
import "./../App.css"


function Custcard() {
    return (
        <div style={{ display: 'flex', flexDirection: "column", paddingTop: "40px", paddingBottom: "40px", overflow: 'hidden' }} >




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


            <div class="container">               
                <div class="grid-container">
                    <div class="full-width">
                        <div class="card">
                            <img src="https://tools-api.webcrumbs.org/image-placeholder/480/320/technology/1" alt="IT Strategy and Planning" />
                            <div class="card-content">
                                <i class="card-icon">{<EmojiObjectsOutlinedIcon style={{ fontSize: "50px" }} />}</i>
                                <h2 class="card-title">IT Strategy and Planning</h2>
                                <p class="card-description">We help organizations develop strategic plans to align their IT capabilities with their business objectives. This involves assessing current IT systems, identifying areas for improvement, and creating a roadmap for technology adoption and transformation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://tools-api.webcrumbs.org/image-placeholder/480/320/technology/2" alt="IT Consultation" />
                        <div class="card-content">
                            <i class="card-icon">{<MarkUnreadChatAltOutlinedIcon style={{ fontSize: "50px" }} />}</i>
                            <h2 class="card-title">IT Consultation</h2>
                            <p class="card-description">Harness the power of technology with strategic insights and tailored recommendations - trust our IT Consultation services to transform business.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://tools-api.webcrumbs.org/image-placeholder/480/320/technology/3" alt="24/7 Customer Support" />
                        <div class="card-content">
                            <i class="card-icon"><PhoneInTalkOutlinedIcon style={{ fontSize: "50px" }} /></i>
                            <h2 class="card-title">24/7 Customer Support</h2>
                            <p class="card-description">Round-the-clock support, ensuring your business stays on track. Experience peace of mind with our 24/7 customer support, always here to assist you.</p>
                        </div>
                    </div>
                    <div class="full-width">
                        <div class="card">
                            <img src="https://tools-api.webcrumbs.org/image-placeholder/960/320/technology/4" alt="Digital Transformation" />
                            <div class="card-content">
                                <i class="card-icon"><HubOutlinedIcon style={{ fontSize: "50px" }} /></i>
                                <h2 class="card-title">Digital Transformation</h2>
                                <p class="card-description">We assist businesses in embracing digital technologies to enhance operations, improve customer experiences, and drive innovation. They provide expertise in areas such as cloud computing, data analytics, artificial intelligence, Internet of Things (IoT), and automation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Custcard