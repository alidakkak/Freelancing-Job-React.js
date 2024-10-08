import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import StatisticsCards from "./components/StatisticsCards";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <WelcomeMessage />
      </Grid>
      <Grid item xs={12}>
        <StatisticsCards />
      </Grid>
    </Grid>
  );
};

export default HomePage;
