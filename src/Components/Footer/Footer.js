import { Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  const gridContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    bgcolor: "black",
    color: "#CDCBD4",
    minHeight: "80vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flex: 1,
    },
  };
  const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    mt: "6%",
    ml: "0px",
    width: "100%",
  };
  const LinkStyle = {
    whiteSpace: "nowrap", 
    marginBottom: "20px",
  };
  return (
    <>
      <Grid container spacing={3} sx={gridContainerStyle}>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <img
            src="https://assets-global.website-files.com/6218de564a814751871bcb7d/6229d34ed692ff6340420dff_footer_logo.svg" // Replace with the path to your logo
            alt="Company Logo"
            width="150px"
            style={{
              marginTop: "5px",
              marginBottom: "20px",
            }}
          />
          <div>


          </div>
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            Shodat
          </Typography>
          <a style={LinkStyle}>
            inovating insights,acceslerating Growth
          </a>
          <a style={LinkStyle}>
            +123(000)8899
          </a>
          <a style={LinkStyle}>
            Contact@shodat.com
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            Solution
          </Typography>
          <a style={LinkStyle}>
            Platform
          </a>{" "}
          <a style={LinkStyle}>
            Data Engineering
          </a>
          <a style={LinkStyle}>
            vision Ai
          </a>
          <a style={LinkStyle}>
            ERP Systems
          </a>
          <a style={LinkStyle}>
            Edge Analytics
          </a>
          <a h style={LinkStyle}>
            intelligent Enterprise
          </a>
          <a style={LinkStyle}>
            cloud transformation
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            {" "}
            service
          </Typography>
          <a style={LinkStyle}>
            innovate
          </a>
          <a style={LinkStyle}>
            Manage
          </a>
          <a style={LinkStyle}>
            Modernize
          </a>
          <a style={LinkStyle}>
            Secure
          </a>
          <a style={LinkStyle}>
            SAP HANA CoE
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            {" "}
            ShodatAi
          </Typography>
          <a style={LinkStyle}>
            Ai innovation
          </a>
          <a style={LinkStyle}>
            Application Performance
          </a>
          <a style={LinkStyle}>
            Frictionless Ai
          </a>
          <a style={LinkStyle}>
            Pillers of Ai
          </a>
          <a style={LinkStyle}>
            Release Quality
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            eops Platform
          </Typography>
          <a style={LinkStyle}>
            eops Watch
          </a>
          <a style={LinkStyle}>
            eops Trace
          </a>
          <a style={LinkStyle}>
            eops Prosense
          </a>
          <a style={LinkStyle}>
            eops insights
          </a>
          <a style={LinkStyle}>
            Videos
          </a>
          <a style={LinkStyle}>
            ROI Calculator
          </a>
          <a style={LinkStyle}>
            Documentation
          </a>
        </Grid>
      </Grid>

    </>
  );
};
export default Footer;




















