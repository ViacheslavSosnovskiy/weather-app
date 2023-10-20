import React from 'react'
import s from './CurrentDayInfo.module.scss'
import cloud from '../../assets/images/cloud.png'
import CurrentDayItem from '../CurrentDayItem'

const CurrentDayInfo = () => {
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
    <div className={s.currentDayInfo}>
      <ul className={s.current_day_list}>
        {items.map((item) => (
          <CurrentDayItem key={item.iconId} item={item} />
        ))}
      </ul>
      <img className={s.cloud_img} src={cloud} alt='cloud' />
    </div>
  )
}

export default CurrentDayInfo