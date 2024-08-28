import { Button } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import Img1 from '../../src/asset/letstry.png'
import Img2 from '../asset/Girl1.png'


function Discuss(props) {

    const handleContact = (data) => {
          props.passData(data)
    }

    return (
        <div style={{ display: 'flex', flexDirection: "row", padding: "5% 9%",width:"100%",backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)` }} >
            <Box sx={{
                '@media (max-width: 468px)': {
                    display: 'none',
                }
            }} ><img src={Img1} height={100} width={100} style={{ position: "absolute", marginLeft: "40px" }} /></Box>


            <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "20px", '@media(max-width:600px)': { flexWrap: "wrap" } }} >
                <h1>Let's <br />
                    <span style={{ color: "#FF2A53" }} >Discuss</span></h1>
                <Box sx={{
                    '@media (max-width: 768px)': {
                        display: 'none',
                    }
                }}>
                    <img src={Img2} width={'100%'}   />
                </Box>
                <Box sx={{ border: "1px solid #FF2A53", padding: "2rem", borderRadius: "10px", "&:hover": { boxShadow: "8px 12px 12px #f8a6b6" } }} >
                    <h3 style={{ color: "#FF2A53" }}>At APS Technologies IT Services, we thrive on challenges and <br /> are passionate about delivering exceptional results.</h3>
                    <p>With our experienced team of IT professionals, we have the <br /> expertise & knowledge to tackle projects of varying sizes.</p>
                    <Button sx={{
                        color: "white",
                        fontSize: "1rem",
                        fontFamily: "Lato",
                        backgroundColor: "#2F4858",
                        "&:hover": { backgroundColor: "#2F4858" },
                        marginRight: { sm: 0, lg: 10 }
                    }} onClick={() => handleContact("contactform")}  >Contact Us</Button>
                </Box>

            </Box>
        </div>
    )
}

export default Discuss