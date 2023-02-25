import { Box, Grid } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar'
import Images from '../images/index'

const Reels = () => {

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
          <Box sx={{height:'100vh', overflowY:'scroll'}} >
     <Box sx={{
              m:'1vh auto',
              width:'316px',
              height:'90vh',
              
              // display:'flex',
              // flexDirection:'column',
              // justifyContent:'center',
              // alignItems:'center'
            }} >
              {
                images.map((ele,index)=>(
                  <>
                    <Box sx={{
                      border:'1px solid black',
                      width:'100%',
                      height:'90vh',
                      m:'3vh auto',
                      borderRadius:'6px'
                    }} >
                      {ele.profileName}
                    </Box>
                    {/* <img src={ele.pic} alt="image" /> */}
                  </>
                ))
              }
            </Box>
          </Box>
           
        </Grid>
      </Grid>
      
    </>
  )
}

export default Reels
