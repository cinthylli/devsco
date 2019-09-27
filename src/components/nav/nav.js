import React, {Component} from 'react'
import './nav.css'
import User from './img/user.png'
import {Link} from 'react-router-dom'
import Oslo from '../../Oslo'

    class Nav extends Component{
        render(){
            return(
                <div id="contenedorNav">  
                    <div>
                        <Link to="">
                            <a href=""><img id="logo"/></a>
                        </Link>
                    </div>
                    <div id="nav">
                        <ul>
                            <li><a href="">Ayuda</a></li>
                            <li><a href="">Plan Viajero Fiel</a></li>
                            <li id="u-c"><a href="" ><img id="usuario" src={User} alt=""/></a></li>
                        </ul>
                    </div>
                </div> 
            );
        }
    }
export default Nav