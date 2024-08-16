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
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/", section: 'home' },
  { name: "About", path: "/about", section: 'about' },
  { name: "Contact", path: "/contact", section: 'contact' },
];

function Appheader(props) {
  const { window } = props;

  const { pathname } = useLocation();

  console.log(pathname, "pathname");

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();



  const [data, setData] = useState("home");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNav = (data) => {
    if (data.name === "Home") {
      props.passChildData(data.section);
      // navigate("/");
      setData(data.section)
    }

    if (data.name === "About") {
      props.passChildData(data.section);
      setData(data.section)
      // navigate("/about");
    }

    if (data.name === "Contact") {
      props.passChildData(data.section);
      setData(data.section)
      // navigate("/contact");
    }
  };

  console.log("data",data);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNav(item)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
            <MenuIcon style={{ color: "red" }} />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" },color:"black" }}
          >
            APS Technologies pvt ltd
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, color: "black", paddingTop: '8px' }}>
            <img src={Logoimg} alt="logo" width={'250px'} height={'50px'} />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{
                  color: item.section === data ? "white" : "black",
                  fontSize: "1rem",
                  fontFamily: "Lato",
                  backgroundColor: item.section === data ? "#2F4858" : "",
                  "&:hover": { backgroundColor: "#2F4858" },
                  marginRight: { sm: 0, lg: 10 }
                }}
                onClick={() => handleNav(item)}
              >
                {item.name}
              </Button>
            ))}
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
