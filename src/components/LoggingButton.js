import React from "react";

class LoggingButton extends React.Component {
    handleClick = () => {
        console.log("значение this:", this);
    };
    render() {
        return <button onClick={this.handleClick}>Нажми на меня</button>;
    }
}
 export default LoggingButton;