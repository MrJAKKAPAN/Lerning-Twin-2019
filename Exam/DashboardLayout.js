import React, { Component } from "react";
import "antd/dist/antd.css";
import { Avatar, Badge, Col, Dropdown, Icon, Layout, Menu, Row } from "antd";
import { DivMenuUnfold, DivSider1, LayoutDashBoard, Logo } from "./Layout";
import { NavLink, withRouter } from "react-router-dom";
import { IconTrigger } from "./Button";
import NoticeIcon from "ant-design-pro/lib/NoticeIcon";

const { Header, Content, Sider } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/login">
        Log out
      </a>
    </Menu.Item>
  </Menu>
);

class DashboardLayout extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { location } = this.props;
    return (
      <LayoutDashBoard>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Logo />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["/"]}
            selectedKeys={[location.pathname]}
          >
            <DivSider1>จัดการสนาม</DivSider1>
            <Menu.Item key="/">
              <NavLink to="/">
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/profile-setting">
              <NavLink to="/profile-setting">
                <Icon type="setting" />
                <span>Profile Setting</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/users">
              <NavLink to="/users">
                <Icon type="dashboard" />
                <span>Users</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/booking">
              <NavLink to="/booking">
                <Icon type="dashboard" />
                <span>Booking</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/payment">
              <NavLink to="/payment">
                <Icon type="dashboard" />
                <span>Payment</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/member">
              <NavLink to="/member">
                <Icon type="dashboard" />
                <span>Members</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <DivMenuUnfold>
              <IconTrigger
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
            </DivMenuUnfold>
            <Row type="flex" justify="end" align="top">
              <Col>
                <p style={{ paddingRight: 30 }}>TH / EN</p>
              </Col>
              <span style={{ marginRight: 20 }}>
                <Badge count={10}>
                  <Avatar
                    style={{
                      color: "black",
                      backgroundColor: "#F5F5F5",
                      height: 30,
                      width: 30
                    }}
                  >
                    <NoticeIcon icon="bell">
                      <NoticeIcon.Tab
                        title="notification"
                        emptyText="notification"
                        emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
                      />
                    </NoticeIcon>
                  </Avatar>
                </Badge>
              </span>
              <Col>
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  style={{ height: 30, width: 30 }}
                />
              </Col>
              <Col style={{ marginRight: 20, marginLeft: 15 }}>
                <Dropdown overlay={menu}>
                  <p>
                    Weerawit Phaktawee <Icon type="down" />
                  </p>
                </Dropdown>
              </Col>
            </Row>
          </Header>
          <Content>{this.props.children}</Content>;
        </Layout>
      </LayoutDashBoard>
    );
  }
}

export default withRouter(DashboardLayout);
