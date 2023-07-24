const temperatureData = JSON.parse(Temperaturedata)[0].temperature;

var data = temperatureData.map((entry) => {
  return {
    date: new Date(entry.date),
    temperature1: parseFloat(entry.temperature1),
    temperature2: Math.floor(Math.random() * 30),
  };
});

console.log(temperatureData);
export default data;