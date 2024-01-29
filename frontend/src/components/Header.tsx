import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import Logo from './shared/Logo';
import { useAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';

const Header = () => {
  const auth = useAuth();
  return <AppBar sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}>

    <Toolbar sx={{ display: "flex" }}>
      <Logo />
      <div>
        {auth?.isLoggedIn ? (<>
          <NavigationLink bg="#00fffc" to="/chat" text='GO TO CHAT' textcolour='black' />
          <NavigationLink bg="#51538f" textcolour='white' to="/" text='LOGOUT' onClick={auth.logout} />
        </>
        ) : (
          <>
            <NavigationLink bg="#00fffc" to="/login" text='LOGIN' textcolour='black' />
            <NavigationLink bg="#51538f" textcolour='white' to="/signup" text='SIGNUP' />
          </>
        )}
      </div>
    </Toolbar>
  </AppBar>
}

export default Header;

// return <AppBar sx={{position: "static",boxShadow:"none"}}>