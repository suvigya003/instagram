import { Avatar, Box, Button, Divider, TextField, Typography} from '@mui/material'
import React, { useState } from 'react'
import searchCss from './SearchCss'

const Search = ({tab,setTab}) => { 

  

  return (
    <>
        <Box sx={(tab)?searchCss.sideBarActive:searchCss.sideBarInActive
        }>
            <Box sx={{
              p:'20px 10px 15px 10px',
            }} > 
                <Typography sx={{
                    ml:'10px',
                    mb:'30px',
                    fontSize:'24px',
                    fontWeight:'500',
                }} >
                    Search
                </Typography>
                <Box sx={{
                  bgcolor:'#EFEFEF',
                  borderRadius:'10px',
                  p:'10px',
                }} >
                    <TextField variant='standard' 
              fullWidth
              multiline
              placeholder="Search"
              
              InputProps={{
                disableUnderline:true,
                style:{
                  fontSize:'14px'
                }
              }}
            />
                </Box>
                
            </Box>
            <Divider sx={{height:'2px'}} />
            <Box sx={{
              p:'10px',

            }} >
              <Box sx={{
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'space-between',
                  pr:'10px',
                }} >
              <Typography sx={{
                    ml:'10px',
                    fontSize:'16px',
                    fontWeight:'500',
                }} >
                    Recent
                </Typography>
                <Button  sx={{
                minHeight: 0, minWidth: 0, padding: 0, 
                ":focus": { outline: 'none' },  
                textTransform:'none',
              }}>
                <Typography sx={{
                    fontSize:'12px',
                    fontWeight:700,
                    color:'#1EA1F7'
                }}>
                    Clear All
                </Typography>
              </Button>
              </Box>
                
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    ml:'10px',
                    mt:'10px',
                    mb:'10px',
                }} >
                    <Avatar sx={{
                        width:'50px',
                        height:'50px',
                        mr:'10px',
                    }} />
                    <Box>
                        <Typography sx={{
                        fontSize:'14px',
                        fontWeight:'500',
                    }} >
                        suvigyaTripathi
                    </Typography>
                    <Typography
                  sx={{
                    fontSize:'14px',
                    fontWeight:'400',
                    color:'#8E8E8E'
                  }}
                >
                  Suvigya Tripathi{/*{Name} */}
                </Typography>
                    </Box>
                    
                  </Box>
            </Box>
        </Box>
        <Box sx={(tab)?searchCss.sidebBarOverlayActive:searchCss.sideBarOverlayInActive
        } onClick={()=>setTab(!tab)} >
          </Box>
    </>
  )
}

export default Search