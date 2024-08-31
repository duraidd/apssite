import React from 'react'
import { Box, Divider } from '@mui/material'
import Logoimg from '../asset/Logo.jpg'
import Face from '../asset/Facebook.png'
import Twit from '../asset/Twitter.png'
import Insta from '../asset/Instagram.png'
import LinkedIn from '../asset/LinkedIn.png'
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { useNavigate } from 'react-router-dom'


const P = styled.p`
  color:black;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

function Footer(props) {


    const navigate = useNavigate();


    const handleFoot = (data) => {


        navigate("/", { state: { section: data } });

        if (props.passFooter && props.fn) {
            props.passFooter(data);
            props.fn(data)
        }


    }

    return (
        <div style={{ width: "100%", padding: "5% 10%" }} >
            <ScrollAnimation animateIn="fadeInUp" animateOnce  >
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                    <img src={Logoimg} alt="logo" width={'250px'} height={'50px'} />
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "25px" }}>
                        <Box><p>Find Us Here</p></Box>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }} >
                            <a href='https://www.facebook.com/people/Aps-Techh/pfbid02yEy6wg1TQKCJVE9ZeuRV1QbnFMj2VfFt22QFeFLAUQU2HFhVodPU36ijNe3eNx3nl/?mibextid=ZbWKwL' target='_blank' ><img src={Face} height={24} width={24} style={{ cursor: "pointer" }} /></a>
                            <img src={Twit} height={24} width={24} style={{ cursor: "pointer" }} />
                            <a href='https://www.instagram.com/aps_technologies.tvl/?igsh=NmZ1bm14ZDZweHMz' target='_blank'>
                                <img src={Insta} height={24} width={24} style={{ cursor: "pointer" }} />
                            </a>
                            <img src={LinkedIn} height={24} width={24} style={{ cursor: "pointer" }} />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-between" }}>
                    <Box>
                        <h3 style={{ marginBottom: "20px" }} >Office</h3>
                        <p style={{ marginBottom: "20px", color: 'black' }} >23/C, First floor,<br />
                            Rajarajeshwari Nagar south Street <br />
                            NGO B colony <br />Tirunelveli 627007</p>

                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@apstechnologies.co.in" target='_blank' >contact@apstechnologies.co.in</a>
                        <p>+91 7305395976</p>
                    </Box>
                    <Box>
                        <h3 style={{ marginBottom: "20px" }} >Quick Link</h3>
                        <P onClick={() => handleFoot("home")} >Home</P>
                        <P onClick={() => handleFoot("about")} >About Us</P>
                        <P onClick={() => handleFoot("contact")} >Contact Us</P>
                        {/* <p style={{ marginBottom: "20px", color: 'black' }} >Blog</p> */}

                    </Box>
                    <Box>
                        <h3 style={{ marginBottom: "20px" }} >Services</h3>
                        <P onClick={() => navigate('/web-application')}>Web Application</P>
                        <P onClick={() => navigate('/mobile-application')}>Mobile Application</P>
                        <P onClick={() => navigate('/cloud-services')}>Cloud Services</P>  
                        <P onClick={() => navigate('/digital-marketing')}>Digital Marketing</P>

                    </Box>
                    <Box>
                        <h3 style={{ marginBottom: "20px" }} >Resources</h3>                        
                        <P onClick={() => navigate('/web-application')}>Our Services</P>
                        <P onClick={()=>navigate('/career', { state: { section: "career" } })}>Career</P>
                        <p style={{ marginBottom: "20px", color: 'black' }} >Privacy Policy</p>

                    </Box>
                </Box>
                <Divider />
                <p style={{ color: 'black' }} >Copyright©2024 APS Technologies Pvt Ltd, All rights reserved</p>
            </ScrollAnimation>
        </div>
    )
}

export default Footer