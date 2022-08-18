import React from "react";
class ChildComponent extends React.Component {
    state = {
        value: "Я поменялся"
    }
  
    render() {
      return (
      <div>
          <button onClick={() => { this.props.updateData(this.state.value)}}>Button</button>
      </div>
      )
    }
  }
  
  class ChildParent extends React.Component {
    state = {
      value: "Йоу"
    };
  
    updateData = (value) => {
      this.setState({ value: value })
    }
  
    render() {
      return (
        <div>
          <p>State: {this.state.value}</p>
          <ChildComponent updateData={this.updateData} />
        </div>
      )
    }
  }
export default ChildParent;

