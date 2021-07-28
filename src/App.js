import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Card from './Card';
import "./style.css";
export default function App() {
  const [changedcity,setChangedcity]=useState("banglore");
  const [weather,setWeather]=useState({"weather": [
    {
      "id": 701,
      "main": "Mist",
      "description": "mist",
      "icon": "50n"
    }],"main": {
      "temp": 302.2,
      "feels_like": 308.94,
      "temp_min": 302.2,
      "temp_max": 305.54,
      "pressure": 1003,
      "humidity": 84
    }, "wind": {
      "speed": 0,
      "deg": 0
    },"name": "Delhi"});
  const [city,setCity]=useState("delhi");
  
  
  useEffect(()=>{
    const featchWeather=async()=>{
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${changedcity}&appid=${process.env.REACT_APP_APIKEY}`);
      setWeather(response.data);
  }
      featchWeather();
  },[changedcity]);
   const onChangeCity=(e)=>{
     e.preventDefault();
     setCity(e.target.value);
   }
   const onsubmit=(e)=>{
     e.preventDefault();
     setChangedcity(city);
   }
  console.log(changedcity,weather);
  return (

    <div className="card_big">
      <form onSubmit={onsubmit}>
      <input type="text" onChange={onChangeCity}/>
      <input type="submit"  value="search"  />
      </form>
     <Card details={weather}/>
    </div>
  )
}
