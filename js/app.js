const apiKey = 'aa31ac6600d6f39825e062819e9de032';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const weatherIcon = document.querySelector('.weather-icon');
const cityH1 = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const searchCity = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather( city ) {
    
    const response = await fetch( apiUrl + city + `&appid=${ apiKey }` );
    
    if( response.status === 404 ){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').classList.add('oculto');
    } else {
        let data = await response.json();
    
        console.log( data );
    
        cityH1.innerHTML = `${ data.name }`;
        temp.innerHTML = `${ Math.round(data.main.temp) }°C`;
        humidity.innerHTML = `${ data.main.humidity }%`;
        wind.innerHTML = `${ data.wind.speed } km/h`; 
    
        switch( data.weather[0].main ){
            case 'Clear':
                weatherIcon.src = '../assets/img/clear.png';
                break;
            case 'Clouds':
                weatherIcon.src = '../assets/img/clouds.png';
                break;
            case 'Drizzle':
                weatherIcon.src = '../assets/img/drizzle.png';
                break;
            case 'Mist':
                weatherIcon.src = '../assets/img/mist.png';
                break;
            case 'Rain':
                weatherIcon.src = '../assets/img/rain.png';
                break;
            case 'Snow':
                weatherIcon.src = '../assets/img/snow.png';
                break;
        }
    
        document.querySelector('.weather').classList.remove('oculto');
        document.querySelector('.error').style.display = 'none';
    }

}

searchBtn.addEventListener( 'click', () => {
    checkWeather( searchCity.value );
});