import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Box from '@mui/material/Box';
import { useFavoritosContext } from '../context/Favoritos';
import { useContext } from 'react';
import { ApiContext } from '../context/apiContext';


const MediaCard = ({ id, titulo, caratula, descripcion, video, handleOpen, contenido }) => {

    const { favorito, agregarFavorito } = useFavoritosContext()
    const { seleccionar, eliminarContenido, seleccionarBanner } = useContext(ApiContext)
    const isFavorito = favorito.some(fav => fav.id === id)

    const handleEditar = () => {

        seleccionar({ id, titulo, caratula, descripcion, video, contenido })
        handleOpen()
    }

    const eliminar = async () => {

        await eliminarContenido(contenido, id)

    }



    return (
        <Card
            sx={{
                maxWidth: 200,
            }}>
            <Box
                component={"div"}
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    ':hover': {
                        '& .icono': {
                            opacity: 1,
                        }
                    }
                }}>
                <Box
                    className='icono'
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0, 0.6)',
                        position: 'absolute',
                        transition: 'opacity 0.3s ease-in-out',
                        opacity: 0,

                    }}>
                    <DeleteForeverIcon
                        fontSize='medium'
                        onClick={eliminar}
                        sx={{
                            color: 'rgb(217, 23, 23)',
                            cursor: 'pointer',
                            ':hover': {
                                color: 'red'
                            }
                        }} />

                    <ZoomInIcon
                        fontSize='medium'
                        onClick={() => seleccionarBanner({ titulo, caratula, descripcion, video })}
                        sx={{
                            color: 'secondary.main',
                            cursor: 'pointer',
                            ':hover': {
                                color: 'primary.main'
                            }
                        }} />

                </Box>
                <CardMedia
                    component={"img"}
                    image={caratula}
                    title={titulo}
                    height={300}
                    sx={{ objectFit: 'cover' }}
                />
            </Box>
            <CardContent>
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{
                        height: 30,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>
                    {titulo}
                </Typography>

                <Typography
                    component="p"
                    sx={{
                        height: 50,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        marginTop: 2
                    }}>
                    {descripcion}
                </Typography>
            </CardContent>
            <CardActions>

                {isFavorito
                    ?
                    <IconButton onClick={() => agregarFavorito({ id, titulo, caratula, descripcion })}>
                        <FavoriteIcon />
                    </IconButton>
                    :
                    <IconButton onClick={() => agregarFavorito({ id, titulo, caratula, descripcion })}>
                        <FavoriteBorderIcon />
                    </IconButton>}


                <IconButton onClick={() => handleEditar()}>
                    <ModeEditIcon />
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default MediaCard