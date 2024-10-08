import { Box, Divider, Link as MuiLink, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useGetPostsFreelancing from "../../apis/useGetPostsFreelancings";

const JobApplicationsPage = () => {
  const { data, isLoading, error } = useGetPostsFreelancing();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "20px",
        rowGap: "30px",
        flexWrap: "wrap",
        alignItems: "stretch",
      }}
    >
      {data?.data?.length > 0 ? (
        data.data.map((job) => (
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "calc(50% - 20px)",
                md: "calc(33.33333% - 20px)",
                lg: "calc(25% - 20px)",
              },
              boxShadow: "0px 0px 18px -5px rgba(0,0,0,0.2)",
              p: 2,
              borderRadius: "8px",
              pb: 4,
              position: "relative",
            }}
            key={job.id}
          >
            <Typography variant="body1">{job.general_job_title}</Typography>
            <Divider sx={{ my: 1 }} />
            <MuiLink
              component={Link}
              to={`/jobApplicationfreelancing/${job.id}/applicationsSentFree`}
              variant="caption"
              sx={{
                display: "block",
                textDecoration: "none",
                position: "absolute",
                bottom: 16,
                right: 16,
              }}
            >
              See Applications For This Position ...
            </MuiLink>
          </Box>
        ))
      ) : (
        <Typography>No job applications available</Typography>
      )}
    </Box>
  );
};

export default JobApplicationsPage;
