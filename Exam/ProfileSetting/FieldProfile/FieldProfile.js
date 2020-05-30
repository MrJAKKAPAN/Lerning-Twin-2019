import React, {Component} from "react";
import {
    Breadcrumb,
    Input,
    Form,
    Upload,
    Icon,
    Row,
    Col,
    Button,
    Cascader,
    Modal,
    TimePicker,
    Checkbox
} from "antd";
import moment from "moment";
import DashboardLayout from "../../../../Components/DashboardLayout";
import {
    ButtonCreateField,
    ButtonPreview, IconFieldProfile
} from "../../../../Components/Button";
import {
    ContentsProfileSetting,
    DivHeading,
    DivLayout,
    DivProfileSettingLayout,
    HeaderProfileSetting,
    LayoutProfileSetting
} from "../../../../Components/Layout";
import {withRouter} from "react-router-dom";
import MenuProfileSetting from "../../../../Components/Layout/MenuProfileSetting";
import MyCheckBokButton from "../../../../Components/Button/CheckboxButton";
import {PTime} from "../../../../Components/Fonts";

const {TextArea} = Input;

const province = [
    {
        value: "นครราชสีมา",
        label: "นครราชสีมา"
    },
    {
        value: "เชียงใหม่",
        label: "เชียงใหม่"
    },
    {
        value: "กาญจนบุรี",
        label: "กาญจนบุรี"
    }
];

const district = [
    {
        value: "พระนคร",
        label: "พระนคร"
    },
    {
        value: "ดุสิต",
        label: "ดุสิต"
    },
    {
        value: "หนองจอก",
        label: "หนองจอก"
    }
];

const FieldName = () => (
    <span>
    <Row>
      <Col span={23}>
        <Input size="large" style={{width: "96%"}}/>
      </Col>
      <Col span={1}>
        <Button size="large">
          <Icon type="environment"/>
        </Button>
      </Col>
    </Row>
  </span>
);

const ContactNumber = () => (
    <span>
    <Input
        placeholder="Example : 081 888 8888"
        size="large"
        style={{width: "40%", marginRight: "1%"}}
    />
    <Button size="large">
      <Icon type="environment"/>
    </Button>
  </span>
);

