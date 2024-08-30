import React from 'react'
import "./../App.css"
import Imah from '../asset/Cloud.png'
import { Box, Typography } from '@mui/material'
import Appheader from './Appheader'
import ClouImg from '../asset/Cloudser.jpg'
import { styled } from "@mui/system";
import { Card, CardContent } from '@mui/material'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ComputerIcon from "@mui/icons-material/Computer";
import cloud from "../images/servicePageImages/webHosting/cloud.png";
import awsImg from "../images/servicePageImages/webHosting/aws-development.svg";
import ec2Img from "../images/servicePageImages/webHosting/ec2.png";
import s3 from "../images/servicePageImages/webHosting/s3.svg";
import csmImg from "../images/servicePageImages/webHosting/csm.svg";
import Footer from './Footer'
import ScrollAnimation from 'react-animate-on-scroll';
import Breadscrum from './Breadscrum'




function Cloudservices() {


  const DivStyle1 = styled("div")(({ theme }) => ({
    display: "flex",
    paddingLeft: "2%",
    paddingRight: "2%",
    justifyContent: 'center',
    alignItems: 'center',


    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("xl")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: "15%",
      paddingRight: "15%",
    },
  }));
  const DivStyle2 = styled("div")(({ theme }) => ({
    ".container": {
      position: "relative",
      marginTop: 10,
      boxShadow: "5px 5px 10px red",
      "&:hover": {
        opacity: 1,
      },
    },

    ".overlay": {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "100%",
      alignItems: "flex-end",
      display: "flex",
      transition: ".5s ease",
      opacity: 0,
      padding: "20px",
      "&:hover": {
        opacity: 1,
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.only("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("lg")]: {
      width: "47%",
    },
  }));
  const DivStyle3 = styled("div")(({ theme }) => ({


    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.only("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "47%",
    },
  }));

  const DivStyle4 = styled("div")(({ theme }) => ({
    display: "flex",
    margin: "0 auto",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "82%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "67%",
    },
  }));

  const cardStyle = (theme) => ({
    backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)`,
    '&:hover': { boxShadow: "5px 5px 10px red" },

    [theme.breakpoints.only("sm")]: {
      height: 480,
      marginTop: 3,
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: 420,
      marginTop: 3,
    },
    [theme.breakpoints.only("md")]: {
      height: 400,
    },
    [theme.breakpoints.up("md")]: {
      height: 400,
    },

    [theme.breakpoints.up("lg")]: {
      height: 440,
    },
    [theme.breakpoints.up("xl")]: {
      height: 480,
    },
  });

  const cardStyle1 = (theme) => ({
    backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)`,
    '&:hover': { boxShadow: "5px 5px 10px red" },

    [theme.breakpoints.only("sm")]: {
      height: 480,
      marginTop: 3,
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: 420,
      marginTop: 3,
    },
    [theme.breakpoints.only("md")]: {
      height: 400,
    },
    [theme.breakpoints.up("md")]: {
      height: 400,
    },

    [theme.breakpoints.up("lg")]: {
      height: 440,
    },
    [theme.breakpoints.up("xl")]: {
      height: 480,
    },
  });

  const cardStyle2 = (theme) => ({
    width: "25%",
    height: 290,
    marginTop: 10,
    marginBottom: 10,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderTop: `5px solid red`,

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 420,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 420,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 420,
    },

    [theme.breakpoints.only("md")]: {
      width: "40%",
      height: 420,
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
      height: 390,
    },
    [theme.breakpoints.up("xl")]: {
      width: "30%",
      height: 410,
    },
  });

  const hostingCard = [
    "Cloud computing can also support remote web hosting. The definition of cloud computing services involves the connection of clients to vendors through wireless or IP connected networks. In cloud computing, a client sends data to a vendor through an abstract network trajectory called 'the cloud.' Data is then stored and maintained on remote servers owned and operated by the vendors.",
    " In general, cloud computing services that include web hosting can be an alternative to other traditional kinds of web hosting that are not based on cloud computing principles. One of the biggest differences could be called a 'single client' versus 'multitenant' approach.",
    "Cloud computing services that include web hosting are usually multitenant. That means that the files and data resources of multiple clients are housed on the same server. This provides flexibility and on-demand services for individual clients, so that providers can scale up or scale down delivery easily.By contrast, dedicated web hosting will involve a web hosting company serving only one client on any given server. This provides more individual security and a more focused approach to serving an individual customer.",
  ];
  const benefitsCloud = [
    "Cloud Storage might be more secure",
    "Zero Maintenance",
    "Anywhere Access",
    "Automated Backups",
    "Pay As You Go Pricing",
    "Scalability",
    "Automate data protection",
  ];
  const serverMaintance = [
    "Checking server log files",
    "Assessing hard disk space",
    "Examining folder permissions",
    "Monitoring network temperature applications",
    "Ensuring adequate redundancy of systems",
    "Examining security features",
    "Installing security software patches",
    "Reading server logs for security alerts or evidence of computer hacking attempts",
    "Updating antivirus software on all computers on the network",
    "Updating critical service packs and software updates",
  ];

  const networkMaintenance = [
    " Troubleshooting network problems.",
    "Hardware and software installation/configuration.",
    "Monitoring and improving network performance.",
    " Planning for future network growth.",
    " Creating network documentation and keeping it up-to-date.",
    "Ensuring compliance with company policies.",
    "Ensuring compliance with legal regulations.",
    " Securing the network against all kind of threats.",
  ];



  return (
    <>
      <Appheader />
      <Breadscrum dataParent={["Home", "Services", "Cloud Services"]}
       />
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
            <Typography variant='h4' color={'black'} >The Best</Typography>

            <hr
              style={{
                color: 'green',
                backgroundColor: 'red',
                width: 50,
                height: 1
              }}
            />
          </Box>
          <Typography variant='h2' color={'black'} >Cloud Services</Typography>
          <Typography variant='h6' sx={{ marginTop: '30px' }} color={'black'} >Web Hosting is a service that allows organizations and individuals to <br /> post a website or web page onto the Internet. It is the activity of providing storage space for a website that is <br /> connected to the Internet.</Typography>
        </Box>
      </div>
      <div style={{ width: "100%", backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)`, }}>
        <DivStyle1 sx={{ paddingTop: '2%', paddingBottom: '2%' }} >
          <DivStyle2>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 20,
                color: 'black'
              }}
            >
              Web Hosting is a service that allows organizations and individuals
              to post a website or web page onto the Internet. It is the
              activity of providing storage space for a website that is
              connected to the Internet. Websites are hosted, or stored, on
              special computers called servers. When any client wants to view
              your website, all they need to do is type your website address or
              domain into their browser.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                color: 'black'
              }}
            >
              Their computer will then connect to your server and your
              webpage(s) will be delivered to them through the browser. You must
              have your own domain in order to host webs. If you do not have a
              domain, we will help you purchase one for your site.APS Technologies provide
              the latest technologies and services that needed for your website
              or webpage to be viewed in the Internet.
            </Typography>
          </DivStyle2>

          <DivStyle3>
            <ScrollAnimation animateIn='zoomIn' >
              <div>
                <img
                  width="100%"
                  style={{ top: 0, left: 0 }}
                  src={cloud}
                  alt="cloud"
                ></img>
              </div>
            </ScrollAnimation>
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)` }}>
        <DivStyle1 style={{ flexDirection: "column", display: "flex" }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "justify",
              marginTop: 10,
              color: 'black'
            }}
          >
            AWS Development
          </Typography>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)`, paddingTop: '2%', paddingBottom: '3%' }}>
        <DivStyle1>
          <DivStyle2>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 20,
                color: 'black'
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                Amazon Web Services{" "}
              </span>{" "}
              is a collection of web services that provides on-demand cloud
              computing platforms and APIs to individuals, companies, and
              governments.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                color: 'black'
              }}
            >
              Application Nexus has good hand-in experience in Amazon Web
              Services. We have a dedicated team of developers that will help
              you to do all the configuration and optimization of the AWS Cloud
              to meet your business needs. Also, we offer an orderly
              step-by-step strategy for migrating applications to the cloud and
              monitoring the performance of the cloud applications.
            </Typography>
          </DivStyle2>

          <DivStyle3>
            <div className="container">
              <img
                width="100%"
                style={{ top: 0, left: 0, height: "220px" }}
                src={awsImg}
                alt="awsImg"
              ></img>
            </div>
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "2%" }}>
        <DivStyle1 style={{ flexDirection: "column", display: "flex" }}>
          <Typography
            variant="h5"
            style={{
              textAlign: "justify",
              marginTop: 20,
              margin: "0 auto",
              color: 'black'
            }}
          >
            Services Offered By Amazon
          </Typography>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "2%", marginBottom: "5%" }}>
        <DivStyle1>
          <DivStyle2>
            <Typography
              variant="h6"
              style={{
                textAlign: "justify",
                marginTop: 20,
                margin: "0 auto",
                color: 'black',
                fontWeight: 'bold'
              }}
            >
              Elastic Computing
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 20,
                color: 'black'
              }}
            >
              An{" "}
              <span style={{ fontWeight: "bold" }}>
                Amazon EC2 instance
              </span>{" "}
              is a virtual server in Amazon's Elastic Compute Cloud (EC2) for
              running applications on the Amazon Web Services (AWS)
              infrastructure.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                color: 'black'
              }}
            >
              EC2 encourages the scalable deployment of applications by
              providing a web service through which a user can boot an Amazon
              Machine Image (AMI) to configure a virtual machine, which Amazon
              calls an "instance", containing any software desired.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                color: 'black'
              }}
            >
              A user can create, launch, and terminate server-instances as
              needed, paying by the second for active servers – hence the term
              "elastic". EC2 provides users with control over the geographical
              location of instances that allows for latency optimization and
              high levels of redundancy.
            </Typography>
          </DivStyle2>

          <DivStyle3>
            <div className="container" style={{ boxShadow: "5px 5px 10px red", }} >
              <img
                width="100%"
                style={{ top: 0, left: 0, height: "290px" }}
                src={ec2Img}
                alt="ec2Img"
              ></img>
            </div>
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "2%", marginBottom: "5%" }}>
        <DivStyle1>
          <DivStyle2>
            <div className="container">
              <img
                width="100%"
                style={{ top: 0, left: 0, height: "290px" }}
                src={s3}
                alt="s3"
              ></img>
            </div>
          </DivStyle2>
          <DivStyle3>
            <Typography
              variant="h6"
              style={{
                textAlign: "justify",
                marginTop: 20,
                margin: "0 auto",
                fontWeight: 'bold'

              }}
            >
              Amazon S3
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 20,
                color: 'black'
              }}
            >
              An{" "}
              <span style={{ fontWeight: "bold" }}>
                Amazon S3
              </span>{" "}
              is a high-speed and low-cost service offered by Amazon Web
              Services that provides object storage, archiving of data and
              application programs through a web service interface.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                color: 'black'
              }}
            >
              The need for storage for any business increases day by day without
              knowing actual numbers which sometimes results in overused or
              underused of that storage. AWS S3 is highly-scalable and it uses
              the same storage infrastructure that Amazon.com uses.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                color: 'black'
              }}
            >
              Amazon S3 offers four different storage classes that offer
              different levels of durability, availability, and performance
              requirements.
            </Typography>
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)` }}>
        <DivStyle1 style={{ flexDirection: "column", display: "flex" }}>
          <Typography
            variant="h6"
            style={{
              textAlign: "justify",
              marginTop: 30,
              color: 'black'
            }}
          >
            Why dedicated Web Hosting when Cloud Computing exist?
          </Typography>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)` }}>
        <DivStyle1 style={{ flexWrap: "wrap", gap: 35 }}>
          {hostingCard.map((text) => (
            <Card sx={cardStyle2}>
              <CardContent>
                <Typography variant="body1" style={{ marginTop: 10, color: 'black' }}>
                  {text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "2%" }}>
        <DivStyle1 style={{ flexDirection: "column", display: "flex" }}>
          {/* Left Side */}
          <Typography
            variant="h5"
            style={{
              textAlign: "justify",
              marginTop: 20,
              margin: "0 auto",
              color: 'black'
            }}
          >
            Cloud Storage Management
          </Typography>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "2%" }}>
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 20,
                color: 'black'
              }}
            >
              Cloud Data Management is the practice of storing a company's data
              on an offsite server that is typically owned and overseen by a
              vendor who specialized in cloud data hosting. APS Technologies Cloud
              Computing is now a standard way to access IT
              infrastructure,software,hardware resources.They are Scalable,which
              means as your company grows you can increase the subscription to
              the resources you need.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                color: 'black'
              }}
            >
              When you adopt cloud services,you benefit from improved efficiency
              and lower costs. Our Cloud Storage Management helps business to be
              more efficient. Managing data in the cloud provides an automated
              backup strategy, professional support, and ease of access from any
              location.
            </Typography>
          </DivStyle2>

          <DivStyle3>
            <div>
              <img
                width="100%"
                style={{ top: 0, left: 0, height: "280px" }}
                src={csmImg}
                alt="csmImg"
              ></img>
            </div>
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "2%" }}>
        <DivStyle1 style={{ flexDirection: "column" }}>
          <Typography
            variant="h6"
            style={{
              textAlign: "justify",
              marginTop: 20,
              color: 'black'
            }}
          >
            Benefits in APS Technologies Cloud Services:
          </Typography>
          <Typography
            variant="body1"
            style={{ textAlign: "justify", color: 'black' }}
          >
            {" "}
            APS Technologies Cloud Services are designed around our customers and
            delivered on the platform that best meets their needs. Whether you
            are looking to fix issues, develop a strategy, utilize managed
            services, or further modernize and secure your applications and
            infrastructure. APS Technologies is the end-to-end services provider that can
            help.{" "}
          </Typography>
        </DivStyle1>
      </div>

      <div style={{ width: "100%" }}>
        <DivStyle4>
          {benefitsCloud.map((text) => (
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 15 }}
            >
              <ArrowCircleRightIcon />
              <Typography
                variant="body1"
                sx={{ paddingLeft: 1, color: 'black' }}
              >
                {text}
              </Typography>
            </div>
          ))}
        </DivStyle4>
      </div>

      <div style={{ width: "100%", marginTop: "2%" }}>
        <DivStyle1>
          <DivStyle2>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 10,

                  }}
                >
                  APS Technologies Server Maintenance Services{" "}
                </Typography>

                {serverMaintance.map((text) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 7,
                    }}
                  >
                    <ComputerIcon />
                    <Typography
                      variant="body1"
                      sx={{ paddingLeft: 1, color: 'black' }}
                    >
                      {" "}
                      {text}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </DivStyle2>

          <DivStyle3>
            <Card sx={cardStyle1}>
              <CardContent>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 10,

                  }}
                >
                  APS Technologies Network Maintenance Services{" "}
                </Typography>

                {networkMaintenance.map((text) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 7,
                    }}
                  >
                    <ArrowRightAltIcon />
                    <Typography
                      variant="body1"
                      sx={{ paddingLeft: 1, color: 'black' }}
                    >
                      {" "}
                      {text}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </DivStyle3>
        </DivStyle1>
      </div>
      <Footer />

    </>
  )
}

export default Cloudservices