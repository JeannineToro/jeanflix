import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import ReactPlayer from 'react-player/youtube'
import { useContext } from 'react';
import { ApiContext } from '../context/apiContext';

const Banner = () => {

    const { seleccionBanner } = useContext(ApiContext)

    return (
        <Box
            component={"section"}
            sx={{
                background: 'url(https://www.blogdelfotografo.com/wp-content/uploads/2021/12/Fondo_Negro_3.webp) no-repeat',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px'
            }}>
            <Container>
                <Grid2 container spacing={2}>
                    <Grid2 item={+true} size={{ md: 8, sm: 6, xs: 12 }}>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { md: 'row', xs: 'column' },
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 3
                            }}>

                            <img
                                src={seleccionBanner.caratula} alt='Caratula de la película' width={530}
                            />

                            <Box>
                                <Typography variant='h4' color='#4b7bab'>
                                    {seleccionBanner.titulo}
                                </Typography>

                                <Divider />

                                <Typography component={'p'} color='#adabab' sx={{ fontSize: '14px', width: { md: '370px', xs: '300px' } }}>{seleccionBanner.descripcion}</Typography>
                            </Box>
                        </Box>


                    </Grid2>

                    <Grid2 item={+true} size={{ md: 4, sm: 6, xs: 12 }}>
                        <ReactPlayer
                            url={seleccionBanner.video}
                            playing={true}
                            height={300}
                            width={'100%'}
                            playsinline={true}
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>

    )
}

export default Banner