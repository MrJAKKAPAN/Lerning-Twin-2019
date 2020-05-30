import React from "react";
import {Button} from "antd";

const MyCheckBokButton = (props) => {
    const [isActive, setIsActive] = React.useState(true);
    return (
        <Button
            style={{
                marginRight: "10px",
                border: isActive ? "2px solid darkgrey" : "2px solid black"
            }}
            onClick={() => {
                setIsActive(!isActive);
            }}
            {...props}
        />
    );
};

export default MyCheckBokButton;
