import React from 'react'
import s from './CurrentDay.module.scss'

const CurrentDay = ({data}) => {
  return (
    <div className={s.currentDay}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <p className={s.current_day}>Today</p>
          <p className={s.current_temp}>{Math.round(data.main.temp)}°C</p>
        </div>
        <img src={`/images/${data.weather[0].icon}.png`} alt='weather'/>
      </div>
        <p className={s.current_weather}>{data.weather[0].main}</p>
        <p className={s.current_city}>city: <span>{data.city}</span></p>
    </div>
  )
}

export default CurrentDay