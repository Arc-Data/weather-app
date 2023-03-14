import weather from './weather.js';

const DOM = (() => {
	const search = document.querySelector('#searchCity');
	const searchInput = search.querySelector('#search');
	const cityName = document.querySelector('#city-name');
	const weatherDesc = document.querySelector('#weather-desc');
	const rainChance = document.querySelector('#rain-chance');
	const feelsLike = document.querySelector('#feels-like');
	const temperature = document.querySelector('#temperature');
	const humidity = document.querySelector('#humidity');
	const date = document.querySelector('#date');
	const forecastDaily = document.querySelector('.daily');
	const forecastHourly = document.querySelector('.hourly');
	const toggleContainer = document.querySelector('.toggle-container');
	const toggle = toggleContainer.querySelector('.toggle');

	let unitCode = 'C';
	let unitSymbol;
	let city = 'Philippines';

	const toggleReading = () => {
		// const reading = toggleContainer.dataset.reading;
		unitCode = unitCode === 'C' ? 'F' : 'C';
		// console.log(toggleContainer.dataset.reading);
		toggle.classList.toggle('farenheit');
		toggleContainer.classList.toggle('farenheit-container');
		displayData(city);
	};

	const toggleFarenheit = () => {

	};


	const getUnitSymbol = () => {
		const unit = unitCode === 'C' ? "&#8451;" : "&#8457;";
		const textarea = document.createElement('textarea');
		textarea.innerHTML = unit;
		unitSymbol = textarea.value;
	};

	const getWeatherIcon = (iconcode, container) => {
		const img = document.createElement('img');
		img.src = `http://openweathermap.org/img/w/${iconcode}.png`;
		img.classList.add('weather-icon');
		container.appendChild(img);
	};

	const resetForecastContainer = (element) => {
		while(element.lastChild) {
			element.removeChild(element.firstChild);
		}
	};

	const createForecastCard = (weather, idx) => {
		const div = document.createElement('div');
		div.classList.add('forecast-card');
		
		const date = document.createElement('p');
		date.textContent = idx === 0 ? "Today" : weather.date;
		
		const imgContainer = document.createElement('div');
		getWeatherIcon(weather.icon, imgContainer);
		
		const h2 = document.createElement('h2');
		h2.textContent = Math.floor(weather.temp);
		
		div.appendChild(date);
		div.appendChild(imgContainer);
		div.appendChild(h2);
		forecastDaily.appendChild(div);
	};

	const createHourlyList = (obj) => {
		const container = document.createElement('div');
		container.classList.add('hour-card');
		const time = document.createElement('p');
		time.textContent = obj.time;
		const desc = document.createElement('p');
		desc.textContent = obj.description;
		const temp = document.createElement('p');
		temp.textContent = obj.temp;

		container.appendChild(time);
		container.appendChild(desc);
		container.appendChild(temp);
		forecastHourly.appendChild(container);
	};

	const generateDailyCards = (obj) => {
		resetForecastContainer(forecastDaily);
		obj.forEach((i, idx) => createForecastCard(i, idx));
	};

	const generateHourlyList = (obj) => {
		resetForecastContainer(forecastHourly);
		obj.forEach(i => createHourlyList(i));
	};

	const displayData = async (location) => {
		const obj = await weather.getWeather(searchInput.value || location, unitCode);
		if(Object.keys(obj).length == 0) {
			alert("City not found");
			searchInput.value = "";
			return;
		}

		city = obj.name;
		cityName.textContent = `${obj.name}, ${obj.country}`;
		temperature.textContent = `${obj.temp}`;
		weatherDesc.textContent = obj.description.charAt(0).toUpperCase() + obj.description.slice(1);
		feelsLike.textContent = `${obj.feels}`;
		rainChance.textContent = `${obj.daily[0].pop * 100} %`;
		humidity.textContent = obj.humidity + " %";

		generateDailyCards(obj.daily);
		generateHourlyList(obj.hourly);
	};

	const searchCity = (e) => {
		e.preventDefault();
		displayData();
	};

	const init = () => {
		toggleContainer.dataset.reading = 'C';
		displayData(city);
	};

	search.addEventListener('submit', searchCity);
	toggleContainer.addEventListener('click', toggleReading);

	init();
})();



export default DOM;