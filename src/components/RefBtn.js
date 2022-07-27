import React from "react";

const RefButton = React.forwardRef((props, ref) => {
    <button ref={ref}>{props.children}</button>;
});

class RefBtn extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();
        this.getButtonProps = this.getButtonProps.bind(this);
    }

    getButtonProps() {
        console.log(this.ref);
    }

    render() {
        return (
            <div>
                <RefButton ref={this.ref}>Click me!</RefButton>
                <button onClick={this.getButtonProps}>DOM button</button>
            </div>
        );
    }
}

export default RefBtn;
