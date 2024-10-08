"use client"
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Conversations from './Conversations';
import NoSelectedConversationYet from './NoSelectedConversationYet';
import MainChat from './MainChat';
import { fetchChats } from '../../apis/chatService';

const WebChatLayout = () => {
  const [chats, setChats] = useState([]);
  const { selctedConversation } = useSelector((state) => state.chat);

  // Fetch chats every 5 seconds
  useEffect(() => {
    const getChats = async () => {
      try {
        const response = await fetchChats();
        console.log('Fetched chats:', response.data.chats); // Debugging line
        setChats(response.data.chats);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };
    // const { selctedConversation } = useSelector((state) => state.chat);

    getChats();
    const intervalId = setInterval(getChats, 5000); // Poll every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log('Chats updated:', chats); // Debugging line
  }, [chats]);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Conversations conversations={chats} />

      <Box
        sx={{
          width: { xs: "100%", sm: "calc(100% - 320px)" },
          height: "100vh",
          py: 2,
        }}
      >
        {!selctedConversation ? (
          <NoSelectedConversationYet />
        ) : (
          <MainChat currentChatId={selctedConversation.id} />
        )}
      </Box>
    </Box>
  );
}

export default WebChatLayout;
