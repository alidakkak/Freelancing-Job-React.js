import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
const WelcomeMessage = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "30px",
          textTransform: "capitalize",
          mb: 1,
          "& .name-of-person": {
            color: "primary.main",
            fontWeight: "500",
          },
        }}
      >
        welcome <span className="name-of-person">farah</span>
      </Typography>

      <Typography
        sx={{
          color: theme.palette.grey[600],
          fontSize: "20px",
        }}
      >
        have a nice day
      </Typography>
    </Box>
  );
};

export default WelcomeMessage;
