import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Dashboard/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          i am mr rajeev
        </p>
        <h1>mera h1 heading</h1>
        <h2>mera h2 heading</h2>
        <h3>mera h3 heading</h3>
        <h4>mera h4 heading</h4>
        <h5>mera h5 heading</h5>
        <h6>mera h6 heading</h6>
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
