import React from "react";
import Appheader from "./Appheader";
import Imah from "../asset/Banner.jpg";
import "./../App.css"
import { Button } from "@mui/material";
import About from "./About";


export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "grey",
        minHeight: "100vh",
      }}
    >
      <Appheader />
      <div className="saple"
        style={{
          backgroundImage: `url(${Imah})`,marginTop:"40px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"          
        }}
      >
        <div style={{textAlign:"center",display:"flex",flexDirection:"column"}}>
          <h1>MuleSoft API Development <br/>
          From Idea to Product</h1>
          <div>
          <Button variant="contained" sx={{backgroundColor:"red" ,"&:hover":{backgroundColor:"red"}}} >Get Started</Button>
          </div>          
        </div>
        
      </div>
      <About/>
    </div>
  );
}
