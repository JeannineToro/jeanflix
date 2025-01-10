import Box from "@mui/material/Box"
import Banner from "../components/Banner"
import { useFavoritosContext } from "../context/Favoritos"
import MediaCard from "../components/MediaCard"
import { useState } from "react"
import EditarVideo from "../components/EditarVideo"

const MiLista = () => {

    const { favorito } = useFavoritosContext()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div style={{ backgroundColor: '#2C3E50', paddingBottom: 80 }}>
            <Banner />

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

                {favorito.map((fav) => {
                    return <MediaCard
                        id={fav.id}
                        titulo={fav.titulo}
                        caratula={fav.caratula}
                        descripcion={fav.descripcion}
                        video={fav.video}
                        key={fav.id}
                        handleOpen={handleOpen} />
                })}
            </Box>

            {open && (
                <EditarVideo open={open} handleClose={handleClose} />
            )}
        </div>
    )
}

export default MiLista