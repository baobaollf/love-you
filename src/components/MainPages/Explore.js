import React, {useEffect, useState, useContext} from 'react'
import {Card, Layout} from 'antd';
import {
    BrowserRouter as Router,
} from "react-router-dom";


import FirestoreContext from "../FirestoreContext";

const {Meta} = Card;
const {Content} = Layout;

function Explore() {
    const db = useContext(FirestoreContext);
    const [places, setPlaces] = useState([]);

    // load "places information from database"
    useEffect(() => {
        db.collection("places").get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            // console.log(data);
            setPlaces(data);
        });
    }, [places.length, db]);

    // compose description
    function cardDescription(value) {
        return <div>
            <h4>
                {value.description}
            </h4>
            <h5>
                {value.location}
            </h5>
        </div>
    }


    return (

        <Router>
            <Content className="content">
                <div className="site-layout-content">
                    <h1>Let's go places</h1>
                    <div className="site-layout-content-card">
                        {places.map((value, index) => {
                            return <Card
                                hoverable
                                style={{width: 240, marginLeft: 5}}
                                cover={<img alt="img"
                                            className="card-image"
                                            src={value.image}

                                />}
                                key={index}
                            >
                                <Meta title={value.name} description={cardDescription(value)}/>
                            </Card>
                        })}
                    </div>

                </div>

            </Content>

        </Router>
    );


}

export default Explore;