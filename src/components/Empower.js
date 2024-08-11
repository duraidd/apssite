import React from "react";
import Img1 from "../asset/hand.png";
import Img2 from "../asset/note.png";
import Img3 from "../asset/shaken.png";
import Img4 from "../asset/bulb.png";
import ScrollAnimation from 'react-animate-on-scroll';
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

function Empower() {
    return (

        <div style={{ display: 'flex', flexDirection: "column", paddingTop: "40px", paddingBottom: "40px", overflow: 'hidden', width: '100%' }} >

            <Box sx={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingLeft: "40px", paddingRight: "40px", '@media (max-width: 768px)': {
                    flexDirection: 'column'
                }
            }}>
                <ScrollAnimation animateIn="slideInRight" duration="1.5">
                    <h1
                        style={{
                            fontFamily: "font-title",
                            fontSize: "1.875rem",
                            color: "#333",
                        }}
                    >
                        Empowering businesses with <br /> innovative IT solutions
                    </h1>
                </ScrollAnimation>
                <Divider orientation="vertical" flexItem variant="middle" />
                <ScrollAnimation animateIn="slideInLeft" duration="1.5">
                    <p style={{ marginTop: "1rem", color: "#666" }}>
                        Our expertise lies in developing and implementing cutting-edge solutions <br />
                        that streamline your business processes, enhance productivity, and drive <br /> growth. We work with a wide range of clients across industries.
                    </p>
                </ScrollAnimation>
            </Box>

            <Box
                sx={{
                    marginTop: "3rem",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    padding: "0 8%",
                    gap: "30px",
                    '@media (max-width: 1024px)': {
                        flexWrap: 'wrap'
                    }

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
                        // borderImage:"linear-gradient(145deg, #FFFFFF, rgb(255,179,180)) 10",                        
                        "&:hover": { boxShadow: "8px 12px 12px #f8a6b6" }
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "1rem"
                        }}
                    >
                        <ScrollAnimation animateIn="zoomIn" >

                        <div style={{ padding: '10px', borderRadius: "50%", boxShadow: "1px 12px 20px #f8a6b6" }}>
                            <img
                                src={Img1}
                                width="50"
                                height="50"
                                style={{ objectFit: "fill", padding: '8px' }}
                                alt="API Logo"
                            />
                        </div>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn="rotateInDownRight" >
                        <h2
                            style={{ fontSize: "1.25rem", fontWeight: 600, color: "#333" }}
                        >
                            Empowering Your Digital <br /> Transformation
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="rotateInUpRight" duration="1.5">
                        <p style={{ marginTop: "1rem", color: "#666" }}>Unleash your business's full <br /> potential with our IT expertise and <br /> drive a successful digital <br /> transformation that.</p>
                    </ScrollAnimation>
                </Box>


                <Box
                    sx={{
                        textAlign: "center",
                        backgroundColor: "#fff",
                        borderRadius: "1rem",
                        padding: "2rem",
                        border: "1px solid",
                        borderColor: 'rgb(255,179,180)',
                        "&:hover": { boxShadow: "8px 12px 12px #f8a6b6" }
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "1rem"
                        }}
                    >
                        <ScrollAnimation animateIn="zoomIn" >

                        <div style={{ padding: '10px', borderRadius: "50%", boxShadow: "1px 12px 20px #f8a6b6" }}>
                            <img
                                src={Img2}
                                width="50"
                                height="50"
                                style={{ objectFit: "fill" }}
                                alt="API Logo"
                            />
                        </div>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn="rotateInDownRight" >
                        <h2
                            style={{ fontSize: "1.25rem", fontWeight: 600, color: "#333" }}
                        >
                            Seamless Solutions for <br /> Complex Challenges
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="rotateInUpRight" duration="1.5">
                        <p style={{ marginTop: "1rem", color: "#666" }}>From intricate software <br /> development to intricate problem- <br /> solving, our skilled team excels at <br /> providing seamless solutions.</p>
                    </ScrollAnimation>


                </Box>


                <Box
                    sx={{
                        textAlign: "center",
                        backgroundColor: "#fff",
                        borderRadius: "1rem",
                        padding: "2rem",
                        border: "1px solid",
                        borderColor: 'rgb(255,179,180)',
                        "&:hover": { boxShadow: "8px 12px 12px #f8a6b6" }
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "1rem"
                        }}
                    >
                        <ScrollAnimation animateIn="zoomIn" >
                            <div style={{ padding: '10px', borderRadius: "50%", boxShadow: "1px 12px 20px #f8a6b6" }}>
                                <img
                                    src={Img3}
                                    width="50"
                                    height="50"
                                    style={{ objectFit: "fill", padding: '8px' }}
                                    alt="API Logo"
                                />
                            </div>
                        </ScrollAnimation>


                    </div>
                    <ScrollAnimation animateIn="rotateInDownRight" >
                        <h2
                            style={{ fontSize: "1.25rem", fontWeight: 600, color: "#333" }}
                        >
                            Delivering Excellence <br /> Through Collaboration
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="rotateInUpRight" duration="1.5" >
                        <p style={{ marginTop: "1rem", color: "#666" }}>We believe in the power of <br /> collaboration. By working closely <br /> with you, we ensure that our IT <br /> services align perfectly.</p>
                    </ScrollAnimation>

                </Box>

                <Box
                    sx={{
                        textAlign: "center",
                        backgroundColor: "#fff",
                        borderRadius: "1rem",
                        padding: "2rem",
                        border: "1px solid",
                        borderColor: 'rgb(255,179,180)',
                        "&:hover": { boxShadow: "8px 12px 12px #f8a6b6" }
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "1rem"
                        }}
                    >
                        <ScrollAnimation animateIn="zoomIn" >

                        <div style={{ padding: '10px', borderRadius: "50%", boxShadow: "1px 12px 20px #f8a6b6" }}>
                            <img
                                src={Img4}
                                width="50"
                                height="50"
                                style={{ objectFit: "fill", padding: '8px' }}
                                alt="API Logo"
                            />
                        </div>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn="rotateInDownRight" >
                        <h2
                            style={{ fontSize: "1.25rem", fontWeight: 600, color: "#333" }}
                        >
                            Innovation at the Core
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="rotateInUpRight" duration="1.5" >
                        <p style={{ marginTop: "1rem", color: "#666" }}>Embrace the future of technology <br /> with our innovative IT services. <br /> We stay ahead of the curve, <br /> leveraging the advancements.</p>
                    </ScrollAnimation>

                </Box>

            </Box>
            

        </div>

    )
}

export default Empower