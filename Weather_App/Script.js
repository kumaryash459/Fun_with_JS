

const APIkey = '1f0eba2b6277fc5c9c81629b6ae72e3f';
const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=Patna&units=metric`;

document.getElementById('weather-form').addEventListener('click', function(e){
    e.preventDefault();
    var city = document.getElementById('city-input').value 
    checkWeather(city)

})

async function checkWeather() {
    try {
        const response = await fetch(APIUrl + `&appid=${APIkey}`);
        const res = await response.json();
        console.log(res);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

checkWeather();

// document.getElementById('temp').innerHTML = ``;
document.getElementById('place')
