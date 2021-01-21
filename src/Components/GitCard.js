import React, { Component, Fragment } from 'react'
import { Card } from 'antd';


export default class GitCard extends Component {
    render() {
        let { name, avatar_url, login, bio, id } = this.props.profile;
        return (
            <div>
                <Fragment>
                    <div className="card mt-3" >
                        <Card
                            hoverable
                            cover={<img
                                 src= {avatar_url} alt={name}/>}
                                 className="img-fluid"
                            bordered={false}

                            style={{ width: 300 }}>
                           <h4>{name}</h4>
                            <h3><strong> {login}</strong></h3>
                            <h6>Login id: {id}</h6>
                        </Card>

                    </div>



                </Fragment>
            </div>
        )
    }
}
