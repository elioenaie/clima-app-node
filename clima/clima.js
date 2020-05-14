const axios = require('axios');

const getClima = async (lat, lon) => {
	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3164325c1df4ef4005c7ee09cf6d7e93&units=metric`);
	return resp.data.main.temp;
}

module.exports = {
	getClima
}