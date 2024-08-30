import {
  Typography,
  // Breadcrumbs,
  // Link,
  // Card,
  // CardContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ScrollToTop } from "react-simple-scroll-up";
// import HomeIcon from "@mui/icons-material/Home";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import SideTip from "./SideTip";

import BulletIconJD from "@mui/icons-material/KeyboardDoubleArrowRight";
import BulletIconRS from "@mui/icons-material/DoneOutline";
import BulletIconQE from "@mui/icons-material/NoiseControlOff";
// import { Fonts } from "../constants";
// import { Colors } from "../constants";
import Breadscrum from "./Breadscrum";
import Footer from "./Footer";
import Appheader from "./Appheader";
import { ToastContainer, toast } from 'react-toastify';
import Img1 from '../asset/Girl2.png'
import axios from "axios";



const BreadcrumbStyle = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export default function CareerDetails() {
  const location = useLocation();

 const navigate = useNavigate();

  const [details, setDetails] = useState({});

  const [first, setfirst] = useState({ name: "", email: "", number: "", resume: "" });

  const [loader, setLoader] = useState(false);


  const [mailBox, setmailBox] = useState(false)



  useEffect(() => {
    setDetails(location.state.details);
  }, []);

  const DetailsRoot = styled("div")(({ theme }) => ({
    width: "70%",

    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {},
  }));

  const DetailsDiv = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    margin: "2% 0%",
  }));


  const handleSend = async (e) => {
    e.preventDefault();

    setLoader(true)

    var formData = new FormData();
    formData.append('name', first.name);
    formData.append('email', first.email);
    formData.append('number', first.number);
    formData.append('resume', first.resume);
    formData.append('job', details.title);




    const response = await axios.post("https://apsback.vercel.app/aps/sendcareer", formData);

    toast.success(response.data.message, { autoClose: 3000 })

    setTimeout(() => {
        setfirst({ name: "", email: "", subject: "", message: "" })
    }, 1000)

    if (response) {
    setLoader(false);
    navigate('/career');
    }


  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />

      <Appheader />

      <Breadscrum dataParent={["Home", "Career", "Career Details"]} />



      {/* <SideTip /> */}

      <div style={{ display: "flex", justifyContent: "center", marginTop: '120px', marginBottom: "80px" }}>
        {/* details root */}
        <DetailsRoot>
          <Typography
            variant="h5"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: "black",
              fontFamily: "Plus"
            }}
          >
            {" "}
            {details.title}{" "}
          </Typography>

          {/* job description */}

          <DetailsDiv>
            <Typography variant="h5" style={{ whiteSpace: "nowrap", fontWeight: 'bold' }}>
              Job Description:
            </Typography>

            <Typography
              variant="body2"
              style={{ color: "#010101", textAlign: "justify" }}
            >
              {details.description?.map((data, i) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: 7,
                  }}
                >
                  <BulletIconJD sx={{ color: "#FF2A53", marginTop: 1 }} />
                  <Typography
                    variant="body1"
                    sx={{
                      paddingLeft: 1,
                      textAlign: "justify",
                      marginTop: 1,
                      color: 'GrayText'
                    }}
                  >
                    {" "}
                    {data}
                  </Typography>
                </div>
              ))}
            </Typography>
          </DetailsDiv>

          {/* Requirements and skills */}
          <DetailsDiv>
            <Typography variant="h6">Requirements and skills:</Typography>

            {details.skills?.map((data, i) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: 7,
                }}
              >
                <BulletIconRS sx={{ color: "#FF2A53", marginTop: 1 }} />
                <Typography
                  variant="body1"
                  sx={{
                    paddingLeft: 1,
                    textAlign: "justify",
                    marginTop: 1,
                    color: 'GrayText'
                  }}
                  dangerouslySetInnerHTML={{ __html: data }}
                ></Typography>
              </div>
            ))}
          </DetailsDiv>

          {/* Qualifications and Experience */}
          <DetailsDiv>
            <Typography variant="h6">Qualifications and Experience:</Typography>

            {details.eligibility?.map((data, i) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: 7,
                }}
              >
                <BulletIconQE sx={{ color: "#FF2A53", marginTop: 1 }} />
                <Typography
                  variant="body1"
                  sx={{
                    paddingLeft: 1,
                    textAlign: "justify",
                    marginTop: 1,
                    color: 'GrayText'
                  }}
                >
                  {" "}
                  {data}
                </Typography>
              </div>
            ))}
          </DetailsDiv>

          {!mailBox ? <Button
            startIcon={<SendIcon />}
            variant="contained"
            sx={{
              backgroundColor: "#FF2A53",
              "&:hover": { backgroundColor: "#FF2A53" },
            }}
            onClick={() => {
              setmailBox(true)
            }}
          >
            {" "}
            Apply Now{" "}
          </Button> : ""}
        </DetailsRoot>
      </div>


      {mailBox ? <div style={{ backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)`, overflow: 'hidden' }} >
        <ToastContainer />
        <div class="container">
          <div class="image-container">
            <img class="img-style" src={Img1} alt="Group of people" />
          </div>
          <div class="form-container">
            <h2 style={{ color: 'black' }} > Apply Here</h2>
            <form onSubmit={(e) => handleSend(e)} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', margin: 'auto', padding: '1px' }}>
              <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '0px solid #dcdcdc', outline: 'none' }} placeholder="Full Name" required value={first.name} onChange={(e) => setfirst({ ...first, name: e.target.value })} />

              <div style={{ position: 'relative', width: '100%' }}>
                <input type="email" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '0px solid #dcdcdc', outline: 'none' }} placeholder="Email Address" required value={first.email} onChange={(e) => setfirst({ ...first, email: e.target.value })} />
                <span style={{ position: 'absolute', top: '3px', right: '12px', color: '#9e9e9e', fontSize: '24px' }}>&#9993;</span>
              </div>

              <input type="number" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '0px solid #dcdcdc', outline: 'none' }} placeholder="Phone Number" required value={first.number} onChange={(e) => setfirst({ ...first, number: e.target.value })} />

              <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '0px solid #dcdcdc', outline: 'none' }} placeholder="Full Name" required value={details.title} disabled />


              <div style={{ backgroundColor: 'white', borderRadius: '4px' }} >
                <input type="file" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '0px solid #dcdcdc', outline: 'none' }} placeholder="Add your Resume" rows="5" required onChange={(e) => setfirst({ ...first, resume: e.target.files[0] })} />
              </div>
              <button disabled={loader} style={{ backgroundColor: '#007bff', color: 'white', padding: '12px', border: '4px', border: 'none', cursor: 'pointer', marginTop: '16px', width: '100%' }}>{!loader ? "Send" : "Loading"}</button>

            </form>

          </div>

        </div>

      </div> : ""}

      <Footer />
    </>
  );
}
