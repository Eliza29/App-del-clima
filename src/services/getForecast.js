
const geForecast = ({lat='33.44', lon='-94.04'}={}) => {
    const apiURL= ` https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&lang=es&appid=${process.env.REACT_APP_OPENWEATHER_APIKEY}`

    return (  
        fetch(apiURL)
        .then(res => res.json())
        .then(response =>{
            const data = response
            const day = data.daily
            const daily = day.map((oneDay)=>{
                const icon = oneDay.weather[0].icon
                const minMax =  `${oneDay.temp.min}°C - ${oneDay.temp.max}°C`
                return {
                    ...oneDay,
                    TempMinMax: minMax,
                    icon: `https://openweathermap.org/img/wn/${icon}@2x.png`
                }
            })
            
            return daily

        })
    )
}
 
export default geForecast;