const TimeEveryDay = () => (
    <span>
    <Row type="flex">
      <Col span={4}>
        <PTime>เวลา</PTime>
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

const TimeDay = () => (
    <span>
    <Row type="flex">
      <Col span={4}>
        <PTime>เวลา</PTime>
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

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

class FieldProfile extends Component {
    state = {
        previewVisible: false,
        previewImage: "",
        fileList: []
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    handleCancel = () => this.setState({previewVisible: false});

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true
        });
    };

    handleChange = ({fileList}) => this.setState({fileList});

    render() {
        const {getFieldDecorator} = this.props.form;
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <DashboardLayout>
                <DivHeading>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item href="/profile-setting">
                            Profile Setting
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/profile-setting">
                            Field’s Profile
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Create Field</Breadcrumb.Item>
                    </Breadcrumb>
                </DivHeading>
                <DivLayout>
                    <LayoutProfileSetting>
                        <HeaderProfileSetting>
                            <p>Field</p>
                        </HeaderProfileSetting>
                        <ContentsProfileSetting>
                            <Row type="flex">
                                <Col span="4">
                                    <MenuProfileSetting/>
                                </Col>
                                <Col span="19">
                                    <DivProfileSettingLayout>
                                        <Form
                                            layout={"vertical"}
                                            style={{paddingRight: 30}}
                                            onSubmit={this.handleSubmit}
                                        >
                                            <Form.Item label="ชื่อสนาม">
                                                {getFieldDecorator("ชื่อสนาม", {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message: "กรุณาใส่ชื่อสนามของคุณ!"
                                                        }
                                                    ]
                                                })(<FieldName/>)}
                                            </Form.Item>
                                            <Form.Item style={{width: "92%"}}>
                                                {getFieldDecorator("ชื่อสนาม", {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message: "กรุณาใส่ชื่อสนามของคุณ!"
                                                        }
                                                    ]
                                                })(<Input size="large"/>)}
                                            </Form.Item>
                                            <Form.Item label="รูปภาพสนาม">
                                                <div className="clearfix">
                                                    <Upload
                                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                        listType="picture-card"
                                                        fileList={fileList}
                                                        onPreview={this.handlePreview}
                                                        onChange={this.handleChange}
                                                    >
                                                        {fileList.length >= 8 ? null : uploadButton}
                                                    </Upload>
                                                    <Modal
                                                        visible={previewVisible}
                                                        footer={null}
                                                        onCancel={this.handleCancel}
                                                    >
                                                        <img alt="example" src={previewImage}/>
                                                    </Modal>
                                                </div>
                                            </Form.Item>
                                            <Form.Item label="เบอร์ติดต่อสนาม">
                                                {getFieldDecorator("เบอร์ติดต่อสนาม", {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message: "กรุณาใส่เบอร์ติดต่อสนาม!"
                                                        }
                                                    ]
                                                })(<ContactNumber/>)}
                                            </Form.Item>
                                            <Row type="flex">
                                                <Form.Item
                                                    label="เขตที่ตั้งสนาม"
                                                    style={{width: "40%", marginRight: "3%"}}
                                                >
                                                    {getFieldDecorator("เขต", {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "กรุณาใส่เขต / ตำบล!"
                                                            }
                                                        ]
                                                    })(
                                                        <Cascader
                                                            options={district}
                                                            placeholder="เลือกเขต"
                                                            size="large"
                                                        />
                                                    )}
                                                </Form.Item>
                                                <Form.Item
                                                    label="จังหวัดที่ตั้งสนาม"
                                                    style={{width: "40%"}}
                                                >
                                                    {getFieldDecorator("จังหวัดที่ตั้งสนาม", {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "กรุณาใส่จังหวัดที่ตั้งสนาม!"
                                                            }
                                                        ]
                                                    })(
                                                        <Cascader
                                                            options={province}
                                                            placeholder="เลือกจังหวัด"
                                                            size="large"
                                                        />
                                                    )}
                                                </Form.Item>
                                            </Row>
                                            <Form.Item label="เวลาเปิด">
                                                {getFieldDecorator("เวลาเปิด", {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message: "กรุณาใส่เวลาเปิด!"
                                                        }
                                                    ]
                                                })(
                                                    <div style={{width: "100%"}}>
                                                        <Row type="flex">
                                                            <Col span={10}>
                                                                <Checkbox
                                                                    onChange={onChange}
                                                                    style={{marginTop: "10px"}}
                                                                >
                                                                    ทุกวัน
                                                                </Checkbox>
                                                            </Col>
                                                            <Col span={13}>
                                                                <TimeEveryDay/>
                                                            </Col>
                                                        </Row>
                                                        <br/>
                                                        <Row type="flex">
                                                            <Col span={10}>
                                                                <Row type="flex">
                                                                    <Col span={6}>
                                                                        <Checkbox
                                                                            onChange={onChange}
                                                                            style={{marginTop: "10px"}}
                                                                        >
                                                                            วัน
                                                                        </Checkbox>
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
                                                            <Col span={13}>
                                                                <TimeDay/>
                                                            </Col>
                                                            <Col span={1}>
                                                                <IconFieldProfile type="delete"/>
                                                            </Col>
                                                        </Row>
                                                        <br/>
                                                        <Row type="flex" justify="space-between">
                                                            <Col span={10}>
                                                                <Row type="flex">
                                                                    <Col span={6}>
                                                                        <Checkbox
                                                                            onChange={onChange}
                                                                            style={{marginTop: "10px"}}
                                                                        >
                                                                            วัน
                                                                        </Checkbox>
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
                                                            <Col span={13}>
                                                                <TimeDay/>
                                                            </Col>
                                                            <Col span={1}>
                                                                <IconFieldProfile type="plus"/>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                )}
                                            </Form.Item>
                                            <Form.Item label="สิ่งอำนวยความสะดวก">
                                                <MyCheckBokButton icon={"coffee"}/>
                                                <MyCheckBokButton icon={"skin"}/>
                                                <MyCheckBokButton icon={"car"}/>
                                                <MyCheckBokButton icon={"lock"}/>
                                                <MyCheckBokButton icon={"laptop"}/>
                                                <MyCheckBokButton icon={"api"}/>
                                                <MyCheckBokButton icon={"phone"}/>
                                                <MyCheckBokButton icon={"shop"}/>
                                                <MyCheckBokButton icon={"customer-service"}/>
                                                <MyCheckBokButton icon={"wifi"}/>
                                            </Form.Item>
                                            <Form.Item label="รายละเอียดสนาม">
                                                {getFieldDecorator("รายละเอียดสนาม", {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message: "กรุณาใส่รายละเอียดสนาม!"
                                                        }
                                                    ]
                                                })(
                                                    <TextArea
                                                        rows={4}
                                                        placeholder="Textarea placeholder"
                                                        size="large"
                                                    />
                                                )}
                                            </Form.Item>
                                            <Form.Item style={{float: "right"}}>
                                                <ButtonPreview size="large">Preview</ButtonPreview>
                                                <ButtonCreateField
                                                    type="primary"
                                                    size="large"
                                                    htmlType="submit"
                                                    onClick={() =>
                                                        this.props.history.push(
                                                            "/profile-setting/success-field"
                                                        )
                                                    }
                                                >
                                                    Create Field
                                                </ButtonCreateField>
                                            </Form.Item>
                                        </Form>
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

const WrappedNormalFieldInformation = Form.create({name: "normal_login"})(
    FieldProfile
);
export default withRouter(WrappedNormalFieldInformation);
