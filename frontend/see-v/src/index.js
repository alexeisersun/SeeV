import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { Steps } from 'antd';
import { TimePicker } from 'antd';
import { Row, Col } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import { Button } from 'antd';
import { DatePicker } from 'antd';
import { Card } from 'antd';

import { Typography } from 'antd';

import { Upload, message } from 'antd';

const { Title } = Typography;

const { Header, Sider, Content } = Layout;

const Step = Steps.Step;


class DateRange extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  onStartChange = (value) => {
    this.onChange('startValue', value);
  }

  onEndChange = (value) => {
    this.onChange('endValue', value);
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div>
        <DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Date"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
      </div>
    );
  }
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class Avatar extends React.Component {
  state = {
    loading: false,
  };

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </Upload>
    );
  }
}

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <span>Microsoft</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>IBM</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span>Intel</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }} id="content"
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

class InterviewMeetingCard extends React.Component {
    render() {
        return (
            <div>
    <Card title="Meeting details" bordered={false}>
      <h4>24th of April, 2019 @ 15:00</h4>
      <h5>Location:</h5>
      <img src="https://via.placeholder.com/200"/>
      <div>
        <Button type="primary" style={{margin : "10px"}}>Confirm</Button>
        <Button type="danger" style={{margin : "10px"}}>Cancel</Button>
      </div>
    </Card>
  </div>);
    }
}

ReactDOM.render(<SiderDemo />, document.getElementById('root'));

ReactDOM.render(
    <Row>
      <Col span={6} offset={1} id="contents"></Col>
    </Row>,
    document.getElementById('content')
);

ReactDOM.render(
    <div style={{ padding: '20px' }}>
     <Title level={2}>Junior Software Developer</Title>
    
  <Steps direction="vertical" current={5} status="error">
    <Step title="CV was received" description="This is a description." />
    <Step title="CV was reviewed" description="This is a description." />
    <Step title="Upload profile picture" description=<div style={{padding : "10px"}}> 
    <Avatar/>
    </div>/>
    <Step title="Interview time pickup" description=<div style={{padding : "10px"}}>
        <DateRange />
        <TimePicker minuteStep={15} secondStep={10} />
        <div>
            <Button type="primary" style={{margin : "10px"}}>Select</Button>
            <Button type="danger" style={{margin : "10px"}}>Book another</Button>
        </div>
       </div>/>
    <Step title="Interview meeting" description=<InterviewMeetingCard/>/>
    <Step title="Technical interview" description="Unfortunatelly, you failed the interview." />
    <Step title="Final approval" description="" />
  </Steps></div>,
   document.getElementById('root')
);


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
