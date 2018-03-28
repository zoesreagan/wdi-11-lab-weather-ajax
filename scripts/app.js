console.log("hello!");

$('button').on('click', (event) => {
  const zipcode = $('input').val();

  $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&appid=1bb9fac2402697a13090e57339eadb5e',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        displayForecast(data);
      },

      fail: function (error) {
        console.log(error);
      }
  })
})

const kToFaren = (temp) => {
  const fareinheit = (1.8 * (temp - 273.15) + 32)
  return fareinheit;
}

function displayForecast(data) {
  console.log(data);


  const cityName = data.name;
  const currentTemp = "The current temperature is " + Math.round(kToFaren(data.main.temp))
  const tempHigh = "The high is " + Math.round(kToFaren(data.main.temp_max))
  const tempLow = "The low is " + Math.round(kToFaren(data.main.temp_min))
  const weatherOutside = "The weather outside is " + data.weather["0"].description;

 console.log(cityName, currentTemp, tempHigh, tempLow, weatherOutside);
}
