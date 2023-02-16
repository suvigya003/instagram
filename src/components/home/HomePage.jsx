import React from 'react'
import Navbar from '../navbar/Navbar'
import {Grid} from '@mui/material';
import { Box } from '@mui/system';
import Post from '../post/Post';

const HomePage = () => {
  return (
    <>
        <Grid container>
            <Grid item lg={2}>
                <Navbar/>
            </Grid>
            <Grid item lg={10}>
                <Grid container spacing={5}>
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
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}

export default HomePage