import React, {Component} from "react";
import DashboardLayout from "../../../../Components/DashboardLayout";
import {Breadcrumb, Button, Col, Layout, Row} from "antd";
import styled from "styled-components";
import {DivHeading, DivLayout, HeaderProfileSetting, LayoutProfileSetting} from "../../../../Components/Layout";
import {withRouter} from "react-router-dom";
import MyCheckBokButton from "../../../../Components/Button/CheckboxButton";

const {Content} = Layout;

const PHeadings = styled.p`
  padding-top: 39px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  color: #262626;
`;

const RowContent = styled(Row)`
  padding-top: 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  color: #262626;
`;

const PContent = styled.p`
  padding-left: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #262626;
`;

const PFacilities = styled.p`
  padding-top: 5px;
`;

const DivFacilities = styled.div`
  padding-left: 40px;
`;

const ButtonEditProfile = styled(Button)`
  float: right;
  font-weight: bold;
  margin-top: 100px;
  margin-right: 37px;
  width: 191px;
  border-radius: 3px;
`;

export const ContentsSuccessField = styled(Content)`
  margin: 1px 0;
  padding: 30px;
  background: #fff;
`;

class SuccessField extends Component {
    render() {
        return (
            <DashboardLayout>
                <DivHeading>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item href="/profile-setting">Profile Setting</Breadcrumb.Item>
                        <Breadcrumb.Item>สนาม Panda FC สาขา กรุงเทพกรีฑา</Breadcrumb.Item>
                    </Breadcrumb>
                </DivHeading>
                <DivLayout>
                    <LayoutProfileSetting>
                        <Layout>
                            <HeaderProfileSetting>
                                <p>สนาม Panda FC สาขา กรุงเทพกรีฑา</p>
                            </HeaderProfileSetting>
                            <ContentsSuccessField>
                                <Row>
                                    <img
                                        alt="Mask Group1"
                                        src="../Assets/Images/Mask%20Group1.png"
                                        style={{paddingRight: "20px"}}
                                    />
                                    <img
                                        alt="Mask Group2"
                                        src="../Assets/Images/Mask%20Group2.png"
                                        style={{paddingRight: "20px"}}
                                    />
                                    <img
                                        alt="Mask Group3"
                                        src="../Assets/Images/Mask%20Group3.png"
                                        style={{paddingRight: "20px"}}
                                    />
                                    <img
                                        alt="Mask Group4"
                                        src="../Assets/Images/Mask%20Group4.png"
                                        style={{paddingRight: "20px"}}
                                    />
                                    <img
                                        alt="Mask Group5"
                                        src="../Assets/Images/Mask%20Group5.png"
                                    />
                                </Row>
                                <div>
                                    <PHeadings>
                                        สนาม Panda FC สาขา กรุงเทพกรีฑา
                                        <br/>
                                        เขตพระโขนง จังหวัด กรุงเทพฯ
                                    </PHeadings>
                                    <RowContent type="flex">
                                        <Col>
                                            <p>เบอร์ติดต่อ :</p>
                                        </Col>
                                        <Col>
                                            <PContent>02-9552375-76</PContent>
                                        </Col>
                                    </RowContent>
                                    <RowContent type="flex">
                                        <Col>
                                            <p>วัน/เวลาทำการ :</p>
                                        </Col>
                                        <Col>
                                            <PContent>จันทร์ - ศุกร์</PContent>
                                            <PContent>เสาร์ - อาทิตย์</PContent>
                                        </Col>
                                        <Col>
                                            <PContent>เวลา 12.00 - 24.00</PContent>
                                            <PContent>เวลา 10.00 - 24.00</PContent>
                                        </Col>
                                    </RowContent>
                                    <RowContent type="flex">
                                        <Col>
                                            <PFacilities>สิ่งอำนวยความสะดวก :</PFacilities>
                                        </Col>
                                        <Col>
                                            <DivFacilities>
                                                <MyCheckBokButton icon={"coffee"} />
                                                <MyCheckBokButton icon={"skin"} />
                                                <MyCheckBokButton icon={"wifi"} />
                                                <MyCheckBokButton icon={"shop"} />
                                                <MyCheckBokButton icon={"laptop"} />
                                            </DivFacilities>
                                        </Col>
                                    </RowContent>
                                    <RowContent type="flex">
                                        <Col>
                                            <p>เกี่ยวกับสนาม :</p>
                                        </Col>
                                        <Col>
                                            <PContent>
                                                สนาม Panda Fc สาขา กรุงเทพกรีฑา สาขาน้องใหม่สุดของเรา
                                                พร้อมเปิดให้บริการแล้ววันนี้
                                                เพื่อรองรับจอมยุทธทั้งหลายที่อยู่ ในย่านศรีนครินทร์{" "}
                                                <br/>
                                                พระรามเก้า ไม่ต้องเสียเวลาเดินทางอีกต่อไป
                                                ท้าให้ท่านลองด้วยหญ้าไฮบริดชนิดพิเศษ นำเข้ามาจาก บราซิล
                                                ช่วยรองรับการกระแทกได้ถึง 50% <br/>
                                                วิ่งเร็วขึ้น 23% เพื่อช่วยให้
                                                ท่านปลอดภัยและสนุกไปตลอดทั้งเกมส์เลย ที่แรกและที่เดียวใน
                                                ประเทศ…
                                            </PContent>
                                        </Col>
                                    </RowContent>
                                    <ButtonEditProfile type="primary" size="large"
                                                       onClick={() => this.props.history.push('/profile-setting/edit-profile')}>
                                        Edit Profile
                                    </ButtonEditProfile>
                                </div>
                            </ContentsSuccessField>
                        </Layout>
                    </LayoutProfileSetting>
                </DivLayout>
            </DashboardLayout>
        );
    }
}

export default withRouter(SuccessField);
