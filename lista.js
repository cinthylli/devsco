import React, {Component} from 'React';

class Listado extends Component{
    render(){
         return(
           <div>
               <h1>
                   {this.props.tareas.titulo}
               </h1>

               <p> 
                   {this.props.tareas.nombre}
               </p>
           </div>
           
         );
    }   
}

export default Listado;