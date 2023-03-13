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
	const forecastContainer = document.querySelector('.forecast-content');

	let unitCode = 'C';
	let unitSymbol;

	const getUnitSymbol = () => {
		const unit = unitCode === 'C' ? "&#8451;" : "&#8457;";
		const textarea = document.createElement('textarea');
		textarea.innerHTML = unit;
		unitSymbol = textarea.value;
	};

	const getWeatherIcon = (iconcode, container) => {
		const img = document.createElement('img');
		img.src = `http://openweathermap.org/img/w/${iconcode}.png`;

		console.log(img);
		container.appendChild(img);
	};

	const resetForecastContainer = () => {
		while(forecastContainer.lastChild) {
			forecastContainer.removeChild(forecastContainer.firstChild);
		}
	};

	const createForecastCard = (weather) => {
		const div = document.createElement('div');
		div.classList.add('forecast-card');
		const date = document.createElement('p');
		date.textContent = weather.date;
		const imgContainer = document.createElement('div');
		imgContainer.textContent = weather.description; 
		const h2 = document.createElement('h2');
		h2.textContent = Math.floor(weather.temp);
		
		div.appendChild(date);
		div.appendChild(imgContainer);
		div.appendChild(h2);
		forecastContainer.appendChild(div);
	};

	const generateForecastCards = (obj) => {
		resetForecastContainer();
		obj.forEach(i => createForecastCard(i));
	};

	const displayData = async () => {
		const obj = await weather.getWeather(searchInput.value || "Philippines", unitCode);

		console.log(obj);
		if(Object.keys(obj).length == 0) {
			alert("City not found");
			searchInput.value = "";
			return;
		}

		cityName.textContent = `${obj.name}, ${obj.country}`;
		temperature.textContent = `${obj.temp}`;
		weatherDesc.textContent = obj.description.charAt(0).toUpperCase() + obj.description.slice(1);
		feelsLike.textContent = `${obj.feels}`;
		rainChance.textContent = `${obj.list[0].pop * 100} %`;
		humidity.textContent = obj.humidity + " %";

		generateForecastCards(obj.list);

	};

	const searchCity = (e) => {
		e.preventDefault();
		displayData();
	};

	const init = () => {
		displayData();
	};

	search.addEventListener('submit', searchCity);
	
	init();
})();



export default DOM;