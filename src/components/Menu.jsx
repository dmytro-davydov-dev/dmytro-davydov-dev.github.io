import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonRouter from '../router/ButtonRouter';

const Menu = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            background: 'transparent',
        }}>
            <Toolbar sx={{background: 'transparent'}} disableGutters>
                <ButtonRouter text='Home' href={'/dmytro-davydov-dev/'}/>
                {/* <ButtonRouter text='Login' href={'/login'}/> */}
                <ButtonRouter text='Skillset' href={'/dmytro-davydov-dev/skillset'}/>
                <ButtonRouter text='About' href={'/dmytro-davydov-dev/about'}/>
            </Toolbar>
        </Box>
    );
}

export default Menu;