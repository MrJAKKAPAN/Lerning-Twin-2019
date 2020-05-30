import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {
    ContentsProfileSetting,
    DivHeading,
    DivLayout,
    DivProfileSettingLayout,
    HeaderProfileSetting,
    LayoutProfileSetting
} from "./Layout";
import {Breadcrumb, Col, Row} from "antd";
import DashboardLayout from "./DashboardLayout";
import MenuProfileSetting from "./Layout/MenuProfileSetting";

class ProfileSettingLayout extends Component {
    render() {
        return (
            <DashboardLayout>
                <DivHeading>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item href="/profile-setting">Profile Setting</Breadcrumb.Item>
                        <Breadcrumb.Item>Field’s Profile</Breadcrumb.Item>
                    </Breadcrumb>
                </DivHeading>
                <DivLayout>
                    <LayoutProfileSetting>
                        <HeaderProfileSetting>
                            <p>Field</p>
                        </HeaderProfileSetting>
                        <ContentsProfileSetting>
                            <Row type='flex'>
                                <Col span='4'>
                                    <MenuProfileSetting/>
                                </Col>
                                <Col span='19'>
                                    <DivProfileSettingLayout>
                                        {this.props.children}
                                    </DivProfileSettingLayout>
                                </Col>
                            </Row>
                        </ContentsProfileSetting>
                    </LayoutProfileSetting>
                </DivLayout>
            </DashboardLayout>
        );
    }
}

export default withRouter(ProfileSettingLayout);
