import React, {Component} from 'react'
import './c-destino.css'

class C_destino extends Component{
    render(){
        return(
            <div className="C_destino">
                <p className="cdestino-p"><b>¿Dónde quieres disfrutar tu próxima experiencia?</b></p>

                <input type="text"/>

                <p className="cdestino-p"><b>¿Que deseas buscar?</b></p>

                <div id="sub-cdestino">
                    <div className="sub-cdestino1">
                        <div className="imgcdestino">
                            <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                        </div>
                        <div className="sub-c-1">
                            <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                            <p className="p1">Vuelo</p>
                        </div>
                    </div>
                    <div className="sub-cdestino1">
                        <div className="imgcdestino">
                            <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                        </div>
                        <div className="sub-c-1">
                            <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                            <p className="p1">Hotel</p>
                        </div>
                    </div>
                    <div className="sub-cdestino1">
                        <div className="imgcdestino">
                            <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                        </div>
                        <div className="sub-c-1">
                            <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                            <p className="p1">Experiencia</p>
                        </div>
                    </div>
                </div>
                <p className="cdestino-p"><b>¿Con quien viajas?</b></p>
                <div id="sub-cdestino2">
                    <div className="sub-c-2">
                        <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                        <p>En Pareja</p>
                    </div>
                    <div className="sub-c-2">
                        <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                        <p>En Familia</p>
                    </div>
                    <div className="sub-c-2">
                        <img src="http://lavozdemichoacan.com.mx/wp-content/uploads/2019/09/memes.jpg"/>
                        <p>En Grupo</p>
                    </div>
                    <div className="sub-c-2">
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
export default C_destino