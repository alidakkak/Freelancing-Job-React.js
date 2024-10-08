"use client"
import { ExitToAppOutlined } from '@mui/icons-material';
import { alpha, Avatar, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED_CONVERSATION } from '../../store/slices/chatSlice';


const ChatHeader = () => {
    const { selctedConversation } = useSelector((state) => state.chat);
    const dispatch = useDispatch();
    // console.log('-------------------------');
    // console.log(selctedConversation);



    


    return (
      <Box
        sx={{
          height: "60px",
          boxShadow: (theme) =>
            `2px 4px 15px -6px ${alpha(theme.palette.primary.main, 0.4)}`,
          position: "sticky",
          top: "0",
          borderRadius: "5px",
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ width: 40, height: 40 }}
            src={selctedConversation?.image}
          />
          <Typography ml={1}>{selctedConversation?.name}</Typography>
        </Box>
        <IconButton
          sx={{
            display: { sm: "none" },
          }}
          onClick={() => {
            dispatch(
              SET_SELECTED_CONVERSATION({
                conversation: null,
                id: null,
              })
            );
          }}
        >
          <ExitToAppOutlined />
        </IconButton>
      </Box>
    );
  };

export default ChatHeader