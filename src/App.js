import logo from './logo.svg';
import './App.css';
import SimpleClass from "./components/SimpleClass";
import SimpleFunc from "./components/SimpleFunc";
import Clock from './components/Clock';
import Counter from './components/Counter';
import ButtonTest from './components/ButtonTest';
import LoggingButton from './components/LoggingButton';
import LoginControl from './components/LoginControl';
import NumberList from './components/NumberList';
import NameForm from './components/NameForm';
import Calculator from './components/Calculator';
import SignUpDialog from './components/SignUpDialog';

const numbers = [1, 2, 3, 4, 5];
function App() {
  return (
    <div className="App">
      <Clock/>
      <SimpleFunc testValue="funcValue"/>
      <SimpleClass testValue="classValue"/>
      <Counter/>
      <ButtonTest/>
      <LoggingButton/>
      <LoginControl/>
      <NumberList numbers={numbers}/>
      <NameForm/>
      <Calculator/>
      <SignUpDialog/>
    </div>
    
  );
}

export default App;
