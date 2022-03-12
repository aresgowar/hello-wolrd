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
    // this.shoot = this.shoot.bind(this)
  }

  shoot1 = () => {
    console.log('shoot 1 this = ', this);
  }

  shoot2 = (a) => {
    console.log('shoot 2 this = ', this);
    console.log('shoot 2 agu = ', a);
  }

  shoot3 = (b) => {
    console.log('shoot 3 this = ', this);
    console.log('shoot 3 agu = ', b);
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps: ', state.color);
  //   return { color: state.color };
  // }

  render() {
    console.log('render: ', this.state.color);
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.state.value} {this.props.branch}</h1>
        <button onClick={this.shoot1} style={{ color:'green', cursor: 'pointer' }}>Shoot1</button>
        <br/>
        <button onClick={() => this.shoot2('shoot 2')} style={{ color:'green', cursor: 'pointer' }}>Shoot2</button>
        <br/>
        <button onClick={this.shoot3.bind(this, 'shoot 3')} style={{ color:'green', cursor: 'pointer' }}>Shoot3</button>
      </div>
    )
  }

  // componentDidMount() {
  //   console.log('componentDidMount: ', this.state.color);
  //   setTimeout(() => {
  //     this.setState({ color: "yellow" })
  //     console.log('Xe color sau: ', this.state.color);
  //   }, 3000)
  // }

}

export default Xe;