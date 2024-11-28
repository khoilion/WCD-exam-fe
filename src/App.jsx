import React, { useState } from 'react';
import { Table, Input, Button, Form, Select, Row, Col } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; // import Ant Design styles

const { Option } = Select;

const App = () => {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      playerName: 'John Doe',
      playerAge: 25,
      indexName: 'speed',
      value: '90',
    },
    {
      id: 2,
      playerName: 'Jane Smith',
      playerAge: 22,
      indexName: 'strength',
      value: '1',
    },
  ]);
  const [count, setCount] = useState(3); 

  const onFinish = (values) => {
    const newData = {
      id: count,
      playerName: values.playerName,
      playerAge: values.playerAge,
      indexName: values.indexName,
      value: values.value,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
    form.resetFields();
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Player name',
      dataIndex: 'playerName',
      key: 'playerName',
    },
    {
      title: 'Player age',
      dataIndex: 'playerAge',
      key: 'playerAge',
    },
    {
      title: 'Index name',
      dataIndex: 'indexName',
      key: 'indexName',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <EditOutlined style={{ marginRight: 16 }} />
          <DeleteOutlined style={{ color: 'red' }} />
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: '40px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#d59a3d' }}>Player Information</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Row gutter={[12, 12]}>
          <Col md={12}>
            <Form.Item
              name="playerName"
              label="Player name"
            >
              <Input size='large' placeholder="Player name" />
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              name="playerAge"
              label="Player age"
            >
              <Input   size='large' placeholder="Player age" />
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              name="indexName"
              label="Index name"
            >
              <Select  size='large' placeholder="Index name">
                <Option value="speed">speed</Option>
                <Option value="strength">strength</Option>
                <Option value="accurate">accurate</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              name="value"
              label="Value"
            >
              <Select  size='large' placeholder="value">
                <Option value="1">1</Option>
                <Option value="90">90</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <Button type="primary" htmlType="submit"
                style={{ backgroundColor: 'rgb(205 110 90)'
                , borderColor: '#5ca7afe0', width:'120px' }}>
          Add
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        rowKey="id"
      />
      <div className='foorder'>
        <span> Số 8, Tôn Thất Thuyết, Cầu Giấy, Hà Nội</span>
      </div>
    </div>
  );
};

export default App;
