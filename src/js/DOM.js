import weather from './weather.js';

const DOM = (() => {
	const search = document.querySelector('#searchCity');
	const searchInput = search.querySelector('#search');
	const cityName = document.querySelector('#city-name');
	const weatherDesc = document.querySelector('#weather-desc');

	const displayData = async () => {
		const obj = await weather.getWeather(searchInput.value || "Philippines");
		console.log(obj);
		if(Object.keys(obj).length == 0) {
			return;
		}

		cityName.textContent = obj.name || "Philippines";
		weatherDesc.textContent = obj.description.charAt(0).toUpperCase() + obj.description.slice(1);
	};

	const searchCity = (e) => {
		e.preventDefault();
		displayData();
	};

	search.addEventListener('submit', searchCity);

	displayData();
})();



export default DOM;