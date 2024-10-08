import { FileDownloadOutlined } from "@mui/icons-material";
import { alpha, Box, Button, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useGetJobApplicationSent from "../../apis/useGetJobApplicationSent";
import { request } from "../../apis/request";
import { enqueueSnackbar } from "notistack";

const JobApplicationSent = () => {

const applicatins = useGetJobApplicationSent();

const handleAccept = async (applicationId) => {
  try {
    const response = await request({
      url: '/applications/accept',
      method: 'put',
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        application_id: applicationId
      }
    });
    enqueueSnackbar(response.data.message || "Application accepted successfully", { variant: 'success' });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Error accepting application";
    enqueueSnackbar(errorMessage, { variant: 'error' });
  }
};

const handleReject = async (applicationId) => {
  try {
    const response = await request({
      url: '/applications/reject',
      method: 'put',
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        application_id: applicationId
      }
    });
    enqueueSnackbar(response.data.message || "Application rejected successfully", { variant: 'success' });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Error rejecting application";
    enqueueSnackbar(errorMessage, { variant: 'error' });
  }
};

const handleDownload = async (applicationId) => {
  try {
    const response = await request({
      url: `/cv/download?key=4e120baf-362c-4f1a-8ea9-605f84ad2774.pdf`,
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      },
      responseType: 'blob',  // Important to handle file downloads
    });

    // Create a URL for the downloaded file and trigger a download
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `cv_${applicationId}.pdf`);  // Set the file name
    document.body.appendChild(link);
    link.click();

    enqueueSnackbar("Downloaded Successfully", { variant: 'success' });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Error downloading CV";
    enqueueSnackbar(errorMessage, { variant: 'error' });
  }
};


if(applicatins.isLoading){
  return <p>Loading...</p>
}

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        rowGap: "20px",
        columnGap: "10px",
        flexWrap: "wrap",
      }}
    >
      {applicatins.data.data.applications.map((application, i) => {
        return (
          <Box
            key={i}
            sx={{
              borderRadius: "8px",
              boxShadow: (theme) =>
                `0px 0px 15px -5px ${alpha(theme.palette.primary.main, 0.3)}`,
              width: {
                xs: "calc(100%)",
                sm: "calc(50% - 10px)",
                md: "calc(33.33333% - 10px)",
                lg: "calc(25% - 10px)",
              },
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box className={"content"}>
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  px: 1,
                  flex: 1,
                }}
              >
                <Link
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                  component={"a"}
                  href={application.cv_url}
                >
                  {application.user_full_name}
                </Link>{" "}
                <Typography variant="caption">{application.date}</Typography>
              </Typography>
              <Typography
                sx={{
                  px: 1,
                  mb: 1,
                }}
                variant="body2"
              >
                {application.job_title}
              </Typography>
              <Typography
                sx={{
                  px: 1,
                  mb: 2,
                }}
                variant="body2"
                color="text.secondary"
              >
                Status: {application.status}
              </Typography>
              <Button
                sx={{
                  mb: 2,
                  mx: 1,
                }}
                startIcon={<FileDownloadOutlined />}
                variant="outlined"
                color="secondary"
                component={"a"}
                onClick={() =>handleDownload(application.cv)}
              >
                Download CV
              </Button>
            </Box>

            <Box
              className={"actions"}
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                backgroundColor: "grey.100",
                p: 1,
              }}
            >
              <Button color="success" onClick={() => handleAccept(application.id)}>
                Accept
              </Button>
              <Button color="error" onClick={() => handleReject(application.id)}>
                Reject
              </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default JobApplicationSent;
