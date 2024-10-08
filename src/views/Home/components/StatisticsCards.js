import React from "react";
import { Box, Grid, useTheme, Typography, Skeleton } from "@mui/material";

const SkeletonLoader = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} lg={3}>
        <CardWrapper>
          <Skeleton variant="rectangular" width={210} height={100} />
          <Skeleton variant="text" width={120} height={40} />
          <Skeleton variant="text" width={180} height={20} />
        </CardWrapper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CardWrapper>
          <Skeleton variant="rectangular" width={210} height={100} />
          <Skeleton variant="text" width={120} height={40} />
          <Skeleton variant="text" width={180} height={20} />
        </CardWrapper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CardWrapper>
          <Skeleton variant="rectangular" width={210} height={100} />
          <Skeleton variant="text" width={120} height={40} />
          <Skeleton variant="text" width={180} height={20} />
        </CardWrapper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CardWrapper>
          <Skeleton variant="rectangular" width={210} height={100} />
          <Skeleton variant="text" width={120} height={40} />
          <Skeleton variant="text" width={180} height={20} />
        </CardWrapper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CardWrapper>
          <Skeleton variant="rectangular" width={210} height={100} />
          <Skeleton variant="text" width={120} height={40} />
          <Skeleton variant="text" width={180} height={20} />
        </CardWrapper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CardWrapper>
          <Skeleton variant="rectangular" width={210} height={100} />
          <Skeleton variant="text" width={120} height={40} />
          <Skeleton variant="text" width={180} height={20} />
        </CardWrapper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CardWrapper>
          <Skeleton variant="rectangular" width={210} height={100} />
          <Skeleton variant="text" width={120} height={40} />
          <Skeleton variant="text" width={180} height={20} />
        </CardWrapper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CardWrapper>
          <Skeleton variant="rectangular" width={210} height={100} />
          <Skeleton variant="text" width={120} height={40} />
          <Skeleton variant="text" width={180} height={20} />
        </CardWrapper>
      </Grid>
    </Grid>
  );
};

const CardWrapper = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: "15px",
        backgroundColor: theme.palette.common.white,
        p: 3,
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0px 1px 11.100000381469727px 0px #00000026",
        },
      }}
    >
      {children}
    </Box>
  );
};

const StatisticCard = ({ value, title, description, color }) => {
  const theme = useTheme();

  return (
    <CardWrapper>
      <Typography
        sx={{
          color: color || "#0794EB",
          fontSize: "48px",
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "400",
          textTransform: "capitalize",
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "400",
          textTransform: "capitalize",
          color: theme.palette.grey[600],
        }}
      >
        {description}
      </Typography>
    </CardWrapper>
  );
};

const StatisticsCards = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} lg={4}>
        <StatisticCard
          value={10}
          title={"title of statistic"}
          description={"description to your statistic"}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <StatisticCard
          value={10}
          title={"title of statistic"}
          description={"description to your statistic"}
          color={"primary.main"}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <StatisticCard
          value={10}
          title={"title of statistic"}
          description={"description to your statistic"}
          color={"secondary.main"}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <StatisticCard
          value={10}
          title={"title of statistic"}
          description={"description to your statistic"}
          color={"warning.main"}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <StatisticCard
          value={10}
          title={"title of statistic"}
          description={"description to your statistic"}
          color={"primary.dark"}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <StatisticCard
          value={10}
          title={"title of statistic"}
          description={"description to your statistic"}
          color={"secondary.light"}
        />
      </Grid>
      {/* <Grid item xs={12} sm={6} lg={4}>
        <StatisticCard
          value={10}
          title={"title of statistic"}
          description={"description to your statistic"}
          color={"#795BF1"}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <StatisticCard
          value={10}
          title={"title of statistic"}
          description={"description to your statistic"}
          color={"#795BF1"}
        />
      </Grid> */}
    </Grid>
  );
};

export default StatisticsCards;
