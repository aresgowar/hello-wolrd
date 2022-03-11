import logo from './logo.svg';
import './App.css';
import React from 'react';

class Xe extends React.Component {
     htlm =
      (
        <div className="App">
          <header className="App-header">
            <img src='./pngwing.com.png' className="App-logo" alt="logo" />
            <p>
              Quạt
            </p>
            <a
              className="App-link"
              href="https://www.dienmayxanh.com/quat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Siêu mát
            </a>
          </header>
        </div>
      );
    render() {
        return this.htlm
    }
}

export default Xe;