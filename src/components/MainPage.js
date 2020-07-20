import React, { Component } from 'react'
import Img from "../Image/IMG_0046.jpg"
import logo from "../Image/logoNoName.png"
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

export default class MainPage extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <img className="mainPageLogo" src={logo} alt={logo} />

                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content"><div className="App">

                        <h1>
                            Love you Sitong, Happy Birthday
                </h1>
                        <h1>
                            Forever 18
                </h1>
                        <h5>
                            Baobao
	            </h5>
                        <img className="image" src={Img} alt={Img} />
                    </div></div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    <h5>
                        hjwllf@gmail.com
                    </h5>
                    <h5>
                        From the moon and back
                    </h5>
                </Footer>
            </Layout>

        )
    }
}

