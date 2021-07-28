import React from 'react'
import {FaMixcloud,FaCloud,FaSun} from "react-icons/fa";
export default function Card(props) {
    
let icon;
const{main,weather,name}=props.details;
if(weather[0].main==="Rain"){
 icon=<FaCloud/>
}
else if(weather[0].main==="Clouds"){
    icon=<FaMixcloud className="icon"/>
}
else{
    icon=<FaSun/>
}

    return (
        <div className="card">
            <h3>{name}</h3>
            {icon}
            <div className="weather_report">
            <h5>weather:{weather[0].main}</h5>
            <h6>Description:{weather[0].description}</h6>
            <h5>Temperature:{`${main.temp} F`}</h5>
            <h5>Humidity:{main.humidity}</h5>
            <h5>pressure:{main.pressure}</h5>

            </div>
        </div>
    )
}
