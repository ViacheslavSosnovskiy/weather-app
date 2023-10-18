import React, { useState } from 'react'

const WeatherForm = () => {
    const [name, setName] = useState('')

    const handleChange = e => {
        console.log(e.target.value)
        setName(e.target.value)
    }
 
    const handleSubmit = e => {
        e.preventDefault()
        // console.log('e.target -->', e.target.elements.city.value)
        setName(e.target.elements.city.value)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' name='city' value={name} onChange={handleChange}/>
        <button type='submit'>search</button>
        {/* <button type='submit' onClick={() => {navigation.geolocation.getCurrentPosition()}}>search</button> */}
    </form>
  )
}

export default WeatherForm