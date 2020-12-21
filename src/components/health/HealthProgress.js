import React from 'react';
import { Steps, Button, message,  Spin, Space } from 'antd';
import Introduction from './utangulizi';
import Ujenzi from './ujenzi';
import './health.css';

const { Step } = Steps;

const steps = [
  {
    title: 'Utangulizi',
    content: [
    <div>
      <Introduction />
    </div>],
  },
  {
    title: 'Vifaa na maandalizi',
    content: <div>
      <Ujenzi />
    </div>,
  },
  {
    title: 'Ujenzi awamu ya kwanza',
    content: <div>
    <Space size="middle">
      <Spin size="large" />
    </Space>
  </div>,
  },
  {
    title: 'Ujenzi awamu ya pili',
    content: <div>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>,
  },
];

class Health extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </>
    );
  }
}


export default Health;