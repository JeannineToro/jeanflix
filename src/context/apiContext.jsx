import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext()

export default function ApiProvider({ children }) {
    const [datosPelicula, setDatosPelicula] = useState([]);
    const [datosSerie, setDatosSerie] = useState([]);
    const [mensajeOk, setMensajeOk] = useState(false)
    const [error, setError] = useState(false);
    const [seleccion, setSeleccion] = useState({})
    const [peliculas, setPeliculas] = useState([])
    const [series, setSeries] = useState([])
    const [seleccionBanner, setSeleccionBanner] = useState({
        titulo: "Shingeki no Kyojin",
        caratula: "https://posters.movieposterdb.com/13_10/2013/2560140/s_2560140_dbea78d1.jpg",
        descripcion: "Después de que su ciudad natal es destruida y su madre es asesinada, el joven Eren Yeager jura limpiar la tierra de los gigantescos Titanes humanoides que han llevado a la humanidad al borde de la extinción.",
        video: "https://youtu.be/oDnARvGtaRs?si=xpUdhjE_n2Bz_aqY"
    })


    const urlApiPeliculas = "https://677da9ed94bde1c125291574.mockapi.io/api/v1/peliculas";
    const urlApiSeries = "https://677da9ed94bde1c125291574.mockapi.io/api/v1/series";

    useEffect(() => {
        const peliculas = async () => {
            const conexionPeliculas = await fetch(urlApiPeliculas);
            const conexionConvertida = await conexionPeliculas.json();

            setDatosPelicula(conexionConvertida);
        }

        peliculas();
    }, [peliculas])


    useEffect(() => {
        const series = async () => {
            const conexionSeries = await fetch(urlApiSeries);
            const conexionConvertidaSeries = await conexionSeries.json();

            setDatosSerie(conexionConvertidaSeries);
        }

        series();
    }, [series])

    const seleccionar = (contenido) => {
        setSeleccion(contenido)
    }

    const seleccionarBanner = (contenidoBanner) => {
        setSeleccionBanner(contenidoBanner)
    }


    async function registrarContenido(titulo, descripcion, caratula, categoria, video, contenido) {

        if (contenido === "Peliculas") {

            try {
                const conexion = await fetch(urlApiPeliculas, {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ titulo, descripcion, caratula, categoria, video })
                });
                if (!conexion.ok) throw new Error("Error al registrar la película");

                setMensajeOk(true)
                const datos = await conexion.json();
                setPeliculas(datos)
            } catch (error) {
                setError(true)
                console.error(error);
            }
        } else if (contenido === "Series") {
            try {
                const conexion = await fetch(urlApiSeries, {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ titulo, descripcion, caratula, categoria, video })
                });
                if (!conexion.ok) throw new Error("Error al registrar la serie");

                setMensajeOk(true)
                const datos = await conexion.json();
                setSeries(datos)
            } catch (error) {
                setError(true)
                console.error(error);
            }
        }


    }


    async function editarContenido(id, titulo, descripcion, caratula, categoria, video, contenido) {

        if (contenido === "pelicula") {
            try {
                const conexion = await fetch(urlApiPeliculas + `/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        titulo,
                        descripcion,
                        caratula,
                        categoria,
                        video
                    })
                })

                setMensajeOk(true)
                const datos = await conexion.json()

                setPeliculas(datos)

            } catch (error) {
                setError(true)
                console.error(error)
            }
        } else if (contenido === "serie") {
            try {
                const conexion = await fetch(urlApiSeries + `/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        titulo,
                        descripcion,
                        caratula,
                        categoria,
                        video
                    })
                })

                setMensajeOk(true)
                const datos = await conexion.json()
                setSeries(datos)

            } catch (error) {
                setError(true)
                console.error(error)
            }
        }

    }

    async function eliminarContenido(contenido, id) {

        if (contenido === 'pelicula') {
            try {
                const conexion = await fetch(urlApiPeliculas + `/${id}`, {
                    method: 'DELETE'
                })

                if (!conexion.ok) {
                    throw new Error("Error al eliminar la película");
                }

                const datos = await conexion.json()
                setPeliculas(datos)

            } catch (error) {
                console.error(error)
            }
        } else if (contenido === "serie") {
            try {
                const conexion = await fetch(urlApiSeries + `/${id}`, {
                    method: 'DELETE'
                })

                if (!conexion.ok) {
                    throw new Error("Error al eliminar la serie");
                }

                const datos = await conexion.json()
                setSeries(datos)
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <ApiContext.Provider
            value={{
                datosPelicula,
                datosSerie,
                error,
                registrarContenido,
                mensajeOk,
                setMensajeOk,
                error,
                setError,
                seleccion,
                seleccionBanner,
                seleccionar,
                seleccionarBanner,
                editarContenido,
                eliminarContenido
            }}>

            {children}
        </ApiContext.Provider>
    )
}
