import logo from './logo.svg';
import './App.css';
import SimpleClass from "./components/SimpleClass";
import SimpleFunc from "./components/SimpleFunc";
import Clock from './components/Clock';
import Counter from './components/Counter';
import ButtonTest from './components/ButtonTest';
import LoggingButton from './components/LoggingButton';
function App() {
  return (
    <div className="App">
      <Clock/>
      <SimpleFunc testValue="funcValue"/>
      <SimpleClass testValue="classValue"/>
      <Counter/>
      <ButtonTest/>
      <LoggingButton/>
    </div>
    
  );
}

export default App;
