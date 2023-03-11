const weather = (() => {
	const apiKey = "0227985e5e46cf9a2c09ca948590846a";
	let measureUnit = "";

	const useMeasureUnit = (unit) => {
		measureUnit = unit === 'C' ? "metric" : "imperial";
	};

	const weatherLocationData = (obj) => {
		// const lat = (obj) ? obj.coord.lat : 0;
		let lon = 0, lat = 0;

		if("coord" in obj) {
			lon = obj.coord.lon;
			lat = obj.coord.lat;
		}
   

		return {
			lon: lon, 
			lat: lat,
			name: obj.name,
			feels: obj.main.feels_like, 
			temp: obj.main.temp,
			description: obj.weather[0].description,
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
		const list = forecastList.map( i => weatherLocationData(i));

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
			const newObj = weatherLocationData(responseObj);
			return newObj;
		}

		return "not found";

	};

	const getLocationForecast = async(lat, lon) => {
		const response = await fetch(`
			http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${measureUnit}
		`);
		const obj = await response.json();
		const dataObj = weatherForecastData(obj);
		
		return dataObj;
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

		console.log(data);
		return data;

	};

	return {
		getWeather,
	};
})();

export default weather; 