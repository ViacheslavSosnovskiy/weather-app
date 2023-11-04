import React from 'react'
import s from './CurrentDay.module.scss'

const CurrentDay = ({data}) => {
  return (
    <div className={s.currentDay}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <p className={s.current_temp}>{Math.round(data.main.temp)}°C</p>
          <p>{data.weather[0].main}</p>
        </div>
        <img src={`/images/${data.weather[0].icon}.png`} alt='weather'/>


      </div>
      <div className={s.bottom_block}>
        <p className={s.current_time}>time: <span>3 p.m.</span></p>
        <p className={s.current_city}>city: <span>{data.city}</span></p>
      </div>
    </div>
  )
}

export default CurrentDay