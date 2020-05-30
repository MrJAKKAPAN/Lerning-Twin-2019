import React, {Component} from 'react';
import {Menu} from "antd";
import {NavLink, withRouter} from "react-router-dom";

class MenuProfileSetting extends Component {
    render() {
        const { location } = this.props;
        return (
            <Menu
                mode="inline"
                style={{width: '100%' , height: '100%' ,minWidth: '120px'}}
                defaultSelectedKeys={["/profile-setting"]}
                selectedKeys={[location.pathname]}
            >
                <Menu.Item key="/profile-setting">
                    <NavLink to="/profile-setting">
                        <span>Field’s Profile</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="/profile-setting/field-setting">
                    <NavLink to="/profile-setting/field-setting">
                        <span>Field’s Setting</span>
                    </NavLink>
                </Menu.Item>
            </Menu>
        );
    }
}

export default withRouter(MenuProfileSetting);
