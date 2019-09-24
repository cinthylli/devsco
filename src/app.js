import React, {Component} from 'react'
import Nav from './components/nav/nav'
import Video from './components/video/video'
import C_destino from './components/C_destino/c-destino'
import Destino from './components/destinos/destinos'
import Experiencias from './components/experiencias populares/experiencias'
import Hoteles from './components/hoteles/hoteles'
import Footer from './components/footer/footer'
import C_fechas from './components/C_fechas/C_fechas'
import C_servicio from './components/C_servicio/C_servicio'
import C_buscar from './components/C_buscar/C_buscar'

class App extends Component{
  render(){
    return(
      <div>
        
        
      <Nav/>   
      <C_buscar/>
      <Video/>
      <Destino/>
      <Experiencias/>
      <Hoteles/>
      <Footer/>
      </div>
    );
  }
}

export default App
/*


      <Nav />
      <C_destino/>
      <C_fechas/>
      <Video />
      <Destino/>
      <Experiencias/>
      <Hoteles/>
      <Footer/>

      */