import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"


const Footer = () => {
    return (
        <Box component={'footer'} sx={{ backgroundColor: '#1b2630', textAlign: 'center' }}>
            <img src="../JeanFlix.png" alt="Logo de JeanFlix" style={{ width: "90px", marginTop: 10 }} />

            <Typography
                component={'p'}
                sx={{
                    color: 'white',
                    fontSize: 12,
                    paddingBottom: 2
                }}>
                Desarrollado por Jeannine Toro
            </Typography>
        </Box>
    )
}

export default Footer