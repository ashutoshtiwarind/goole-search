import logo from "./assets/logo.png"
import './App.css';
import { Result } from "./components/result";


function App() {
  
  return (
    <div className="App">
      <img className="logo" src={logo} alt="" />
      <Result />
      
    </div>
  );
}

export default App;
