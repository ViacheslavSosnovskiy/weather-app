import React from 'react'
import s from './CurrentDayItem.module.scss'
import IndicatorSvgSelector from '../../assets/icons/indicators/IndicatorSvgSelector'

const CurrentDayItem = ({item}) => {
  const {iconId, name, value} = item
  
  return (
    <li className={s.item_info}>
        <div className={s.indicator}>
          <IndicatorSvgSelector id={iconId}/>
        </div>
        <div className={s.indicator_name}>{name}</div>
        <div className={s.indicator_value}>{value}</div>
    </li>
  )
}

export default CurrentDayItem