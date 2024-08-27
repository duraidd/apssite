import React from 'react'
import '../App.css'
import {Box} from '@mui/material';
import ScrollAnimation from 'react-animate-on-scroll';


function Flag() {
  return (
    
<Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100%',flexWrap:'wrap',padding:'20px 10px 30px 10px',gap:'20px'}} >

<ScrollAnimation animateIn='jello' >
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
</ScrollAnimation>
<ScrollAnimation animateIn='jello' >
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
</ScrollAnimation>
<ScrollAnimation animateIn='jello' >
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
</ScrollAnimation>
<ScrollAnimation animateIn='jello' >
<article class="card33">
  <img
    class="card33__background"
    src="https://www.apstechnologies.co.in/assets/images/technology/digital-marketing/digital-mar-1.jpg"
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
</ScrollAnimation>
</Box>
  )
}

export default Flag