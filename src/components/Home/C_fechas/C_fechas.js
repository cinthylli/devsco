import React, {Component} from 'react'
import './C_fechas.css'
import mas from '../../img/plusminus.png'


class C_fechas extends Component{
    render(){

        return(
            <div className="C_destino">
                <h1 className="C_f-h1">¿En que fechas deseas tu vuelo?</h1>
                <div id="C_f-1">
                    <div className="C_f-s-1"></div>
                    <div className="C_f-s-1"></div>
                    <div className="C_f-s-1"></div>
                    <div className="C_f-s-1"></div>
                </div>
                <h1 className="C_f-h1">¿Cuántas personas viajan?</h1>
                <div id="C_f-3">

                </div>
                <h1 className="C_f-h1">¿En que clase deseas viajar?</h1>
                <div id="C_f-2">
                    <div className="C_f-s-2">
                        <div className="C_f-img">
                            <div>#</div>
                            <div>
                                <div><img src={mas}/></div>
                            </div>
                        </div>
                        <div>
                            <p>Primera Clase</p>
                        </div>
                    </div>
                    <div className="C_f-s-2">
                        <div className="C_f-img">
                            <div>#</div>
                            <div>
                                <div><img src={mas}/></div>
                            </div>
                        </div>
                        <div>
                            <p>Ejecutiva</p>
                        </div>
                    </div>
                    <div className="C_f-s-2">
                        <div className="C_f-img">
                            <div>#</div>
                            <div>
                                <div><img src={mas}/></div>
                            </div>
                        </div>
                        <div>
                            <p>XXX</p>
                        </div>
                    </div>
                    <div className="C_f-s-2">
                        <div className="C_f-img">
                            <div>#</div>
                            <div>
                                <div><img src={mas}/></div>
                            </div>
                        </div>
                        <div>
                            <p>Economica</p>
                        </div>
                    </div>
                    <div className="C_f-s-3">
                        <div><p><b>#</b></p></div>
                        <div><p id="C_f-t"><b>Total</b></p></div>
                    </div>
                </div>
                <div id="sub-cdestino3">
                    <div  id="b-buscar"><p><b>Buscar</b></p></div>
                </div>
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
export default C_fechas