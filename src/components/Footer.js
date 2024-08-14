import React from 'react'
import { Box } from '@mui/material'
import Logoimg from '../asset/Logo.jpg'
import Face from '../asset/Facebook.png'
import Twit from '../asset/Twitter.png'
import Insta from '../asset/Instagram.png'
import LinkedIn from '../asset/LinkedIn.png'



function Footer() {
    return (
        <div style={{ width: "100%", backgroundColor: "green", padding: "2% 10%" }} >
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
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
            <Box>
                <Box>
                    <h3 style={{marginBottom:"20px"}} >Office</h3>
                    <p style={{marginBottom:"20px"}} >Germany — <br />
                        05475 15h Street, Office 458 <br />
                        Berlin, De 81546</p>

                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com">Email someone</a>
                        <p>+91 9876543210</p>
                </Box>
                <Box>

                </Box>
                <Box>

                </Box>
                <Box>

                </Box>
            </Box>
        </div>
    )
}

export default Footer