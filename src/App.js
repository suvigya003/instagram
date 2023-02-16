import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme';
import Landingpage from './components/landingpage/LandingPage';
import Explore from './components/explore/Explore';
import Reels from './components/reels/Reels';
import Messages from './components/messages/Messages';
import Profile from './components/profile/Profile';
import Navbar from './components/navbar/Navbar';
import {Grid} from '@mui/material';
import HomePage from './components/home/HomePage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Grid container> */}
          {/* <Grid item lg={2}> */}
            {/* <Navbar /> */}
          {/* </Grid> */}
          {/* <Grid item lg={10}> */}
            <BrowserRouter >
              <Routes>
              {/* <Navbar /> */}
                <Route  path="/" element={<HomePage/>} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/reels/videos" element={<Reels/>} />
                <Route path="/direct/inbox" element={<Messages/>} />
                <Route path="/profile" element={<Profile/>} />
              </Routes>
            </BrowserRouter>
          {/* </Grid> */}
        {/* </Grid>         */}
      </ThemeProvider>      
    </>
  );
}

export default App;
