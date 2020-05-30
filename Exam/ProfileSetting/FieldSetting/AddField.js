import React, {Component} from "react";
import ProfileSettingLayout from "../../../../Components/ProfileSettingLayout";
import {
    Checkbox,
    Col,
    Form,
    Icon,
    Input,
    Row,
    Select,
    TimePicker
} from "antd";
import styled from "styled-components";
import {
    ButtonCreateField,
    ButtonPreview,
} from "../../../../Components/Button";
import {PTimeFieldSetting, PTimeFieldSettingAdd} from "../../../../Components/Fonts";
import moment from "moment";

const {Option} = Select;

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
            defaultValue={moment("00:00:00", "HH:mm:ss")}
        />
      </Col>
      <Col span={2}/>
      <Col span={9}>
        <TimePicker
            size="large"
            style={{width: "100%"}}
            defaultValue={moment("00:00:00", "HH:mm:ss")}
        />
      </Col>
    </Row>
  </span>
);

const InputField = styled(Input)`
  width: 100%;
`;

const PField = styled.p`
  padding-left: 10px;
`;

const InputDay = styled(Input)`
  width: 90px;
`;

const IconField = styled(Icon)`
  margin-left: 10px;
  color: #00bfff;
`;

class AddField extends Component {
    render() {
        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        function onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        }

        return (
            <ProfileSettingLayout>
                <Form>
                    <Form.Item
                        label="ชื่อสนามย่อย"
                        labelAlign={"left"}
                        labelCol={{
                            xs: {span: 4},
                            sm: {span: 4}
                        }}
                        wrapperCol={{
                            xs: {span: 20},
                            sm: {span: 20}
                        }}
                    >
                        <Row type="flex">
                            <Col span={8}>
                                <Select
                                    defaultValue="lucy"
                                    style={{width: "100%"}}
                                    onChange={handleChange}
                                    size="large"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                </Select>
                            </Col>
                            <Col span={8}>
                                <IconField type="picture"/>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        label="จำนวน"
                        labelAlign={"left"}
                        labelCol={{
                            xs: {span: 4},
                            sm: {span: 4}
                        }}
                        wrapperCol={{
                            xs: {span: 20},
                            sm: {span: 20}
                        }}
                    >
                        <Row type="flex">
                            <Col span={6}>
                                <InputField size="large"/>
                            </Col>
                            <Col span={3}>
                                <PField>สนาม</PField>
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
                                        <Checkbox onChange={onChange}>วัน</Checkbox>
                                    </Col>
                                    <Col span={19}>
                                        <Row type="flex" gutter={[12]}>
                                            <Col span={11}>
                                                <Input size="large" style={{width: "100%"}}/>
                                            </Col>
                                            <Col span={2}>
                                                <h2>-</h2>
                                            </Col>
                                            <Col span={11}>
                                                <Input size="large" style={{width: "100%"}}/>
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
                                    <Col span={5}>
                                        <Checkbox onChange={onChange}>วัน</Checkbox>
                                    </Col>
                                    <Col span={19}>
                                        <Row type="flex" gutter={[12]}>
                                            <Col span={11}>
                                                <Input size="large" style={{width: "100%"}}/>
                                            </Col>
                                            <Col span={2}>
                                                <h2>-</h2>
                                            </Col>
                                            <Col span={11}>
                                                <Input size="large" style={{width: "100%"}}/>
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
                    <hr color="E8E8E8" style={{height: "100%", width: "100%"}}/>
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
                                      <Checkbox onChange={onChange}>วัน</Checkbox>
                                    </Col>
                                    <Col span={18}>
                                      <Row type="flex" gutter={[12]}>
                                        <Col span={11}>
                                          <Input size="large"
                                                 style={{width: "100%"}}/>
                                        </Col>
                                        <Col span={2}>
                                          <h2>-</h2>
                                        </Col>
                                        <Col span={11}>
                                          <Input size="large"
                                                 style={{width: "100%"}}/>
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
                                                    <InputDay size="large" style={{width: "100%"}}/>
                                                </Col>
                                                <Col span={2}>
                                                    <h2>-</h2>
                                                </Col>
                                                <Col span={5}>
                                                    <InputDay size="large" style={{width: "100%"}}/>
                                                </Col>
                                              <Col span={6}>
                                                <InputDay size="large" style={{width: "100%"}}/>
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
                                             style={{width: "100%"}}/>
                                    </Col>
                                    <Col span={2}>
                                      <h2>-</h2>
                                    </Col>
                                    <Col span={11}>
                                      <Input size="large"
                                             style={{width: "100%"}}/>
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
                                      <InputDay size="large" style={{width: "100%"}}/>
                                    </Col>
                                    <Col span={2}>
                                      <h2>-</h2>
                                    </Col>
                                    <Col span={5}>
                                      <InputDay size="large" style={{width: "100%"}}/>
                                    </Col>
                                    <Col span={6}>
                                      <InputDay size="large" style={{width: "100%"}}/>
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
                    <Form.Item style={{float: "right"}}>
                        <ButtonPreview size="large">Preview</ButtonPreview>
                        <ButtonCreateField
                            type="primary"
                            size="large"
                            htmlType="submit"
                            onClick={() =>
                                this.props.history.push("/profile-setting/field-setting")
                            }
                        >
                            Finish
                        </ButtonCreateField>
                    </Form.Item>
                </Form>
            </ProfileSettingLayout>
        );
    }
}

export default AddField;
