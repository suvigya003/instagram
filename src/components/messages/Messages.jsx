import { Grid } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar'

const Messages = () => {
  return (
    <>
      <Grid container>
        <Grid item sm={2}>
          <Navbar />
        </Grid>
        <Grid item sm={10}>
          Messeges
        </Grid>
      </Grid>
    </>
  )
}

export default Messages
