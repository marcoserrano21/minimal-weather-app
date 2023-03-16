const apiKey = '25e4eb518cb9ad425f16a3669d0b4ede'; // Replace with your own OpenWeatherMap API key

const input = document.querySelector('input[type="text"]');
const button = document.querySelector('button');
const cityEl = document.querySelector('.city');
const tempEl = document.querySelector('.temp');
const descEl = document.querySelector('.description');
const celsiusEl = document.querySelector('#celsius');
const fahrenheitEl = document.querySelector('#fahrenheit');

let originalTemp = 0; // Store the original temperature value

button.addEventListener('click', () => {
  const city = input.value.trim();
  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        cityEl.textContent = data.name;
        originalTemp = Math.round(data.main.temp); // Update the original temperature value
        tempEl.textContent = `${originalTemp}°`;
        descEl.textContent = data.weather[0].description;
      })
      .catch(error => console.error(error));
  }
  input.value = '';
  input.focus();
});

celsiusEl.addEventListener('click', () => {
  const temp = parseInt(tempEl.textContent);
  if (!isNaN(temp)) {
    tempEl.textContent = `${originalTemp}°`; // Use the original temperature value to convert to Celsius
  }
});

fahrenheitEl.addEventListener('click', () => {
  const temp = parseInt(tempEl.textContent);
  if (!isNaN(temp)) {
    tempEl.textContent = `${Math.round(originalTemp * 1.8 + 32)}°`; // Use the original temperature value to convert to Fahrenheit
  }
});
