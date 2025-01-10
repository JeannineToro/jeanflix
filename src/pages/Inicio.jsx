import Box from "@mui/material/Box"
import Banner from "../components/Banner"
import MediaCard from "../components/MediaCard"
import Chip from '@mui/material/Chip'
import { useContext, useState } from "react"
import { ApiContext } from "../context/apiContext"
import EditarVideo from "../components/EditarVideo"

const Inicio = () => {

    const { datosPelicula, datosSerie } = useContext(ApiContext)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (<div style={{ backgroundColor: '#2C3E50', paddingBottom: 80 }}>

        <Banner />
        <Chip label="Películas" sx={{ marginTop: 5, backgroundColor: '#ffd700' }} />
        <Box
            component={'section'}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: 3,
                gap: '20px'
            }}>

            {datosPelicula.map((dato) => {

                return <MediaCard
                    id={dato.id}
                    titulo={dato.titulo}
                    caratula={dato.caratula}
                    descripcion={dato.descripcion}
                    video={dato.video}
                    key={dato.id}
                    contenido={'pelicula'}
                    handleOpen={handleOpen} />
            })}
        </Box>

        <Chip label="Series" color="secondary" sx={{ marginTop: 5 }} />

        <Box component={'section'}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: 3,
                gap: '20px',
            }}>

            {datosSerie.map((dato) => {
                return <MediaCard
                    id={dato.id}
                    titulo={dato.titulo}
                    caratula={dato.caratula}
                    descripcion={dato.descripcion}
                    video={dato.video}
                    key={dato.id}
                    contenido={'serie'}
                    handleOpen={handleOpen} />
            })}

        </Box>

        {open && (
            <EditarVideo
                open={open}
                handleClose={handleClose} />
        )}

    </div>
    )
}

export default Inicio