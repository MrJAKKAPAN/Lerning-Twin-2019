import React, { Component } from "react";
import { Layout,} from "antd";
import { MaskGroup } from "../../../Components/Layout";
import { ButtonCreateField } from "../../../Components/Button";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import ProfileSettingLayout from "../../../Components/ProfileSettingLayout";

const { Content } = Layout;

const PNoProfile = styled.p`
  font-family: SF Pro Display, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`;

class ProfileSetting extends Component {
  render() {
    return (
      <ProfileSettingLayout>
        <Content
          style={{
            padding: "30px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <MaskGroup>
            <PNoProfile>ยังไม่มีรายการสนามในหน้า Profile</PNoProfile>
            <ButtonCreateField
              type="primary"
              size="large"
              onClick={() =>
                this.props.history.push("/profile-setting/field-profile")
              }
            >
              Create Field
            </ButtonCreateField>
          </MaskGroup>
        </Content>
      </ProfileSettingLayout>
    );
  }
}

export default withRouter(ProfileSetting);
