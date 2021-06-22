import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get("api.openweathermap.org/data/2.5/weather?q=London", {
      params: {
        lat: lat,
        long: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (location === false) {
    return (
      <Fragment>Você precisa habilitar a localização no browser o/</Fragment>
    )
  } else if (weather === false ){
      return (
        <Fragment>
          Carregando o clima ...
        </Fragment>
      )
  } else {
    return (
      <Fragment>
        <h3>Clima nas suas coordenadas ({weather['weather'][0]['description']})</h3>
        <hr />
        <ul>
          <li>Temperatura atual: {weather['main']['temp']}*</li>
          <li>Temperatura máxima: {weather['main']['temp_max']}*</li>
          <li>Temperatura mínima: {weather['main']['temp_min']}*</li>
          <li>Pressão: {weather['main']['pressure']} hpa</li>
          <li>Umidade: {weather['main']['humidity']}%</li>
        </ul>
      </Fragment>
    );
  }
}

export default App;
