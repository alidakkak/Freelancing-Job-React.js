import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'

const ChatLayout = () => {
  return (
    <Box>
        <Outlet />
    </Box>
  )
}

export default ChatLayout