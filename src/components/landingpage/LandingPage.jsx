import React from 'react'
import Navbar from '../navbar/Navbar'
import {Grid} from '@mui/material';

const Landingpage = () => {
  return (
    <>
    <Grid container>
      <Grid item lg={2}>
        <Navbar color={'red'}/>
      </Grid>
      {/* <Grid item lg={10}>
        <Navbar color={'yellow'}/>
      </Grid> */}
    </Grid>
    
    </>
  )
}

export default Landingpage