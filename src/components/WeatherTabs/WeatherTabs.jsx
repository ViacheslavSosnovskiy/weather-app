import React from 'react'
import s from './WeatherTabs.module.scss'
import WeatherTabItem from '../WeatherTabItem/WeatherTabItem';

const WeatherTabs = () => {
  const tabs = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    },
  ];

  return (
    <div className={s.weather_tabs}>
      <ul className={s.tabs_list}>
        {tabs.map(item => (
          <WeatherTabItem key={item.value} item={item} />
        ))}
      </ul>
      <div className={s.cancel_button}>cancel</div>
    </div>
  )
}

export default WeatherTabs