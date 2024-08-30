import React, { useEffect } from 'react'
import Imah from '../asset/hero.png'
import "./../App.css"
import Appheader from './Appheader'
import Footer from './Footer'
import { Box, Card, Typography } from '@mui/material'
import Cube from '../asset/Cube.png'
import Pyramid from '../asset/pyramid.png'
import Glass from '../asset/Glass.png'
import Circle from '../asset/Circle.png'
import Girl from '../asset/Girl.png'
import Girl2 from '../asset/Girl2.png'
import ScrollAnimation from 'react-animate-on-scroll';
import Checklist from '../asset/Checklist.png'
import Shop from '../asset/shop.png'
import Facard from '../asset/cards.png'
import Fachart from '../asset/fachart.png'
import { ScrollToTop } from "react-simple-scroll-up";
import Breadscrum from './Breadscrum'






function Digitalmarketing() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])



    return (
        <>
            <Appheader />

            <Breadscrum dataParent={["Home", "Services", "Digital Marketing"]}/>


      <ScrollToTop bgColor="#ff0400" symbol="&#8593;" strokeFillColor="white" style={{ zIndex: 999 }} />

            <div className="saple" style={{
                backgroundImage: `url(${Imah})`, marginTop: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: '100%'
            }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <hr
                            style={{
                                color: 'green',
                                backgroundColor: 'red',
                                width: 50,
                                height: 1
                            }}
                        />
                        <Typography variant='h4' color={'white'} >The Best</Typography>

                        <hr
                            style={{
                                color: 'green',
                                backgroundColor: 'red',
                                width: 50,
                                height: 1
                            }}
                        />
                    </Box>
                    <Typography variant='h2' color={'white'} >Digital Marketing</Typography>
                    <Typography variant='h6' sx={{ marginTop: '30px' }} color={'white'} >Completely synergize resource taxing relationships via premier <br /> niche markets. Professionally cultivate one-to-one customer</Typography>
                </Box>
            </div>

            <Box sx={{ display: 'flex', flexDirection: 'row', padding: '5% 10%', justifyContent: 'space-between', '@media(max-width:768px)': { justifyContent: 'center', flexWrap: 'wrap-reverse' }, alignItems: 'center', backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)` }} >
                <Box>
                    <Typography variant='h3' color={'black'} >Reach Your Business<br />
                        Goals in Record Time</Typography>
                    <Typography variant='h6' color={'white'} >Support small business and join the nationwide movement to encourage <br /> commercial support for the millions of minority owned businesses helping <br /> world economy.</Typography>
                </Box>

                <Box >
                    <ScrollAnimation animateIn='pulse' >
                        <img src={Girl2} width={'100%'} />
                    </ScrollAnimation>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex', flexDirection: 'row', padding: '10%', justifyContent: 'space-between', '@media (max-width: 1024px)': {
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '50px'
                }
            }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                    <Typography variant='h3' >We’re Strategic Digital <br />
                        Marketing Agency</Typography>
                    <Typography variant='h5' sx={{ marginTop: '30px', color: '#78847D' }} >We’ve created a full-stack structure for <br /> our working workflow processe, were <br /> from the funny the century initial all <br /> made, have spare to negatives </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '100px', '@media (max-width: 425px)': { flexWrap: 'wrap', justifyContent: 'center' } }} >
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                            <ScrollAnimation animateIn='swing'><img src={Cube} /></ScrollAnimation>
                            <Typography color={'black'} variant='h5' sx={{ marginTop: '30px' }} >Content Strategy</Typography>
                            <Typography color={'#78847D'} variant='h6' sx={{ marginTop: '10px' }} >All our content marketing <br /> service packages include <br />
                                a custom content strategy</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                            <ScrollAnimation animateIn='swing'> <img src={Pyramid} /></ScrollAnimation>
                            <Typography color={'black'} variant='h5' sx={{ marginTop: '30px' }} >Content Development</Typography>
                            <Typography color={'#78847D'} variant='h6' sx={{ marginTop: '10px' }} >We create some content <br /> calendar for your company’s <br /> must-share content</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '100px', '@media (max-width: 425px)': { flexWrap: 'wrap', justifyContent: 'center' } }} >
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                            <ScrollAnimation animateIn='swing'> <img src={Glass} /></ScrollAnimation>
                            <Typography color={'black'} variant='h5' sx={{ marginTop: '30px' }} >Content Creation</Typography>
                            <Typography color={'#78847D'} variant='h6' sx={{ marginTop: '10px' }} >Experienced in <br /> copywriting and marketing <br /> team begins creating <br /> content</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                            <ScrollAnimation animateIn='swing'> <img src={Circle} /></ScrollAnimation>
                            <Typography color={'black'} variant='h5' sx={{ marginTop: '30px' }} >Content Optimization</Typography>
                            <Typography color={'#78847D'} variant='h6' sx={{ marginTop: '10px' }} >Your content marketing <br /> management services also <br /> include SEO</Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', padding: '5% 10%', justifyContent: 'space-between', '@media(max-width:768px)': { justifyContent: 'center', flexWrap: 'wrap' }, alignItems: 'center', backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)` }} >
                <Box >
                    <ScrollAnimation animateIn='pulse' ><img src={Girl} width={'100%'} /></ScrollAnimation>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }} >
                    <Typography color={'#F17216'} >WHY CHOOSE US</Typography>
                    <Typography color={'black'} variant='h4' >Take on any Challenge of <br /> the Digital World</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }} >
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} ><img src={Checklist} /><Typography color={'black'}>Corporate Financial Advisory</Typography></Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} ><img src={Checklist} /><Typography color={'black'}>Development of Financial Models</Typography></Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} ><img src={Checklist} /><Typography color={'black'}>Deal Structuring</Typography></Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', padding: '5% 10%', justifyContent: 'space-between', alignItems: 'center',flexWrap:'wrap','@media(max-width:768px)':{justifyContent:'center'} }} >
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                    <Box  ><Typography variant='h5' color={'#F17216'} >SERVICES</Typography></Box>
                    <Box sx={{ marginTop: '10px' }} >
                        <Box><Typography variant='h4' color={'black'} >Our Capabilities</Typography></Box>
                        <Typography sx={{ marginTop: '10px' }} variant='h6' color={'black'}>We will bring the breathe of our <br /> experience and  industry knowledge <br /> to help you succeed</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', padding: '20px', gap: '50px', flexWrap:'wrap',justifyContent:'center' }} >
                    <Card elevation={1} sx={{ padding: '30px','&:hover':{boxShadow: "5px 5px 10px red"} }} >
                        <img src={Shop} />
                        <Typography color='black' variant='h6' >Market Forcest</Typography>
                        <Typography color='#78847D' variant='h6' >Leverage agile framework <br/> to provide a robust high <br/> level synopsys overviews</Typography>
                    </Card>
                    <Card elevation={1} sx={{ padding: '30px','&:hover':{boxShadow: "5px 5px 10px red"} }} >
                        <img src={Facard} />
                        <Typography color='black' variant='h6' >Fund Raising</Typography>
                        <Typography color='#78847D' variant='h6' >Bring to the table survival <br/> strategies to ensure <br/> proactive domination</Typography>
                    </Card>
                    <Card elevation={1} sx={{ padding: '30px','&:hover':{boxShadow: "5px 5px 10px red"} }} >
                        <img src={Fachart} />
                        <Typography color='black' variant='h6'>Cash Flow</Typography>
                        <Typography color='#78847D' variant='h6' >Grow the holistic world <br/> view of disruptive <br/> innovation workspace</Typography>
                    </Card>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Digitalmarketing