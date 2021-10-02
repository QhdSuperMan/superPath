import React from 'react'
import {connect} from 'react-redux'
import { createAction } from 'redux-actions'
@connect(()=>{})
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.loginIn = this.loginIn.bind(this)
  }
  loginIn () {
    if (this.state.username) {
      this.props.dispatch(createAction('set token')(111))
      setTimeout(() => {
        this.props.history.push({
          pathname: '/home'
        })
      })
    }
  }
  render () {
    return (
      <div>
        <p>
          <input type="text" value={this.state.username} onChange={(e) => this.setState({
            ...this.state,
            username: e.target.value
          })} />
        </p>
        <p>
          <input type="text" value={this.state.password} onChange={(e) => this.setState({
            ...this.state,
            password: e.target.value
          })} />
        </p>
        <p>
          <button onClick={this.loginIn}>点击</button>
        </p>
      </div>
    );
  }
}
export default Login