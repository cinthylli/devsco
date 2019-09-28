import React, {Component} from 'react'
import './footer.css'
import facebook from './img/facebook.png'
import twitter from './img/twitter.png'
import playstore from './img/playstore.png'
import appstore from './img/appstore.png'

class Footer extends Component{
    render(){
        return(
            <div id="footer-c">
                <div id="redes">
                    <a href=""><img src={twitter} className="footer-img"/></a>
                    <a href=""><img src={facebook} className="footer-img"/></a>
                    <a href=""><img src={playstore} className="footer-img"/></a>
                    <a href=""><img src={appstore} className="footer-img"/></a>
                </div>
                <div></div>
                <div></div>
                <div>
                    <h3>Contactanos</h3>
                    <p>xxx-xxx-xxxx</p>
                </div>

                <div id="footer-mv">
                    <h2>Mision</h2>
                    <p>bla bla</p>

                    <h2>Vision</h2>
                    <p>bla bla</p>
                </div>
            </div>
        )
    }
}
export default Footer