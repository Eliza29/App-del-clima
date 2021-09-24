import {Contenedor, BoxLeft, BoxRight, Title, ContenedorClima, Loading} from './../elementos/estilos'
import {ContenedorDaily, ContenedorArrDaily, Dia, TituloPronostico} from './../elementos/estilosPronostico'
import getForecast from './../services/getForecast'
import {useEffect, useState} from 'react'
import BotonIr from './BotonIr'
import {getTheDay} from './../funciones/getFecha'


const Forecast = () => {
    const [cargando, setCargando] =useState(false)
    const [pronosticos, cambiarPronostico] = useState({})

    useEffect( function() {

        setCargando(true)
        const coordenadas= JSON.parse(localStorage.getItem('coordenadas'))
        const lat=coordenadas.lat
        const lon= coordenadas.lon
       
        getForecast({lat, lon}).then(weather=>{
            cambiarPronostico(weather)
            setCargando(false)
        })
        
    }, [])

    return (  
        <Contenedor>
            <BoxLeft>
                <Title>¡Encuentra el clima de tu ciudad!</Title>
            </BoxLeft>
            <BoxRight>
                <ContenedorClima>
                {cargando ? 
                    <Loading />
                :
                <>
                    <TituloPronostico>Los siguientes 7 días</TituloPronostico>
                    <ContenedorArrDaily>
                    { 
                        pronosticos.length && 
                            pronosticos.map((pronostico, index)=>{
                                return(
                                <ContenedorDaily key={index}>
                                    <Dia>{getTheDay(pronostico.dt)}</Dia>
                                    <img src={pronostico.icon} alt='pronostico'/>
                                    <span>{pronostico.TempMinMax}</span>
                                </ContenedorDaily>
                                ) 
                            })
                    }
                    </ContenedorArrDaily>
                    <BotonIr />    
                </>
                }
                </ContenedorClima>
            </BoxRight>
            
        </Contenedor>
    );
}
 
export default Forecast;