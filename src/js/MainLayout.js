import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../css/App.css';
const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends React.Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Link to="/">
                            <Icon type="pie-chart" />
                            <span>App</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/app1">
                            <Icon type="desktop" />
                            <span>App1</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Link to='/Zhihu'>
                            <Icon type="file" />
                            <span>知乎</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>

                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;