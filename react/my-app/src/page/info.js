/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-06 14:15:33
 * @LastEditTime: 2022-02-24 13:22:46
 * @info: 描述
 */
import React from 'react'
import { createRef } from 'react'
import MyContext from '../context/context'
class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      refs: React.createRef()
    }
  }
  btnClick(theme) {
    theme.id = 3
    this.setState({ count: this.state.count + 1 })
    console.log(this.state);
  }
  componentDidMount() {
    console.log(this.context, 'context');

  }
  render() {
    console.log(this.context, 'context');
    return (
      <MyContext.Consumer>
        {theme => (
          <div>
            {this.state.count} {theme.id}
            <FancyButton ref={this.state.refs}>哈哈</FancyButton>
            <button onClick={() => { this.btnClick(theme) }}>btnClick</button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();

export default Demo
