import {useState} from 'react'
import React,{ Box,AppBar,IconButton, Toolbar, Typography, Drawer, Divider } from '@mui/material'


import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom';
import'../../styles/HeaderStyles.css';
const Header = () => {
  const[mobileOpen, setMobileOpen]=useState(false)
  //handle menu click
  const handleDrawerToggle = ()=> {
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow:1}}>
          <BrunchDiningIcon/>
          My Restaurant
        </Typography>
        <Divider/>
          <ul className='mobile-navigation'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/menu'>Menu</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
       

    </Box>
  )
  return (
    <Box>
      <AppBar component={'nav'} sx={{ 
        bgcolor:'black'
      }}>
        <Toolbar>
          <IconButton
          color='inherit'
          aria-label='open drawer' 
          edge='start' 
          sx={{
            mr: 2,
            display:{sm:'none'},
          }}
          onClick={handleDrawerToggle}
          >
            <MenuIcon/>
          </IconButton>
        <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow:1, my:2}}>
          <BrunchDiningIcon/>
          My Jikoni
        </Typography>
        </Toolbar>
        <Box sx={{display:{xs:'none',sm:'block'}}}>
          <ul className='navigation-menu'>
            <li>
              <NavLink active className='active' to={'/'}>
                Home</NavLink>
            </li>
            <li>
              <NavLink to='/menu'>Menu</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </Box>
      </AppBar>
      <Box component='nav'>
        <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
        sx={{
          display:{xs:'block',sm:'none'}, '& .MuiDrawer-paper':{
            boxSizing:'border-box',
            width:'240px'
          }
        }}
        >
          {drawer}
        </Drawer>

      </Box>
      <Box>
      <Toolbar/>
      </Box> 
    </Box>
  )
}

export default Header
