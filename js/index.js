const APP_ID = '6c94b121072375d11f2838cb01b76b12';
const DEFAULT_VALUE = "--";


const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const searchBox = document.querySelector(".search-box");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const sunset = document.querySelector(".sunset");
const sunrise = document.querySelector(".sunrise");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");




searchBox.addEventListener('change', (e) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&APPID=${APP_ID}&units=metric&lang=vi`)
        .then(async res => {
            const data = await res.json();
            console.log('[Search Input]', data);
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
            sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
            humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
            windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
        })
});