import React, { Component } from 'react'
import Img from "../../Image/IMG_0046.jpg"

import { Layout, Menu } from 'antd';


const { Content } = Layout;

export default class MainPage extends Component {

    constructor() {
        super();
    }

    handleClick = e => {
        console.log(e.key)
        // <Link to={`/${e.key}`}></Link>
    };

    render() {
        return (
            <Content style={{
                padding: '10px 50px'
            }}>
                <div className="site-layout-content">
                    <div className="App">

                        <h1>
                            Love you Sitong, Happy Birthday
                                </h1>
                        <h1>
                            Forever 18
                                </h1>
                        <h6>
                            7/19/2020
                                </h6>
                        <h5>
                            Baobao
	                            </h5>
                        <img className="image" src={Img} alt={Img} />
                    </div>
                </div>
            </Content>
        )
    }
}

