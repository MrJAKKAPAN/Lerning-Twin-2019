import React, {Component} from 'react';
import ProfileSettingLayout from "../../../../Components/ProfileSettingLayout";
import {
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Icon,
    Input,
    Modal,
    Row,
    TimePicker,
    Upload
} from "antd";
import moment from "moment";
import {
    ButtonCreateField,
    ButtonPreview, IconFieldProfile
} from "../../../../Components/Button";
import {withRouter} from "react-router";
import MyCheckBokButton from "../../../../Components/Button/CheckboxButton";
import {PTime} from "../../../../Components/Fonts";

const {TextArea} = Input;
const province = [
    {
        value: "กทม.",
        label: "กทม."
    },
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
        value: "พระโขนง",
        label: "พระโขนง"
    },
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
        <Input size="large" defaultValue="Panda FC" style={{width: "96%"}}/>
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
        defaultValue="02-9552375-76"
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
            defaultValue={moment("10:00:00", "HH:mm:ss")}
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

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            isActive: false,
            checked: true,
            setIsActive: false,
            previewImage: "",
            fileList: [
                {
                    uid: "-1",
                    name: "image.png",
                    status: "done",
                    url: "../Assets/Images/Mask%20Group1.png"
                },
                {
                    uid: "-2",
                    name: "image.png",
                    status: "done",
                    url: "../Assets/Images/Mask%20Group2.png"
                },
                {
                    uid: "-3",
                    name: "image.png",
                    status: "done",
                    url: "../Assets/Images/Mask%20Group3.png"
                }
            ]
        };
    }

    toggleClass() {
        this.setState({
            isActive: true,
        })
    }

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
        const {previewVisible, previewImage, fileList, isActive} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <ProfileSettingLayout>
                <Form
                    layout={"vertical"}
                    style={{paddingRight: 30}}
                    onSubmit={this.handleSubmit}
                >
                    <Form.Item label="ชื่อสนาม">
                        <FieldName/>
                        <Input
                            size="large"
                            defaultValue="สาขา กรุงเทพกรีฑา"
                            style={{width: "92%", marginTop: "20px"}}
                        />
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
                        <ContactNumber/>
                    </Form.Item>
                    <Row type="flex">
                        <Form.Item
                            label="เขตที่ตั้งสนาม"
                            style={{width: "40%", marginRight: "3%"}}
                        >
                            <Cascader
                                options={district}
                                placeholder="เลือกเขต"
                                defaultValue={["พระโขนง"]}
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item label="จังหวัดที่ตั้งสนาม" style={{width: "40%"}}>
                            <Cascader
                                defaultValue={["กทม."]}
                                onChange={onChange}
                                options={province}
                                size="large"
                            />
                        </Form.Item>
                    </Row>
                    <Form.Item label="เวลาเปิด">
                        <div>
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
                                                defaultChecked={this.state.checked}
                                            >
                                                วัน
                                            </Checkbox>
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
                                <Col span={13}>
                                    <TimeDay/>
                                </Col>
                                <Col span={1}>
                                    <IconFieldProfile type="plus"/>
                                </Col>
                            </Row>
                        </div>
                    </Form.Item>
                    <Form.Item label="สิ่งอำนวยความสะดวก">
                        <MyCheckBokButton icon={"coffee"}/>
                        <Button
                            icon={"skin"}
                            style={{
                                marginRight: "10px",
                                border: isActive ? "2px solid darkgrey" : "2px solid black"
                            }}
                            onClick={this.toggleClass.bind(this)}
                        />
                        <MyCheckBokButton icon={"car"}/>
                        <Button
                            icon={"lock"}
                            style={{
                                marginRight: "10px",
                                border: isActive ? "2px solid darkgrey" : "2px solid black"
                            }}
                            onClick={this.toggleClass.bind(this)}
                        />
                        <Button
                            icon={"laptop"}
                            style={{
                                marginRight: "10px",
                                border: isActive ? "2px solid darkgrey" : "2px solid black"
                            }}
                            onClick={this.toggleClass.bind(this)}
                        />
                        <MyCheckBokButton icon={"api"}/>
                        <Button
                            icon={"phone"}
                            style={{
                                marginRight: "10px",
                                border: isActive ? "2px solid darkgrey" : "2px solid black"
                            }}
                            onClick={this.toggleClass.bind(this)}
                        />
                        <MyCheckBokButton icon={"shop"}/>
                        <Button
                            icon={"customer-service"}
                            style={{
                                marginRight: "10px",
                                border: isActive ? "2px solid darkgrey" : "2px solid black"
                            }}
                            onClick={this.toggleClass.bind(this)}
                        />
                        <MyCheckBokButton icon={"wifi"}/>
                    </Form.Item>
                    <Form.Item label="รายละเอียดสนาม">
                        <TextArea
                            rows={4}
                            size="large"
                            defaultValue="สนาม Panda Fc สาขา กรุงเทพกรีฑา สาขาน้องใหม่สุดของเราพร้อมเปิดให้บริการแล้ววันนี้ เพื่อรองรับจอมยุทธทั้งหลายที่ อยู่ในย่านศรีนครินทร์ พระรามเก้า ไม่ต้องเสียเวลาเดินทางอีกต่อไป ท้าให้ท่านลองด้วยหญ้าไฮบริดชนิดพิเศษ นำเข้ามาจาก บราซิล ช่วยรองรับการกระแทกได้ถึง 50% วิ่งเร็วขึ้น 23% เพื่อช่วย ให้ท่านปลอดภัยและสนุกไปตลอดทั้งเกมส์เลย ที่แรกและที่เดียวในประเทศจริงๆ นอกจากนี้ สนามเรายังมีนวดกระปู๋ ที่พร้อมไปด้วยพริตตี้สาวสวยกว่า 40 ชีวิต… "
                        />
                    </Form.Item>
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

const WrappedNormalFieldInformation = Form.create({name: "normal_login"})(
    EditProfile
);
export default withRouter(WrappedNormalFieldInformation);
