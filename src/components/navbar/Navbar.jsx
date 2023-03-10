import React, { useState } from 'react'
import createImg from '../images/create/layout.png'
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
  Avatar,
} from '@mui/material'
import { Link } from 'react-router-dom'
import images from '../images'
import Search from '../search/Search'
import searchCss from '../search/SearchCss'
import Notifications from '../notifications/Notifications'
import Create from '../create/Create'
// import instaNameLogo from 'images/navbar/instaNameLogo.jpg'



const Navbar = ({ color }) => {
  const [open, setOpen] = useState(false)
  const [home, setHome] = useState(false)
  const [search, setSearch] = useState(false)
  const [explore, setExplore] = useState(false)
  const [reels, setReels] = useState(false)
  const [messages, setMessages] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [create, setCreate] = useState(false)
  const [notificationsTab, setNotificationsTab] = useState(false)
  const [tab, setTab] = useState(false)
  const handleOpen = () => {
    setOpen(true)
    setCreate(true)
  }
  const handleClose = () => {
    setOpen(false)
    setCreate(false)
  }
  const handleHome = () => setHome(true)
  const handleNotHome = () => setHome(false)
  const handleSearch = () => setSearch(true)
  const handleNotSearch = () => {
    // searchTab==true?setSearchTab(false):setSearchTab(true)
    tab==true?setTab(false):setTab(true)
    setSearch(false)
  }
  const handleExplore = () => setExplore(true)
  const handleNotExplore = () => setExplore(false)
  const handleReels = () => setReels(true)
  const handleNotReels = () => setReels(false)
  const handleMessages = () => setMessages(true)
  const handleNotMessages = () => setMessages(false)
  const handleNotifications = () => {
    notificationsTab==true?setNotificationsTab(false):setNotificationsTab(true)
    // notificationsTab==true?setNotifications(true):setNotifications(false)
    setNotifications(!notifications)
  } 
  const handleNotNotifications = () => setNotifications(false)

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
            <ListItem
              sx={{
                padding: '0px',
              }}
            >
              {home ? (
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <ListItemButton
                    sx={{ borderRadius: '50px', p: '12px' }}
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
                      <Typography sx={{ fontWeight: 500, color: 'black' }}>
                        Home
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </Link>
              ) : (
                <ListItemButton
                  sx={{ borderRadius: '50px', p: '12px' }}
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
            </ListItem>
            <ListItem
              sx={{
                padding: '0px',
              }}
            >
              {search ? (
                <ListItemButton
                  sx={{ borderRadius: '50px', p: '12px' }}
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
                    <Typography sx={{ fontWeight: 500, color: 'black' }}>
                      Search
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              ) : (
                <ListItemButton
                  sx={{ borderRadius: '50px', p: '12px' }}
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
            <ListItem
              sx={{
                padding: '0px',
              }}
            >
              {explore ? (
                <Link to="/explore" style={{ textDecoration: 'none' }}>
                  <ListItemButton
                    sx={{ borderRadius: '50px', p: '12px' }}
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
                      <Typography sx={{ fontWeight: 500, color: 'black' }}>
                        Explore
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </Link>
              ) : (
                <Link to="/explore" style={{ textDecoration: 'none' }}>
                  <ListItemButton
                    sx={{ borderRadius: '50px', p: '12px' }}
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
                </Link>
              )}
            </ListItem>
            <ListItem
              sx={{
                padding: '0px',
              }}
            >
              <Link to="/reels/videos" style={{ textDecoration: 'none' }}>
                {reels ? (
                  <ListItemButton
                    sx={{ borderRadius: '50px', p: '12px' }}
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
                      <Typography sx={{ fontWeight: 500, color: 'black' }}>
                        Reels
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    sx={{ borderRadius: '50px', p: '12px' }}
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
            <ListItem
              sx={{
                padding: '0px',
              }}
            >
              <Link to="/direct/inbox" style={{ textDecoration: 'none' }}>
                {messages ? (
                  <ListItemButton
                    sx={{ borderRadius: '50px', p: '12px',  }}
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
                      <Typography sx={{ fontWeight: 500, color: 'black' }}>
                        Messages
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    sx={{ borderRadius: '50px', p: '12px' }}
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
            <ListItem
              sx={{
                padding: '0px',
              }}
            >
              {notifications ? (
                <ListItemButton
                  sx={{ borderRadius: '50px', p: '12px' }}
                  onClick={handleNotifications}
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
                    <Typography sx={{ fontWeight: 500, color: 'black' }}>
                      Notifications
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              ) : (
                <ListItemButton
                  sx={{ borderRadius: '50px', p: '12px' }}
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
            <ListItem
              sx={{
                padding: '0px',
              }}
            >
              {create ? (
                <ListItemButton
                  sx={{ borderRadius: '50px', p: '12px' }}
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
                    <Typography sx={{ fontWeight: 500, color: 'black' }}>
                      Create
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              ) : (
                <ListItemButton
                  sx={{ borderRadius: '50px', p: '12px' }}
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
              )}
            </ListItem>
            <ListItem
              sx={{
                padding: '0px',
              }}
            >
              <Link to="/" style={{ textDecoration: 'none' }}>
                <ListItemButton
                  sx={{ borderRadius: '50px', p: '12px', p: '12px' }}
                >
                  <ListItemIcon>
                    {/* <img
                      src=""
                      alt="Logo"
                      style={{
                        maxWidth: '100%',
                        height: '22px',
                      }}
                    /> */}
                    <Avatar sx={{ bgcolor: 'orangered', width:28,height:28, }}>S</Avatar>
                  </ListItemIcon>
                  <ListItemText sx={{ ml: '12px' }}>Profile</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
      
      <Create create={create} setCreate={setCreate} open={open} setOpen={setOpen} />      
      <Search tab={tab} setTab={setTab}/>
      <Notifications notificationsTab={notificationsTab} setNotificationsTab={setNotificationsTab} />
    </>
  )
}

export default Navbar
