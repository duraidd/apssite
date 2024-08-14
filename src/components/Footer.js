import React from 'react'
import { Box, Divider } from '@mui/material'
import Logoimg from '../asset/Logo.jpg'
import Face from '../asset/Facebook.png'
import Twit from '../asset/Twitter.png'
import Insta from '../asset/Instagram.png'
import LinkedIn from '../asset/LinkedIn.png'



function Footer() {
    return (
        <div style={{ width: "100%", padding: "5% 10%" }} >
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                <img src={Logoimg} alt="logo" width={'250px'} height={'50px'} />
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "25px" }}>
                    <Box><p>Find Us Here</p></Box>
                    <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }} >
                        <img src={Face} height={24} width={24} style={{ cursor: "pointer" }} />
                        <img src={Twit} height={24} width={24} style={{ cursor: "pointer" }} />
                        <img src={Insta} height={24} width={24} style={{ cursor: "pointer" }} />
                        <img src={LinkedIn} height={24} width={24} style={{ cursor: "pointer" }} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-between" }}>
                <Box>
                    <h3 style={{ marginBottom: "20px" }} >Office</h3>
                    <p style={{ marginBottom: "20px" }} >Germany — <br />
                        05475 15h Street, Office 458 <br />
                        Berlin, De 81546</p>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=apstechnologiestvl@gmail.com">apstechnologiestvl@gmail.com</a>
                    <p>+91 7305395976</p>
                </Box>
                <Box>
                <h3 style={{ marginBottom: "20px" }} >Quick Link</h3>
                    <p style={{ marginBottom: "20px" }} >Home</p>
                    <p style={{ marginBottom: "20px" }} >About Us</p>
                    <p style={{ marginBottom: "20px" }} >Contact Us</p>
                    <p style={{ marginBottom: "20px" }} >Blog</p>

                </Box>
                <Box>
                    <h3 style={{ marginBottom: "20px" }} >Services</h3>
                    <p style={{ marginBottom: "20px" }} >API Development</p>
                    <p style={{ marginBottom: "20px" }} >Mule Soft</p>
                    <p style={{ marginBottom: "20px" }} >Sales force</p>
                </Box>
                <Box>
                    <h3 style={{ marginBottom: "20px" }} >Resources</h3>
                    <p style={{ marginBottom: "20px" }} >Portfolio</p>
                    <p style={{ marginBottom: "20px" }} >Our Services</p>
                    <p style={{ marginBottom: "20px" }} >Careers</p>
                    <p style={{ marginBottom: "20px" }} >Privacy Policy</p>
                   
                </Box>
            </Box>
            <Divider />
            <p>Copyright©2024 APS Technologies Pvt Ltd, All rights reserved</p>
        </div>
    )
}

export default Footer