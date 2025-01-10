import { BrowserRouter, Route, Routes } from "react-router"
import Inicio from "./Inicio"
import Series from "./Series"
import Peliculas from "./Peliculas"
import MiLista from "./MiLista"
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavBar from "../components/navBar/NavBar"
import NuevoVideo from "./NuevoVideo"
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Footer from '../components/Footer'
import FavoritosProvider from "../context/Favoritos"
import ApiProvider from "../context/apiContext"





const theme = createTheme({
    palette: {
        primary: {
            main: '#2C3E50'
        },
        secondary: {
            main: '#39FF14'
        }
    }
})

const navLinks = [
    {
        titulo: "Inicio",
        path: "/",
        icono: <HomeIcon />
    },
    {
        titulo: "Series",
        path: "/series",
        icono: <OndemandVideoIcon />
    },
    {
        titulo: "Películas",
        path: "/peliculas",
        icono: <MovieIcon />
    },
    {
        titulo: "Mi lista",
        path: "/mi-lista",
        icono: <FavoriteIcon />
    }
]

const AppRoutes = () => {
    return (

        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NavBar navLinks={navLinks} />
                <ApiProvider>
                    <FavoritosProvider>
                        <Routes>
                            <Route path="/" element={<Inicio />} />
                            <Route path="/series" element={<Series />} />
                            <Route path="/peliculas" element={<Peliculas />} />
                            <Route path="/mi-lista" element={<MiLista />} />
                            <Route path="/nuevo-video" element={<NuevoVideo />} />
                        </Routes>
                    </FavoritosProvider>
                </ApiProvider>

                <Footer />

            </ThemeProvider>
        </BrowserRouter>
    )
}

export default AppRoutes