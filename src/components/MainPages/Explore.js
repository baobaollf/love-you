import React, {Component} from 'react'
import {Card, Layout} from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    useRouteMatch,
    useHistory,
    Redirect
} from "react-router-dom";


import AlphaGo from "../projects/AlphaGo";
import Img from "../../Image/IMG_0046.jpg";

const {Meta} = Card;
const { Content } = Layout;
function Explore() {
    let location = useLocation().pathname;

    return (
        <Router>
            <Content style={{
                padding: '10px 50px'
            }}>
                <div className="site-layout-content">
                    <h1>Here is a list of my projects </h1>
                    <Link to={`${location}/alphaGo`}>
                        <Card
                            hoverable
                            style={{width: 240}}
                            cover={<img alt="img"
                                        src="https://camo.githubusercontent.com/dc2ac394810a351336de8b8e8976c6f347c4adedc31769a454237b0d1324f886/68747470733a2f2f692e6962622e636f2f783839794b4b332f7061737465642d696d6167652d302e706e67"
                            />}
                        >
                            <Meta title="AlphaGo" description="A React based web application"/>
                        </Card>
                    </Link>
                </div>
                <Switch>
                    <Route path={`${location}/alphaGo`}>
                        <AlphaGo/>
                    </Route>
                </Switch>
            </Content>

        </Router>
    );

}

export default Explore;