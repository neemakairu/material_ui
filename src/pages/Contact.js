import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, TableCell, TableContainer, TableRow, Typography, Paper,Table,TableHead, TableBody } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10, ml:10, "&h4":{fontWeight:'bold',mb:2}}}>
        <Typography variant='h4'>
          Contact My Restaurant
        </Typography>
        <p>
          We're here to answer any questions you might have about our delicious food or amazing atmosphere. Feel free to reach out below:
        </p>
      </Box>
      <Box sx={{margin:5,width:'600px',ml:10, "@media(max-width:600px":{
        width:'300px',
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table:'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white'}}align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red',pt:1}} /> 0765432890 (toll free)

                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <EmailIcon sx={{color:'blue',pt:1}} /> myrestaurant@gmail.com (toll free)

                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{color:'black',pt:1}} /> 0765432890 (toll free)

                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
