import { Grid } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar'
import images from '../images/index'

const Reels = () => {
  return (
    <>
      <Grid container>
        <Grid item sm={2}>
          <Navbar />
        </Grid>
        <Grid item sm={10}>
                  <img src={images.home} alt="home" />
                  {/* <img src="images/story/kar-ming-moo-Q_3WmguWgYg-unsplash.jpg" alt="hello" /> */}
        </Grid>
      </Grid>
    </>
  )
}

export default Reels
