import logo from './logo.svg';
import './App.css';

function Car() {
    const htlm =
      (
        <div className="App">
          <header className="App-header">
            <img src='lambologo.png' className="App-logo" alt="logo" />
            <p>
              Car
            </p>
            <a
              className="App-link"
              href="https://www.lamborghini.com/en-en"
              target="_blank"
              rel="noopener noreferrer"
            >
              LAMBORGHINI
            </a>
          </header>
        </div>
      );
    return htlm
  }
  
  export default Car;