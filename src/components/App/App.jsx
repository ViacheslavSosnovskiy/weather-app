import { useState } from "react";
import Container from "../Container";
import CurrentDay from "../CurrentDay";
import CurrentDayInfo from "../CurrentDayInfo";
import WeatherDays from "../WeatherDays";
import Logo from "../Logo";

import s from "./App.module.scss";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../services/api";
import SearchCityForm from "../SearchCityForm/SearchCityForm";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeContext";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const theme = useTheme();

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const onSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastWeather = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastWeather])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };

  console.log("currentWeather", currentWeather);
  console.log("forecast", forecast);

  return (
    <Container>
      <header className={s.header}>
        <div className={s.wrapper}>
          <Logo />
          <p className={s.title}>React weather</p>
        </div>
        <div className={s.wrapper}>
          <div className={s.change_theme}>
            <GlobalSvgSelector id="change-theme" onClick={changeTheme} />
          </div>
          <SearchCityForm onSearchChange={onSearchChange} />
        </div>
      </header>
      <main className={s.main}>
        <section className={s.section_current_day}>
          {currentWeather && (
            <>
              <CurrentDay data={currentWeather} />
              <CurrentDayInfo data={currentWeather} />
            </>
          )}
        </section>
        <section className={s.section_forecast}>
          {forecast && <WeatherDays data={forecast} />}
        </section>
      </main>
    </Container>
  );
};

export default App;
