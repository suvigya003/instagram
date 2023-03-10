import { Box, Divider,Avatar, Typography,Button, Stack, Modal } from '@mui/material'
import TextField from '@mui/material/TextField';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React,{useState} from 'react'
import PostImage from './PostImage'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  borderRadius:'16px',
  // border: '2px solid #000',
  boxShadow: 34,
  pt: 1,
  pb:1
};

const Post = () => {

  const [open, setOpen] = useState(false);
  const [like, setLike] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLike = () => setLike(true);
  const handleUnLike = () => setLike(false);
  const handleBookmark =()=>setBookmarked(true);
  const handleUnBookmark = () => setBookmarked(false);

  const postImgStyle={    
    width: '100%', /*to keep the img of screen's size always and not it's own size*/
    objectFit: 'contain',/*to not stretch the image*/
    borderTop: '1px solid lightgray',
    borderBottom: '1px solid lightgray'
  }

  return (
    <>
        <Box
            sx={{
                maxWidth:'100%',
                m:'10px 0px',
            }}
        >
            {/* Header */}
            {/* Avatar Username three dots */}
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
                <Avatar sx={{ bgcolor: 'orangered', width:34,height:34, mr:1 }}>S</Avatar>
                <Typography
                  sx={{
                    fontSize:'14px',
                    fontWeight:'500'
                  }}
                >
                  suvigyaTripathi{/*{username} */}
                </Typography>
              </Box>
              <Button onClick={handleOpen} sx={{
                minHeight: 0, minWidth: 0, padding: 0, pr:1,":focus": { outline: 'none' },
              }}>
              <img 
                      src="images/post/more.png" 
                      alt="dots" 
                      style={{
                        maxWidth:'100%',
                        height:'22px'
                        }}
              />
              </Button>
            </Box>
            {/* Image */}
            <Box>
              {/* <img src="images/post/gary-bendig-6GMq7AGxNbE-unsplash.jpg" alt="Goddess Durga" 
                style={postImgStyle}
              /> */}
              <PostImage />
            </Box>
            {/* Text */}
            {/* like comment share bookmark */}
                <Box
                  sx={{
                    // pl:1,
                    // pr:1,
                    display:'flex',
                    justifyContent:'space-between'
                  }}
                >
                  <Stack direction='row' spacing={1}
                  >
                    {
                      like?(
                        <Button onClick={handleUnLike} sx={{minHeight: 0, minWidth: 0, padding: 0,":focus": { outline: 'none' },}}>
                          <FavoriteIcon sx={{color:'red'}}/>
                        </Button>
                      ):(
                        <Button onClick={handleLike} sx={{minHeight: 0, minWidth: 0, padding: 0,":focus": { outline: 'none' },}}>
                          <FavoriteBorderIcon sx={{color:'black'}}/>
                        </Button>
                      )
                    }
                    <img src="images/post/comment.png" style={{
                      height:'25px',
                      width:'25px'
                    }} />
                    <img src="images/post/share.png" style={{
                      marginTop:2,
                      height:'20px',
                      width:'20px'
                    }} />
                  </Stack>
                  <Box>
                    {
                      bookmarked?(
                        <Button onClick={handleUnBookmark} sx={{minHeight: 0, minWidth: 0, padding: 0,":focus": { outline: 'none' },}} >
                        <BookmarkIcon sx={{color:'black'}}/>
                     </Button>
                      ):(                        
                     <Button onClick={handleBookmark} sx={{minHeight: 0, minWidth: 0, padding: 0,":focus": { outline: 'none' },}}>
                     <BookmarkBorderIcon  sx={{color:'black'}} />
                   </Button>
                      )
                    }
                  </Box>
                </Box>
            {/* username caption */}
            <Box sx={{
              display:'flex'
            }}>
              <Typography
                sx={{
                  fontSize:'14px',
                  fontWeight:'500',
                  mr:1,
                  ml:1
                }}
              >
                suvigyaTripathi 
                {/* username */}
              </Typography>
              <Typography
                sx={{
                  fontSize:'14px',
                  // fontWeight:'500'
                }}
              > 
                Hello!!! Welcome ******
              </Typography>
            </Box>
            {/* time */}
            <Box pl={1}pt={1}>
              <Typography
                sx={{
                  fontSize:'10px',
                  color:'#ADADAD'
                }}
              >
                10 HOURS AGO
              </Typography>
              {/* time */}
            </Box>
            {/* comment */}
            <Box pl={1}>
            <TextField variant='standard' 
              fullWidth
              multiline
              placeholder="Add a comment..."
              InputProps={{
                disableUnderline:true,
                style:{
                  fontSize:'14px'
                }
              }}
            />
            </Box>
            
        </Box>
        <Divider/>

        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Stack 
      divider={<Divider flexItem />}
      alignItems='center'
      justifyContent='center'
      spacing={1}
      >
      
        <Button  sx={{textTransform:'none'}} >
          <Typography  sx={{
            fontSize:'14px',
            fontWeight:'600',
            color:'#ED4956'
          }} >Report</Typography>
        </Button>
      
      
        <Button  sx={{textTransform:'none'}} >
          <Typography sx={{
            fontSize:'14px',
            fontWeight:'600',
            color:'#ED4956'
          }} >Unfollow</Typography>
        </Button>
      
      
        <Button  sx={{textTransform:'none'}} >
          <Typography  sx={{
            fontSize:'14px',
            color:'#262626'
          }} >Add to favourites</Typography>
        </Button>
      
      
        <Button  sx={{textTransform:'none'}} >
          <Typography sx={{
            fontSize:'14px',
            color:'#262626'
          }} >Go to post</Typography>
        </Button>
      
      
        <Button sx={{textTransform:'none'}}>
          <Typography sx={{
            fontSize:'14px',
            color:'#262626'
          }} >Cancel</Typography>
        </Button>
      
    </Stack>
  </Box>
</Modal>
    </>
  )
}

export default Post