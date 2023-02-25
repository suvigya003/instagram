

import Explore from '../explore/Explore'
import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PostImage = () => {

  const [sliderRef, setSliderRef] = useState(null)
  
  const sliderSetting={
    slidesToShow:1,
    slidesToScroll:1,
    infinite:true,
    accessibility:true,
  }

  const postStyle={
    // width:'60px',
    // height:'600px',
    // position:'absolute',
    // top:'50%',
    // margin:'0 auto',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    // border:'5px solid red'
  }

  const postPicStyle={
    width:'100%',
    // borderTop: '1px solid lightgray',
    // borderBottom: '1px solid lightgray',
    height:'90vh',
    backgroundPosition:'center',
    objectFit: 'contain',
    // backgroundSize:'cover',
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
      <Box>
      <Box sx={{
        position:'relative',
        height:'100%',
        bgcolor:'black',
        // border:'5px solid blue',
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
            <Box key={index} >
              <Box style={postStyle}>
                <img src={ele.profilePic} alt='pic' style={postPicStyle} /> 
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
        
    </Box>
        
    </>
  )
}

export default PostImage