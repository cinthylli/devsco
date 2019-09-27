import React, {Component} from 'react'
import './header.css'
import Nav from '../../nav/nav'



class Header extends Component{
    render(){
        return(
            <header>
                <Nav/>
                <componente></componente>
                <div class="titulo">
                    <span id="letrero">Descubre que hacer en Oslo</span>
                    <a href="" id="boton1">Aqui</a>
                </div>
            </header>
        )
    }
}

export default Header