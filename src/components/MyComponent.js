import React from "react";
import UserInfo from "./UserInfo";
import Displayinfo from "./Displayinfo";

class MyComponent extends React.Component {

    render() {
        const Myinfo = ['tai', 'nam', 'ngoc']
        return (
            <div>
                <UserInfo />
                <br /><br />
                <Displayinfo name="PhuocTai" age="32" />
                <hr />
                <Displayinfo name="HoangNam" age="33" Myinfo={Myinfo} />
            </div>
        );
    }
}

export default MyComponent;