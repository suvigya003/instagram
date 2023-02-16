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
                {/* <Grid container spacing={5}>
                  <Grid item lg={7} sm={12}>
                    <Box 
                      sx={{
                        pl:{
                          lg:'20px',
                          sm:'10px'
                        },
                        border:'1px solid black',
                        // bgcolor:'red'
                      }}
                    >
                      <Box m={4}>
                      <Post/>
                      </Box>
                      
                    </Box>
                  </Grid>
                  <Grid item lg={5} sm={12}>
                    <Box
                      sx={{
                        p:{
                          lg:'10px 15px 0px 4px',
                          sm:'4px 15px 10px 15px'
                        },
                        border:'1px solid black',
                        bgcolor:'green'
                      }}
                    >
                      Hello 2
                    </Box>
                  </Grid>
                </Grid> */}
                <Box sx={{
                  mt:'10vh',
                  display:'flex',
                  justifyContent:'center'
                }} >
                  <Stack direction='row' spacing={6}>
                  <Box sx={{
                    maxWidth:'470px',
                    border:'1px solid black'
                  }} >
                    <Story />
                    <Post />
                  </Box>
                  <Box sx={{
                    width:'320px',
                    border:'1px solid black'
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