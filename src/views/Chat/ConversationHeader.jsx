import { ChatBubbleOutline } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react'

const ConversationHeader = () => {
    return (
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: "800",
          mb: 3,
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <ChatBubbleOutline sx={{ fontSize: "32px" }} />
        Chats
      </Typography>
    );
  };

export default ConversationHeader