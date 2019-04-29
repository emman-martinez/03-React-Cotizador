import React, { Component } from 'react';
import logo from './../logo.svg';
import Header from './Header';
import Formulario from './Formulario';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from './../helper';

class App extends Component {

  cotizarSeguro = (datos) => {
    console.log(datos);
    const { marca, plan, year } = datos;

    // ***** Agregar una base de 2000
    let resultado = 2000;

    // ***** Obtener la diferencia de año
    const diferencia = obtenerDiferenciaAnio(year);
    // console.log('La diferencia es: ' + diferencia);

    // ***** Por cada año restar el 3%
    resultado -= ((diferencia * 3) * resultado) / 100;
    // console.log(resultado);

    // ***** Americano 15% Asiatico 5% y Europeo 30% de incremento al valor actual
    resultado *= calcularMarca(marca);
    // console.log(resultado);

    // ***** Plan Auto , Básico +20% y Americano +50%
    let incrementoPlan = obtenerPlan(plan);

    // ***** Dependiendo Plan incrementar
    resultado  = parseFloat(incrementoPlan * resultado).toFixed(2);
    console.log(resultado);

  }
  
  render() {
    return (
      <div className="App contenedor">
          <Header
            titulo= 'Cotizador de Seguro de Auto'
          ></Header>

          <div className="contenedor-formulario">
            <Formulario cotizarSeguro = {this.cotizarSeguro} ></Formulario>
          </div>

          <img src={logo} className="App-logo" alt="logo" />
      </div>      
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
