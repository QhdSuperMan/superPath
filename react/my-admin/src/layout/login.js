import React from 'react'
import { connect } from 'react-redux'
import { createAction } from 'redux-actions'
import { Form, Input, Button, Checkbox } from 'antd';
import login from './css/login.module.scss'

@connect((props,state) => {
  return {}
})
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.loginIn = this.loginIn.bind(this)
    this.onFinishFailed = this.onFinishFailed.bind(this)
  }
  checkPrice () {
    console.log(arguments)
  }
  onFinishFailed (errorInfo) {
  };
  loginIn (value) {
    if (value.username) {
      this.props.dispatch(createAction('set username')(value.username))
      this.props.dispatch(createAction('set token')(111))
      setTimeout(() => {
        this.props.history.push({
          pathname: '/home',
          query: {
            id: 1
          }
        })
      })
    }
  }
  render () {
    return (
      <div className={login.login}>
        <div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={this.loginIn}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input value={this.state.username} />
            </Form.Item>

            <Form.Item
              label="密码"
              name='password'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input  value={this.state.password} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>

      </div>
    );
  }
}
export default Login