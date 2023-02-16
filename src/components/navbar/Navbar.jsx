import React,{useState} from 'react'
import { theme } from "../../theme";
import { 
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  ListItemText, 
  ListItemIcon,
  Modal,
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom';
// import instaNameLogo from 'images/navbar/instaNameLogo.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 380,
  width:'100%',
  height:'380',
  bgcolor: 'white',
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius:'12px',
  // p: '24px',
};

const Navbar = ({color}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [answerFile,setAnswerFile]=useState();
  // const handleAnswerFile = (e) => {
  //   setAnswerFile(e.target.files[0], '$$$$');
  //   console.log(answerFile);
  // };

  return (
    <>
    <Box 
    // bgcolor={color}
    sx={{
      p:'8px 12px 20px 12px',
      borderRight:1, 
      borderColor:'#DBDBDB'
    }}
    >
      {/* <Box sx={{
        maxWidth:'100%',
        p:'30px 12px 20px 12px',
        // border:'1px solid black'
      }}>
        <img 
          src='images/navbar/instaNameLogo.jpg'
          alt="Logo" 
          style={{
            maxWidth:'100%',
            height:'auto'
            }}
        />
      </Box>   */}
      <Box
        sx={{
          maxWidth:'100%',
          height:'auto',
          minHeight:'70px',
        p:'12px 0px 12px 0px',
        // borderRadius:'80px',
        // border:'1px solid black',
        overflow:'auto'
        }}
      >
        <List > 
              <ListItem disablePadding>
                <Link to="/" style={{ textDecoration: 'none' }}>
                <ListItemButton sx={{borderRadius:'50px'}} disablePadding>
                  <ListItemIcon>
                    <img 
                      src="images/navbar/home.png" 
                      alt="Logo" 
                      style={{
                        maxWidth:'100%',
                        height:'22px'
                        }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ml:'12px'}}>
                    Home
                  </ListItemText> 
                </ListItemButton>
                </Link>                
              </ListItem> 
            <ListItem disablePadding>
                <ListItemButton sx={{borderRadius:'50px'}} disablePadding>
                  <ListItemIcon>
                    <img 
                      src="images/navbar/search.png" 
                      alt="Logo" 
                      style={{
                        maxWidth:'100%',
                        height:'22px'
                        }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ml:'12px'}}>
                    Search
                  </ListItemText> 
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <Link to="/explore" style={{ textDecoration: 'none' }}>
                <ListItemButton sx={{borderRadius:'50px'}} disablePadding>
                  <ListItemIcon>
                    <img 
                      src="images/navbar/explore.png" 
                      alt="Logo" 
                      style={{
                        maxWidth:'100%',
                        height:'22px'
                        }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ml:'12px'}}>
                    Explore
                  </ListItemText> 
                </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link to="/reels/videos" style={{ textDecoration: 'none' }}>
                <ListItemButton sx={{borderRadius:'50px'}} disablePadding>
                  <ListItemIcon>
                    <img 
                      src="images/navbar/reels.png" 
                      alt="Logo" 
                      style={{
                        maxWidth:'100%',
                        height:'22px'
                        }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ml:'12px'}}>
                    Reels
                  </ListItemText> 
                </ListItemButton>
                </Link>                
              </ListItem>
              <ListItem disablePadding>
                <Link to="direct/inbox" style={{ textDecoration: 'none' }}>
                <ListItemButton sx={{borderRadius:'50px'}} disablePadding>
                  <ListItemIcon>
                    <img 
                      src="images/navbar/messenger.png" 
                      alt="Logo" 
                      style={{
                        maxWidth:'100%',
                        height:'22px'
                        }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ml:'12px'}}>
                    Messages
                  </ListItemText> 
                </ListItemButton>
                </Link>                
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{borderRadius:'50px'}} disablePadding>
                  <ListItemIcon>
                    <img 
                      src="images/navbar/notifications.png" 
                      alt="Logo" 
                      style={{
                        maxWidth:'100%',
                        height:'22px'
                        }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ml:'12px'}}>
                    Notifications
                  </ListItemText> 
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{borderRadius:'50px'}} disablePadding onClick={handleOpen}>
                  <ListItemIcon>
                    <img 
                      src="images/navbar/create.png" 
                      alt="Logo" 
                      style={{
                        maxWidth:'100%',
                        height:'22px'
                        }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ml:'12px'}}>
                    Create
                  </ListItemText> 
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <Link to="/" style={{ textDecoration: 'none' }}>
                <ListItemButton sx={{borderRadius:'50px'}} disablePadding>
                  <ListItemIcon>
                    <img 
                      src="" 
                      alt="Logo" 
                      style={{
                        maxWidth:'100%',
                        height:'22px'
                        }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ml:'12px'}}>
                    Profile
                  </ListItemText> 
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
          <Box sx={{display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              borderBottom:1 ,borderColor:'#DBDBDB'}} >
            <Typography 
              sx={{
                fontSize:'16px',
                lineHeight:'24px',
                fontWeight:'500',
                margin:'8px 0px 8px 0px'
              }}
            >
              Create new post
            </Typography>
          </Box>
          <Box sx={{p:6,mt:8,mb:6}} >
            <Box sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center'
            }} >
              <img 
                      src="images/create/layout.png" 
                      alt="Logo" 
                      style={{
                        // maxWidth:'100%',
                        height:'auto',
                        width:'74px'
                        }}
                    />
            <Typography mt='15px' sx={{
              fontSize:'20px',
            }}>
              Drag photos and videos here
            </Typography>
            <Button 
              className="file-input"
              variant="contained" 
              component="label"
              sx={{
              bgcolor:'#0095F6', 
              ':hover':{
                bgcolor:'#0066B2'
              },
              borderRadius:'12px', 
              color:'white',
              p:'5px 16px', 
              m:'20px 35px', 
              textTransform:'none'
             }} 
             >
              <Typography sx={{
                fontSize:'14px',
                fontWeight:600
              }} >
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