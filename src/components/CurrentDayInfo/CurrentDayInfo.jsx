import React from 'react'
import s from './CurrentDayInfo.module.scss'
import cloud from '../../images/cloud.png'
import CurrentDayItem from './CurrentDayItem'

const CurrentDayInfo = () => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];
  return (
    <div className={s.currentDayInfo}>
      <ul className={s.current_day_list}>
        items.map((item) => {
          <CurrentDayItem item={item} />
        })
      </ul>
      <img src={cloud} alt='cloud' />
    </div>
  )
}

export default CurrentDayInfo