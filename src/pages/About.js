import React from 'react'
import Layout from '../components/Layout/Layout'
import{ Typography,Box, } from'@mui/material'
const About = () => {
  return (
    <Layout> 
      <Box sx={{
        my:15,
        textAlign:'center',
        padding:2,
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:'2rem'
        },
        "& p":{
          textAlign:'justify',
        },
        "@media (max-width=600px)":{
          mt:0,
          "& h4":{
            fontSize:"1.5rem"
          },
        },
      }}>
        <Typography variant='h4'>
          Welcome to my Jikoni:A Journey Through Africa on Your Plate
        </Typography>
        <p>
      My Jikoni isn't just a place to eat, it's a vibrant celebration of African cuisine. We take you on a delicious adventure across the continent, showcasing the vast diversity of flavors and traditions Africa has to offer.

Our story began in 2020  when  my grandmother and a gifted cook from Ethiopia, shared their passion for African food with me. Inspired by the warmth and joy that surrounded family meals back home, I dreamt of creating a space to share this rich culinary heritage with everyone.</p>
<br/>
<p>At My Jikoni, we source authentic ingredients and traditional cooking methods to create dishes bursting with bold flavors. From the fragrant stews of North Africa to the spicy curries of East Africa, and the hearty jollof rice of West Africa, our menu is a passport to a world of culinary discovery. We also feature some vegetarian and vegan options that showcase the incredible plant-based cuisine of Africa.

Our vibrant atmosphere reflects the spirit of Africa. Warm colors, lively music, and friendly service create a welcoming space for friends and family to gather and connect over a delicious meal.

Come explore the culinary tapestry of Africa at My Restaurant. We promise an unforgettable journey for your taste buds, leaving you wanting to come back for more</p>
      </Box>
    </Layout>
  )
}

export default About
