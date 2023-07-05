const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a55e4d696dmsh9502ea71962c6b9p16181fjsnfc3e1521369d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
    cityname.innerHTML = city 
    cityname1.innerHTML = city 
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())

	.then((response)  => {

    console.log(response)

    cloud_pct.innerHTML= response.cloud_pct
    cloud_pct3.innerHTML= response.cloud_pct
    temp.innerHTML= response.temp
    temp3.innerHTML= response.temp
    temp1.innerHTML= response.temp
    feels_like.innerHTML= response.feels_like
    feels_like3.innerHTML= response.feels_like
    humidity.innerHTML= response.humidity
    humidity3.innerHTML= response.humidity
    humidity2.innerHTML= response.humidity
    min_temp.innerHTML= response.min_temp
    min_temp3.innerHTML= response.min_temp
    max_temp.innerHTML= response.max_temp
    max_temp3.innerHTML= response.max_temp
    wind_speed.innerHTML= response.wind_speed
    wind_speed2.innerHTML= response.wind_speed
    wind_speed3.innerHTML= response.wind_speed
    // wind_degrees.innerHTML= response.wind_degrees
    sunrise.innerHTML= response.sunrise
    sunrise3.innerHTML= response.sunrise
    sunset.innerHTML= response.sunset
    sunset3.innerHTML= response.sunset
    })


	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)

})

getWeather("Delhi")