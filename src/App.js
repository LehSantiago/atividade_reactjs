import logo from './OGab.gif';
import './App.css';


function sum(a,b){

  return a + b 
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code> ATIVIDADE REACTS JS</code>
        </p>
        
          <p> Soma:{sum(5,48)}</p>
        
      </header>
    </div>
  );
}

export default App;
