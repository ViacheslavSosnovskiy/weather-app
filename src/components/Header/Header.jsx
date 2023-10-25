import React from 'react'
import Select from 'react-select'

import s from './Header.module.scss'
import Logo from '../Logo'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'
import { useTheme } from '../../hooks/useTheme'
import { Theme } from '../../context/ThemeContext'

const Header = () => {
    const theme = useTheme()
    console.log(theme)

    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    const options = [
    { value: 'Odesa', label: 'Odesa' },
    { value: 'Kuiv', label: 'Kuiv' },
    { value: 'Dnepr', label: 'Dnepr' }
  ]

  const colorStyles = {
    control: (styles) => ({ 
        ...styles,
        backgroundColor: theme.theme === Theme.LIGHT ? 'rgba(71, 147, 255, 0.2)' : '#4f4f4f',
        width: '194px',
        height: '37px',
        border: 'none',
        borderRadius: '10px',
    }),
    singleValue: (styles) => ({ 
        ...styles,
        color: theme.theme === Theme.LIGHT ? '#fff' : '#000',
    })
}
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <Logo />
                <p className={s.title}>React weather</p>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSvgSelector id='change-theme' onClick={changeTheme} />
                </div>
                <Select defaultValue={options[0]} styles={colorStyles} options={options} />
            </div>
        </header>
    )
}

export default Header