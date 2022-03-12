import logo from './logo.svg';
import './App.css';
import React from 'react';

class Xe extends React.Component {
  constructor(props) {
    console.log('Xe constructor: ', props);
    super(props)
    this.state = {
      color: props.color,
      valus: props.value
    }
  }
  render() {
    return <h1 style={{ color: this.state.color }}>{this.state.value} {this.props.branch}</h1>
  }
}

export default Xe;