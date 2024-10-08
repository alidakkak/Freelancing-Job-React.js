import * as React from "react";
import Box from "@mui/material/Box";
import RegisterForm from "./RegisterForm";
import LoginBackground from "../../../assets/images/loginBackground.jpg";
import { alpha } from "@mui/material";

export default function Register() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        minHeight: "100vh",
        overflow: "hidden",
        position : 'relative',
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <RegisterForm />
      </Box>
      <Box
        sx={{
          height: "98vh",
          width:  "50%",
          display : {xs : 'none' , sm : 'block'},
          position: "relative",
          transform: "skew(2deg)",
          borderRadius: "15px",
          overflow: "hidden",
          backgroundImage: (theme) =>
            `linear-gradient(120deg , ${alpha(
              theme.palette.primary.dark,
              0.5
            )} , ${alpha(
              theme.palette.primary.light,
              0.5
            )}) , url(${LoginBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    </Box>
  );
}
