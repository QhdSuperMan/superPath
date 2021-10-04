import React from 'react'
import { Layout } from 'antd';
import HeaderComponent from './header'
import NavTags from './navTags'
import { Link } from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout;
class Container extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <>
        <Layout>
          <div style={{ borderBottom: 'solid 1px rgba(0, 0, 0, 0.5)' }}>
            <Header >
              <HeaderComponent />
            </Header>
          </div>
          <Layout>
            <Sider>
              <p><Link to='/user'>去user</Link></p>
              <p><Link to='/home'>去home</Link></p>
            </Sider>
            <Content>
              <NavTags></NavTags>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}
export default Container