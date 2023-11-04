import React from 'react'
import s from './Header.module.scss'
import Logo from '../Logo'
// import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'
import SearchCityForm from '../SearchCityForm/SearchCityForm'

const Header = () => {
    // const theme = useTheme()

    // const changeTheme = () => {
    //     theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    // }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <Logo />
                <p className={s.title}>React weather</p>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    {/* <GlobalSvgSelector id='change-theme' onClick={changeTheme} /> */}
                </div>
                <SearchCityForm />
            </div>
        </header>
    )
}

export default Header