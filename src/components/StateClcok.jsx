import React from 'react';
import App from '../App.css';

export default class StateClock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),

    }
  }

  ticktak(){
    this.setState({time: new Date()})
  }

  componentDidMount(){
      this.timer = setInterval(
        () => this.ticktak(), 
          1000
        
      )
  }
  render(){
    return(
      <h2>
        {this.state.time.toLocaleTimeString()}
      </h2>
    )
  }
}