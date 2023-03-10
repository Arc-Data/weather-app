import weather from './weather.js';

const DOM = (() => {
	const cityName = document.querySelector('#city-name');
	const search = document.querySelector('#searchCity');
	const searchInput = search.querySelector('#search');

	const displayData = async () => {
		cityName.textContent = searchInput.value;
	};

	const searchCity = (e) => {
		e.preventDefault();
		displayData();
	};

	search.addEventListener('submit', searchCity);
})();


export default DOM;