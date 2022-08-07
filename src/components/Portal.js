import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement("div");
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            showModal: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }
    handleShow() {
        this.setState({ showModal: true });
    }

    handleHide() {
        this.setState({ showModal: false });
    }

    handleClick() {
        this.setState((state) => ({
            clicks: state.clicks + 1,
        }));
    }

    render() {
        const modal = this.state.showModal ? (
            <Modal>
              <div className="modal">
                <button>Кликните</button>
                <button onClick={this.handleHide}>Hide modal</button>
              </div>
            </Modal>
          ) : null;
        return (
            <div onClick={this.handleClick}>
                <h1>Количество кликов: {this.state.clicks}</h1>
                <button onClick={this.handleShow}>Show modal</button>
                {modal}
            </div>
        );
    }
}

export default Portal;
