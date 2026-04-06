import React from 'react';
import { Box, Stack, Typography, List, ListItem, ListItemText, ListItemButton,
    Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import useDialog from '../hooks/useDialog';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import MovingNetwork from '../components/MovingNetwork';
import RotatingSphereNetwork from '../components/RotatingSphereNetwork';
import FixedNetworkCanvas from '../components/FixedNetworkCanvas';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
}));

const Home = () => {
    const [DialogComponent, openDialog] = useDialog();

    return (
        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* <Stack spacing={2}> */}
                <BlurOnIcon color="primary" sx={{ fontSize: 100 }} />
                <Typography variant="h4" component="h1" color="text.darkBlue">
                    Mimas Tek
                </Typography>
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Connecting the Dots
                </Typography>
                <MovingNetwork />
            {/* </Stack> */}
        </Box>
    );
};

export default Home;
