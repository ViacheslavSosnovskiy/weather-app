import React from 'react'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'
import s from './Logo.module.scss'

const Logo = () => {
  return (
    <span className={s.logo}>
      <GlobalSvgSelector id="logo" />
    </span>
  )
}

export default Logo