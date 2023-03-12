const weather = (() => {
	const apiKey = "0227985e5e46cf9a2c09ca948590846a";
	let measureUnit = "";

	const useMeasureUnit = (unit) => {
		measureUnit = unit === 'C' ? "metric" : "imperial";
	};

	const LocationData = (obj) => {
		console.log(obj);
		return {
			lon: obj.coord.lon, 
			lat: obj.coord.lat,
			name: obj.name,
			feels: obj.main.feels_like, 
			temp: obj.main.temp,
			description: obj.weather[0].description,
			icon: obj.weather[0].icon,
			country: obj.sys.country,
		};
	};

	const ForecastData = (obj) => {
		return {
			pop: obj.pop,
			temp_max: obj.main.temp_max,
			temp_min: obj.main.temp_min,
			description: obj.weather[0].main,
		};
	};

	const weatherForecastData = (forecast) => {
		const forecastList = [
			forecast.list[2], 
			forecast.list[10],
			forecast.list[18],
			forecast.list[26],
			forecast.list[34],
		];
		const list = forecastList.map( i => ForecastData(i));

		return {
			list: list
		};
	};

	const getLocationWeather = async (location) => {
		const response = await fetch(`
			http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&units=${measureUnit}
		`);

		if(response.status == 200) {
			const responseObj = await response.json();
			return LocationData(responseObj);
		}

		return "not found";
	};

	const getLocationForecast = async(lat, lon) => {
		const response = await fetch(`
			http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${measureUnit}
		`);
		const obj = await response.json();
		return weatherForecastData(obj);
	};

	const getWeather = async (location, unit) => {
		useMeasureUnit(unit); 
		
		const data = {};
		const locationWeather = await getLocationWeather(location);
		if(locationWeather === "not found") {
			return data;
		}
		
		const locationForecast = await getLocationForecast(locationWeather.lat, locationWeather.lon);
		Object.assign(
			data,
			locationWeather,
			locationForecast
		);

		// console.log(data);
		return data;
	};

	return {
		getWeather,
	};
})();

export default weather; 