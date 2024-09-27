import { Box } from '@mui/material'
import React from 'react'
import Img1 from '../asset/tenplus.png'
import ScrollAnimation from 'react-animate-on-scroll';


function Experirnce() {
    return (

        <div style={{
            // backgroundColor: '#f7f7f7',
            // boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            // borderRadius: '10px',
            padding: '10px',
            width: '100%',
            margin: '0 auto',
            padding: '5%  8%  5%  8%',
            backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)`

        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '8px',                
                justifyContent: 'space-between',
                '@media (max-width: 768px)': {
                    flexWrap: 'wrap',
                }             
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '@media (max-width: 425px)': {
                        display: 'none',
                    },
                    
                }} >                
                      
                      <Box >
                    <ScrollAnimation animateIn='pulse' >
                        <img src={Img1} width={'80%'} />
                    </ScrollAnimation>
                </Box>
                </Box>
                <div>
                    <h2 style={{ fontSize: '36px', color: '#2F4858', fontFamily: 'bold', marginBottom: '16px' }}>Empowering businesses with innovative <br /> IT solutions</h2>
                    <p style={{ fontSize: '16px', color: '#333', marginBottom: '16px' }}>We are a team of passionate technology enthusiasts who are dedicated to  helping businesses achieve their goals through innovative IT solutions.</p>
                    <p style={{ fontSize: '16px', color: '#333', marginBottom: '16px' }}>Our expertise lies in developing and implementing cutting-edge solutions that streamline your business processes, enhance productivity,<br /> and drive growth. We work with a wide range of clients  across industries, from small startups  to large corporations, to deliver customized <br /> IT services that fit their unique needs.</p>
                    <p style={{ fontSize: '16px', color: '#333' }}>We are a team of passionate technology enthusiasts who are dedicated to<br /> helping businesses achieve their goals <br /> through innovative IT solutions.</p>
                </div>
            </Box>
        </div>

    )
}

export default Experirnce