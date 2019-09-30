import React, {Component} from 'react'
import Nav from './components/Home/nav/nav'
import Video from './components/Home/video/video'
import C_destino from './components/Home/C_destino/c-destino'
import Destino from './components/Home/destinos/destinos'
import Experiencias from './components/Home/experiencias populares/experiencias'
import Hoteles from './components/Home/hoteles/hoteles'
import Footer from './components/footer/footer'
import C_fechas from './components/Home/C_fechas/C_fechas'
import C_servicio from './components/Home/C_servicio/C_servicio'
import C_buscar from './components/Home/C_buscar/C_buscar'
import Pagos_1 from './components/pagos/p-1/pagos_1'
import Pagos_2 from './components/pagos/p-2/pagos_2'
import Pagos_3 from './components/pagos/p-3/pagos_3'
import Pagos_4 from './components/pagos/p-4/pagos_4'
import Pagos_5 from './components/pagos/p-5/pagos_5'
import Pagos_6 from './components/pagos/p-6/pagos_6'
import Millas_1 from './components/Millas/millas-1/Millas_1'
import Millas_2 from './components/Millas/millas-2/Millas_2'
import Oslo from './Oslo'
import Slider from './components/slider/slider'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom' 





class App extends Component{
  render(){
    return(
      <div>
        <Router>
          <Route exact path="/" component={App}>
              <Nav/> 
              <Video/>
              <Destino/>
              <Slider/>
              <Footer/>

          </Route>
          <Switch>
            <Route path="/Oslo" component={Oslo}/>
          </Switch>    
        </Router>
      </div>

    );
  }
}

export default App
/*

HOME
      <Nav/>   
      <C_buscar/>
      <Video/>
      <Destino/>
      <Experiencias/>
      <Hoteles/>
      <Footer/>

PAGOS
        <Pagos_1/>
        <Pagos_2/>
        <Pagos_3/>
        <Pagos_4/>
        <Pagos_5/>
        <Pagos_6/>
        <Footer/>


MILLAS
        <Millas_1/>
        <Millas_2/>
      */