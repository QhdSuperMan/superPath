import React from 'react'
import { withRouter } from 'react-router'
class NavLeft extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    console.log(this.props)
    return (
      <div>
        路由页签
      </div>
    );
  }
}
export default withRouter(NavLeft)