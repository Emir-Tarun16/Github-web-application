import Axios from 'axios';
import React, { Fragment } from 'react';
import GitProfile from './GitProfile';
import { Form, Input, Button } from 'antd';
import { Result } from 'antd';
import { UserOutlined, GithubOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;


const onFinish = (values) => {
    console.log('Received values of form: ', values);
};


class GitApi extends React.Component {

    //States creation
    constructor() {
        super();
        this.state = {
            username: '',  //username to be searched
            profile: null,  //git user profile information
            showNoData: false

        }

    }
    //two way binding with username
    updateInput = (e) => {     //events tracking with two way binding 
        this.setState({
            ...this.state,
            username: e.target.value
        });
    };

    //form Submission
    gitSearch_user = (e) => {   //git username to be searched 
        e.preventDefault();
        this.searchProfile()       //function calling 
    };

    //github Search the profile
    searchProfile = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}`).then(
            (response) => {
                console.log(response);
                this.setState({
                    profile: response.data,
                    showNoData: false
                });
            }).catch((err) => {
                console.log("Error While Fetching ")
                console.error(err);
                this.setState({ showNoData: true });

            })

    };




    render() {
        return (
            <Fragment>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" style={{ fontFamily: 'Libre Baskerville, serif' }} mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">
                                <GithubOutlined />
            GitHub Profile Finder App...</Menu.Item>

                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: '30px' }}>

                        <div className="site-layout-content">

                            {/* <pre>{JSON.stringify(this.state)}</pre>  */}
                            <div className="bgGray">


                                <div className="container mt-4">
                                    <div className="row">
                                        <div className="col">
                                            <div className="card">

                                                <div className="card-body">

                                                    <Form
                                                        onSubmit={this.gitSearch_user}
                                                        className="login-form"
                                                        onFinish={onFinish}


                                                    >

                                                        <Form.Item

                                                            name="username"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'Please input your Username!',
                                                                },
                                                            ]}
                                                        >
                                                            <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                                                placeholder="enter your username"
                                                                value={this.state.username}
                                                                onChange={this.updateInput}
                                                            />
                                                        </Form.Item>


                                                        <Form.Item>
                                                            <Button type="primary"
                                                                onClick={this.gitSearch_user}
                                                                htmltype="submit"
                                                                className="login-form-button">
                                                                Search
                                                            </Button>

                                                        </Form.Item>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    this.state.showNoData ?
                                        <div className="container-fluid">
                                            <div className="row">
                                                <Result
                                                    status="500"
                                                    title="Sorry, User Not Found"
                                                    
                                                   
                                                />
                                               
                                            </div>

                                        </div>

                                        : ''

                                }


                                {
                                    !this.state.showNoData ?
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                    {
                                                        this.state.profile ?
                                                            <GitProfile profile={this.state.profile} />


                                                            : null

                                                    }
                                                </div>
                                            </div>
                                        </div> : " "
                                }

                            </div>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}><strong> ©2021 Created by naman@dev.com</strong></Footer>
                </Layout>,




            </Fragment>

        );
    }
}

export default GitApi;


