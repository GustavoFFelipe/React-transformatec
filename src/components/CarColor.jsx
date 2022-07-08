import React from 'react';

class CarsColor extends React.Component {
  constructor() {
    super()
    this.state = { color: "verde"}
  }
    render(){
   return (
    <div>
    <p> A cor do carro é {this.state.color}</p>
  </div>
   )
  }
}
export default CarsColor