import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import createImg from '../images/create/layout.png'

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

const Create = ({open,create,setCreate,setOpen}) => {

  // const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
    setCreate(true)
  }
  const handleClose = () => {
    setOpen(false)
    setCreate(false)
  }

  return (
    <>
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
                src={createImg}
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

export default Create