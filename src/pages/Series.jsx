import Box from "@mui/material/Box"
import Banner from "../components/Banner"
import MediaCard from "../components/MediaCard"
import Categorias from "../components/Categorias"
import { useContext, useState } from "react"
import EditarVideo from "../components/EditarVideo"
import { ApiContext } from "../context/apiContext"

const Series = () => {

    const [categoria, setCategoria] = useState('Todas')
    const { datosSerie } = useContext(ApiContext)


    const handleChange = (event) => {
        setCategoria(event.target.value);
    };

    const seriesFiltradas = datosSerie.filter((serie) => {
        if (categoria === 'Todas') {
            return true
        }

        return serie.categoria === categoria
    })


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (<div style={{ backgroundColor: '#2C3E50', paddingBottom: 80 }}>


        <Banner />

        <Categorias categoria={categoria} handleChange={handleChange} />
        <Box
            component={"section"}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: 3,
                gap: '20px',
            }}>

            {seriesFiltradas.map((serie) => {
                return <MediaCard
                    id={serie.id}
                    titulo={serie.titulo}
                    caratula={serie.caratula}
                    descripcion={serie.descripcion}
                    video={serie.video}
                    key={serie.id}
                    contenido={'serie'}
                    handleOpen={handleOpen} />
            })}
        </Box>

        {open && (
            <EditarVideo open={open} handleClose={handleClose} />
        )}
    </div>

    )
}

export default Series