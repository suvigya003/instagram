import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const Story = () => {
  return (
    <>
        <Box sx={{
            m:'10px 0px 50px 0px',
            display:'flex',
            justifyContent:'space-around'
        }} >
            <Box>
                <Avatar sx={{ bgcolor: 'orangered', width:50,height:50,  }}>S</Avatar>
                <Typography
                  sx={{
                    fontSize:'12px',
                    fontWeight:'400',
                    color:'#8E8E8E'
                  }}
                >
                  Suvigya Tripathi{/*{Name} */}
                </Typography>
            </Box>
            
            <Avatar sx={{ bgcolor: 'orangered', width:50,height:50,  }}>U</Avatar>
            <Avatar sx={{ bgcolor: 'orangered', width:50,height:50,  }}>V</Avatar>
            <Avatar sx={{ bgcolor: 'orangered', width:50,height:50,  }}>I</Avatar>
            <Avatar sx={{ bgcolor: 'orangered', width:50,height:50,  }}>G</Avatar>
            <Avatar sx={{ bgcolor: 'orangered', width:50,height:50,  }}>Y</Avatar>
            <Avatar sx={{ bgcolor: 'orangered', width:50,height:50,  }}>A</Avatar>
        </Box>
    </>
  )
}

export default Story