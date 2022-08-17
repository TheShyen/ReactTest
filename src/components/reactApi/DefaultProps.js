import React from "react";
class Foo extends React.Component {
    render() {
        return <h1>{this.props.content}</h1>;
    }
}

Foo.defaultProps = { content: "Aboba" };

function DefaultProps() {
    return (
        <div>
            <Foo />
            <Foo content="Abobus" />
            <Foo content={null} />
            <Foo content={false} />
        </div>
    );
}

export default DefaultProps;
