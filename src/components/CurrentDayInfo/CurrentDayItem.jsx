import React from 'react'
import s from './CurrentDayInfo.module.scss'

const CurrentDayItem = ({item}) => {
  return (
    <li className={s.item_info}>
        <div className={s.indicator}></div>
        <div className={s.indicator_name}></div>
        <div className={s.indicator_value}></div>
    </li>
  )
}

export default CurrentDayItem