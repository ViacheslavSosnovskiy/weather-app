import React from 'react'
import s from './WeatherCard.module.scss'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

const WeatherCard = ({item}) => {
    const {day, day_info, icon_id, temp_day, temp_night, additional_info} = item

  return (
    <li className={s.weather_card}>
        <h3 className={s.day}>{day}</h3>
        <p className={s.day_info}>{day_info}</p>
        <div className={s.image}>
          <GlobalSvgSelector id={icon_id} />
        </div>
        <p className={s.temp_day}>{temp_day}</p>
        <p className={s.temp_night}>{temp_night}</p>
        <p className={s.additional_info}>{additional_info}</p>
    </li>
  )
}

export default WeatherCard