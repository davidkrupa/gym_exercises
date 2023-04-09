import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4"  >
      <Stack gap="15px" alignItems="center" py="24px" m="0">
        <img src={Logo} alt="logo" width="200px" height="40px"/>
        <Typography variant="h6" m="0" p="0">
          © Copyright GoldsGym 2023
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer