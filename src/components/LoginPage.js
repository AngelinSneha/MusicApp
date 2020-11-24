import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalState";

import { Button, Grid, Typography } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
import bgImg from "../images/music-bg.svg";
import gIcon from "../images/google.svg";
// import handcraftedText from "../images/music.jpg";

// import GoogleSignIn from "./GoogleSignIn";

const bgStyle = {
  background: `url(${bgImg}) no-repeat`,
  backgroundPositionX: "50%",
  width: "100vw",
  height: "46vh"
};



const LoginPage = ({ continueToHome }) => {

  return (
    <Grid
      style={{ height: "80vh" }}
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      {/* {showSignIn()} */}

      <div style={bgStyle} />

      <Typography
        variant="h6"
        color="primary"
        align="center"
        style={{ padding: "10px" }}
      >
        Listen to unlimited songs without any ads for free only on Top Music
      </Typography>
      <Button variant="outlined" color="primary" onClick={continueToHome}>
        Continue
        <NavigateNext />
      </Button>
    </Grid>
  );
};

export default LoginPage;
