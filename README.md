![GA Chicago](https://avatars3.githubusercontent.com/u/12513784?s=200&v=4)

# wdi-11-chi _curious-turtles_

## Weather App

Use the [OpenWeather API](http://openweathermap.org/current) to fetch the weather from a certain zip code, and update the page to reflect the current weather. [Documentation](http://openweathermap.org/current)

### Requirements
- Ask the user to input the zip they would like to see the weather for. (Hint: use Prompt)

- Use ajax to send a request the OpenWeather API.
NOTE: Because the OpenWeather API is not an open API, every request must end with `&appid=[YOUR API KEY]` (i.e. http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=[YOUR API KEY])

- Use the response to display the current temperature in fahrenheit, the high and low temperate in fahrenheit, the current weather "description", and the name of the city that came back from the API

- Spend a little time styling the app. 

### Examples

#### Start with just one day (today?). You could make it look like the top part of a weather app...
![1 day](http://i.imgur.com/sgO6SCw.png)

#### You could then expand to include a 5 day forecast with more information (below is an example from previous student)
![5 day](https://i.imgur.com/qmaiWWg.png)

