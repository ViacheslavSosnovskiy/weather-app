import React from 'react'
import s from './Home.module.scss'
import CurrentDay from '../../components/CurrentDay'
import CurrentDayInfo from '../../components/CurrentDayInfo'
import WeatherDays from '../../components/WeatherDays'
import WeatherTabs from '../../components/WeatherTabs/WeatherTabs'

const Home = () => {
  return (
    <div className={s.home}>
      <div className={s.home_wrapper}>
        <CurrentDay />
        <CurrentDayInfo />
      </div>
        <WeatherTabs /> 
        <WeatherDays />
    </div>
  )
}

export default Home