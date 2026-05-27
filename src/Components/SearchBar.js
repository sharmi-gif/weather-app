import React, { useState } from 'react'
import axios from 'axios'

const SearchBar = () => {
    const[city,setcity]=useState("");
    const[weather,setweather]=useState("");
    const fetchweather=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f2e7488fa731510941f776ab8d5953a&units=metric`)
  .then((response) => setweather(response.data));
    }
    
  return (
    <div>
        <h1>Weather app</h1>
<input type="text" placeholder='Enter the city' value={city}onChange={(e)=>setcity(e.target.value)} />
<button onClick={fetchweather} >Search </button>
{weather && (
<div>
    <h2>City:{weather.name}</h2>
    <h2>Temperature:{weather.main.temp}</h2>
</div>

)}
    </div>
  )
}

export default SearchBar