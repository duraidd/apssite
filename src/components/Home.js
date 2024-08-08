import React from "react";
import Appheader from "./Appheader";
import Imah from "../asset/Banner.jpg";
import "./../App.css"
import { Button } from "@mui/material";
import About from "./About";
import Contact from "./Contact";


export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"               
      }}
    >
      <Appheader />
      <div className="saple"
        style={{
          backgroundImage: `url(${Imah})`,marginTop:"40px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:'100%'                  
        }}
      >
        <div style={{textAlign:"center",display:"flex",flexDirection:"column",paddingLeft:"20px",paddingRight:"20px"}}>
          <h1>MuleSoft API Development <br/>
          From Idea to Product</h1>
          <div>
          <Button variant="contained" sx={{backgroundColor:"red" ,"&:hover":{backgroundColor:"red"}}} >Get Started</Button>
          </div>          
        </div>
        
      </div>
      <About/>
      <Contact/>
      
    </div>
  );
}
