import datos from '../data/db.json'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Categorias = ({ categoria, handleChange }) => {


    return (
        <Box sx={{ maxWidth: 150, marginTop: 5, marginLeft: 2 }}>
            <FormControl fullWidth variant='standard'>
                <InputLabel id="lista-categorias" color='secondary' sx={{ color: '#fff' }}>Categoría</InputLabel>
                <Select
                    labelId="lista-categorias"
                    id="categorias"
                    value={categoria}
                    label="Categoria"
                    onChange={handleChange}
                    sx={{
                        color: '#ffff',
                    }}
                    color='secondary'
                >

                    <MenuItem value={'Todas'}>Todas</MenuItem>

                    {datos.categorias.map((categoria) => {
                        return <MenuItem
                            key={categoria.categoria}
                            value={categoria.categoria}>
                            {categoria.categoria}
                        </MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    )
}

export default Categorias