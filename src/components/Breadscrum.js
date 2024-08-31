import React, { useState } from 'react'
import { Breadcrumbs ,Card , Link ,Typography } from '@mui/material'
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { styled } from "@mui/material/styles";


function Breadscrum(props) {

  const [recievedData] = useState(props.dataParent)

  

    const BreadcrumbStyle = styled("div")(({ theme }) => ({
        display: "flex", justifyContent: "center", textAlign: "center",
    
      }));     

      console.log(recievedData)

  return (
    <div style={{position:'absolute',top:40,left:20}} >
         <BreadcrumbStyle style={{ marginTop: 30 }}  >
          <Card elevation={3} style={{ padding: 10, textAlign: "center" ,backgroundColor:recievedData[2] !== "Digital Marketing" ? 'transparent' :''  }}> 
          { recievedData.length < 3 ? <div>
              <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ "& ol": { justifyContent: "center", margin: "auto" } }} >
                <Link underline="hover" color="inherit" href="/" sx={{ display: "flex", alignItems: "center" }} ><HomeIcon sx={{ mr: 0.5 }} fontSize="small" />{recievedData[0]}</Link>
                <Typography style={{color: '#FF2A53',fontWeight:'bold'}} >{recievedData[1]}</Typography>                
              </Breadcrumbs>
            </div> :  
            <div>
              <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ "& ol": { justifyContent: "center", margin: "auto" } }} >
                <Link underline="hover" color="inherit" href="/" sx={{ display: "flex", alignItems: "center" }} ><HomeIcon sx={{ mr: 0.5 }} fontSize="small" />{recievedData[0]}</Link>
                <Typography style={{color:'black'}} >{recievedData[1]}</Typography>
                <Typography style={{ color: '#FF2A53', fontWeight: "bold" }} noWrap >{recievedData[2]}</Typography>
              </Breadcrumbs>
            </div>}
          </Card>
        </BreadcrumbStyle>
    </div>
  )
}

export default Breadscrum