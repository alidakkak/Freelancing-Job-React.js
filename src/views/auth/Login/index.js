import { Box, Typography, alpha } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm";
import LoginBackground from "../../../assets/images/loginBackground2.jpg";

const LoginPage = () => {
  return (
    <Box
      sx={{
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          height: "300px",
          width: "98%",
          mx: "auto",
          backgroundColor: "primary.main",
          mt: 1,
          borderRadius: "12px",
          backgroundImage: (theme) =>
            `linear-gradient(120deg , ${alpha(
              theme.palette.primary.dark,
              0.5
            )} , ${alpha(
              theme.palette.primary.light,
              0.5
            )}) , url(${LoginBackground})`,
            backgroundPosition :'center',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        sx={{
          borderRadius: "15px",
          display: "flex",
          alignItems: "cneter",
          width: { xs: "98%", sm: "60%" },
          position: "relative",
          marginTop: "-100px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "75px",
            height: "75px",
            backgroundColor: (theme) =>
              alpha(theme.palette.secondary.light, 0.2),
            right: "10px",
            bottom: "10px",
            borderRadius: "50%",
            zIndex: -10,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "100px",
            height: "100px",
            backgroundColor: (theme) => alpha(theme.palette.primary.light, 0.2),
            left: "10px",
            top: "10px",
            borderRadius: "50%",
            zIndex: -10,
          }}
        />
        <Box
          sx={{
            p: 4,
            // backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.2),
            backdropFilter: "blur(10px)",
            width: "100%",
            borderRadius: "15px",
            boxShadow : (theme) => `0 0 15px -5px ${alpha(theme.palette.primary.light, 0.5)}`
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "500",
              mb: 1,
            }}
          >
            Welcome Back
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "300",
            }}
          >
            the home is miss you
          </Typography>
          <LoginForm />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
