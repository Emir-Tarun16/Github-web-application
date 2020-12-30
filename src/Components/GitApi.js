import Axios from 'axios';
import React, { Fragment } from 'react';
import GitProfile from './GitProfile';


class GitApi extends React.Component {

    //States creation
    constructor() {
        super();
        this.state = {
            username: '',  //username to be searched
            profile: null  //git user profile information

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
                    profile: response.data
                });
            }).catch((err) => {
                console.log("Error While Fetching ")
                console.error(err);
            })

    };


    render() {
        return (
            <Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre>  */}
                 <nav class="navbar navbar-light bg-primary">
                     <div class="container-fluid">
                        <a class="navbar-brand">
                            <strong>GitHub Profile Web Application</strong>
                        </a>

                    </div>
                </nav>
               
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <h3 className="text-center">** Search Your Git Profile **</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline" onSubmit={this.gitSearch_user}>
                                        <div className="form-group">
                                            <input style={{ width: '250px' }} value={this.state.username}
                                                onChange={this.updateInput}
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Username"
                                            />
                                            <br />
                                            <input
                                                style={{ width: '100px' }}
                                                type="submit"
                                                value="Search"
                                                className="btn btn-primary btn-sm ml-3"
                                            />

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                </div>



            </Fragment>

        );
    }
}

export default GitApi;


