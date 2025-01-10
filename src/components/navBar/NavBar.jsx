import { useState } from "react"
import Drawer from "@mui/material/Drawer"
import NavList from "./NavList"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/icons-material/Menu"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { Link, NavLink } from "react-router"



const NavBar = ({ navLinks }) => {

    const [open, setOpen] = useState(false)
    return (
        <>

            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{ display: { sx: "flex", sm: "none" } }}>
                        <Menu />
                    </IconButton>
                    <img src="../JeanFlix.png" alt="Logo de JeanFlix" style={{ width: "90px" }} />

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {
                            navLinks.map(link => (
                                <Button
                                    color="inherit"
                                    key={link.titulo}
                                    component={NavLink}
                                    to={link.path}>
                                    {link.titulo}
                                </Button>
                            ))
                        }
                    </Box>

                    <Box sx={{ marginLeft: "auto" }}>
                        <Link to={"/nuevo-video"}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                size="small">

                                Nuevo video
                            </Button>
                        </Link>

                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                sx={{ display: { xs: "flex", sm: "none" } }}
                PaperProps={{
                    sx: { backgroundColor: 'primary.main', color: 'white' }
                }}
                onClose={() => setOpen(false)}>

                <NavList
                    navLinks={navLinks}
                    NavLink={NavLink}
                    setOpen={setOpen} />
            </Drawer>
        </>
    )
}

export default NavBar