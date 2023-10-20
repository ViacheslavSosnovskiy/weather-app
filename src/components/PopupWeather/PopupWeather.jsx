import React from 'react'
import s from './PopupWeather.module.scss'
import CurrentDayItem from '../CurrentDayItem/CurrentDayItem';

const PopupWeather = () => {
    const items = [
        {
          iconId: 'temp',
          name: 'Температура',
          value: '20° - ощущается как 17°',
        },
        {
          iconId: 'pressure',
          name: 'Давление',
          value: '765 мм ртутного столба - нормальное',
        },
        {
          iconId: 'precipitation',
          name: 'Осадки',
          value: 'Без осадков',
        },
        {
          iconId: 'wind',
          name: 'Ветер',
          value: '3 м/с юго-запад - легкий ветер',
        },
      ];
  return (
    <>
      <div className={s.weather_popup}>
        <ul className={s.weather_popup_list}>
            {items.map(item => (
                <CurrentDayItem key={item.iconId} item={item}/>
            ))}
        </ul>
      </div>
    </>
  )
}

export default PopupWeather