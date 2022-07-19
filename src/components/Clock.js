import React from "react";
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
        console.log("aboba");
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.componentDidMount}>Aboba</button>
            </div>
        );
    }
}
export default Clock;
