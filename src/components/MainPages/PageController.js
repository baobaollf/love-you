import React, {Component} from 'react'
import {Layout, Menu} from 'antd';
import logo from "../../Image/logoNoName.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import MainPage from "./MainPage"
import Explore from "./Explore"
import AboutUs from "./AboutUs"
import AlphaGo from "../projects/AlphaGo";

const {Header, Footer} = Layout;

export default class PageController extends Component {

    render() {
        return (
            <Router>
                <Layout className="layout">
                    <Header>
                        <img className="mainPageLogo" src={logo} alt={logo}/>
                        <Menu theme="dark"
                              mode="horizontal"
                              defaultSelectedKeys={['/']}>
                            <Menu.Item key="/">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="/explore">
                                <Link to="/explore">Explore</Link>
                            </Menu.Item>
                            <Menu.Item key="/about">
                                <Link to="/about">About</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route path="/about">
                            <AboutUs/>
                        </Route>
                        <Route path="/explore">
                            <Explore/>
                        </Route>
                        {/*<Route path="/explore/alphaGo">*/}
                        {/*    <AlphaGo/>*/}
                        {/*</Route>*/}
                    </Switch>
                    <Footer style={{textAlign: 'center'}}>
                        <h5>
                            contact@baobao.digital
                        </h5>
                        <h5>
                            From the moon and back
                        </h5>
                    </Footer>
                </Layout>
            </Router>
        )
    }
}
