import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
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
          <Box
            sx={{
              bgcolor: '#FAFAFA',
              m: 0,
              height: '100vh',
              // bgcolor: 'red',
              border: '5px solid #red',
            }}
          >
            <Box
              sx={{
                m: '25px auto',
                bgcolor: 'white',
                width: '85%',
                height: '100%',
                borderRadius: '3px',
                border: '1px solid #DBDBDB',
              }}
            >
              <Grid container>
                <Grid item sm={5}>
                  <Box
                    sx={
                      {
                        // height:'100%',
                        // borderRight:'1px solid #DBDBDB',
                      }
                    }
                  >
                    <Box
                      sx={{
                        m: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        sx={{
                          minHeight: 0,
                          minWidth: 0,
                          padding: 0,
                          ':focus': { outline: 'none' },
                          textTransform: 'none',
                        }}
                      >
                        <Typography
                          sx={{
                            color: 'black',
                            fontSize: '16px',
                            fontWeight: '500',
                          }}
                        >
                          suvigya_tripathi
                        </Typography>
                      </Button>
                    </Box>
                    <Divider />
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: '10px 20px',
                      }}
                    >
                      <Avatar
                        sx={{
                          width: '50px',
                          height: '50px',
                          mr: '10px',
                        }}
                      />
                      <Box>
                        <Button
                          sx={{
                            minHeight: 0,
                            minWidth: 0,
                            padding: 0,
                            ':focus': { outline: 'none' },
                            textTransform: 'none',
                          }}
                        >
                          <Typography
                            sx={{
                              color:'black',
                              fontSize: '14px',
                            }}
                          >
                            Suvigya Tripathi
                          </Typography>
                        </Button>
                        <Typography
                          sx={{
                            color: '#8E8E8E',
                            fontSize: '14px',
                          }}
                        >
                          Reacted to your message
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item sm={7}></Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Messages
