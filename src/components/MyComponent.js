import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Hoang Nam",
        address: "An Giang",
        age: 31
    };
    handleClickme(event) {
        //console.log(">>> you click button Click me");
        console.log(event);
    }
    handleMouseover(event) {
        // console.log(">>> you click button Hover me");
        console.log(event);
    }
    render() {
        return (
            <div>
                My name is {this.state.name} ! Address: {this.state.address}
                <button onClick={this.handleClickme}>click me</button>
                <button onMouseOver={this.handleMouseover}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;