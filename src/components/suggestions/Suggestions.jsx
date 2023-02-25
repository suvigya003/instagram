import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'


const Suggestions = () => {
  return (
    <>
        <Box sx={{
            width:'100%',
            m:'10px 0px'
        }} >
            <Box 
              mt={1}
              mb={1}
              sx={{
                display:'flex',
                justifyContent:'space-between'
              }}
            >
              <Box 
                sx={{
                  display:'flex',
                  alignItems:'center'
                }}
              >
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{width:34,height:34 , mr:1}} /> */}
                <Avatar sx={{ bgcolor: 'orangered', width:50,height:50, mr:2 }}>S</Avatar>
                <Box>
                <Typography
                  sx={{
                    fontSize:'14px',
                    fontWeight:'500'
                  }}
                >
                  suvigyaTripathi{/*{username} */}
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
                    Switch
                </Typography>
              </Button>
              {/* <Button variant="text">Text</Button> */}
            </Box>
            <Box sx={{
                display:'flex',
                justifyContent:'space-between'
            }} >
                <Typography sx={{
                    fontSize:'14px',
                    fontWeight:500,
                    color:'#8E8E8E',
                }}>
                    Suggestions for you
                </Typography>
                <Button sx={{
                minHeight: 0, minWidth: 0, padding: 0, textTransform:'none',
                ":focus": { outline: 'none' },  
              }}>
                <Typography sx={{
                    fontSize:'12px',
                    fontWeight:700,
                    color:'black',
                    '&:hover':{
                        color:'#8E8E8E'
                    }
                }}>
                    See All
                </Typography>
              </Button>
            </Box>
            <Box 
              mt={1}
              mb={1}
              sx={{
                display:'flex',
                justifyContent:'space-between'
              }}
            >
              <Box 
                sx={{
                  display:'flex',
                  alignItems:'center'
                }}
              >
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{width:34,height:34 , mr:1}} /> */}
                <Avatar sx={{ bgcolor: 'orangered', width:34,height:34, mr:2 }}>S</Avatar>
                <Box>
                <Typography
                  sx={{
                    fontSize:'14px',
                    fontWeight:'500'
                  }}
                >
                  suvigyaTripathi{/*{username} */}
                </Typography>
                <Typography
                  sx={{
                    fontSize:'14px',
                    fontWeight:'400',
                    color:'#8E8E8E'
                  }}
                >
                  Followed by suvigyaTripathi
                </Typography>
                </Box>                
              </Box>
              <Button sx={{
                minHeight: 0, minWidth: 0, padding: 0, textTransform:'none', 
                ":focus": { outline: 'none' },  
              }}>
                <Typography sx={{
                    fontSize:'12px',
                    fontWeight:700,
                    color:'#1EA1F7'
                }}>
                    Follow
                </Typography>
              </Button>
            </Box>            
        </Box>
    </>
  )
}

export default Suggestions
