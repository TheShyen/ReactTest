import React from "react";
class Car extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img
                src="https://sun1-85.userapi.com/impg/iqskT-WqzU9QA6ZEkLhqjdQOLJ_Pke7NzZPv9g/wKPaNEonJAw.jpg?size=100x0&quality=96&crop=0,0,899,899&sign=0841f69db83d0fef9ca77a84e01317a4&c_uniq_tag=KaZdao5R74_wQJt2WFUB5nF8-1vSGpCFsvKV9zAw_XQ&ava=1"
                style={{ position: "absolute", left: mouse.x, top: mouse.y }}
            />
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        });
    }

    render() {
        return (
            <div style={{ height: "30vh" }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

class RenderPropsTest extends React.Component {
    render() {
        return (
            <div>
                <h1>Двигай мышь</h1>
                <Mouse render={(mouse) => <Car mouse={mouse} />} />
            </div>
        );
    }
}
export default RenderPropsTest;