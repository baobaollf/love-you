import React, {Component} from 'react'
import {Layout, Menu} from 'antd';
import logo from "../../Image/logoNoName.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Home from "./Home"
import Explore from "./Explore"
import Message from "./Message"
import Prom from "../places/Prom";

const {Header, Footer} = Layout;

export default class PageController extends Component {

    render() {
        function getDefault() {
            return window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        }

        return (
            <Router>
                <Layout className="layout">
                    <Header>
                        <img className="mainPageLogo" src={logo} alt={logo}/>
                        <Menu theme="dark"
                              mode="horizontal"
                              defaultSelectedKeys={[`/${getDefault()}`]}>
                            <Menu.Item key="/">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="/explore">
                                <Link to="/explore">Explore</Link>
                            </Menu.Item>
                            <Menu.Item key="/message">
                                <Link to="/message">Message</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/message">
                            <Message/>
                        </Route>
                        <Route path="/explore">
                            <Explore/>
                        </Route>
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
