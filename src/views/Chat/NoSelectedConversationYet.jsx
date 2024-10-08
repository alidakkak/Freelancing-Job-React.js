
import { Box, Typography } from '@mui/material';
import React from 'react'
import NoSelectedConversation from './svgAssets';


const NoSelectedConversationYet = () => {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <NoSelectedConversation />
        <Typography
          sx={{
            "& .marked": {
              color: "primary.main",
            },
          }}
        >
          Select a conversation or start a <span className="marked">new one</span>
        </Typography>
      </Box>
    );
  };
  

export default NoSelectedConversationYet