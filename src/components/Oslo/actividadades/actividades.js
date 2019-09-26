import React, {Component} from 'react'
import './css/actividades.css'
import vista from '../imagenes/vista.png'

class Actividades extends Component{
    render(){
        return(
                <div id="actividades">
                    <span id="queHacer">
                        Que hacer en Oslo...
                    </span>
                    <span id="descrito">
                        Reserva actividades organizadas por nuestros partners locales
                    </span>
                    <div id="cultura">
                        <a href="" class="targeticas">
                            <img src={vista}></img>
                            <span>Cultura Local</span>
                        </a>
                        <a href="" class="targeticas">
                            <img src={vista}></img>
                            <span>Cultura Local</span>
                        </a>
                        <a href="" class="targeticas">
                            <img src={vista}></img>
                            <span>Cultura Local</span>
                        </a>
                        <a href="" class="targeticas">
                            <img src={vista}></img>
                            <span>Cultura Local</span>
                        </a>
                        <a href="" class="targeticas">
                            <img src={vista}></img>
                            <span>Cultura Local</span>
                        </a>
                        <a href="" class="targeticas">
                            <img src={vista}></img>
                            <span>Cultura Local</span>
                        </a>
                    </div>
                </div>
        )
    }
}

export default Actividades