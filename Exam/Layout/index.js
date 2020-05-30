import { Layout, Row } from "antd";
import styled from "styled-components";

const { Header, Content } = Layout;

export const LayoutLogin = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  background-color: #e5e5e5;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  @media (min-width: 992px) {
    justify-content: center;
  }
`;

export const RowLogin = styled(Row)`
  position: relative;
  max-width: 970px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
`;

export const DivLogo1 = styled.div`
  position: relative;
  width: 100%;
  height: 603px;
  background-image: url(/Assets/Images/MON_1939.png);
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const DivLogo2 = styled.div`
  position: relative;
  width: 100%;
  height: 712px;
  background-image: url("/Assets/Images/banner_left_login2.png");
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const DivLogo3 = styled.div`
  position: relative;
  width: 100%;
  height: 603px;
  background-image: url("/Assets/Images/banner_left_login3.png");
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const ImgLogo = styled.img`
  position: absolute;
  left: 45px;
  right: 230px;
  top: 65px;
`;

export const Div = styled.div`
  position: relative;
  padding: 10% 10% 10% 15%;
  width: 100%;
  text-align: left;
`;

export const DivForgotPassword = styled.div`
  position: relative;
  padding: 60px;
  top: -5vh;
  width: 100%;
`;

export const Logo = styled.div`
  padding: 15px;
  height: 21px;
  margin: 17px;
  background-image: url("/Assets/Images/Logo-White-Kickdudes1.png");
  background-size: 75%;
  background-repeat: no-repeat;
`;

export const LayoutDashBoard = styled(Layout)`
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
`;

export const DivSider1 = styled.div`
  padding-top: 5px;
  padding-left: 20px;
  padding-bottom: 2px;
  font-family: "Sukhumvit Set", sans-serif;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: -0.01em;
  opacity: 0.4;
`;

export const DivMenuUnfold = styled.div`
  float: left;
`;

export const MaskGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 620px;
  height: 50vh;
  flex-direction: column;
  background-image: url(/Assets/Images/MaskGroup.png);
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const DivHeading = styled.div`
  margin: 2px 0;
  background-color: #fff;
  padding: 15px 0 3px 30px;
`;

export const DivLayout = styled.div`
  margin: 30px 30px;
`;

export const LayoutProfileSetting = styled(Layout)`
  width: 100%; 
  @media (min-width: 1280px) {
    padding: 30px 200px 0 0;
  }

  @media (min-width: 1440px) {
    padding: 30px 350px 0 0;
  }
`;

export const HeaderProfileSetting = styled(Header)`
  background: #fff;
  font-weight: bold;
`;

export const ContentsProfileSetting = styled(Content)`
  margin: 1px 0 0 0;
  padding-top: 24px;
  background: #fff;
`;

export const DivProfileSettingLayout = styled.div`
  margin-left: 40px;
`;

export const HeaderUserScreen = styled(Header)`
  background: #fff;
  font-weight: bold;
`;

export const ContentsUserScreen = styled(Content)`
  margin: 1px 0 0 0;
  padding: 24px;
  background: #fff;
  font-weight: bold;
`;

export const DivUserScreen = styled.div`
  margin: 30px 850px 0 0;
  
  @media (min-width: 1280px) {
    margin: 30px 310px 0 0;
  }
  
  @media (min-width: 1440px) {
    margin: 30px 400px 0 0;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  height: 100%; 
  color: #E8E8E8;
  margin-top: 10px;
  margin-bottom: 10px;
`;
