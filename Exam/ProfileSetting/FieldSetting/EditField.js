import React, { Component } from "react";
import ProfileSettingLayout from "../../../../Components/ProfileSettingLayout";
import styled from "styled-components";
import {Checkbox, Col, Form, Icon, Input, Row, TimePicker} from "antd";
import {
  ButtonCreateField,
  ButtonPreview
} from "../../../../Components/Button";
import {PTimeFieldSetting, PTimeFieldSettingAdd} from "../../../../Components/Fonts";
import moment from "moment";

const TimeDay = () => (
    <span>
    <Row type="flex">
      <Col span={4}>
        <PTimeFieldSetting>เวลา</PTimeFieldSetting>
      </Col>
      <Col span={9}>
        <TimePicker
            size="large"
            style={{marginRight: "10px", width: "100%"}}
            defaultValue={moment("12:00:00", "HH:mm:ss")}
        />
      </Col>
      <Col span={2}/>
      <Col span={9}>
        <TimePicker
            size="large"
            style={{width: "100%"}}
            defaultValue={moment("23:59:00", "HH:mm:ss")}
        />
      </Col>
    </Row>
  </span>
);

class EditField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }

  render() {
    function onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }

    const InputField = styled(Input)`
      width: 115px;
    `;

    const InputDay = styled(Input)`
      width: 90px;
    `;

    const IconField = styled(Icon)`
      margin-left: 10px;
      color: #00bfff;
    `;

    const IconEditField = styled(Icon)`
      margin-top: 30px;
      color: #00bfff;
    `;

    const PField = styled.p`
      margin-top: 15px;
    `;

    return (
      <ProfileSettingLayout>
        <Form>
          <Form.Item>
            <Row type="flex" align="middle" gutter={[6]}>
              <Col span={2}>
                <PField>สนาม 4</PField>
              </Col>
              <Col span={5}>
                <InputField size="large" style={{width: "100%"}} defaultValue="สนาม 1" />
              </Col>
              <Col span={4}>
                <p>
                  <img
                    alt="Mask Group5"
                    src="../Assets/Images/Mask%20Group5.png"
                    style={{ width: "100%"}}
                  />
                </p>
              </Col>
              <Col span={3}>
                <PField>สนาม 7 คน </PField>
              </Col>
              <Col span={1}>
                <p>
                  <IconEditField type="edit" />
                </p>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="วัน / เวลาทำการ">
            <Checkbox onChange={onChange}>ตามเวลาสนาม</Checkbox>
            <br/>
            <Row type="flex">
              <Col span={10}>
                <Row type="flex">
                  <Col span={5}>
                    <Checkbox onChange={onChange} defaultChecked={this.state.checked}>วัน</Checkbox>
                  </Col>
                  <Col span={19}>
                    <Row type="flex" gutter={[12]}>
                      <Col span={11}>
                        <Input size="large" style={{width: "100%"}} defaultValue={"จันทร์"}/>
                      </Col>
                      <Col span={2}>
                        <h2>-</h2>
                      </Col>
                      <Col span={11}>
                        <Input size="large" style={{width: "100%"}} defaultValue={"ศุกร์"}/>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={13}>
                <TimeDay/>
              </Col>
              <Col span={1}>
                <IconField type="delete"/>
              </Col>
            </Row>
            <Row type="flex">
              <Col span={10}>
                <Row type="flex">
                  <Col span={5}/>
                  <Col span={19}>
                    <Row type="flex" gutter={[12]}>
                      <Col span={11}>
                        <Input size="large" style={{width: "100%"}} defaultValue={"เสาร์"}/>
                      </Col>
                      <Col span={2}>
                        <h2>-</h2>
                      </Col>
                      <Col span={11}>
                        <Input size="large" style={{width: "100%"}} defaultValue={"อาทิตย์"}/>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={13}>
                <TimeDay/>
              </Col>
              <Col span={1}>
                <IconField type="plus"/>
              </Col>
            </Row>
          </Form.Item>
          <hr color="E8E8E8" style={{ height: "100%", width: "100%" }} />
          <Form.Item label="ราคา">
            <div>
              <Row type="flex">
                <Col span={4}>
                  <Checkbox onChange={onChange}>ราคาเดียว</Checkbox>
                </Col>
                <Col span={12}>
                  <Row gutter={[8]}>
                    <Col span={12}>
                      <InputDay size="large" style={{width: "100%"}}/>
                    </Col>
                    <Col span={6}>
                      <p>บาท / ชม.</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row
                  type="flex"
                  justify="space-between"
                  style={{marginTop: "10px"}}
              >
                <Col span={8}>
                  <Row type="flex">
                    <Col span={6}>
                      <Checkbox onChange={onChange} defaultChecked={this.state.checked}>วัน</Checkbox>
                    </Col>
                    <Col span={18}>
                      <Row type="flex" gutter={[12]}>
                        <Col span={11}>
                          <Input size="large"
                                 style={{width: "100%"}} defaultValue="จันทร์"/>
                        </Col>
                        <Col span={2}>
                          <h2>-</h2>
                        </Col>
                        <Col span={11}>
                          <Input size="large"
                                 style={{width: "100%"}} defaultValue="ศุกร์"/>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col span={16}>
                  <Row gutter={[8]} type="flex">
                    <Col span={3}>
                      <PTimeFieldSettingAdd>เวลา</PTimeFieldSettingAdd>
                    </Col>
                    <Col span={21}>
                      <Row gutter={[8]} type="flex">
                        <Col span={5}>
                          <InputDay size="large" style={{width: "100%"}} defaultValue="12:00"/>
                        </Col>
                        <Col span={2}>
                          <h2>-</h2>
                        </Col>
                        <Col span={5}>
                          <InputDay size="large" style={{width: "100%"}} defaultValue="24:00"/>
                        </Col>
                        <Col span={6}>
                          <InputDay size="large" style={{width: "100%"}} defaultValue="1,500"/>
                        </Col>
                        <Col span={5}>
                          <p>บาท / ชม.</p>
                        </Col>
                        <Col span={1}>
                          <Icon type="delete" style={{color: '#00bfff'}}/>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row
                  type="flex"
                  justify="space-between"
                  style={{marginTop: "10px"}}
              >
                <Col span={8}>
                  <Row type="flex">
                    <Col span={6}/>
                    <Col span={18}>
                      <Row type="flex" gutter={[12]}>
                        <Col span={11}>
                          <Input size="large"
                                 style={{width: "100%"}} defaultValue="เสาร์"/>
                        </Col>
                        <Col span={2}>
                          <h2>-</h2>
                        </Col>
                        <Col span={11}>
                          <Input size="large"
                                 style={{width: "100%"}} defaultValue="อาทิตย์"/>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col span={16}>
                  <Row gutter={[8]} type="flex">
                    <Col span={3}>
                      <PTimeFieldSettingAdd>เวลา</PTimeFieldSettingAdd>
                    </Col>
                    <Col span={21}>
                      <Row gutter={[8]} type="flex">
                        <Col span={5}>
                          <InputDay size="large" style={{width: "100%"}} defaultValue="10:00"/>
                        </Col>
                        <Col span={2}>
                          <h2>-</h2>
                        </Col>
                        <Col span={5}>
                          <InputDay size="large" style={{width: "100%"}} defaultValue="24:00"/>
                        </Col>
                        <Col span={6}>
                          <InputDay size="large" style={{width: "100%"}} defaultValue="1,800"/>
                        </Col>
                        <Col span={5}>
                          <p>บาท / ชม.</p>
                        </Col>
                        <Col span={1}>
                          <Icon type="plus" style={{color: '#00bfff'}}/>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Form.Item>
          <br/>
          <Form.Item>
            <div style={{ float: "left" }}>
              <ButtonPreview size="large">Delete</ButtonPreview>
            </div>
            <div style={{ float: "right" }}>
              <ButtonPreview size="large">Preview</ButtonPreview>
              <ButtonCreateField
                type="primary"
                size="large"
                htmlType="submit"
                onClick={() =>
                  this.props.history.push("/profile-setting/field-setting")
                }
              >
                Confirm
              </ButtonCreateField>
            </div>
          </Form.Item>
        </Form>
      </ProfileSettingLayout>
    );
  }
}

export default EditField;
