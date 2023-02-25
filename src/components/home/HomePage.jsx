import React from 'react'
import Navbar from '../navbar/Navbar'
import {Grid, Stack} from '@mui/material';
import { Box } from '@mui/system';
import Post from '../post/Post';
import Suggestions from '../suggestions/Suggestions';
import Story from '../story/Story';

const HomePage = () => {
  return (
    <>
        <Grid container>
            <Grid item sm={2}>
                <Navbar/>
            </Grid>
            <Grid item sm={10}>
                <Box sx={{
                  mt:'7vh',
                  display:'flex',
                  justifyContent:'center'
                }} >
                  <Stack direction='row' spacing={6}>
                  <Box sx={{
                    maxWidth:'470px',
                  }} >
                    <Story />
                    <Post />
                  </Box>
                  <Box sx={{
                    width:'320px',
                  }} >
                    <Suggestions />
                  </Box>
                  </Stack>                  
                </Box>
            </Grid>
        </Grid>
    </>
  )
}

export default HomePage