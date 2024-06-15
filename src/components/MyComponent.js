import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Hoang Nam",
        address: "An Giang",
        age: 31
    };
    handleClickme(event) {
        console.log(">>> you click button Click me");
        //console.log("My name is ", this.state.name);
        //console.log(event);
        this.setState({
            name: "Phuoc Tai"
        });
    }
    handleMouseover(event) {
        // console.log(">>> you click button Hover me");
        console.log(event);
    }
    render() {
        return (
            <div>
                My name is {this.state.name} ! Address: {this.state.address}
                <button onClick={(event) => { this.handleClickme(event) }}>click me</button>
                <button onMouseOver={this.handleMouseover}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;