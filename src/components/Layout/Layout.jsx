import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
// import PopupWeather from '../PopupWeather'

const Layout = () => {
  return (
    <> 
        {/* <PopupWeather/> */}
        <Header />
        <main>
            <Suspense>
                <Outlet />
            </Suspense>
        </main>
    </>
  )
}

export default Layout