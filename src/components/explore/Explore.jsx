import { Button, Grid, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Images from '../images/index';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: '100%',
  height: '90vh',
  bgcolor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
}

const Explore = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const exploreImageStyle = {
    width: '100%',
    height: 'auto',
    backgroundPosition: 'center',
    objectFit: 'cover',
    // border:'2px solid green'
  }

  const exploreImageBoxStyle = {
    // height:'80vh',
    // bgcolor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border:'2px solid red'
  }

  const exploreImageBox1Style = {
    bgcolor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border:'2px solid blue'
  }

  const buttonStyle = {
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    ':focus': { outline: 'none' },
    textTransform: 'none',
    ':hover': { opacity: 0.9 },
  }

  const exploreModalStyle={
    width:'100%',
    height:'80vh',
  }

  const images = [
    {
      pic: 'images/story/amir-mohammad-hp-mFadZWL9UiI-unsplash.jpg',
      profileName: 'Aslam Atif',
    },
    {
      pic: 'images/story/art-hauntington-jzY0KRJopEI-unsplash.jpg',
      profileName: 'Rosy Saigaonkar',
    },
    {
      pic: 'images/story/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg',
      profileName: 'puggggggggggggggggggg',
    },
    {
      pic: 'images/story/francesco-ZxNKxnR32Ng-unsplash.jpg',
      profileName: 'King',
    },
    {
      pic: 'images/story/gary-bendig-6GMq7AGxNbE-unsplash.jpg',
      profileName: 'meow meow',
    },
    {
      pic: 'images/story/gwen-weustink-I3C1sSXj1i8-unsplash.jpg',
      profileName: 'Lazy Lad',
    },

    {
      pic: 'images/story/kar-ming-moo-Q_3WmguWgYg-unsplash.jpg',
      profileName: 'Miss Marie',
    },
    {
      pic: 'images/story/kevin-mueller-aeNg4YA41P8-unsplash.jpg',
      profileName: 'My attitude',
    },
    {
      pic: 'images/story/laura-college-K_Na5gCmh38-unsplash.jpg',
      profileName: 'Who are You',
    },
    {
      pic: 'images/story/x-sLGYaQ_stMM-unsplash.jpg',
      profileName: 'Alpha Raje',
    },
  ]

  return (
    <>
      <Grid container>
        <Grid item sm={2}>
          <Navbar />
        </Grid>
        <Grid item sm={10}>
          <>
            {/* <Grid container spacing={2}>
                <Grid item sm={8}>
                  <Box sx={{border:'1px solid black', minHeight:'100px'}} >
                    <Grid container spacing={2}>
                      <Grid item sm={6}>
                        <Box sx={{border:'1px solid black', minHeight:'100px'}} ></Box>
                        <Box sx={{border:'1px solid black', minHeight:'100px'}} ></Box>
                      </Grid>
                      <Grid item sm={6}>
                        <Box sx={{border:'1px solid black', minHeight:'100px'}} ></Box>
                        <Box sx={{border:'1px solid black', minHeight:'100px'}} ></Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item sm={4}>
                  <Box sx={{border:'1px solid black', minHeight:'100px'}} ></Box>
                </Grid>
              </Grid> */}
            <Box
              sx={{
                m: '4vh 6vw 0 6vw',
              }}
            >
              <Grid container spacing={3}>
                {images.map((ele, index) => (
                  <>
                    <Grid item sm={4}>
                      <Box sx={exploreImageBoxStyle}>
                        <Button sx={buttonStyle} onClick={handleOpen}>
                          <img
                            src={ele.pic}
                            style={exploreImageStyle}
                            alt="image"
                          />
                        </Button>
                      </Box>
                    </Grid>
                  </>
                ))}
              </Grid>
            </Box>
          </>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
                            src={Images.tiger}
                            style={exploreModalStyle}
                            alt="image"
                          />
        </Box>
      </Modal>
    </>
  )
}

export default Explore
