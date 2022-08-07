import React, { PureComponent } from "react";

class PureComp extends React.PureComponent {
    render() {
        console.log("Pure Comp render");
        return <div>Pure Component {this.props.name}</div>;
    }
}
class RegComp extends React.Component {
    render() {
        console.log("Regular Comp render");
        return <div>Regular Component {this.props.name}</div>;
    }
}
class CompTest extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: "Ruslan",
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Ruslan",
            });
        }, 2000);
    }

    render() {
        console.log("*********Parent Comp render************");
        return (
            <div>
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        );
    }
}
export default CompTest;
