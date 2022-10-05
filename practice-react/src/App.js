import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Steps from './components/Steps/Steps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Device name="Huwei Y5 lite"></Device>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Steps></Steps>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
