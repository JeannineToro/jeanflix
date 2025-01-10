import { useContext, useState } from 'react'
import Banner from '../components/Banner';
import Categorias from '../components/Categorias';
import Box from '@mui/material/Box';
import MediaCard from '../components/MediaCard';
import EditarVideo from '../components/EditarVideo';
import { ApiContext } from '../context/apiContext';

const Peliculas = () => {

    const [categoria, setCategoria] = useState('Todas')
    const { datosPelicula } = useContext(ApiContext)
    const handleChange = (event) => {
        setCategoria(event.target.value);
    };

    const peliculasFiltradas = datosPelicula.filter((pelicula) => {
        if (categoria === 'Todas') {
            return true
        }

        return pelicula.categoria === categoria
    })

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div style={{ backgroundColor: '#2C3E50', paddingBottom: 80 }}>

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

                {peliculasFiltradas.map((pelicula) => {
                    return <MediaCard
                        id={pelicula.id}
                        titulo={pelicula.titulo}
                        caratula={pelicula.caratula}
                        descripcion={pelicula.descripcion}
                        video={pelicula.video}
                        contenido={'pelicula'}
                        key={pelicula.id}
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

export default Peliculas