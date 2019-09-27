import React, {Component} from 'react'

import App from './app' 
import Header from './components/Oslo/header/header'
import Planes from './components/Oslo/planes/planes'
import Actividades from './components/Oslo/actividadades/actividades'
import Experiencias from './components/Oslo/experiencias/experiencias'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom' 


class Oslo extends Component{
  render(){
    return(
        <div>
            <Router>
                <Route exact path="/Oslo" component={App}>
                    <Header/>
                    <Planes/>
                    <Actividades/>
                    <Experiencias/>
                </Route>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>

            </Router>
        </div>
        
      

    )
  }
}

export default Oslo