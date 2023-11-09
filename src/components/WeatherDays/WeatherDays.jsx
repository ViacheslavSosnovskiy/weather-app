import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  // AccordionItemPanel,
} from "react-accessible-accordion";
import s from "./WeatherDays.module.scss";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeatherDays = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <Accordion allowZeroExpanded className={s.weather_list}>
      {data.list.splice(0, 7).map((item, index) => (
        <AccordionItem key={index} className={s.weather_card}>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div>
                <h3 className={s.day}>{forecastDays[index]}</h3>
                <img
                  src={`/images/${item.weather[0].icon}.png`}
                  alt="weather"
                />
                <p className={s.weather_info}>{item.weather[0].main}</p>
                <p className={s.weather_temp}>
                  {Math.round(item.main.temp)}°C
                </p>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          {/* <AccordionItemPanel>
            <div>
              <h3>Pressure</h3>
              <p>{item.main.pressure} hPa</p>
            </div>
            <div>
              <h3>Clouds</h3>
              <p>{item.clouds.all}%</p>
            </div>
            <div>
              <h3>Humidity</h3>
              <p>{item.main.humidity}%</p>
            </div>
            <div>
              <h3>Wind speed</h3>
              <p>{item.wind.speed} m/s</p>
            </div>
            <div>
              <h3>Sea level:</h3>
              <p>{item.main.sea_level} m</p>
            </div>
            <div>
              <h3>Feels like:</h3>
              <p>{Math.round(item.main.feels_like)} °C</p>
            </div>
          </AccordionItemPanel> */}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default WeatherDays;