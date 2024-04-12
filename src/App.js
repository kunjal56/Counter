import logo from './logo.svg';
import './App.css';
import Calclulator from './Calclulator';
import CountRedeucer from './CountReducer';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <Calclulator/>
      <CountRedeucer/>
      <ErrorBoundary/>
      
    </div>
  );
}

export default App;
