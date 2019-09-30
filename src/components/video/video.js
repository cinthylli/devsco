import React, {Component} from 'react'
import './video.css'
import vid from './video/pasitoperron.mp4'
import play from './img/play.png'

    class Video extends Component{
        render(){
            return(
                <div id="ContenedorVideo">
                    <video id="video"  src={vid} autoPlay="true" loop="true"></video>
                    <img src={play}/>
                </div>
            )
        }
    }
export default Video

//onclick="play()"
/*
function play(){
                if(video.paused)
                   video.play()
           
                   else
                   video.pause()
            }


            <video id="video"  src={vid} ></video>
*/