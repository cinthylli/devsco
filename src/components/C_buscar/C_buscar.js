import React, {Component} from 'react'
import './C_buscar.css'

class C_buscar extends Component{
    render(){
        return(
            <div id="C_b">
                <div id="l-s">
                    <h1>¿Dónde quieres disfrutar tu próxima</h1>
                    <h1>experiencia?</h1>
                </div>
                <input type="text"></input>

                <h1>¿Que deseas buscar?</h1>

                <div id="C_b-s">
                    <div className="C_b-s-1">
                        <div>
                            <img className="C_b-img-1" src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                        </div>
                        <div className="C_b-s-2">
                            <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                            <p>Vuelo</p>
                        </div>
                    </div>
                    <div className="C_b-s-1">
                        <div>
                            <img className="C_b-img-1" src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                        </div>
                        <div className="C_b-s-2">
                            <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                            <p>Hotel</p>
                        </div>
                    </div>
                    <div></div>

                </div>
                <div id="sub-cdestino3">
                    <div  id="b-buscar"><p><b>Buscar</b></p></div>
                </div>
            </div>
        )
    }
}
export default C_buscar