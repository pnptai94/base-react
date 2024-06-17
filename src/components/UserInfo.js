import React from "react";

class UserInfo extends React.Component {
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
    handleOnChange = (event) => {
        //console.log(event.target.value);
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        //console.log(event.target.value);
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <div>
                My name is {this.state.name} !Age: {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Tên của bạn: </label>
                    <input type="text" onChange={(event) => this.handleOnChange(event)} />
                    <button>Click Me</button>
                    <label>Tuổi của bạn: </label>
                    <input type="text" onChange={(event) => this.handleOnChangeAge(event)} />
                    <button>Click Me</button>
                </form>
            </div>
        );
    }
}
export default UserInfo;