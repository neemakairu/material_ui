import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, CardActionArea, CardMedia,Card, CardContent, Typography } from '@mui/material'
import { MenuList } from '../data/data'
const Menu = () => {
  return (
    <Layout>
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
      {MenuList.map(menu =>(
        <Card sx={{maxWidth:'700px',display:'flex',m:3}}>
          <CardActionArea>
            <CardMedia sx={{minHeight:'400px'}} component={'img'}src={menu.image} alt={menu.name}/>
          </CardActionArea>
          <CardContent>
            <Typography variant='h5'gutterBottom component={'div'}>
              {menu.name}
            </Typography>
            <Typography variant='body2'>
              {menu.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
    </Layout>
  )
}

export default Menu
