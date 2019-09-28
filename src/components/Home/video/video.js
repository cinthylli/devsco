import React, {Component} from 'react'
import './video.css'
import vid from './video/pasitoperron.mp4'
import daddy from './video/daddy.mp4'
import play from './img/play.png'
import pausa from './img/pausa.png'

    class Video extends Component{
        render(){
            return(
                <div id="ContenedorVideo">
                    <video id="video"  src={daddy} autoPlay></video>
                    <h1 id="t1-video">Viaja a los tres mejores </h1>
                    <h1 id="t2-video">paises de Europa</h1>
                    <img id="b-play" src={play}/>
                    <img id="b-pausa" src={pausa}/>
                    
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