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
                    <img src="" className="footer-img"/>
                </div>
            </div>
        )
    }
}
export default Footer