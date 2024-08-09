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

            {/* <div style={{ margin: '0 auto', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: `0 4px 8px rgba(0, 0, 0, 0.1)` }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 600, textAlign: 'center', marginBottom: '16px' }}>Customized IT services to elevate your business</h1>
                <p style={{ textAlign: 'center', marginBottom: '32px' }}>Phi Dimensions is your one-stop shop for technologically diverse solutions driven by.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                    <div style={{ gridColumn: 'span 2' }}>
                        <div style={{ position: 'relative', backgroundColor: 'black', color: 'white', borderRadius: '8px', padding: '16px' }}>
                            <img
                                src="https://tools-api.webcrumbs.org/image-placeholder/480/320/technology/1"
                                alt="IT Strategy and Planning"
                                style={{ position: 'absolute', inset: 0, width: '100%', objectFit: 'cover', opacity: '0.25', borderRadius: 'inherit' }}
                            />
                            <div style={{ position: 'relative', zIndex: 10 ,width:'100%' }}>
                                <i style={{ color: '#007BFF', fontSize: '2.5rem', marginBottom: '16px' }}>lightbulb</i>
                                <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px' }}>IT Strategy and Planning</h2>
                                <p>We help organizations develop strategic plans to align their IT capabilities with their business objectives. This involves assessing current IT systems, identifying areas for improvement, and creating a roadmap for technology adoption and transformation.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', backgroundColor: 'black', color: 'white', borderRadius: '8px', padding: '16px' }}>
                        <img
                            src="https://tools-api.webcrumbs.org/image-placeholder/480/320/technology/2"
                            alt="IT Consultation"
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: '0.25', borderRadius: 'inherit' }}
                        />
                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <i style={{ color: '#007BFF', fontSize: '2.5rem', marginBottom: '16px' }}>chat_bubble_outline</i>
                            <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px' }}>IT Consultation</h2>
                            <p>Harness the power of technology with strategic insights and tailored recommendations - trust our IT Consultation services to transform business.</p>
                        </div>
                    </div>
                    <div style={{ position: 'relative', backgroundColor: 'black', color: 'white', borderRadius: '8px', padding: '16px' }}>
                        <img
                            src="https://tools-api.webcrumbs.org/image-placeholder/480/320/technology/3"
                            alt="24/7 Customer Support"
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: '0.25', borderRadius: 'inherit' }}
                        />
                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <i style={{ color: '#007BFF', fontSize: '2.5rem', marginBottom: '16px' }}>phone_in_talk</i>
                            <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px' }}>24/7 Customer Support</h2>
                            <p>Round-the-clock support, ensuring your business stays on track. Experience peace of mind with our 24/7 customer support, always here to assist you.</p>
                        </div>
                    </div>
                    <div style={{ gridColumn: 'span 2' }}>
                        <div style={{ position: 'relative', backgroundColor: 'black', color: 'white', borderRadius: '8px', padding: '16px' }}>
                            <img
                                src="https://tools-api.webcrumbs.org/image-placeholder/960/320/technology/4"
                                alt="Digital Transformation"
                                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: '0.25', borderRadius: 'inherit' }}
                            />
                            <div style={{ position: 'relative', zIndex: 10 }}>
                                <i style={{ color: '#007BFF', fontSize: '2.5rem', marginBottom: '16px' }}>device_hub</i>
                                <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px' }}>Digital Transformation</h2>
                                <p>We assist businesses in embracing digital technologies to enhance operations, improve customer experiences, and drive innovation. They provide expertise in areas such as cloud computing, data analytics, artificial intelligence, Internet of Things (IoT), and automation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


<div class="container">
        <div class="header">
            <h1>Customized IT services to elevate your business</h1>
        </div>
        <p class="intro">Phi Dimensions is your one-stop shop for technologically diverse solutions driven by.</p>
        <div class="grid-container">
            <div class="full-width">
                <div class="card">
                    <img src="https://tools-api.webcrumbs.org/image-placeholder/480/320/technology/1" alt="IT Strategy and Planning" />
                    <div class="card-content">
                        <i class="card-icon">{<EmojiObjectsOutlinedIcon style={{fontSize:"50px"}}/>}</i>
                        <h2 class="card-title">IT Strategy and Planning</h2>
                        <p class="card-description">We help organizations develop strategic plans to align their IT capabilities with their business objectives. This involves assessing current IT systems, identifying areas for improvement, and creating a roadmap for technology adoption and transformation.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <img src="https://tools-api.webcrumbs.org/image-placeholder/480/320/technology/2" alt="IT Consultation" />
                <div class="card-content">
                    <i class="card-icon">{<MarkUnreadChatAltOutlinedIcon style={{fontSize:"50px"}}/>}</i>
                    <h2 class="card-title">IT Consultation</h2>
                    <p class="card-description">Harness the power of technology with strategic insights and tailored recommendations - trust our IT Consultation services to transform business.</p>
                </div>
            </div>
            <div class="card">
                <img src="https://tools-api.webcrumbs.org/image-placeholder/480/320/technology/3" alt="24/7 Customer Support" />
                <div class="card-content">
                    <i class="card-icon"><PhoneInTalkOutlinedIcon style={{fontSize:"50px"}}/></i>
                    <h2 class="card-title">24/7 Customer Support</h2>
                    <p class="card-description">Round-the-clock support, ensuring your business stays on track. Experience peace of mind with our 24/7 customer support, always here to assist you.</p>
                </div>
            </div>
            <div class="full-width">
                <div class="card">
                    <img src="https://tools-api.webcrumbs.org/image-placeholder/960/320/technology/4" alt="Digital Transformation" />
                    <div class="card-content">
                        <i class="card-icon"><HubOutlinedIcon style={{fontSize:"50px"}}/></i>
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