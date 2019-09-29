import React, {Component} from 'react'
import './osloVideo.css'
import vid from './osloVideo.mp4'
import play from '../../video/img/play.png'

    class osloVideo extends Component{
        render(){
            return(
                <div id="ContenedorVideo">
                    <video id="video"  src={vid} autoPlay></video>
                    <img src={play}/>
                </div>
            )
        }
    }
export default osloVideo