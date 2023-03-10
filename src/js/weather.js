const weather = (() => {
	const apiKey = "0227985e5e46cf9a2c09ca948590846a";

	const getLocationWeather = async (location) => {
		const response = await fetch(`
			http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}
		`);

		if(response.status == 200) {
			const obj = await response.json();
			return obj;
		}

		return "not found";

	};

	const getLocationForecast = async(lat, lon) => {
		const response = await fetch(`
			http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}
		`);
		const obj = response.json();
		return obj;
	};

	const getWeather = async (location) => {
		const data = {};
		const locationWeather = await getLocationWeather(location);
		if(locationWeather === "not found") {
			return data;
		}
		const locationForecast = await getLocationForecast(locationWeather.coord.lat, locationWeather.coord.lon);
		data.name = locationWeather.name;
		Object.assign(
			data, 
			locationWeather.main, 
			locationWeather.weather[0]
		);

		return data;

	};

	return {
		getWeather,
	};
})();

export default weather; 