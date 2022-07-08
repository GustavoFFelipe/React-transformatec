import React from 'react';

export default class PersonClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 32,
      profession: 'developer',
      area: 'Front-end',
      name : this.props.name,
      status: true
    }
    this.status = this.props.status

    this.uS = this.updateStatus.bind(this)
  }
  updateStatus(){
    this.setState(
      (state) => ({
        status: !state.status
      })
    ) 
    console.log(this.state)
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  componentDidUpdate(){

  }
  render(){
    return (
      <div>
        
         <p> Nome: {this.props.name}</p>
          <p> Idade: {this.state.age}</p>
          <p>Profissão: {this.state.profession}</p>
          <p>Area: {this.state.area}</p>
          <p>Status: {this.state.status}</p>
          <button onClick={() => this.updateStatus()}>Botão</button>
          <button onClick={this.uS}>Botão</button>

        
      </div>
    )
   
  }
}
