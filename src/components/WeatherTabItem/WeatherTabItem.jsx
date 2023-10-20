import React from 'react'
import s from './WeatherTabItem.module.scss'

const WeatherTabItem = ({item}) => {
  return (
    <li className={s.tab_item}>
        <div className={s.tab_button}>{item.value}</div>
    </li>
  )
}

export default WeatherTabItem