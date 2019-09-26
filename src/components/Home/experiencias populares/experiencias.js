import React, {Component} from 'react'
import './experiencias.css'
import img1 from '../../img/img1.png'
import img3 from '../../img/img3.png'
import sol from '../../img/sol.png'
import kayak from '../../img/kayak.png'

class Experiencias extends Component{
    render(){
        return(
            <div id="experiencia-c">
                <h1>Experiencias Populares</h1>
                <p className="p-0">Reserva actividades organizadas por nuestros partners locales</p>
                <div id="experiencia-s-c">
                    <div className="e-s-c-1">
                        <div className="s-c-i">
                            <img className="experiencias-img" src={img3}/>
                        </div>
                        <div>
                                <p className="p_1">TIPO PLAN . CIUDAD</p>
                                <h2>Nombre del plan</h2>
                                <p className="p_3">Desde $precio por persona</p>
                                <p className="p_2"><b>4.88 *  Tipo de Plan</b></p>
                            </div>
                    </div>
                    <div className="e-s-c-1">
                        <div className="s-c-i">
                            <img className="experiencias-img" src={img1}/>
                        </div>
                        <div>
                                <p className="p_1">TIPO PLAN . CIUDAD</p>
                                <h2>Nombre del plan</h2>
                                <p className="p_3">Desde $precio por persona</p>
                                <p className="p_2"><b>4.88 *  Tipo de Plan</b></p>
                            </div>
                    </div>
                    <div className="e-s-c-1">
                        <div className="s-c-i">
                            <img className="experiencias-img" src={sol}/>
                        </div>
                        <div>
                                <p className="p_1">TIPO PLAN . CIUDAD</p>
                                <h2>Nombre del plan</h2>
                                <p className="p_3">Desde $precio por persona</p>
                                <p className="p_2"><b>4.88 *  Tipo de Plan</b></p>
                            </div>
                    </div>
                    <div className="e-s-c-1">
                        <div className="s-c-i">
                            <img className="experiencias-img" src={kayak}/>
                        </div>
                        <div>
                                <p className="p_1">TIPO PLAN . CIUDAD</p>
                                <h2>Nombre del plan</h2>
                                <p className="p_3">Desde $precio por persona</p>
                                <p className="p_2"><b>4.88 *  Tipo de Plan</b></p>
                            </div>
                    </div>
                </div>
                <p id="m-t">Mostrar todo ()</p>
            </div>
        )
    }
}
export default Experiencias