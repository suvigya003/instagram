import { Box} from '@mui/material'
import React from 'react'
import SearchCss from './SearchCss'

const Search = ({searchTab}) => { 

  return (
    <>
        <Box sx={searchTab?SearchCss.sideBarActive:SearchCss.sideBar}>
            Hello Search
        </Box>
    </>
  )
}

export default Search