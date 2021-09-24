
const getWeather = ({keyword='London,uk'} ={}) => {
    const apiURL= `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&units=metric&lang=es&appid=${process.env.REACT_APP_OPENWEATHER_APIKEY}`

    return (  
        fetch(apiURL)
        .then(res => res.json())
        .then(response =>{
            const data = response
            const icon= data.weather[0].icon;
            const description= data.weather[0].description;
            const dataWeather = {...data, description:description, icon: `https://openweathermap.org/img/wn/${icon}@2x.png`}
            
            return dataWeather

        })
    )
}
 
export default getWeather;