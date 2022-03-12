import logo from './logo.svg';
import './App.css';
import Car from './Car';
import Xe from './Xe';
import MyForm from './MyForm';

function App() {
  const htlm =
    (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 123
          </a> 
          {/* <Car />
          <Xe color='red' value='xe đỏ' branch='Lambor'/>
          <Xe color='blue'value='xe xanh' branch='Audi'/> */}
          {/* <Xe color='red'value='xe cam' branch='Ferrari'/> */}
          <MyForm />
        </header>
      </div>
     
    );
  return htlm
}

export default App;
