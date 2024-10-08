import { Typography } from '@mui/material'
import { Box, alpha } from '@mui/system'
import React from 'react'
import InformationForm from './InformationForm'

const InformationPage = () => {
  return (
    <Box
        sx={{
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            minHeight : '100vh',
            py : 4
        }}
    >
        <Box
            sx={{ 
                width : {xs : '100%' , sm  : '70%' , md : '50%'},
                borderRadius : '10px',
                backgroundColor : (theme) => alpha(theme.palette.secondary.main , 0.1),
                p : 2
            }}
        >
            <Typography
                sx={{
                    fontSize : '22px',
                    fontWeight : '600',
                    "&::first-letter" : {
                        color : 'primary.dark',
                        fontSize : '25px'
                    }
                }}
            >
                Welcome in Our Application
            </Typography>
            <Typography mb={2}>
                its your first time visit us <br/> give us some information about you and get the world of job in your hands
            </Typography>

            <InformationForm />
        </Box>
    </Box>
  )
}

export default InformationPage