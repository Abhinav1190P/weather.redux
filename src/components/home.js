import React, { Component } from 'react'
import '../css/app.css'
import FontAwesome from 'react-fontawesome'
import {connect} from 'react-redux'
import * as actions from '../actions'
import Template from './template'

class Home extends Component {

state = {
inputCity:'',
data:''
}

inputHandle = (event) =>{
event.preventDefault()
this.setState({
     inputCity: event.target.value
})

}

componentWillReceiveProps(nextProps){
     if(nextProps.actualData){
     
     this.setState({
          data: nextProps.actualData
     })
     }
     
}

componentWillMount(){
     this.props.defDATA()
}


search = (event) =>{
this.props.wthdata(this.state.inputCity)
}

     render() {
  
          return (
               <div>
                    <div className="thePage">
     <div className="imageNsearch">
     
       <div className="back_img">
       <input onChange ={this.inputHandle} type = "text" className="search"/>
      <a onClick ={this.search} href="#search"> <FontAwesome className = "fas fa-search" style={{color:'white'}}/></a> 
      {
           this.state.data ? 
           <Template {...this.state.data}/>
           :null
      }

           </div>
     </div>
</div>

               </div>
          )
     }
}

const mapStateToProps = (state) =>{
     return{
actualData: state.wheather
     }
}


export default connect(mapStateToProps,actions)(Home)