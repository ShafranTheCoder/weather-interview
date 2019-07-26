const button = document.getElementById('weather-btn');
const input = document.getElementById('weather-input');
const tempValue = document.querySelector('.temperature__value');
const pressureValue = document.querySelector('.pressure__value');
const humidityValue = document.querySelector('.humidity__value');
const maxTempValue = document.querySelector('.max-temp__value');
const minTempValue = document.querySelector('.min-temp__value');
const timeZone = document.querySelector('.timezone__value');
const timeZone2 = document.querySelector('.timezone__value2');

const weatherDesc = document.querySelector('.weather-description__value');
button.addEventListener('click', function () {
  let inputValue = document.getElementById('weather-input').value;

  console.log(inputValue);
  const API_KEY = `ec6299bae46d282119b52a4ef05c9501`;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`;
  fetch(api).then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data)
      const {
        humidity,
        pressure,
        temp,
        temp_max,
        temp_min
      } = data.main;
      const cityName = data.name;
      const weatherInfo = data.weather[0].description;
      const countryGeo = data.sys.country;
      console.log(temp)
      tempValue.textContent = temp;
      pressureValue.textContent = pressure;
      humidityValue.textContent = humidity;
      maxTempValue.textContent = temp_max;
      minTempValue.textContent = temp_min;
      timeZone.textContent = cityName;
      weatherDesc.textContent = weatherInfo;
      timeZone2.textContent = countryGeo;
    });

});