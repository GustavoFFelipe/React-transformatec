import React from 'react';

export default class StateCar extends React.Component{
  constructor(props){
    super(props);
    this.model = 'Fusca'
    this.state  = {
      ligado: false,
      velocidade: 0,
    };
  }
  onOff(){
    this.setState({ligado: !this.state.ligado})
  }
  acelerar(){
    let vel = this.state.velocidade + 5
    this.setState({velocidade: vel})
  }
  parar(){
    this.setState({velocidade: 0})
  }
  frear(){
    let vel = this.state.velocidade -2
    this.setState({velocidade: vel})
  }
  render(){
    return(
      <div>
        <p>Carro {this.model}</p>
        <p>Velocidade {this.state.velocidade}</p>

        <p>Ligado {this.state.ligado ? 'Sim' : "Não"}</p>
      <button onClick={() => this.onOff()}>Virar Chave</button>
      <button onClick={() => this.acelerar()}>Acelerar</button>
      <button onClick={() => this.frear()}>Frear</button>
      <button onClick={() => this.parar()}>Parar</button>

      </div>
    )
  }
}