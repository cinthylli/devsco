import React, {Component} from 'react'
import img4 from '../img/img4.png'
import sol from '../img/sol.png'
import kayak from '../img/kayak.png'

class Hoteles extends Component{
    render(){
        return(
            <div id="destinos-c">
                <h1>Hoteles</h1>
                <p className="p-0">Disfruta de nuestros alojamientos en los diferentes destinos</p>
                <div id="destinos-s-c">
                    <div className="d-s-c-1">
                        <div className="img-1">
                            <img className="destinos-img" src={img4}/>
                        </div>
                        <div>
                            <p className="p-1">TIPO ALOJAMIENTO . CIUDAD</p>
                            <h2>Nombre del alojamiento</h2>
                            <p className="p-3">Desde $precio por persona</p>
                            <p className="p-3">Precio Total: $precio incluido comisión</p>
                            <p className="p-2">4.88 *  caracteristica principal</p>
                        </div>
                    </div>
                    <div className="d-s-c-2">
                        <div className="img-1">
                            <img className="destinos-img" src={sol}/>
                        </div>
                        <div>
                            <p className="p-1">TIPO ALOJAMIENTO . CIUDAD</p>
                            <h2>Nombre del alojamiento</h2>
                            <p className="p-3">Desde $precio por persona</p>
                            <p className="p-3">Precio Total: $precio incluido comisión</p>
                            <p className="p-2">4.88 *  caracteristica principal</p>
                        </div>
                    </div>
                    <div className="d-s-c-1">
                        <div className="img-1">
                            <img className="destinos-img" src={kayak}/>
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
export default Hoteles