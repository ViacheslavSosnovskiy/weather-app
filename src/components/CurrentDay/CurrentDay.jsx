import React from 'react'
import s from './CurrentDay.module.scss'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

const CurrentDay = () => {
  return (
    <div className={s.currentDay}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.current_temp}>24°</div>
          <div className={s.current_day}>today</div>
        </div>
        <GlobalSvgSelector id='sun'/>
      </div>
      <div className={s.bottom_block}>
        <div className={s.current_time}>time: <span>3 p.m.</span></div>
        <div className={s.current_city}>city: <span>Odesa</span></div>
      </div>
    </div>
  )
}

export default CurrentDay