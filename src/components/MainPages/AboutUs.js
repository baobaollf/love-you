import React, { Component } from 'react'
import Img from "../../Image/IMG_0046.jpg";
import {Layout} from "antd";
const { Content } = Layout;
export default class AboutUs extends Component {
    render() {
        return (
            <Content className="content">
                <div className="site-layout-content">
                    <div>
                        About us
                    </div>
                </div>
            </Content>

        )
    }
}
