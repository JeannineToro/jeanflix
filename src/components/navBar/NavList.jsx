import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

const NavList = ({ navLinks, NavLink, setOpen }) => {
    return (
        <Box sx={{ width: 250 }}>
            <nav>
                <List>
                    {
                        navLinks.map(link => (
                            <ListItem disablePadding key={link.titulo}>
                                <ListItemButton
                                    component={NavLink}
                                    to={link.path}
                                    onClick={() => setOpen(false)}>
                                    <ListItemIcon sx={{ color: 'white' }}>{link.icono}</ListItemIcon>
                                    <ListItemText>{link.titulo}</ListItemText>
                                </ListItemButton>
                            </ListItem>

                        ))
                    }
                </List>
            </nav>
        </Box>
    )
}

export default NavList