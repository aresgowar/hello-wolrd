import logo from './logo.svg';
import './App.css';
import React from 'react';

class Xe extends React.Component {

  render() {
    console.log('Xe class ', this.props.color)
    return <h1 style={{ color: this.props.color }}>{this.props.value} {this.props.branch}</h1>
  }
}

export default Xe;