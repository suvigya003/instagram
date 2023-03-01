import { Box, Typography } from '@mui/material'
import React from 'react'
import notificationsCss from './NotificationsCss'

const Notifications = ({notificationsTab,setNotificationsTab}) => {
  return (
    <>
        <Box sx={(notificationsTab)?notificationsCss.notificationsActive:notificationsCss.notificationsInActive
        }>
          <Box sx={{
              p:'20px 10px 15px 10px',
            }} > 
                <Typography sx={{
                    ml:'10px',
                    mb:'30px',
                    fontSize:'24px',
                    fontWeight:'700',
                }} >
                    Notifications
                </Typography>
                </Box>
        </Box>
        <Box sx={(notificationsTab)?notificationsCss.notificationsOverlayActive:notificationsCss.notificationsOverlayInActive
        } onClick={()=>setNotificationsTab(!notificationsTab)} >
          </Box>
    </>
  )
}

export default Notifications