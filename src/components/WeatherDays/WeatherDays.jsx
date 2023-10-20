import React from 'react'
import s from './WeatherDays.module.scss'
import WeatherCard from '../WeatherCard';

const WeatherDays = () => {
    const days = [
        {
          day: 'Сегодня',
          day_info: '28 авг',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          additional_info: 'Облачно',
        },
        {
          day: 'Завтра',
          day_info: '29 авг',
          icon_id: 'small_rain_sun',
          temp_day: '+18',
          temp_night: '+15',
          additional_info: 'небольшой дождь и солнце',
        },
        {
          day: 'Ср',
          day_info: '30 авг',
          icon_id: 'small_rain',
          temp_day: '+18',
          temp_night: '+15',
          additional_info: 'небольшой дождь',
        },
        {
          day: 'Чт',
          day_info: '28 авг',
          icon_id: 'mainly_cloudy',
          temp_day: '+18',
          temp_night: '+15',
          additional_info: 'Облачно',
        },
        {
          day: 'Пт',
          day_info: '28 авг',
          icon_id: 'rain',
          temp_day: '+18',
          temp_night: '+15',
          additional_info: 'Облачно',
        },
        {
          day: 'Сб',
          day_info: '28 авг',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          additional_info: 'Облачно',
        },
        {
          day: 'Вс',
          day_info: '28 авг',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          additional_info: 'Облачно',
        },
      ];

  return (
    <ul className={s.days_list}>
        {days.map((item) => (
            <WeatherCard key={item.day} item={item} />
        ))}
    </ul>
  )
}

export default WeatherDays