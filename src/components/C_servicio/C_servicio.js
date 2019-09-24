import React, {Component} from 'react'
import './C_servicio.css'
import plus from '../img/plus.png'

class C_servicio extends Component{
    render(){
        return(
            <div className="C_servicio">
                <h1 className="C_f-h1">¿Que tipo de acomodacion deseas?</h1>
                <div id="C_s-1">
                    <div className="C_s-s-1">
                        <div><b>#</b></div>
                        <p>Cama Sencilla</p>
                    </div>
                    <div className="C_s-s-1">
                        <div><b>#</b></div>
                        <p>Cama Doble</p>
                    </div>
                    <div className="C_s-s-1">
                        <div><b>#</b></div>
                        <p>Cama King</p>
                    </div>
                    <div className="C_s-s-1">
                        <div><b>#</b></div>
                        <p>Cama Queen</p>
                    </div>
                    <div className="C_s-s-3">
                        <a href=""><img src={plus}/>
                        <p>Incluir Habitacion</p></a>
                    </div>
                </div>
                <h1 className="C_f-h1">Elige los servicios que te gusten...</h1>
                <div id="C_s-2">
                    <div className="C_s-s-2">
                        <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                        <p>En Pareja</p>
                    </div>
                    <div className="C_s-s-2">
                        <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                        <p>En Familia</p>
                    </div>
                    <div className="C_s-s-2">
                        <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                        <p>En Grupo</p>
                    </div>
                    <div className="C_s-s-2">
                        <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                        <p>Solo/a</p>
                    </div>
                </div>
                <div id="sub-cdestino3">
                    <div  id="b-buscar"><p><b>Buscar</b></p></div>
                </div>
            </div>
        )
    }
}
export default C_servicio