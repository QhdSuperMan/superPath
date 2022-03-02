/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-05-11 16:17:56
 * @LastEditTime: 2021-05-11 16:53:53
 * @info: 描述
 */
import React from "react";
import HelpPage from "./helpPage/square";
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.btnClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
      this.setState((nextState,nextProps)=> {
        return {
          count: nextState.count + 1
        };
      });
    };
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button
          onClick={() => {
            this.btnClick();
          }}
        >
          点击
        </button>
      </div>
    );
  }
}

export default Board;
