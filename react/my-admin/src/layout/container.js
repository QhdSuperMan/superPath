import React from 'react'
import { Layout } from 'antd';
import HeaderComponent from './header'
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
            <Header>
              <HeaderComponent />
            </Header>
          </div>
          <Layout>
            <Sider>Sider</Sider>
            <Content>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}
export default Container