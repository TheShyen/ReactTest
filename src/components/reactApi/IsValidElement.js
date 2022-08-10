import React from "react";

function A(props) {
    return (
        <div>
            <p>Function</p>
        </div>
    );
}

class B extends React.Component {
    render() {
        return (
            <div>
                <p>Class</p>
            </div>
        );
    }
}

const obj = {};

console.log('React.isValidElement(obj)',React.isValidElement(obj)); // false
console.log('React.isValidElement(A)', React.isValidElement(A)); // false
console.log('React.isValidElement(B)',React.isValidElement(B)); // false

const funcComp = <A />;
const classComp = <B />;
console.log('React.isValidElement(funcComp)',React.isValidElement(funcComp)); // true
console.log('React.isValidElement(classComp)',React.isValidElement(classComp)); // true


class IsValidElement extends React.Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default IsValidElement;