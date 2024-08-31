import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Logoimg from '../asset/Logo.jpg'
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Menu, MenuItem } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/", section: 'home' },
  { name: "Services", path: "", section: 'services' },
  { name: "About", path: "/about", section: 'about' },
  { name: "Career", path: "/career", section: 'career' },
  { name: "Contact", path: "/contact", section: 'contact' }

];



const servicesItem = [
  // { subMenuName: "UI Work", subMenuLink: "/ui-work" },
  { subMenuName: "Web Application", subMenuLink: "/web-application" },
  { subMenuName: "Mobile Application", subMenuLink: "/mobile-application" },
  { subMenuName: "Cloud Services", subMenuLink: "/cloud-services" },
  { subMenuName: "Digital Marketing", subMenuLink: "/digital-marketing" }



];


function Appheader(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [data, setData] = useState("home");

  const [project, setproject] = useState(null);

  const [mySubMenu, setMySubMenu] = useState([]);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const handleClickSubmenu = (text, ls) => {
    navigate(text.subMenuLink)
    setData(text.subMenuName)
    handleDrawerToggle();
    setExpanded(false);
  };


  const handleClickSubmenu1 = (text, ls) => {
    navigate(text.subMenuLink)
    setData(text.subMenuName)
    setExpanded(false);
  };


  const [expanded, setExpanded] = useState(false);




  const handleNav = (data) => {


    if (data.section === 'career') {


      navigate("/career", { state: { section: data.section } });

      try {
        if (props.passChildData)

          props.passChildData(data.section);
      } catch (error) {
        console.log("error", error);
      }

      setData(data.section);
      setExpanded(false);
    } else if (data.path) {


      navigate("/", { state: { section: data.section } });


      try {
        if (props.passChildData)

          props.passChildData(data.section);
      } catch (error) {
        console.log("error", error);
      }

      setData(data.section);
      setExpanded(false);
    }

  };


  const handleNav1 = (data) => {


    console.log(data, "EEEE")

    if (data.section === 'career') {
      setData(data.section);

      navigate("/career", { state: { section: data.section } });

      try {
        if (props.passChildData)

          props.passChildData(data.section);
      } catch (error) {
        console.log("error", error);
      }

      handleDrawerToggle();
      setExpanded(false);

    } else if (data.path) {

      navigate("/", { state: { section: data.section } });

      try {
        if (props.passChildData)

          props.passChildData(data.section);
      } catch (error) {
        console.log("error", error);
      }


      setData(data.section)
      handleDrawerToggle();
      setExpanded(false);

    }

  };


  const handleShow = (e, data) => {
    if (data.name === "Services") {
      // props.passChildData(data.section);
      setMySubMenu(servicesItem)
      setproject(e.currentTarget)
      setData(data.section)
      // navigate("/contact");
    } else {
      setproject(null)
      setMySubMenu([]);
      setData("")
    }
  }


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const handleHoverMI = (text, e) => {
    setMySubMenu(servicesItem)
  };



  useEffect(() => {
    if (props.addData) {
      setData(props.addData)
    }
  }, [props.addData])

  console.log("data", data);

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography onClick={handleDrawerToggle} variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />


      {navItems.map((item, i) => (

        item.section !== "services" ?

          (<ListItem key={item.name} >
            <ListItemButton
              sx={{
                color: item.section === data ? "white" : "black",
                textAlign: "center", backgroundColor: item.section === data ? "#2F4858" : ""
              }}
              onClick={() => handleNav1(item)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>) :

          (<Accordion
            elevation={0}
            expanded={expanded === i}
            onChange={handleChange(i)}
            onClick={(e) => handleHoverMI(item, e)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0, color: 'black', flexGrow: 1 }}>
                {item.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {mySubMenu.map((text) => (
                <ListItem sx={{ backgroundColor: text.subMenuName === data ? "#2F4858" : "" }} >
                  <ListItemButton sx={{ textAlign: "center" }} >
                    <ListItemText
                      sx={{ color: text.subMenuName === data ? "white" : "black" }}
                      primary={text.subMenuName}
                      onClick={(e) => {
                        handleClickSubmenu(text, mySubMenu);
                        handleChange(i)

                      }}
                    />
                  </ListItemButton>

                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>)


      ))}


    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "white"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "#FF2A53" }} />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" },color:"black" }}
          >
            APS Technologies pvt ltd
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, color: "black", paddingTop: '8px', marginRight: '2px' }}>
            <img src={Logoimg} alt="logo" width={'250px'} height={'50px'} />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "contents" } }} >
            {navItems.map((item) => (
              <Button  disableRipple
                key={item.name}
                sx={{
                  color: item.section === props.first ? "#2F4858" : "black",
                  fontSize: "1rem",                  
                  fontWeight: 700,
                  fontFamily:"Plus Jakarta Sans",
                  textDecoration: item.section === props.first ? "underline" : "",
                  textDecorationThickness:'5px',
                  textDecorationColor:"#2F4858",
                  "&:hover": { textDecoration: "underline",textDecorationThickness:'5px',backgroundColor:'white'},
                  marginRight: { sm: 0, lg: 10 }
                }}
                onClick={() => handleNav(item)}
                onMouseOver={(e) => handleShow(e, item)}
              >
                {item.name}
              </Button>
            ))}

            <Menu
              style={{ zIndex: 1, marginTop: "1%" }}
              transitionDuration={500}
              anchorEl={project}
              open={Boolean(project)}
              onMouseLeave={() => {
                setproject(null);
                // setData("");

              }}
              onClose={() => {
                setproject(null);
                // setData("");

              }}
              MenuListProps={{
                onMouseLeave: () => {
                  setproject(null);
                  // setData("");

                },
              }}
            >
              {mySubMenu.map((text) => (
                <MenuItem
                  sx={{
                    margin: '2%',
                    // fontFamily:Fonts.MAIN_FONT,

                    '&:focus': {
                      backgroundColor: 'white'
                    },

                    "&:hover": {
                      // backgroundColor: "green",
                      color: 'white',
                      borderRadius: '5px',
                      background: '#2F4858',
                      // boxShadow: `inset 5px 5px 8px #226f27,
                      //             inset -1px -1px 8px #3cc145`
                    },
                    transition: '0.3s',
                    borderRadius: '5px',
                    fontFamily:'Plus Jakarta Sans'
                  }}
                  onClick={(e) => { handleClickSubmenu1(text, mySubMenu); }}
                >
                  {text.subMenuName}
                </MenuItem>
              ))}
            </Menu>

          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Appheader;
