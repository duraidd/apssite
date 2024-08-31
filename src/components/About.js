import React from "react";
import Appheader from "./Appheader";
import ScrollAnimation from 'react-animate-on-scroll';


export default function About() {
  return (
    <div style={{overflow:'hidden', display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-evenly', width: "100vw", padding: "5% 10% 5% 10%", backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)` }}>
      
      <div style={{ border: "10px solid #FF2A53", position: "relative", borderRadius: "5%" }} className="animate_animated animate__backInLeft" >      
        <img
          src={require("../asset/person.png")}
          alt="image"
          style={{
            position: "relative",
            left: '-10%',
            top: '10%',
            width: '100%'
          }}
        />        
      </div>
     
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', marginTop: '30px' }} >
      <ScrollAnimation animateIn="bounceInRight" duration="2" animateOnce > 
        <h1>Technologically diverse solutions <br /> with APS Technologies</h1>
        <p style={{fontFamily:'Plus'}} >Phi Dimensions is your one stop shop for technologically diverse solutions <br /> driven by top-notch platforms like MuleSoft , Salesforce, API (Application <br /> Programming Interface).</p>
        <p style={{fontFamily:'sans-serif'}} >As the business world continues to evolve, companies are faced with <br /> challenges they must navigate through the power of technology. If you don’t <br /> act at the right time, chances are you’ll be left behind. To ensure this never <br /> happens, we help you manage reliable technology integrations based on our <br /> tried and tested strategies.</p>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="pulse" animateOnce > 
        <div style={{ width: '100%', backgroundColor: '#f7f7f7', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginRight:'10px' }}>
              <div style={{ position: 'relative', marginBottom: '2px' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', backgroundColor: '#ffe6e6', borderRadius: '50%' }}></div>
                <span style={{ fontFamily: 'font-title', fontSize: '24px', position: 'relative', zIndex: 10 }}>18K</span>
              </div>
              <span>Project Done</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginRight:'10px' }}>
              <div style={{ position: 'relative', marginBottom: '2px' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', backgroundColor: '#ffe6e6', borderRadius: '50%' }}></div>
                <span style={{ fontFamily: 'font-title', fontSize: '24px', position: 'relative', zIndex: 10 }}>07K</span>
              </div>
              <span>Happy Customer</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ position: 'relative', marginBottom: '2px' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', backgroundColor: '#ffe6e6', borderRadius: '50%' }}></div>
                <span style={{ fontFamily: 'font-title', fontSize: '24px', position: 'relative', zIndex: 10 }}>4.7 <i style={{ color: '#f7dc6f' }} class="fa fa-star"></i></span>
              </div>
              <span>Customer Rating</span>
            </div>
          </div>
        </div>
        </ScrollAnimation> */}

      </div>
      
    </div>
  );
}
