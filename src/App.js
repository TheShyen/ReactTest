import "./App.css";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import ButtonTest from "./components/ButtonTest";
import LoggingButton from "./components/LoggingButton";
import LoginControl from "./components/LoginControl";
import NumberList from "./components/NumberList";
import Calculator from "./components/Calculator";
import SignUpDialog from "./components/SignUpDialog";
import ContextTest from "./components/ContextTest";
import ErrorBoundary from "./components/ErrorBoundary";
import RefBtn from "./components/RefBtn";
import HOC from "./components/HOC";
import Portal from "./components/Portal";
import RenderPropsTest from "./components/RenderPropsTest";
import NameForm from "./components/NameForm";
import CompTest from "./components/CompTest";
import ReactMemo from "./components/reactApi/ReactMemo";
import IsValidElement from "./components/reactApi/IsValidElement";
import ChildrenMap from "./components/reactApi/ChildrenMap";
import Children from "./components/reactApi/Children";
import ReactLazy from "./components/reactApi/ReactLazy";
import DefaultProps from "./components/reactApi/DefaultProps";
import FlushSync from "./components/reactApi/FlushSync";
import Events from "./components/reactApi/Events";
const numbers = [1, 2, 3, 4, 5];

function App() {
    return (
        <div className="App">
            <DefaultProps />
            <FlushSync />
            <Events />
        </div>
    );
}

export default App;
