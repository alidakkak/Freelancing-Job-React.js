"use client"
import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import MobileChatLayout from './MobileChatLayout';
import WebChatLayout from './WebChatLayout';
const MainChatComponent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return isMobile ? <MobileChatLayout /> : <WebChatLayout />;
    // return <ChatApp />
}

export default MainChatComponent