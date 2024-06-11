import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Hoang Nam",
        address: "An Giang",
        age: 31
    };

    render() {
        return (
            <div>
                My name is {this.state.name} ! Address: {this.state.address}
            </div>
        );
    }
}

export default MyComponent;