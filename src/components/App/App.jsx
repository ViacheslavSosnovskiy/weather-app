import { Route, Routes } from 'react-router-dom'

import Home from '../../pages/Home'
import MonthStatistics from '../../pages/MonthStatistics'
import Layout from '../Layout'
import Container from '../Container'

const App = () => {

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='monthStatistics' element={<MonthStatistics />}/>
        </Route>
      </Routes>
    </Container>
  )
}

export default App
