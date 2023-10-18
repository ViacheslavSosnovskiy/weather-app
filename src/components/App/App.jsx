import { Route, Routes } from 'react-router-dom'

import Home from '../../pages/Home'
import MonthStatistics from '../../pages/MonthStatistics'
import Layout from '../Layout'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='monthStatistics' element={<MonthStatistics />}/>
        </Route>
    </Routes>
    </>
  )
}

export default App
