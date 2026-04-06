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
                <ButtonRouter text='Home' href={'/mimas-tek/'}/>
                {/* <ButtonRouter text='Login' href={'/login'}/> */}
                <ButtonRouter text='Skillset' href={'/mimas-tek/skillset'}/>
                <ButtonRouter text='About' href={'/mimas-tek/about'}/>
            </Toolbar>
        </Box>
    );
}

export default Menu;