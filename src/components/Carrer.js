import React, { useEffect, useState } from "react";
import ExperienceIcon from "@mui/icons-material/Work";
import { styled } from "@mui/system";
import {
  Typography,
  // Breadcrumbs,
  // Link,
  // CardContent,
  Card,
  Button,
} from "@mui/material";
// import DegreeIcon from "@mui/icons-material/WorkspacePremium";
import LocationIcon from "@mui/icons-material/LocationOn";
import { useLocation, useNavigate } from "react-router-dom";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import CareerBanner from "../asset/career_bg.svg";
import SchoolIcon from '@mui/icons-material/School';
import Appheader from "./Appheader";
import Footer from "./Footer";
import Breadscrum from "./Breadscrum";


export default function Carrer() {


  const location = useLocation();
  const section = location.state?.section || "home"
  const [first, setfirst] = useState(section);
  const [second, setsecond] = useState("");



  const CardRow = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  }));

  const CardTopItem = styled("div")(({ theme }) => ({
    backgroundImage: `url(${CareerBanner})`,
    height: "160px",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    // width: "450px",
  }));

  const CardLocation = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5px",
  }));

  const CardSingleItem = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "0px 10px",
  }));

  const mySingleCard = (theme) => ({
    padding: "1% 5%",
    margin: "1%",
    width: "400px",
    backgroundColor: "#FFF9F9",
    border: "1px solid red",
    borderRadius: "5px",
    // boxShadow: `rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px`,

    "&:hover": {
      transition: "0.5s",
      transform: `scale(${1.02})`,
      '&:hover':{boxShadow: "5px 5px 10px red"},             
      borderRadius: "15px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "2px",
      width: "350px",
    },
  });

  const applyBtn = (theme) => ({
    margin: "15px 0px 5px",
    border: "2px solid red",
    color: "#FF2A53",

    "&:hover": {
      transition: "0.5s",
      backgroundColor: "#FF2A53",
      color: "white",
      border: "1px solid #FF2A53",
      fontSize: "16px",
      fontWeight: "bold",
    },
  });

  const navigate = useNavigate();

  const CareerDataList = [
    {
      details: {
        title: "Animation and Graphic Designer",
        description: [
          "Study design briefs and determine requirements.",
          "Advise clients on strategies to engage target audiences.",
          "Identify the best ways to illustrate and communicate clients’ vision while complying with design best practices.",
          "Create designs using illustration, photo editing and layout software.",
          "Select colors, images, typography and layout for communication materials, including websites, logos, signs, advertisements, and social media posts.",
          "Produce drafts for client review and make revisions based on feedback received.",
          "Collaborate with other team members, such as marketing, sales, and business operations, throughout the various phases of a project.",
          "Review designs for errors before they are printed or published.",
          "Keep up-to-date with the latest design trends, tools, and technologies.",
        ],
        skills: [
          "Autodesk Maya",
          "Blender",
          "Adobe Animate CC",
          "Adobe Premiere",
          "Adobe After Effects",
          "Photoshop",
          "Corel Draw",
        ],
        eligibility: [
          "Any Degree/Diploma with Animation Course from any reputed company institute.",
          "Minimum 2 years experienced.",
          "Must be fluent in Tamil and English.",
        ],
      },
      cardData: ["2 years experience", "Any Degree/Diploma"],
    },

    {
      details: {
        title: "Animator",
        description: [
          "Create expressive character animation portraying a wide range of emotions.",
          "Recommend the best approaches to integrate 3-D and 2-D components into final commercial quality products.",
          "Create high-quality animations by utilizing both hand key animation and motion capture data.",
          "Collaborating with the client team members to understand needs, review scripts, design storyboards, and create and edit animations.",
          "Using software and other techniques to produce animations.",
          "Listening to feedback and altering animations to better suit client needs.",
          "Using creativity and artistic techniques to tell a story or provide information in visual form.",
          "Researching industry trends and developments and learning new applications.",
          "To work with on subject Development and Children stories.",
        ],
        skills: [
          "Autodesk Maya",
          "Blender",
          "Adobe Animate CC",
          " Adobe Premiere",
          "Adobe After Effects",
          "Photoshop",
          "Corel Draw",
          "Flash",
        ],
        eligibility: [
          "Bachelor’s degree or certificate in computer animation, fine arts, graphic design, or related field.",
          "Experience 0-1 year.",
          "Must be fluent in Tamil and English.",
        ],
      },

      cardData: ["0-1 year experience", "Bachelor’s degree"],
    },

    {
      details: {
        title: "Storyboard Artist 2D/3D",
        description: [
          "Liaising with writers, animators and directors regarding the look, style and level of detail required for the storyboard of each production.",
          "Reading and interpreting scripts.",
          "Breaking down the script with the director to identify key scenes and plan them visually.",
          "Sequencing the scenes from a script into storyboard format using panels of images.",
          "Including special effects in the storyboard frames.",
          "Identifying lighting requirements and articulating circles of tension within each scene.",
          "Including key dialogue or scene directions within each frame.",
          "Briefing animators on key scenes within the storyboard.",
          "Amending storyboard scenes during the course of production.",
        ],
        eligibility: [
          "Any Degree/Diploma with Animation Course from any reputed company institute.",
          "Minimum 1 year experienced.",
          "Must be fluent in Tamil and English.",
        ],
        skills: [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Ability to collaborate effectively with concept artists, writers, directors, clients, etc to visualize the story ",
          "Training in animation",
          "Presentation skills",
          "Fluency in visual storytelling",
        ],
      },

      cardData: ["1 year experience", "Any Degree/Diploma"],
    },

    {
      details: {
        title: "Editor",
        description: [
          "The editor has to discuss with the team thinking of a concept for a story and aligns each others’ vision.",
          "The editor helps to decide on the look, feel, mood and style for the animation and characters.",
          "The editor discuss with the team to get all the details concerning dialogue and camera angles.",
          "A static visual display of each scene is created with the placement of desired sound and music.",
          "This is essentially a rough draft before animating begins to check the flow of the story and possible changes of the order of the visuals or sound.",
          "Editing and reordering the footage is essential in telling the story in the most direct way possible, following the director’s vision.",
          "The editor has to check that the animations have good timing and that the sound and music conveys the desired mood and pace.",
          "Changing between compositions and alternating footage to create the desired effect.",
          "Ensures the sound effects play in time to the visuals.",
        ],
        eligibility: [
          "Any Degree/ Diploma.",
          "Video Editing/ Graphic Designing Certification course from any reputed institute.",
        ],
        skills: [
          "Have excellent Editing and Visual Effect Skills.",
          "Must be fluent in Tamil and English. Multilingual Candidates are preferable.",
        ],
      },

      cardData: ["Editing & Visual Effect Skills", "Any Degree/Diploma"],
    },
    {
      details: {
        title: "Rigging",
        description: [
          "Has a solid grasp and understanding of the principles of anatomy and expression.",
          "Knowledge of traditional and computer 2D and 3D animation techniques.",
          "Experience with 3D modelling and animation systems.",
          "Advanced knowledge of Maya.",
          "Self-driven, good communicator and a great-team player.",
          "Excellent organizational and communication skills.",
        ],
        eligibility: [
          "Any Degree/ Diploma with Animation Certification course from any reputed institute.",
          "Minimum 1 Yr Experienced.",
        ],
        skills: [
          "Have excellent Animation and Rigging Skills.",
          "Must be fluent in Tamil and English.",
        ],
      },
      cardData: ["1 year experience", "Any Degree/Diploma"],
    },
    {
      details: {
        title: "Software Development",
        description: [
          "Write well designed, testable, efficient code by using best software development practices",
          "Create website layout/user interface by using standard HTML/CSS practices",
          "Integrate data from various back-end services and databases",
          "Gather and refine specifications and requirements based on technical needs",
          "Create and maintain software documentation",
          "Be responsible for maintaining, expanding, and scaling our site",
          "Stay plugged into emerging technologies/industry trends and apply them into operations and activities",
          "Cooperate with web designers to match visual design intent",
          "Maintain and configure MongoDB instances",
          "Keep clear documentation of the database setup and architecture",
          "Write procedures for backup and disaster recovery",
          "Ensure that the databases achieve maximum performance and availability",
          "Design indexing strategies",
          "Configure, monitor, and deploy replica sets",
          "Upgrade databases through patches",
          "Create roles and users and set their permissions",
          "Experience with the core AWS services, plus the specifics mentioned in this job description.",
          "Good background in Linux/Unix administration",
        ],
        skills: [
          "Javascript",
          "React JS",
          "HTML",
          "CSS",
          "MongoDB",
          "MySQL",
          "Node JS",
          "Express",
          "PHP",
          "Amazon Web Services(AWS)",
        ],
        eligibility: [
          "B.E | M.E | B.Tech | M.Tech | BCA | MCA",
          "2 - 5 years experience in Software Development",
        ],
      },
      cardData: ["2 - 5 years experience", "Any Degree in Engineering"],
    },
    {
      details: {
        title: "Web Developer",
        description: [
          "Website and software application designing, building, or maintaining.",
          "Using scripting or authoring languages, management tools, content creation tools, applications, and digital media.",
          "Work Efficient and Time responsible Person",
          "Must be aiming to work for the longer run",
          "Works to design and develop websites in both static and Dynamic.",
          "Based on client requirements and Demands, develop the sites with the add-on features.",
          "Project Accomplishment, Team-Playing and Task Management.",
        ],
        skills: [
          "Bachelor's degree in Web development or related field, or relevant experience.",
          "Solid knowledge and experience in programming applications.",
          "Proficient in JavaScript, HTML, CSS.",
          "Proficient in My SQL.",
          "Dedicated team player.",
          "Ability to thrive in a fast-paced environment.",
          "Solid ability in both written and verbal communication.",
        ],
        eligibility: [
          "B.E | M.E | B.Tech | M.Tech | BCA | MCA",
          "Minimum 1 year",
        ],
      },
      cardData: ["1 year experience", "Any Degree in Engineering"],
    },
    {
      details: {
        title: "Digital Marketing",
        description: [
          "Plan and execute all digital marketing, including SEO/SEM, marketing database, email, social media and display advertising campaigns.",
          "Design, build and maintain our social media presence.",
          "Measure and report performance of all digital marketing campaigns.",
          "Identify trends and insights, and optimize spend and performance based on the insights",
          "Brainstorm new and creative growth strategies",
          "Plan, execute, and measure experiments and conversion tests",
          "Collaborate with internal teams to create landing pages and optimize user experience",
          "Utilize strong analytical ability to evaluate end-to-end customer experience across multiple channels and customer touch points",
          "Instrument conversion points and optimize user funnels",
          "Collaborate with agencies and other vendor partners",
          "Evaluate emerging technologies. Provide thought leadership and perspective for adoption where appropriate.",
        ],
        skills: [
          "Proven working experience in digital marketing",
          "Demonstrable experience leading and managing SEO/SEM, marketing database, email, social media and/or display advertising campaigns",
          "Highly creative with experience in identifying target audiences and devising digital campaigns that engage, inform and motivate.",
          "Experience in optimizing landing pages and user funnels ",
          "Solid knowledge of website analytics tools (e.g., Google Analytics)Working knowledge of ad serving tools",
          "Experience in setting up and optimizing Google Adwords campaigns",
          "Strong analytical skills and data-driven thinking",
          "Up-to-date with the latest trends and best practices in online marketing and measurement.",
        ],
        eligibility: ["PG with Digital Markting course", "Minimum 2 years"],
      },
      cardData: ["2 years experience", "PG and Digital Markting"],
    },
    {
      details: {
        title: "Marketing Executive",
        description: [
          "Create awareness of and develop the brand you are marketing",
          "Communicate with target audiences and build and develop customer relationships",
          "Help with marketing plans, advertising, direct marketing and campaigns",
          "Work closely with in-house or external creative agencies to design marketing materials such as brochures and adverts",
          "Write and proofread marketing copy for both online and print campaigns",
          "Produce creative content, including videos and blog posts",
          "Run social media channels",
          "Organise and attend events such as conferences, seminars, receptions and exhibitions",
          "Arrange the effective distribution of marketing materials maintain and update customer databases",
          "Conduct market research, for example using customer questionnaires and focus groups",
          "Develop relationships with key stakeholders, both internal and external",
        ],
        skills: [
          "Good teamwork and ability to foster goodworking relationships",
          "Communication and Interpersonal skills",
          "Creativity",
          "Analytical and strategic thinking",
          "Influencing and Negotiation skill",
          "Ability to work under pressure",
          "A felxible approach to work",
        ],
        eligibility: [
          "UG/PG Degree in marketing, sales, or similar",
          "Minimum 1 year",
        ],
      },
      cardData: ["1 year experience", "UG/PG Degree "],
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop bgColor="#ff0400" symbol="&#8593;" strokeFillColor="white" style={{ zIndex: 999 }} />


      <Appheader passChildData={setfirst} addData={second} first={first} />

      <Breadscrum dataParent={["Home", "Career"]}/>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop:'120px',
          padding: "1% 2%",
        }}
      >
        <CardRow>
          {CareerDataList.map((data, i) => (
            <Card sx={mySingleCard} elevation="2" key={i}>
              <CardTopItem />
              <div style={{ display: "flex", whiteSpace: "nowrap", justifyContent: "center", alignItems: "center", paddingTop: "10px", paddingBottom: "5px", }}              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginRight: "5px", color:'black' }}
                >
                  Job Role :
                </Typography>

                <Typography variant="subtitle1" >
                  {data.details.title}
                </Typography>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "5px" }} >
                <CardSingleItem>
                  <ExperienceIcon style={{ marginRight: "1%" }} />
                  <Typography
                    variant="subtitle1"
                    style={{ whiteSpace: "nowrap", marginLeft: "1%" }}
                  >
                    {data.cardData[0]}{" "}
                  </Typography>
                </CardSingleItem>
                <br />
                <CardSingleItem>
                  <SchoolIcon style={{ marginRight: "1%" }} />
                  <Typography
                    variant="subtitle1"
                    style={{ whiteSpace: "nowrap", marginLeft: "1%" }}
                  >
                    {data.cardData[1]}{" "}
                  </Typography>
                </CardSingleItem>
                <br />
                <CardSingleItem>
                  <LocationIcon style={{ marginRight: "1%" }} />
                  <Typography
                    variant="subtitle1"
                    style={{ whiteSpace: "nowrap", marginLeft: "1%" }}
                  >
                    Tirunelveli & Chennai
                  </Typography>
                </CardSingleItem>
              </div>


              <Button
                variant="outlined"
                sx={applyBtn}
                fullWidth
                onClick={() => { navigate("/careerdetails", { state: { details: data.details }, }); }}
              >
                Details
              </Button>
            </Card>
          ))}
        </CardRow>
      </div>
      <Footer passFooter={setfirst} fn={setsecond} />
    </>
  );
}
