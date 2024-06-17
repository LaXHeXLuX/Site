import { fetchWeatherApi } from './node_modules/openmeteo';
/*	
const params = {
	"latitude": 58.3806,
	"longitude": 26.7251,
	"current": ["wind_speed_10m", "wind_direction_10m"],
	"hourly": ["temperature_2m", "apparent_temperature", "precipitation", "wind_speed_10m", "wind_direction_10m"]
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);
/*
// Helper function to form time ranges
const range = (start, stop, step) =>
	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

const current = response.current();
const hourly = response.hourly();

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	current: {
		time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
		windSpeed10m: current.variables(0).value(),
		windDirection10m: current.variables(1).value(),
	},
	hourly: {
		time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
			(t) => new Date((t + utcOffsetSeconds) * 1000)
		),
		temperature2m: hourly.variables(0).valuesArray(),
		apparentTemperature: hourly.variables(1).valuesArray(),
		precipitation: hourly.variables(2).valuesArray(),
		windSpeed10m: hourly.variables(3).valuesArray(),
		windDirection10m: hourly.variables(4).valuesArray(),
	},

};

// `weatherData` now contains a simple structure with arrays for datetime and weather data
for (let i = 0; i < weatherData.hourly.time.length; i++) {
	console.log(
		weatherData.hourly.time[i].toISOString(),
		weatherData.hourly.temperature2m[i],
		weatherData.hourly.apparentTemperature[i],
		weatherData.hourly.precipitation[i],
		weatherData.hourly.windSpeed10m[i],
		weatherData.hourly.windDirection10m[i]
	);
}*/