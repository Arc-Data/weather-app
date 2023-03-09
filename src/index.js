import "./main.css";

const apiKey = "0227985e5e46cf9a2c09ca948590846a";

const weather = (() => {
	const getLocationWeather = async () => {
		const response = await fetch(`
			http://api.openweathermap.org/data/2.5/weather?q=Manila,ph&APPID=${apiKey}
		`);
		const weather = await response.json();
		console.log(weather);
		return weather;
	};	

	const getWeather = async () => {
		const object = await getLocationWeather();
		console.log(object);
		const response = await fetch(`
			http://api.openweathermap.org/data/2.5/forecast?lat=${object.coord.lat}&lon=${object.coord.lon}&appid=${apiKey}`
		);
		const forecast = await response.json();
		console.log(forecast);
		// const forecast = await response.json();
	}

	getWeather();
})();
