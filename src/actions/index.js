import axios from 'axios'

export function defDATA() {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=5ffeda51900c20f53a056eace30942fc`)
.then((response)=>{return response.data})

return{
type:'default_data',
payload:request
}
}


export function wthdata(city) {
    
const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5ffeda51900c20f53a056eace30942fc`)
.then((response)=>{return response.data})

return{
type:'wheather_data',
payload:request
}

}