import React, {Component} from 'react'
import './header.css'
import Nav from '../../nav/nav'
import OsloVideo from '../osloVideo/osloVideo'



class Header extends Component{
    render(){
        return(
            <header>
                <Nav/>
                <OsloVideo/>
                <div class="titulo">
                    <span id="letrero">Descubre que hacer en Oslo</span>
                    <a href="" id="boton1">Aqui</a>
                </div>
            </header>
        )
    }
}

export default Header