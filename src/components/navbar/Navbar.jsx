import React, { useState } from 'react'
// import images from '../images'
// import { theme } from '../../theme'
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Modal,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import images from '../images'
// import instaNameLogo from 'images/navbar/instaNameLogo.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 380,
  width: '100%',
  height: '380',
  bgcolor: 'white',
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '12px',
  // p: '24px',
}

const Navbar = ({ color }) => {
  const [open, setOpen] = useState(false)
  const [home, setHome] = useState(false)
  const [search, setSearch] = useState(false)
  const [explore, setExplore] = useState(false)
  const [reels, setReels] = useState(false)
  const [messages, setMessages] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [create, setCreate] = useState(false)
  const handleOpen = () => {
    setOpen(true)
    setCreate(true)
  } 
  const handleClose = () => {
    setOpen(false)
    setCreate(false)
  } 
  const handleHome=()=>setHome(true);
  const handleNotHome=()=>setHome(false);
  const handleSearch = () =>setSearch(true);
  const handleNotSearch = () =>setSearch(false);
  const handleExplore = () => setExplore(true);
  const handleNotExplore = () => setExplore(false);
  const handleReels = () => setReels(true);
  const handleNotReels = () => setReels(false);
  const handleMessages = () => setMessages(true);
  const handleNotMessages = () => setMessages(false);
  const handleNotifications = () => setNotifications(true);
  const handleNotNotifications = () => setNotifications(false);

  return (
    <>
      <Box
        // bgcolor={color}
        sx={{
          p: '8px 12px 20px 12px',
          borderRight: 1,
          borderColor: '#DBDBDB',
        }}
      >
        <Box
          sx={{
            maxWidth: '100%',
            p: '30px 12px 20px 12px',
            // border:'1px solid black'
          }}
        >
          <img
            src={images.logo}
            alt="Logo"
            style={{
              maxWidth: '100%',
              height: 30,
            }}
          />
        </Box>
        <Box
          sx={{
            maxWidth: '100%',
            height: 'auto',
            minHeight: '70px',
            p: '12px 0px',
            overflow: 'auto',
          }}
        >
          <List>
            <ListItem sx={{
              padding:'0px'
            }} >
              <Link to="/" style={{ textDecoration: 'none' }}>
                {home ? (
                  <ListItemButton
                    sx={{ borderRadius: '50px' }}
                    onClick={handleNotHome}
                    
                  >
                    <ListItemIcon>
                      <img
                        src={images.selectedHome}
                        alt="Logo"
                        style={{
                          maxWidth: '100%',
                          height: '22px',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText sx={{ ml: '12px' }}>
                      <Typography sx={{ fontWeight: 500, color:'black' }}>Home</Typography>
                    </ListItemText>
                  </ListItemButton>
                  
                ) : (
                  <ListItemButton
                    sx={{ borderRadius: '50px' }}
                    onClick={handleHome}
                    
                  >
                    <ListItemIcon>
                      <img
                        src={images.home}
                        alt="Logo"
                        style={{
                          maxWidth: '100%',
                          height: '22px',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText sx={{ ml: '12px' }}>Home</ListItemText>
                  </ListItemButton>
                )}
              </Link>
            </ListItem>
            <ListItem sx={{
              padding:'0px'
            }} >
              {search ? (
                <ListItemButton
                  sx={{ borderRadius: '50px' }}
                  onClick={handleNotSearch}
                  
                >
                  <ListItemIcon>
                    <img
                      src={images.selectedSearch}
                      alt="Logo"
                      style={{
                        maxWidth: '100%',
                        height: '22px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ ml: '12px' }}>
                    <Typography sx={{ fontWeight: 500, color:'black' }}>
                        Search
                    </Typography>
                    </ListItemText>
                </ListItemButton>
              ) : (
                <ListItemButton
                  sx={{ borderRadius: '50px' }}
                  onClick={handleSearch}
                  
                >
                  <ListItemIcon>
                    <img
                      src={images.search}
                      alt="Logo"
                      style={{
                        maxWidth: '100%',
                        height: '22px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ ml: '12px' }}>Search</ListItemText>
                </ListItemButton>
              )}
            </ListItem>
            <ListItem sx={{
              padding:'0px'
            }} >
              <Link to="/explore" style={{ textDecoration: 'none' }}>
                {explore ? (
                  <ListItemButton
                    sx={{ borderRadius: '50px' }}
                    onClick={handleNotExplore}
                    
                  >
                    <ListItemIcon>
                      <img
                        src={images.selectedExplore}
                        alt="Logo"
                        style={{
                          maxWidth: '100%',
                          height: '22px',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText sx={{ ml: '12px' }}>
                      <Typography sx={{ fontWeight: 500, color:'black' }}>
                        Explore
                      </Typography>
                      </ListItemText>
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    sx={{ borderRadius: '50px' }}
                    onClick={handleExplore}
                    
                  >
                    <ListItemIcon>
                      <img
                        src={images.explore}
                        alt="Logo"
                        style={{
                          maxWidth: '100%',
                          height: '22px',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText sx={{ ml: '12px' }}>Explore</ListItemText>
                  </ListItemButton>
                )}
              </Link>
            </ListItem>
            <ListItem sx={{
              padding:'0px'
            }} >
              <Link to="/reels/videos" style={{ textDecoration: 'none' }}>
                {reels ? (
                  <ListItemButton
                    sx={{ borderRadius: '50px' }}
                    onClick={handleNotReels}
                    
                  >
                    <ListItemIcon>
                      <img
                        src={images.selectedReels}
                        alt="Logo"
                        style={{
                          maxWidth: '100%',
                          height: '22px',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText sx={{ ml: '12px' }}>
                      <Typography sx={{ fontWeight: 500, color:'black' }}>
                        Reels
                      </Typography>
                      </ListItemText>
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    sx={{ borderRadius: '50px' }}
                    onClick={handleReels}
                    
                  >
                    <ListItemIcon>
                      <img
                        src={images.reels}
                        alt="Logo"
                        style={{
                          maxWidth: '100%',
                          height: '22px',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText sx={{ ml: '12px' }}>Reels</ListItemText>
                  </ListItemButton>
                )}
              </Link>
            </ListItem>
            <ListItem sx={{
              padding:'0px'
            }} >
                            <Link to="/direct/inbox" style={{ textDecoration: 'none' }}>
                {messages ? (
                  <ListItemButton
                    sx={{ borderRadius: '50px',p:'0px' }}
                    onClick={handleNotMessages}
                    
                  >
                    <ListItemIcon>
                      <img
                        src={images.selectedMessenger}
                        alt="Logo"
                        style={{
                          maxWidth: '100%',
                          height: '22px',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText sx={{ ml: '12px' }}>
                      <Typography sx={{ fontWeight: 500, color:'black' }}>
                        Messages
                      </Typography>
                      </ListItemText>
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    sx={{ borderRadius: '50px' }}
                    onClick={handleMessages}
                    
                  >
                    <ListItemIcon>
                      <img
                        src={images.messenger}
                        alt="Logo"
                        style={{
                          maxWidth: '100%',
                          height: '22px',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText sx={{ ml: '12px' }}>Messages</ListItemText>
                  </ListItemButton>
                )}
              </Link>
            </ListItem>
            <ListItem sx={{
              padding:'0px'
            }} >
              {notifications ? (
                <ListItemButton
                  sx={{ borderRadius: '50px' }}
                  onClick={handleNotNotifications}
                  
                >
                  <ListItemIcon>
                    <img
                      src={images.selectedNotifications}
                      alt="Logo"
                      style={{
                        maxWidth: '100%',
                        height: '22px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ ml: '12px' }}>
                    <Typography sx={{ fontWeight: 500, color:'black' }}>
                      Notifications
                    </Typography>
                    </ListItemText>
                </ListItemButton>
              ) : (
                <ListItemButton
                  sx={{ borderRadius: '50px' }}
                  onClick={handleNotifications}
                  
                >
                  <ListItemIcon>
                    <img
                      src={images.notifications}
                      alt="Logo"
                      style={{
                        maxWidth: '100%',
                        height: '22px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ ml: '12px' }}>Notifications</ListItemText>
                </ListItemButton>
              )}
            </ListItem>
            <ListItem sx={{
              padding:'0px'
            }} >
              {
                create?(
                  <ListItemButton
                sx={{ borderRadius: '50px' }}
                
                onClick={handleOpen}
              >
                <ListItemIcon>
                  <img
                    src={images.selectedCreate}
                    alt="Logo"
                    style={{
                      maxWidth: '100%',
                      height: '22px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText sx={{ ml: '12px' }}>
                  <Typography sx={{ fontWeight: 500, color:'black' }}>
                    Create
                  </Typography>
                  </ListItemText>
              </ListItemButton>
                ):(
                  <ListItemButton
                sx={{ borderRadius: '50px' }}
                
                onClick={handleOpen}
              >
                <ListItemIcon>
                  <img
                    src={images.create}
                    alt="Logo"
                    style={{
                      maxWidth: '100%',
                      height: '22px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText sx={{ ml: '12px' }}>Create</ListItemText>
              </ListItemButton>
                )
              }
              
            </ListItem>
            <ListItem sx={{
              padding:'0px'
            }} >
              <Link to="/" style={{ textDecoration: 'none' }}>
                <ListItemButton sx={{ borderRadius: '50px' }} >
                  <ListItemIcon>
                    <img
                      src=""
                      alt="Logo"
                      style={{
                        maxWidth: '100%',
                        height: '22px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ ml: '12px' }}>Profile</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottom: 1,
              borderColor: '#DBDBDB',
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '500',
                margin: '8px 0px 8px 0px',
              }}
            >
              Create new post
            </Typography>
          </Box>
          <Box sx={{ p: 6, mt: 8, mb: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="images/create/layout.png"
                alt="Logo"
                style={{
                  // maxWidth:'100%',
                  height: 'auto',
                  width: '74px',
                }}
              />
              <Typography
                mt="15px"
                sx={{
                  fontSize: '20px',
                }}
              >
                Drag photos and videos here
              </Typography>
              <Button
                className="file-input"
                variant="contained"
                component="label"
                sx={{
                  bgcolor: '#0095F6',
                  ':hover': {
                    bgcolor: '#0066B2',
                  },
                  borderRadius: '12px',
                  color: 'white',
                  p: '5px 16px',
                  m: '20px 35px',
                  textTransform: 'none',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  Select From Computer
                  <input
                    hidden
                    // accept="image/*"
                    type="file"
                  />
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default Navbar
