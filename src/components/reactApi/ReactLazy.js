import React, { Suspense } from "react";

const Lazy = React.lazy(() => import("./Lazy"));

function Load() {
    return <div> </div>;
}

/* export function ReactLazy() {
    const [state, setState] = useState(0);

    return (
        <div>
            <button onClick={() => setState(!state)}>Show Lazy</button>
            <Suspense fallback={<Load />}>{state ? <Lazy /> : null}</Suspense>
        </div>
    );
} */
class ReactLazy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        };
    }
    handle() {
        this.setState((prev) => ({
            counter: !prev.counter,
        }));
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handle()}>Show Lazy</button>
                <Suspense fallback={<Load />}>
                    {this.state.counter ? <Lazy /> : null}
                </Suspense>
            </div>
        );
    }
}
export default ReactLazy;
