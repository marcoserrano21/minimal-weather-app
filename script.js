const apiKey = '25e4eb518cb9ad425f16a3669d0b4ede'; // Replace with your own OpenWeatherMap API key

const input = document.querySelector('input[type="text"]');
const button = document.querySelector('button');
const cityEl = document.querySelector('.city');
const tempEl = document.querySelector('.temperature');
const descEl = document.querySelector('.description');
const celsiusEl = document.querySelector('#celsius');
const fahrenheitEl = document.querySelector('#fahrenheit');

if (!input) {
  console.error('Could not find input element');
}

if (!button) {
  console.error('Could not find button element');
}

if (!cityEl) {
  console.error('Could not find city element');
}

if (!tempEl) {
  console.error('Could not find temperature element');
}

if (!descEl) {
  console.error('Could not find description element');
}

if (!celsiusEl) {
  console.error('Could not find celsius element');
}

if (!fahrenheitEl) {
  console.error('Could not find fahrenheit element');
}

button.addEventListener('click', () => {
  const city = input.value ? input.value.trim() : '';
  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        cityEl.textContent = data.name;
        tempEl.textContent = `${Math.round(data.main.temp)}°`;
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
    tempEl.textContent = `${temp}°`;
  }
});

fahrenheitEl.addEventListener('click', () => {
  const temp = parseInt(tempEl.textContent);
  if (!isNaN(temp)) {
    tempEl.textContent = `${Math.round(temp * 1.8 + 32)}°`;
  }
});
