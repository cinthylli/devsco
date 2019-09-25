import React, { Component } from 'react';
import posts from './ejem';
import '../App.css';

class GetLocalPosts extends Component {
    constructor(props){
        super(props);
        this.state = {            
            posts :posts            
        };
    }
    render() {
        const {posts} = this.state;
        return(
            <div className="cont">
      <div className="f_top">
        <h2 className="Tit">Transacción Rechazada</h2>
      </div>
      <div className="lin"></div>
      <div className="sub_top">
        <div className="Tit2">Detalle Transacción</div>
      </div>
      
        <div className="form">
          <div className="May">
            <label>Descripción:</label>
            <br />
            {
                    posts.map(post => (
                        <p>{post.desc}</p>
                        
                    ))
                }
          </div>
          <div className="Min">
            <label>Fecha y Hora Transacción:</label>
            <br />
            {
                    posts.map(post => (
                        <p>{post.hora}</p>
                        
                    ))
                }
          </div>
          <div className="Min">
            <label>Valor Total:</label>
            <br />
            {
                    posts.map(post => (
                        <p>{post.ValorT}</p>
                        
                    ))
                }
          </div>
          <div className="Min">
            <label>Medio de pago:</label>
            <br />
            {
                    posts.map(post => (
                        <p>{post.MedioP}</p>
                        
                    ))
                }
          </div>
          <div className="Min">
            <label>Banco:</label>
            <br />
            {
                    posts.map(post => (
                        <p>{post.Banco}</p>
                        
                    ))
                }
          </div>
          <div className="Min">
            <label>Estado:</label>
            <br />
            {
                    posts.map(post => (
                        <p>{post.estado}</p>
                        
                    ))
                }
          </div>
          <div className="Min">
            <label>Respuesta:</label>
            <br />
            {
                    posts.map(post => (
                        <p>{post.Respuesta}</p>
                        
                    ))
                }
          </div>
        </div>
        <div className="sub_top">
        <div className="Tit2">Detalle del Pagador</div>
      </div>
      
        <div className="form" action="">
          <div className="Min">
            <label>Referencia de Pago:</label>
            <br />
            <input
              className="Temp2"
              type="text"
              placeholder="Nombre"
              required />
          </div>
          <div className="Min">
            <label>Referencia de Pago:</label>
            <br />
            <input
              className="Temp2"
              type="text"
              placeholder="Nombre"
              required />
          </div>
          <div className="Min">
            <label>Referencia de Pago:</label>
            <br />
            <input
              className="Temp2"
              type="text"
              placeholder="Nombre"
              required />
          </div>
          <div className="Min">
            <label>Referencia de Pago:</label>
            <br />
            <input
              className="Temp2"
              type="text"
              placeholder="Nombre"
              required />
          </div>
          <div className="Min">
            <label>Referencia de Pago:</label>
            <br />
            <input
              className="Temp2"
              type="text"
              placeholder="Nombre"
              required />
          </div>
          <div className="Min">
            <label>Referencia de Pago:</label>
            <br />
            <input
              className="Temp2"
              type="text"
              placeholder="Nombre"
              required />
          </div>
        </div>
      </div>
            
            /* <div>
                <ol className="item">
                {
                    posts.map(post => (
                        <li key={post.id} align="start">
                            <div>
                                <p className="title">{post.title}</p>
                                <p className="body">{post.body}</p>
                            </div>
                        </li>
                    ))
                }
                </ol>
            </div> */
        );
    }
  }
  
  export default GetLocalPosts;
/* function App() {
  return (
    
    
  );
}

export default App;
 */