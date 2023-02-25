import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Grid, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Navbar from '../navbar/Navbar';

const Explore = () => {

  const [sliderRef, setSliderRef] = useState(null)
  
  const sliderSetting={
    slidesToShow:5,
    slidesToScroll:1,
    infinite:true,
    accessibility:true,
    responsive:[
      {
        breakpoint:768,
        settings:{
          slidesToShow:6
        }
      },
      {
        breakpoint:500,
        settings:{
          slidesToShow:5
        }
      }
    ]
  }

  const storyStyle={
    width:'60px',
    height:'60px',
    margin:'0 auto',
    // border:'1px solid black'
  }

  const storyPicStyle={
    width:'100%',
    height:'100%',
    backgroundPosition:'center',
    backgroundSize:'cover',
    // objectFit: 'contain',      //cover is maintaining aspect ratio and dimensions of outer tag so it's not needed
    borderRadius:'50%',
  }

  const storyProfileNameStyle={   
    width:'50px',
    height:'20px',
    margin:'0 auto',
    overflow: "hidden", 
    textOverflow: "ellipsis", 
    display:'block',
    align:'center',
    // display:'flex',
    // width:'100%'
    // justifyContent:'center',
    // wordWrap:'break-word',       // not useful
    // border:'1px solid black'
  }

  const leftButtonStyle={
    borderRadius:'50%', 
    color:'#535050',
    backgroundColor:'rgb(255, 255, 255, 0.8)', 
    ':hover':{
      bgcolor:'white'
    }
  }

  const rightButtonStyle={
    borderRadius:'50%', 
    color:'#535050',
    backgroundColor:'rgb(255, 255, 255, 0.8)', 
    ':hover':{
      bgcolor:'white'
    }
  }

  const profile=[
    {
      profilePic:'images/story/amir-mohammad-hp-mFadZWL9UiI-unsplash.jpg',
      profileName:'Aslam Atif'
    },
    {
      profilePic:'images/story/art-hauntington-jzY0KRJopEI-unsplash.jpg',
      profileName:'Rosy Saigaonkar'
    },
    {
      profilePic:'images/story/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg',
      profileName:'puggggggggggggggggggg'
    },
    {
      profilePic:'images/story/francesco-ZxNKxnR32Ng-unsplash.jpg',
      profileName:'King'
    },
    {
      profilePic:'images/story/gary-bendig-6GMq7AGxNbE-unsplash.jpg',
      profileName:'meow meow'
    },
    {
      profilePic:'images/story/gwen-weustink-I3C1sSXj1i8-unsplash.jpg',
      profileName:'Lazy Lad'
    },

    {
      profilePic:'images/story/kar-ming-moo-Q_3WmguWgYg-unsplash.jpg',
      profileName:'Miss Marie'
    },
    {
      profilePic:'images/story/kevin-mueller-aeNg4YA41P8-unsplash.jpg',
      profileName:'My attitude'
    },{
      profilePic:'images/story/laura-college-K_Na5gCmh38-unsplash.jpg',
      profileName:'Who are You'
    },
    {
      profilePic:'images/story/x-sLGYaQ_stMM-unsplash.jpg',
      profileName:'Alpha Raje'
    },
  ]

  return (
    <>
    <Grid container>
      <Grid item sm={2}>
        <Navbar/>
      </Grid>
      <Grid item sm={10}>
        <Box sx={{
        mb:'5vh',
        position:'relative',
        height:'100%'
      }} >
          <Box>
          <Button sx={{
            position:'absolute',
            top:'50%',
            left:'20px',
            zIndex:1,
            p:0,
            m:0,
            height:0,
            width:0,
          }} 
          onClick={sliderRef?.slickPrev} >
            <ChevronLeftIcon  sx={leftButtonStyle}  />
          </Button>
          <Button sx={{
            position:'absolute',
            top:'50%',
            right:'20px',
            zIndex:1,
            p:0,
            m:0,
            height:0,
            width:0,
          }} onClick={sliderRef?.slickNext} >
            <ChevronRightIcon sx={rightButtonStyle} />
          </Button>
        </Box>
        <Slider ref={setSliderRef} {...sliderSetting}>
          {profile.map((ele,index)=>(
            <Box key={index}  >
              <Box style={storyStyle}>
                <img src={ele.profilePic} alt='pic' style={storyPicStyle} />
                              
              </Box>
              <Box sx={storyProfileNameStyle} >
                  <Typography sx={{fontSize:'12px'}} >
                    {ele.profileName}
                  </Typography>
                </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      </Grid>
      </Grid>
    </>
  )
}

export default Explore
