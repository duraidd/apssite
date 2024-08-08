import React from "react";
import Appheader from "./Appheader";

export default function Contact() {    
  return (
    <div  style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        minHeight: "100vh",
      }}>
      <Appheader/>
      Contact
    </div>
  );
}
