import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/home'

const Routes = () =>{
return(
    <div>
<Switch>
<Route to = "/" component = {Home}/>
<Route to = "/:location" component=""/>
</Switch>
    </div>

)

}
export default Routes