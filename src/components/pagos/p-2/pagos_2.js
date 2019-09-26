import React, {Component} from 'react'

class Pagos_2 extends Component{
    render(){
        return(
            <div id="pagos_2">
                <div className="pagos-titulos">
                    <h1>Elije tu vuelo</h1>
                </div>

                <div id="pagos_2-c">
                    <div className="pagos_2-s-c">
                        <h2>Origen</h2>
                        <input className="input-1" type="text"/>

                        <h2>Fecha y hora de ida</h2>
                        <div id="input-c">
                            <input id="input-2"/>
                            <input id="input-3"/>
                        </div>
                    </div>
                    <div className="pagos_2-s-c">
                        <h2>Destino</h2>
                        <input className="input-1" type="text"/>

                        <h2>Fecha y hora de regreso</h2>
                        <div id="input-c">
                            <input id="input-2"/>
                            <input id="input-3"/>
                        </div>
                    </div>
                    <div className="pagos_2-s-c">
                        <div id="input-c-2">   
                            <div id="i-c-2">
                                <h2>Adulto</h2>
                                <input id="input-3"/>
                            </div>
                            <div>
                                <h2>Menor 12 años</h2>
                                <input id="input-3"/>
                            </div>
                        </div>
                        <h2>Clase</h2>
                        <input className="input-1" type="text"/>
                    </div>
                </div>


            </div>
        )
    }
}
export default Pagos_2