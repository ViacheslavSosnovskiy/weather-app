import React from 'react'
import Select from 'react-select'

import s from './Header.module.scss'
import Logo from '../Logo'
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector'

const Header = () => {
    const options = [
        { value: 'Odesa', label: 'Odesa' },
        { value: 'Kuiv', label: 'Kuiv' },
        { value: 'Dnepr', label: 'Dnepr' }
      ]
    
    const colorStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
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
                    <GlobalSvgSelector id='change-theme' />
                </div>
                <Select defaultValue={options[0]} styles={colorStyles} options={options} />
            </div>
        </header>
    )
}

export default Header