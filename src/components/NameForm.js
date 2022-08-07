import React from "react";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {
        alert("Отправленное имя: " + this.input.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input type="text" ref={this.input} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}
export default NameForm;
