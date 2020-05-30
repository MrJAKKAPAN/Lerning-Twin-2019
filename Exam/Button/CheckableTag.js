import React from 'react';
import 'antd/dist/antd.css';
import {Tag} from 'antd';

const {CheckableTag} = Tag;

export default class MyTag extends React.Component {
    state = {checked: true};

    handleChange = checked => {
        this.setState({checked});
    };

    render() {
        return (
            <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange}
                          style={{height:"40px",width:"40px"}}/>
        );
    }
}
