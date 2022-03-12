import logo from './logo.svg';
import './App.css';
import React from 'react';

class Xe extends React.Component {
  constructor(props) {
    console.log('constructor: ', props);
    super(props)
    this.state = {
      color: props.color,
      valus: props.value
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: ', state.color);
    return { color: state.color };
  }

  render() {
    console.log('render: ', this.state.color);
    return <h1 style={{ color: this.state.color }}>{this.state.value} {this.props.branch}</h1>
  }

  componentDidMount() {
    console.log('componentDidMount: ', this.state.color);
    setTimeout(() => {
      this.setState({ color: "yellow" })
      console.log('Xe color sau: ', this.state.color);
    }, 3000)
  }

}

export default Xe;