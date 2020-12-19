import React, { Component } from 'react'
import Img from "../../Image/IMG_0046.jpg";
import {Layout} from "antd";
const { Content } = Layout;
export default class AboutUs extends Component {
    render() {
        return (
            <Content style={{
                padding: '10px 50px'
            }}>
                <div className="site-layout-content">
                    <div>
                        About us
                    </div>
                </div>
            </Content>

        )
    }
}
