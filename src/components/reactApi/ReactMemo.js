import React from "react";

class Comp extends React.Component {
    render() {
        console.log("Child render");
        return (
            <div>
                <h1>{this.props.constant}</h1>
            </div>
        );
    }
}

const MemoComp = React.memo(function NewComp(props) {
    console.log("MemoComp render");
    return <h1>{props.constant}</h1>;
});

class ReactMemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1,
        };
    }

    updateHandler() {
        this.setState((prev) => ({
            counter: prev.counter + 1,
        }));
    }

    refreshHandler() {
        this.setState((prev) => ({
            counter: prev.counter,
        }));
    }

    render() {
        return (
            <div>
                <Comp constant={this.state.counter} />
                <MemoComp constant={this.state.counter} />
                <button onClick={() => this.updateHandler()}>
                    Update
                </button>
                <button onClick={() => this.refreshHandler()}>Refresh</button>
            </div>
        );
    }
}
export default ReactMemo;

