import React, {Component} from 'react'
import './planes.css'
// import imagen1 from '../imagenes/cama.png'
import imagen2 from '../../img/img1.png'
import imagen3 from '../../img/sol.png'
import imagen4 from '../../img/img3.png'
import imagen1 from '../../img/img2.png'

class Planes extends Component{
    render(){
        return(
            <div id="planes">
                    <div class="targetas">
                        <a href=""> <img src={imagen1}></img> </a> 
                        <a href="" class="plan"> TIPO ALOJAMIENTO . CIUDAD</a>  
                        <span class="nombre">Nombre del alojamiento</span>
                        <span class="descripcion">Desde $precio por persona</span>       
                        <span class="descripcion">Precio Total: $precio incluido comision</span>     
                        <span class="calificacion"> <b>4.88 *</b> Caracteristica principal </span>                        
                    </div>
                    <div class="targetas">
                        <a href=""> <img src={imagen2}></img> </a> 
                        <a href="" class="plan"> TIPO PLAN . CIUDAD</a>  
                        <span class="nombre">Nombre del plan</span>
                        <span class="descripcion">Desdde $precio por persona</span>
                        <span class="calificacion">4.88 * Tipo de plan</span>      
                    </div>
                        <div class="targetas">
                        <a href="">  <img src={imagen3}></img> </a>
                        <a href="" class="plan"> TIPO PLAN . CIUDAD</a>    
                        <span class="nombre">Nombre del plan</span>
                        <span class="descripcion">Desde $precio por persona</span>  
                        <span class="calificacion">4.88 * Tipo de plan</span>       
                    </div>
                    <div class="targetas">
                        <a href="">  <img src={imagen4}></img> </a>
                        <a href="" class="plan"> TIPO PLAN . CIUDAD</a>  
                        <span class="nombre">Nombre del plan</span>
                        <span class="descripcion">Desde $precio por persona</span> 
                        <span class="calificacion">4.88 * Tipo de plan</span>                   
                    </div>
                    <div id="marcar"><a href="" >Mostrar Todo (16)</a></div>
                </div>
        )
    }
}





export default Planes