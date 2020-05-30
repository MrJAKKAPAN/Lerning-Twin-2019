import React, {Component} from "react";
import {Col, Divider, Icon, Row, Table} from "antd";
import {ButtonCreateSubField} from "../../../../Components/Button";
import {Link, withRouter} from "react-router-dom";
import LayoutProfileSetting from "../../../../Components/ProfileSettingLayout";

const columns = [
    {
        title: "ลำดับ",
        align:"center",
        dataIndex: "Sequence",
        key: "Sequence"
    },
    {
        title: "ประเภท",
        align:"center",
        dataIndex: "type",
        key: "type"
    },
    {
        title: "ชื่อสนาม",
        align:"center",
        dataIndex: "fieldName",
        key: "fieldName"
    },
    {
        title: "Action",
        align:"center",
        key: "action",
        render: (text, record) => (
            <span>
        <Link to="/profile-setting/field-setting">ดูรายละเอียด</Link>
        <Divider type="vertical"/>
        <Link to="/profile-setting/edit-field">แก้ไข</Link>
      </span>
        )
    }
];

const data = [
    {
        key: "1",
        Sequence: "1",
        type: "5 คน ( Indoor )",
        fieldName: "สนาม 1 "
    },
    {
        key: "2",
        Sequence: "2",
        type: "5 คน ( Outdoor )",
        fieldName: "สนาม 4"
    },
    {
        key: "3",
        Sequence: "3",
        type: "7 คน ( Indoor )",
        fieldName: "สนาม 3"
    },
    {
        key: "4",
        Sequence: "4",
        type: "7 คน ( Outdoor )",
        fieldName: "สนาม 5"
    },
    {
        key: "5",
        Sequence: "5",
        type: "9 คน ( Indoor )",
        fieldName: "สนาม 2"
    },
    {
        key: "6",
        Sequence: "6",
        type: "9 คน ( Outdoor )",
        fieldName: "สนาม 2"
    },
    {
        key: "7",
        Sequence: "7",
        type: "11 คน ( Outdoor )",
        fieldName: "สนาม 2"
    }
];

class FieldSetting extends Component {
    render() {
        return (
            <LayoutProfileSetting>
                <Row type="flex" justify="space-between" align="bottom">
                    <Col span={8}>
                        <p style={{fontWeight: "bold"}}>รายละเอียดสนามย่อย</p>
                    </Col>
                    <Col span={8}>
                        <ButtonCreateSubField
                            type="primary"
                            size="large"
                            onClick={() =>
                                this.props.history.push("/profile-setting/add-field")
                            }
                            style={{float: "right"}}
                        >
                            สร้างสนามย่อย <Icon type="plus"/>
                        </ButtonCreateSubField>
                    </Col>
                </Row>
                <Table
                    columns={columns}
                    dataSource={data}
                    style={{padding: "25px 0 30px 0"}}
                    pagination={false}
                />
            </LayoutProfileSetting>
        );
    }
}

export default withRouter(FieldSetting);
