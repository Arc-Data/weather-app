import weather from './weather.js';

const DOM = (() => {
	const search = document.querySelector('#searchCity');
	const searchInput = search.querySelector('#search');
	const cityName = document.querySelector('#city-name');
	const weatherDesc = document.querySelector('#weather-desc');
	const rainChance = document.querySelector('#rain-chance');
	const feelsLike = document.querySelector('#feels-like');
	const temperature = document.querySelector('#temperature');

	let unitCode = 'C';
	let unitSymbol;

	const getUnitSymbol = () => {
		const unit = unitCode === 'C' ? "&#8451;" : "&#8457;";
		const textarea = document.createElement('textarea');
		textarea.innerHTML = unit;
		unitSymbol = textarea.value;
	};

	const displayData = async () => {
		const obj = await weather.getWeather(searchInput.value || "Philippines", unitCode);
		console.log(obj);
		if(Object.keys(obj).length == 0) {
			alert("City not found");
			searchInput.value = "";
			return;
		}

		cityName.textContent = obj.name;
		temperature.textContent = `Temperature : ${obj.temp}${unitSymbol}`;
		weatherDesc.textContent = obj.description.charAt(0).toUpperCase() + obj.description.slice(1);
		feelsLike.textContent = `Feels like : ${obj.feels}${unitSymbol}`;
		rainChance.textContent = `Chance of rain : ${obj.list[0].pop * 100}%`;
	};

	const searchCity = (e) => {
		e.preventDefault();
		displayData();
	};

	search.addEventListener('submit', searchCity);

	getUnitSymbol();
	displayData();
})();



export default DOM;