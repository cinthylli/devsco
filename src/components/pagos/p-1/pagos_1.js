import React, {Component} from 'react'
import '../pagos.css'
import img1 from '../img/lista.png'
import img2 from '../img/mundo.png'
import img3 from '../img/tarjetaBancaria.png'
import img4 from '../img/TarjetaEmbarque.png'
import img5 from '../img/dobleDerecha.png'

class Pagos_1 extends Component{
    render(){
        return(
            <div id="pagos_1">

                <div className="pagos-titulos">
                    <h1>Asi de facil es difrutar de tus vacaciones</h1>
                </div>

                <div id="pagos_1-c">
                    <div className="pagos_1-s-c">
                        <img src={img1}/>
                        <p>1. Elije tu plan</p>
                    </div>

                    <img className="pagos_1-c-img" src={img5}/>

                    <div className="pagos_1-s-c">
                        <img src={img3}/>
                        <p>2. Realiza el pago</p>
                    </div>

                    <img className="pagos_1-c-img" src={img5}/>

                    <div className="pagos_1-s-c">
                        <img src={img4}/>
                        <p>3. Recibe tu ticket por mail</p>
                    </div>

                    <img className="pagos_1-c-img" src={img5}/>

                    <div className="pagos_1-s-c">
                        <img src={img2}/>
                        <p>4. Preparate para tu viaje</p>
                    </div>
                </div>


            </div>
        )
    }
}
export default Pagos_1