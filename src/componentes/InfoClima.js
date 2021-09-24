import getWeather from './../services/getWeather'
import {useEffect, useState} from 'react'
import {DivIcon, DivTemp, DivClima, Ptemp, Loading, BoxMainCLima} from './../elementos/estilos'
import {getFecha} from './../funciones/getFecha'
import BotonIr from './BotonIr'

const InfoClima = ({keyword}) => {
    
    const [cargando, setCargando] =useState(false)
    const [clima, cambiarClima] = useState({})

    useEffect( function() {

        setCargando(true)
        getWeather({keyword}).then(weather=>{
            cambiarClima(weather)
            setCargando(false)
        }).catch((e)=>{
            console.log(e, 'error')
            cambiarClima({})
            setCargando(false)
        })
        
    }, [keyword])
    

    if(cargando) return <Loading/>
    
    return (

        <BoxMainCLima>
            {clima.main?
            <>
                <DivIcon>         
                    <img src={clima.icon} alt='imagen'/>
                    <div>
                        <p>Hoy</p>
                        <p>{getFecha(clima.dt)}</p>
                    </div>
                 
                </DivIcon>   
                <DivTemp>
                    <Ptemp>{clima.main.temp} °C</Ptemp> 
                    <h3>{keyword}</h3>
                </DivTemp>
                <DivClima>
                    <p><span>{clima.description}</span></p>
                    <p><span>Sensación Térmica</span> <span>{clima.main.feels_like} °C  </span></p> 
                    <p><span>Humedad</span> <span>{clima.main.humidity} %</span> </p>
                    <p><span>Vientos</span> <span>{clima.wind.speed} m/s </span></p>
                </DivClima>
                <BotonIr cord={clima.coord}/>
            </>
            : <p>Debe escribir correctamente la ciudad y pais. Escribir Ciudad, pais por ejemplo: Quito, ecuador</p>
            }
            
        </BoxMainCLima>
    );
 

}
 
export default InfoClima;