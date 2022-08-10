import React from "react";

function Card(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

class Parent extends React.Component {
    render() {
        return (
            <div>
                {React.Children.map(this.props.children, (child, i) => {
                    return React.cloneElement(
                        child,
                        { title: `Заголовок${i + 1}`, content: `Содержимое${i + 1}` },
                        null
                    );
                })}
            </div>
        );
    }
}

class ChildrenMap extends React.Component {
    render() {
        return (
            <Parent>
                <Card />
                <Card />
            </Parent>
        );
    }
}
export default ChildrenMap;