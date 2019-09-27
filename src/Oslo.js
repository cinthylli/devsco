import React, {Component} from 'react'

import App from './app' 
import Header from './components/Oslo/header/header'
import Planes from './components/Oslo/planes/planes'
import Actividades from './components/Oslo/actividadades/actividades'
import Experiencias from './components/Oslo/experiencias/experiencias'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom' 
import ReactDom from 'react-dom'





class Oslo extends Component{
  render(){
    return(
        <div>
            <Header />
            <Planes/>
            <Actividades/>
            <Experiencias/>
        </div>
        
      

    )
  }
}

export default Oslo