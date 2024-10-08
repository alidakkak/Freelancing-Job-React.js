import { Box, Button, TextField } from '@mui/material';
import React from 'react'
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import { useState } from 'react';
import { postMessage } from '../../apis/chatService';

const MainChat = ({currentChatId}) => {
  console.log(currentChatId);

  const [message, setMessage] = useState(''); // State for the message input

  const handleSendMessage = async () => {
    if (message.trim()) {
      try {
        await postMessage(currentChatId, message); // Call the API to send the message
        setMessage(''); // Clear the input field after sending
      } catch (error) {
        console.error('Error sending message:', error); // Handle error (e.g., show a notification)
      }
    }
  };

    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          px: { xs: 0, sm: 1 },
        }}
      >
        <ChatHeader />
        <ChatBody />
        {/* <TextField fullWidth variant="standard" label="Message" /> */}

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <TextField
          fullWidth
          variant="standard"
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update state on input change
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage(); // Send message on pressing Enter
            }
          }}
        />
        <Button onClick={handleSendMessage} sx={{ ml: 2 }}>
          Send
        </Button>
      </Box>

      </Box>
    );
  };
export default MainChat