import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const Home = () => {
  const theme = useTheme()
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"))

  return <Box width={"100%"} height={"100%"}>
    <Box sx={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "center", mx: "auto", mt: 3 }}>
      <Box>
        <TypingAnim>

        </TypingAnim>
      </Box>
      <Box sx={{ width: "100%", display: "flex", flexDirection: { md: "row", xs: "column" ,sm:"column"}, gap: 5, my: 10, }}>
        <img src='profile.png' alt='robot' style={{ width: "200px", margin: "auto" }}></img>
        <img className='rotate' src='profile.png' alt='robot' style={{ width: "200px", margin: "auto" }}></img>
      </Box>
      <Box sx={{display:"flex",width:"100%",mx:"auto"}}>
        <img src='profile.png' alt="robot" style={{display:"flex",margin:"auto",width:isBelowMd ? "80%":"60%",borderRadius:20,boxShadow:"-5px -5px 105px #64f3d5",marginTop:20,marginBottom:20}}>
          
        </img>

      </Box>
    </Box>
    <Footer />
  </Box>;
};

export default Home;
