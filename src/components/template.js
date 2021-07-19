import React from 'react'
import '../css/app.css'
import FontAwesome from 'react-fontawesome'


const Template = (props) =>{
    console.log(props.wheatDATA)
let key = props.wheatDATA
return(
    <div>
<div className = "Tempera">
    <p>
    {key.main.temp + '℃'}
    </p>

</div>
<div className = "City">
    <p>
{key.name}
</p>
</div>


<hr style = {{width:'300px',position:'absolute',marginTop:'150px',marginLeft:'110px'}}/>

<div className = "typeofwheath">
    <p>
{key.weather[0].main}
</p>
</div>



<div className = "listofthing">
    <h2><FontAwesome className = "fas fa-globe-asia"/> {key.sys.country}</h2>
<ul>
<li><FontAwesome className = "fas fa-thermometer-quarter"/> Minimum-temperature: {key.main.temp_min} ℃</li>
<li><FontAwesome className = "fas fa-thermometer-three-quarters"/> Maximum-temperature: {key.main.temp_max} ℃</li>
<li><FontAwesome className = "fas fa-location-arrow"/> Longitude: {key.coord.lon} Latitude: {key.coord.lat}</li>    
<li><FontAwesome className = "fas fa-wind"/> Wind speed: {key.wind.speed} m/s</li>
<li><FontAwesome className = "fas fa-eye"/> Visibility: {key.visibility}</li>

    </ul>    
    <hr style = {{width:'400px',marginLeft:'-50px',position:'absolute'}}/>
    
</div>



    </div>
)

}

export default Template

