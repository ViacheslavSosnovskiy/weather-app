import React from 'react'
import s from './PopupWeatherCard.module.scss'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

const PopupWeatherCard = () => {
  return (
    <div className={s.popup_card}>
        <h3 className={s.current_temp}>20°</h3>
        <p className={s.current_day}>Среда</p>
        <div className={s.card_image}>
            <GlobalSvgSelector id='sun' />
        </div>
        <p className={s.current_time}>time: <span>3 p.m.</span></p>
        <p className={s.current_city}>city: <span>Odesa</span></p>

    </div>
  )
}

export default PopupWeatherCard