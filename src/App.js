import logo from './logo.svg';
import './App.css';
import SimpleClass from "./components/SimpleClass";
import SimpleFunc from "./components/SimpleFunc";
function App() {
  return (
    <div className="App">
      <p>Time {new Date().toLocaleTimeString()}</p>
      <SimpleFunc testValue="funcValue"/>
      <SimpleClass testValue="classValue"/>
    </div>
  );
}

export default App;
