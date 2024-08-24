import React from 'react'
import '../App.css'
import Carousel from 'better-react-carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Box} from '@mui/material';

function Flag() {
  return (
    // <div className="services-3">
    //   <div className="group-1000007397">
    //     <div className="line-12"></div>
    //     <div className="group-1000007391">
    //       <div className="container-5">01</div>
    //       <div className="animated-icon rectangle-4322">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //           <path d="M12 16.59L7.41 12 6 13.41 12 19.41 18 13.41 16.59 12z" />
    //         </svg>
    //       </div>
    //       <div className="integration-solutions">Integration <br /> Solutions</div>
    //       <div className="description">
    //         Seamlessly connect your systems and applications for efficient data flow. Seamlessly connect your applications for efficient data flow.
    //       </div>
    //       <div className="arrow-icon">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //           <path d="M12 16.59L7.41 12 6 13.41 12 19.41 18 13.41 16.59 12z" />
    //         </svg>
    //       </div>
    //     </div>
    //     <div className="group-1000007393">
    //       <div className="container-7">02</div>
    //       <div className="animated-icon rectangle-43222">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //           <path d="M12 16.59L7.41 12 6 13.41 12 19.41 18 13.41 16.59 12z" />
    //         </svg>
    //       </div>
    //       <div className="hybrid-integration">Hybrid <br /> Integration</div>
    //       <div className="description">
    //         Seamlessly connect your systems and applications for efficient data flow. Seamlessly connect your applications for.
    //       </div>
    //       <div className="arrow-icon">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //           <path d="M12 16.59L7.41 12 6 13.41 12 19.41 18 13.41 16.59 12z" />
    //         </svg>
    //       </div>
    //     </div>
    //     <div className="group-1000007392">
    //       <div className="container-6">03</div>
    //       <div className="animated-icon rectangle-43221">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //           <path d="M12 16.59L7.41 12 6 13.41 12 19.41 18 13.41 16.59 12z" />
    //         </svg>
    //       </div>
    //       <div className="event-driven-architecture">Event-Driven Architecture</div>
    //       <div className="description">
    //         Seamlessly connect your systems and applications for efficient data flow. Seamlessly connect your applications.
    //       </div>
    //       <div className="arrow-icon">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //           <path d="M12 16.59L7.41 12 6 13.41 12 19.41 18 13.41 16.59 12z" />
    //         </svg>
    //       </div>
    //     </div>
       
    //     <div className="group-1000007394">
    //       <div className="container-8">04</div>
    //       <div className="animated-icon rectangle-43223">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //           <path d="M12 16.59L7.41 12 6 13.41 12 19.41 18 13.41 16.59 12z" />
    //         </svg>
    //       </div>
    //       <div className="api-development-management">API Development &amp; Management</div>
    //       <div className="description">
    //         Seamlessly connect your systems and applications for efficient data flow.
    //       </div>
    //       <div className="arrow-icon">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //           <path d="M12 16.59L7.41 12 6 13.41 12 19.41 18 13.41 16.59 12z" />
    //         </svg>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <Box sx={{padding:"20px 50px 20px 50px"}} >
    //  <Carousel cols={3} rows={1} gap={10} loop scrollSnap={true} hideArrow  autoplay={3000}  >
    //   <Carousel.Item>
    //   <Card sx={{ maxWidth: '100',margin:"20px" ,'&:hover':{boxShadow:"8px 12px 12px #f8a6b6"}}}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="500"
    //       image="https://www.apstechnologies.co.in/assets/images/technology/mobile-app-development/app-5.jpg"
    //       alt="green iguana"          
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Mobile Aplication
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary" >
    //       Mobile application development is a dynamic and rapidly evolving field that focuses on creating software applications specifically for mobile devices, such as smartphones and tablets. This process involves several stages, starting from the initial idea and conceptualization, through design and development, and finally to testing and deployment. Developers need to choose between building native apps for specific platforms like iOS or Android, or creating cross-platform apps that work on multiple systems. Each approach has its own set of advantages, with native apps often providing better performance and user experience, while cross-platform apps can reduce development time and cost.
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
        
    //   </Carousel.Item>
    //   <Carousel.Item>
    //      <Card sx={{ maxWidth: '100%',  margin:"20px",'&:hover':{boxShadow:"8px 12px 12px #f8a6b6"} }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="500"
    //       image="https://www.apstechnologies.co.in/assets/images/technology/mobile-app-development/app-3.jpg"
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Mobile Application
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //       The design phase of mobile application development is crucial, as it sets the foundation for user experience and interface. Effective design must account for varying screen sizes, resolutions, and device orientations to ensure that the app is visually appealing and functional across all devices. User-centric design principles, such as intuitive navigation and responsive layouts, play a significant role in making the app accessible and engaging. Tools like wireframes and prototypes are used to visualize the app’s flow and functionality before the actual coding begins.
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //      <Card sx={{ maxWidth: '100%', margin:"20px",'&:hover':{boxShadow:"8px 12px 12px #f8a6b6"} }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="500"
    //       image="https://www.apstechnologies.co.in/assets/images/technology/mobile-app-development/app-1.jpg"
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Mobile Application
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //       In the development stage, programmers write the code that brings the app to life. This involves using programming languages and frameworks specific to the chosen platform. For iOS, developers might use Swift or Objective-C along with Xcode, while for Android, they might use Kotlin or Java with Android Studio. Quality assurance is integral to this stage, with rigorous testing conducted to identify and fix bugs or performance issues. Once the app is polished and stable, it is submitted to app stores for review and distribution. Ongoing maintenance and updates are also essential to address user feedback, adapt to new technologies, and ensure compatibility with future operating system versions.
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //      <Card sx={{ maxWidth: '100%', margin:"20px",'&:hover':{boxShadow:"8px 12px 12px #f8a6b6"} }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="500"
    //       image="https://picsum.photos/800/600?random=1"
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>        
    //   </Carousel.Item>
    //   <Carousel.Item>
    //      <Card sx={{ maxWidth: '100%', margin:"20px",'&:hover':{boxShadow:"8px 12px 12px #f8a6b6"} }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="500"
    //       image="https://picsum.photos/800/600?random=1"
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //      <Card sx={{ maxWidth: '100%', margin:"20px",'&:hover':{boxShadow:"8px 12px 12px #f8a6b6"} }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="500"
    //       image="https://picsum.photos/800/600?random=1"
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    //   </Carousel.Item>  
    //   <Carousel.Item>
    //      <Card sx={{ maxWidth: '100%', margin:"20px",'&:hover':{boxShadow:"8px 12px 12px #f8a6b6"} }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="500"
    //       image="https://picsum.photos/800/600?random=1"
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //      <Card sx={{ maxWidth: '100%', margin:"20px", '&:hover':{boxShadow:"8px 12px 12px #f8a6b6"} }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="500"
    //       image="https://picsum.photos/800/600?random=1"
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    //   </Carousel.Item>
    //   <Carousel.Item>
      
    //   <Card sx={{ maxWidth: '100%', margin:"20px", '&:hover':{boxShadow:"8px 12px 12px #f8a6b6"} }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="500"
    //       image="https://picsum.photos/800/600?random=1"
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    //   </Carousel.Item>  
    
    // </Carousel>
    //  </Box>
<Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%',flexWrap:'wrap',padding:'20px 10px 30px 10px',gap:'20px'}} >
<article class="card33">
  <img
    class="card33__background"
    src="https://www.apstechnologies.co.in/assets/images/technology/mobile-app-development/app-1.jpg"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card33__content | flow">
    <div class="card33__content--container | flow">
      <h2 class="card33__title">Mobile App Development</h2>
      <p class="card33__description">
      Unlock the full potential of your business with our bespoke mobile app development services. Our team of experienced developers specializes in crafting tailored solutions for various platforms, including iOS and Android. Whether you need a customer-facing app to enhance engagement or an internal tool to streamline operations.
      </p>
    </div>
    {/* <button class="card33__button">Read more</button> */}
  </div>
</article>
<article class="card33">
  <img
    class="card33__background"
    src="https://www.apstechnologies.co.in/assets/images/technology/website-development/web-dev-1.jpg"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card33__content | flow">
    <div class="card33__content--container | flow"  >
      <h2 class="card33__title">Website development</h2>
      <p class="card33__description"  >
      Website development refers to the process of creating, designing, and building websites for businesses, organizations, or individuals. It involves various stages, including planning, design, development, testing, and deployment, to create functional and visually appealing websites that meet the client's objectives and user needs.
      </p>
    </div>
    {/* <button class="card33__button">Read more</button> */}
  </div>
</article>
<article class="card33">
  <img
    class="card33__background"
    src="https://www.apstechnologies.co.in/assets/images/technology/billing-software/bill-soft-2.jpg"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card33__content | flow">
    <div class="card33__content--container | flow">
      <h2 class="card33__title">Billing Software</h2>
      <p class="card33__description">
      Say goodbye to manual invoicing and billing headaches with our advanced billing software. Designed to cater to businesses of all sizes and industries, our software automates the billing process, reducing errors and saving valuable time. With features such as recurring billing, invoice customization, and payment tracking, you can effortlessly manage your finances and gain valuable insights into your business performance.
      </p>
    </div>
    {/* <button class="card33__button">Read more</button> */}
  </div>
</article>
<article class="card33">
  <img
    class="card33__background"
    src="https://i.imgur.com/QYWAcXk.jpeg"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card33__content | flow">
    <div class="card33__content--container | flow">
      <h2 class="card33__title">Digital Marketing</h2>
      <p class="card33__description">
      Social media marketing involves leveraging social media platforms such as Facebook, Instagram, Twitter, LinkedIn, and others to promote products, services, or brands. It encompasses various strategies and tactics to engage with target audiences, build brand awareness, drive website traffic, and generate leads or sales.
      </p>
    </div>
    {/* <button class="card33__button">Read more</button> */}
  </div>
</article>
</Box>
  )
}

export default Flag