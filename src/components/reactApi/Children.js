import React from "react";

function Item(props) {
    return (
        <div>
            <h2>{props.value}</h2>
        </div>
    );
}

function Parent(props) {
    return <div>{React.Children.only(props.children)}</div>;
}

class Children extends React.Component {
    render() {
        return (
            <div>
                <Parent>
                    <Item value="First" />
                </Parent>
            </div>
        );
    }
}
export default Children;
