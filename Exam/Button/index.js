import styled from "styled-components";
import { Button, Icon } from "antd";
import { Link } from "react-router-dom";

export const ButtonGoogle = styled(Button)`
  position: relative;
  width: 100%;
  height: 40px;
  background: #fe4934;
  border: 0.5px solid #e5e5e5;
  border-radius: 3px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
`;

export const ButtonFacebook = styled(Button)`
  position: relative;
  width: 100%;
  height: 40px;
  background: #3b5998;
  border: 0.5px solid #e5e5e5;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
`;

export const ButtonSignIn = styled(Button)`
  position: relative;
  top: 20px;
  max-width: 190px;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 3px;
`;

export const ButtonCreateAccount = styled(Button)`
  position: relative;
  max-width: 190px;
  top: 10px;
  width: 100%;
  height: 40px;
  border-radius: 3px;
  font-weight: bold;
  color: #ffffff;
`;

export const ButtonSendReset = styled(Button)`
  position: relative;
  max-width: 190px;
  top: 10px;
  width: 100%;
  height: 40px;
  border-radius: 3px;
  font-weight: bold;
  color: #ffffff;
`;

export const IconTrigger = styled(Icon)`
  position: relative;
  padding: 0 24px;
  color: black;
`;

export const IconBell = styled(Icon)`
  position: relative;
  padding: 15px;
  //right: 10px;
  left: 5px;
  float: end;
  color: black;
  background-color: #f5f5f5;
  border-radius: 50%;
`;

export const IconDown = styled(Icon)`
  position: relative;
  padding: 15px;
  right: 10px;
  float: end;
  color: black;
`;

export const LinkForgot = styled(Link)`
  float: right;
`;

export const ButtonSearch = styled(Button)`
  width: 120px;
  font-weight: bold;
`;

export const ButtonCreateField = styled(Button)`
  width: 191px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
`;

export const ButtonPreview = styled(Button)`
  width: 191px;
  margin-right: 10px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
`;

export const ButtonCreateSubField = styled(Button)`
  width: 191px;
  margin-right: 10px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
`;

export const ButtonFinish = styled(Button)`
  width: 191px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
`;

export const IconFieldProfile = styled(Icon)`
  margin-top: 12px;
  float: right;
  color: #00bfff;
`;
