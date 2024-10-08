"use client"
import { alpha, Box, Divider, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react'
import ConversationCard from './ConversationCard';
import ConversationHeader from './ConversationHeader';
import { useState , useEffect } from 'react';
 import {fetchChats} from '../../apis/chatService'
const Conversations = ({conversations }) => {
  // console.log(conversations);

    return (

      <Box
        sx={{
          width: {xs : "100%" , sm : "320px"},
          p: 2,
          boxShadow: (theme) =>
            `inset 2px 2px 15px 0px ${alpha(theme.palette.primary.dark, 0.3)}`,
          backdropFilter: "blur(10px)",
          height: {xs : "100%" , sm :"calc(100vh - 30px)"},
          my: "auto",
          ml: {xs : 0 , sm : 1},
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        <ConversationHeader />
        <FormControl>
          <InputLabel>Search</InputLabel>
          <OutlinedInput
            label="Search"
            type="search"
            sx={{
              borderRadius: "30px",
              height: "50px",
            }}
          />
        </FormControl>
        <Divider
          sx={{
            my: 2,
          }}
        />
        <Box>
          {conversations.map((conversation) => (
            <ConversationCard key={conversation.id} conversation={conversation} />
          ))}
        </Box>
      </Box>
    );
  };

export default Conversations