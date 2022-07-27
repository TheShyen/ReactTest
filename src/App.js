import "./App.css";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import ButtonTest from "./components/ButtonTest";
import LoggingButton from "./components/LoggingButton";
import LoginControl from "./components/LoginControl";
import NumberList from "./components/NumberList";
import NameForm from "./components/NameForm";
import Calculator from "./components/Calculator";
import SignUpDialog from "./components/SignUpDialog";
import ContextTest from "./components/ContextTest";
import ErrorBoundary from "./components/ErrorBoundary";
import RefBtn from "./components/RefBtn";
const numbers = [1, 2, 3, 4, 5];

function App() {
    return (
        <div className="App">
            <ContextTest />
            <p>Жми на счетчик 5 раз</p>
            <p>Если в следующих двух хоть в одном ошибка то error boundary заменит их обоих</p>
            <ErrorBoundary>
                <Counter />
                <Counter />
            </ErrorBoundary>

            <ErrorBoundary>
                <Counter />
            </ErrorBoundary>
            <ErrorBoundary>
                <Counter />
            </ErrorBoundary>
            <RefBtn />
            {/* <Clock/>
      <Counter/>
      <ButtonTest/>
      <LoggingButton/>
      <LoginControl/>
      <NumberList numbers={numbers}/>
      <NameForm/>
      <Calculator/>
      <SignUpDialog/> */}
        </div>
    );
}

export default App;
