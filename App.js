/* import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cont">
      <div className="f_top">
        <h2 className="Tit">Transacción Rechazada</h2>
      </div>
      <div className="lin"></div>
      <div className="sub_top">
        <div className="Tit2">Detalle Transacción</div>
      </div>
      
        <form className="form" action="">
          <div className="May">
            <label>Descripción:</label>
            <br />
            <div>
              Descripcion
            </div>
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
          <div className="Min">
            <label>Referencia de Pago:</label>
            <br />
            <input
              className="Temp2"
              type="text"
              placeholder="Nombre"
              required />
          </div>
        </form>
        <div className="sub_top">
        <div className="Tit2">Detalle del Pagador</div>
      </div>
      
        <form className="form" action="">
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
        </form>
      </div>
    
  );
}

export default App;
 */
import React, { Component } from 'react';
import './App.css';
import GetLocalPosts from './components/texto';
class App extends Component {
  render() {
    return (
      <div className="App">
        <GetLocalPosts/>
      </div>
    );
  }
}
export default App;