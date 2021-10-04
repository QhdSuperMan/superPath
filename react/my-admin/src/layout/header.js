import React from 'react'
import header from './css/header.module.scss'
import { connect } from 'react-redux'
import { Row, Col, Button, Modal } from 'antd';
import { createAction } from 'redux-actions'
import { history } from '@/utils/base.js'
import logo from '@/image/logo.png'
const { confirm } = Modal;
@connect((state, props) => {
  return {
    userinfo: state.userinfo
  }
})
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.loginOut = this.loginOut.bind(this)
  }
  loginOut () {
    const that = this
    confirm({
      title: '是否退出登录?',
      okText: '确认',
      cancelText: '取消',
      onOk () {
        that.props.dispatch(createAction('login out')())
        history.push('/login');
      }
    });
  }
  render () {
    return (
      <div className={header.header}>
        <Row justify="space-around">
          <Col span={12}>
            <img style={{ width: '40px' }} src={logo} alt="" />
          </Col>
          <Col span={12} >
            <div style={{ textAlign: 'right' }} >
              <span>{this.props.userinfo.username}</span>
              <Button type="text" onClick={this.loginOut}>退出登录</Button>
            </div>
          </Col>
        </Row>
      </div >
    );
  }
}
export default Header