import React, {Component} from 'react'
import './css/pasos.css'
import flecha from '../imagenes/flecha.png'
import mundo from '../imagenes/mundo.png'
import tarjetas from '../imagenes/tarjetas.png'
import lista from '../imagenes/lista.png'
import targets from '../imagenes/targets.png'
class Pasos extends Component{
    render(){
        return(
            
            <div id="conteniendo">
                <div className="titulemos">
                    <b>Asi de facil es disfrutar de tus vacaciones</b>
                </div>
                <div className="Pasitos">
                    <div className="plansitos">
                        <img src={lista} />
                        <br/>
                        <br/>
                        <b>1. Elije tu plan</b>
                    </div>

                    <img src={flecha}/>

                    <div className="plansitos">
                        <img src={tarjetas} />
                        <br/>
                        <br/>
                        <b>2. Realiza el pago</b>
                    </div>

                    <img src={flecha}/>

                    <div className="plansitos">
                        <img src={targets} />
                        <br/>
                        <br/>
                        <b>3. Recibe el ticket por Mail</b>
                    </div>

                    <img src={flecha}/>

                    <div className="plansitos">
                        <img src={mundo} />
                        <br/>
                        <br/>
                        <b>4. Preparate para tu viaje</b>
                    </div>
                </div>
                <div className="titulemos">
                    <b>Elije tu vuelo</b>
                </div>
                <div className="llenarDatos" >
                    <div class="llenando">
                        <b>Origen</b>
                        <br/>
                        <input class="input1" placeholder="     Desde donde viajas" type="text" />
                        
                        
                        
                        

                    </div>
                    <div class="llenando">
                        <b for="input2">Destino</b>
                        <br/>
                        <input  className="input1" placeholder="    Elije tu destino"/>
                    </div>
                    <div class="llenando">
                        <b>Adulto</b>
                        <br/>
                        <input className="input2" type="text" placeholder="         0"/>
                    </div>
                    <div class="llenando">
                    <b>Menor 12 años</b>
                        <br/>
                        <input className="input2" type="text" placeholder="         0"/>
                    </div>




                    <div class="llenando">
                        <b>Fecha y hora de ida</b>
                        <div className="separador">
                        <input class="input1"/>
                        <input className="input2"/>
                        </div>
                    </div>
                    <div class="llenando">
                        <b>Fecha y hora de regreso</b>
                        <div className="separador">
                        <input class="input1"/>
                        <input className="input2"/>
                        </div>
                    </div>
                    <div class="llenando">
                        <b>Clase</b>
                        <input className="input2"/>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Pasos;