const weather = (() => {
	const apiKey = "0227985e5e46cf9a2c09ca948590846a";
	let measureUnit = "";

	const useMeasureUnit = (unit) => {
		measureUnit = unit === "°C" ? "metric" : "imperial";
	};

	const LocationData = (obj) => {
		return {
			lon: obj.coord.lon, 
			lat: obj.coord.lat,
			name: obj.name,
			feels: obj.main.feels_like, 
			temp: obj.main.temp,
			description: obj.weather[0].description,
			icon: obj.weather[0].icon,
			country: obj.sys.country,
			humidity:obj.main.humidity,
		};
	};

	const ForecastData = (obj) => {
		let dateString = obj.dt_txt.split(" ");
		dateString = new Date(dateString[0])
			.toLocaleString("en-US", {
				weekday : "short",
			});

		let timeString = new Date(obj.dt_txt)
			.toLocaleTimeString("en-us", {
				hour12: false,
				hour: "2-digit",
				minute: "2-digit",
			});

		return {
			pop: obj.pop,
			temp: obj.main.temp,
			description: obj.weather[0].description,
			date: dateString,
			time: timeString,
			icon: obj.weather[0].icon,
		};
	};

	const weatherForecastData = (forecast) => {
		const dailyList = [
			forecast.list[2], 
			forecast.list[10],
			forecast.list[18],
			forecast.list[26],
			forecast.list[34],
		];
		
		const daily = dailyList.map( i => ForecastData(i));
		const hourlyList = forecast.list.slice(0,8);
		const hourly = hourlyList.map( i => ForecastData(i));	

		return {
			daily: daily,
			hourly: hourly,
		};
	};

	const getLocationWeather = async (location) => {
		const response = await fetch(`
			http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&units=${measureUnit},
			{mode: 'cors'}
		`);

		if(response.status == 200) {
			const responseObj = await response.json();
			return LocationData(responseObj);
		}

		return "not found";
	};

	const getLocationForecast = async(lat, lon) => {
		const response = await fetch(`
			http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${measureUnit},
			{mode: 'cors'}
		`);
		const obj = await response.json();
		return weatherForecastData(obj);
	};

	const getWeather = async (location, unit) => {
		// console.log(unit);
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

		return data;
	};

	return {
		getWeather,
	};
})();

export default weather; 