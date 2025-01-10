import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Alert, FormControl, MenuItem } from "@mui/material";
import Button from '@mui/material/Button';
import { useContext, useState } from "react";
import datos from '../data/db.json'
import { ApiContext } from "../context/apiContext";

const NuevoVideo = () => {


    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [caratula, setCaratula] = useState('')
    const [categoria, setCategoria] = useState('')
    const [video, setVideo] = useState('')
    const [contenido, setContenido] = useState('')

    const { registrarContenido, mensajeOk, setMensajeOk, error, setError } = useContext(ApiContext);


    const manejarEnvio = (datos) => {

        registrarContenido(datos.titulo, datos.descripcion, datos.caratula, datos.categoria, datos.video, contenido)

        setTitulo('')
        setDescripcion('')
        setCaratula('')
        setCategoria('')
        setVideo('')
        setContenido('')
    }

    const handleReset = () => {
        setTitulo('')
        setDescripcion('')
        setCaratula('')
        setCategoria('')
        setVideo('')
        setContenido('')
    }

    return (
        <div style={{ backgroundColor: '#536c88', paddingBottom: 80 }}>

            <Box
                component={'section'}
                sx={{
                    textAlign: 'center',
                    paddingTop: 10,
                    marginBottom: 3,
                }}>
                <Typography variant="h3" color="white" >NUEVO VIDEO</Typography>

                <Typography variant="p" color="white" fontSize={12}>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</Typography>
            </Box>

            <Divider sx={{ background: '#1e2c3a' }} />

            {mensajeOk && (<Alert variant="filled" severity="success" onClose={() => setMensajeOk(false)}>
                El registro fue exitoso.
            </Alert>)}

            {error && (<Alert variant="filled" severity="error" onClose={() => setError(false)}>
                No fue posible hacer el registro.
            </Alert>)}

            <Box
                component={'form'}
                autoComplete="off"
                onSubmit={(e) => {
                    e.preventDefault()
                    manejarEnvio({
                        titulo,
                        descripcion,
                        video,
                        caratula,
                        categoria
                    })
                }}
                sx={{
                    marginTop: 10,

                }}>

                <Box sx={{
                    display: 'flex',
                    gap: 5,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TextField
                        label="Titulo"
                        id="titulo"
                        sx={{
                            input: { color: 'white' },
                            width: 300
                        }}
                        required
                        color="secondary"
                        placeholder="Ingrese el título"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)} />

                    <FormControl sx={{ width: 300 }}>
                        <InputLabel
                            id="select-label-contenido"
                            sx={{
                                '&.Mui-focused': { color: '#39FF14' },
                                color: 'white'
                            }}
                        >
                            Contenido
                        </InputLabel>
                        <Select
                            labelId="select-label-contenido"
                            id="select-contenido"
                            value={contenido}
                            label="Contenido"
                            color="secondary"
                            required
                            onChange={(e) => setContenido(e.target.value)}
                        >
                            <MenuItem value='Series'>Series</MenuItem>
                            <MenuItem value='Peliculas'>Películas</MenuItem>
                        </Select>

                    </FormControl>

                    <FormControl sx={{ width: 300 }}>
                        <InputLabel
                            id="select-label-categoria"
                            sx={{
                                '&.Mui-focused': { color: '#39FF14' },
                                color: 'white'
                            }}
                        >
                            Categoría
                        </InputLabel>
                        <Select
                            labelId="select-label-categoria"
                            id="select-categoria"
                            value={categoria}
                            label="Categoría"
                            color="secondary"
                            required
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            {datos.categorias.map((categoria) => {
                                return <MenuItem
                                    key={categoria.categoria}
                                    value={categoria.categoria}>
                                    {categoria.categoria}
                                </MenuItem>
                            })}
                        </Select>

                    </FormControl>

                    <TextField
                        label="Imagen"
                        id="imagen"
                        sx={{
                            input: { color: 'white' },
                            width: 300
                        }}
                        required
                        color="secondary"
                        placeholder="Ingrese el enlace de la imagen"
                        type="text"
                        onChange={(e) => setCaratula(e.target.value)}
                        value={caratula}
                    />

                    <TextField
                        label="Video(URL)"
                        id="video"
                        sx={{
                            input: { color: 'white' },
                            width: 300
                        }}
                        required
                        color="secondary"
                        placeholder="Ingrese el enlace del video"
                        value={video}
                        onChange={(e) => setVideo(e.target.value)} />

                    <TextField
                        label="Descripción"
                        id="descripcion"
                        sx={{
                            input: { color: 'white' },
                            width: 400
                        }}
                        required
                        color="secondary"
                        rows={4}
                        multiline
                        placeholder="¿De qué se trata este video?"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)} />
                </Box>

                <Box sx={{
                    display: 'flex',
                    gap: 5,
                    justifyContent: 'center',
                    marginTop: 10
                }}>
                    <Button variant="contained" color="secondary" type="submit">Guardar</Button>
                    <Button variant="outlined" color="secondary" type="reset" onClick={handleReset}>Limpiar</Button>
                </Box>
            </Box>

        </div>
    )
}

export default NuevoVideo