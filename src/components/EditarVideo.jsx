import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Alert, FormControl, InputLabel, MenuItem, Select, styled, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { ApiContext } from '../context/apiContext';
import datos from '../data/db.json'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'primary.main',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

const CssTextField = styled(TextField)({
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        color: 'white',
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
    },

    '& .MuiInputLabel-outlined': {
        color: 'white'
    },
});

const CssSelect = styled(Select)({
    '& .MuiSelect-select': {
        color: 'white'
    },

    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white'
    },


})

const EditarVideo = ({ open, handleClose }) => {

    const { seleccion, editarContenido, mensajeOk, setMensajeOk, error, setError } = useContext(ApiContext)


    const [titulo, setTitulo] = useState(seleccion.titulo)
    const [caratula, setCaratula] = useState(seleccion.caratula)
    const [descripcion, setDescripcion] = useState(seleccion.descripcion)
    const [video, setVideo] = useState(seleccion.video)
    const [categoria, setCategoria] = useState('')

    const botonEditar = () => {
        editarContenido(seleccion.id, titulo, descripcion, caratula, categoria, video, seleccion.contenido)
    }

    const closed = () => {
        handleClose()
        setMensajeOk(false)
    }

    const handleReset = () => {
        setTitulo('')
        setCaratula('')
        setDescripcion('')
        setVideo('')
        setCategoria('')
    }



    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <IconButton sx={{ position: 'absolute', right: 0, top: 0, color: 'white' }} onClick={closed}>
                        <CloseIcon />
                    </IconButton>
                    <Typography id="modal-modal-title" color='white' variant="h6" component="h2">
                        EDITAR CARD:
                    </Typography>

                    {mensajeOk && (<Alert variant="filled" severity="success">
                        Contenido editado con exito.
                    </Alert>)}

                    {error && (<Alert variant="filled" severity="error" onClose={() => setError(false)}>
                        No fue posible editar el contenido.
                    </Alert>)}
                    <Box
                        component={'form'}
                        onSubmit={(e) => e.preventDefault()}
                        autoComplete="off"
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            gap: 1,
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>

                        <CssTextField
                            label="Titulo"
                            id="titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            sx={{ input: { color: 'white' }, width: 300 }} color="secondary"
                            placeholder="Ingrese el título"
                            size='small' />


                        <FormControl sx={{ width: 300 }} size='small'>
                            <InputLabel id="select-label-categoria" sx={{ '&.Mui-focused': { color: '#39FF14' }, color: 'white' }}>Categoría</InputLabel>
                            <CssSelect
                                labelId="select-label-categoria"
                                id="select-categoria"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                label="Categoría"
                                color="secondary"
                                size='small'
                            >
                                {datos.categorias.map((categoria) => {
                                    return <MenuItem
                                        key={categoria.categoria}
                                        value={categoria.categoria}>
                                        {categoria.categoria}
                                    </MenuItem>
                                })}
                            </CssSelect>

                        </FormControl>

                        <CssTextField
                            label="Imagen"
                            id="imagen"
                            value={caratula}
                            onChange={(e) => setCaratula(e.target.value)}
                            sx={{ input: { color: 'white' }, width: 300 }} color="secondary"
                            placeholder="Ingrese el enlace de la imagen"
                            size='small' />

                        <CssTextField
                            label="Video(URL)"
                            id="video"
                            value={video}
                            onChange={(e) => setVideo(e.target.value)}
                            sx={{ input: { color: 'white' }, width: 300 }} color="secondary"
                            placeholder="Ingrese el enlace del video"
                            size='small' />

                        <CssTextField
                            label="Descripción"
                            id="descripcion"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            sx={{ input: { color: 'white' }, width: 400 }} color="secondary"
                            rows={3}
                            multiline
                            placeholder="¿De qué se trata este video?" />

                        <Box sx={{
                            display: 'flex',
                            gap: 5,
                            justifyContent: 'center',
                            marginTop: 2
                        }}>
                            <Button variant="contained" type='submit' color="secondary" onClick={botonEditar}>Guardar</Button>
                            <Button variant="outlined" color="secondary" type='reset' onClick={handleReset}>Limpiar</Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default EditarVideo