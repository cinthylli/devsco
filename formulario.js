import React, {component} from 'react' 

class Formulario extends Component{
    constructor(){
        super()
        this.state = {
            titulo: '',
            nombre: ''
        }
        this.handleCampo = this.handleCampo.bind(this)
        this.handleEnvio = this.handleEnvio.bind(this)
    }

  handleCampo(e){
     // Destructuring ES6 permite separar los datos de un array
     // [type, name, placeholder, onchange, value]
      const {value, name} = e.target
      this.setState({
     // Hash -> Encriptacion de datos que nos permite modificar
     //el tipo de dato pero mantendremos su valor
     // BD -> Java HashMap
     // {name: "value"} 
    [name]: value
   })
}

    handleEnvio(e){
      e.preventDefault()
      this.Props.onAgregarTarea(this.state)
   }

   render(){
       return(
           <div>
               <form method="POST" onSubmit={this.handleEnvio}>
                   <div>
                       <imput
                        type="text"
                        name="titulo"
                        placeholder="Ingrese Titulo"
                        onChange={this.handleCampo}
                        />
                    </div>
                    <div>
                    <imput
                        type="text"
                        name="nombre"
                        placeholder="Ingrese Nombre"
                        onChange={this.handleCampo}
                        />
                    </div>
                    <button type="submit">Enviar</button>
             </form>
         </div>
       );
   }
}

export default Formulario