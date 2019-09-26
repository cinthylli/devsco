import React, {Component} from 'react'
import './destinos.css'
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import img3 from '../../img/sol.png'

    class Destinos extends Component{
        render(){
            return(
                <div id="destinos-c">
                    <h1>Destinos</h1>
                    <p className="p-0">Disfruta de nuestros destinos en todas las estaciones</p>
                    <div id="destinos-s-c">
                        <div className="d-s-c-1">
                            <div className="img-1">
                                <img className="destinos-img" src={img1}/>
                            </div>
                            <div>
                                <p className="p-1">TIPO DE PLAN PRINCIPAL</p>
                                <h2>Ciudad</h2>
                                <p className="p-3">Tipos de planes principales</p>
                                <p className="p-3">Precio Promedio por persona por dia</p>
                                <p className="p-2">4.88 *  caracteristica principal</p>
                            </div>
                        </div>
                        <div className="d-s-c-2">
                            <div className="img-1">
                                <img className="destinos-img" src={img2}/>
                            </div>
                            <div>
                                <p className="p-1">TIPO DE PLAN PRINCIPAL</p>
                                <h2>Ciudad</h2>
                                <p className="p-3">Tipos de planes principales</p>
                                <p className="p-3">Precio Promedio por persona por dia</p>
                                <p className="p-2">4.88 *  caracteristica principal</p>
                            </div>
                        </div>
                        <div className="d-s-c-1">
                            <div className="img-1">
                                <img className="destinos-img" src={img3}/>
                            </div>
                            <div>
                                <p className="p-1">TIPO ALOJAMIENTO . CIUDAD</p>
                                <h2>Nombre del alojamiento</h2>
                                <p className="p-3">Desde $precio por persona</p>
                                <p className="p-3">Precio Total: $precio incluido comisión</p>
                                <p className="p-2">4.88 *  caracteristica principal</p>
                            </div>
                        </div>
                    </div>
                    <p id="m-t">Mostrar todo ()</p>
                </div>
            )
        }
    }
export default Destinos