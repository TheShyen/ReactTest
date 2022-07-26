import './App.css';
import Clock from './components/Clock';
import Counter from './components/Counter';
import ButtonTest from './components/ButtonTest';
import LoggingButton from './components/LoggingButton';
import LoginControl from './components/LoginControl';
import NumberList from './components/NumberList';
import NameForm from './components/NameForm';
import Calculator from './components/Calculator';
import SignUpDialog from './components/SignUpDialog';
import ContextTest from './components/ContextTest';
const numbers = [1, 2, 3, 4, 5];


function App() {
  return (
    <div className="App">
      <ContextTest/>
      <Clock/>
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
