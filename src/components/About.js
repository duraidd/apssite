import React from "react";
import Appheader from "./Appheader";

export default function About() {
  return (    
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap",justifyContent:'space-evenly',width:"100%",padding:"5% 10% 5% 10%",background: `linear-gradient(162deg, rgba(255,255,255,1) 0%, rgba(253,248,253,1) 5%, rgba(237,179,235,0.8743872549019608) 45%, rgba(230,164,228,0.6362920168067228) 100%)` }}>
        <div style={{border:"10px solid red",position: "relative" ,borderRadius:"5%"}}>
        <img 
          src={require("../asset/person.png")}    
          alt="image"  
          style={{
            position: "relative",
            left: '-10%',
            top: '10%',
            width:'100%'
          }}                                  
        />
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',flexWrap:'wrap',marginTop:'20px'}} >
          <h1>Technologically diverse solutions <br/> with MuleSoft</h1>
          <p>Phi Dimensions is your one stop shop for technologically diverse solutions <br/> driven by top-notch platforms like MuleSoft , Salesforce, API (Application <br/> Programming Interface).</p>
          <p>As the business world continues to evolve, companies are faced with <br/> challenges they must navigate through the power of technology. If you don’t <br/> act at the right time, chances are you’ll be left behind. To ensure this never <br/> happens, we help you manage reliable technology integrations based on our <br/> tried and tested strategies.</p>
        </div>
      </div>    
  );
}
