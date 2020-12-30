import React, { Component,Fragment } from 'react'

export default class GitCard extends Component {
    render() {
        let {name,avatar_url,login,bio,id} = this.props.profile;
        return (
            <div>
              <Fragment>
              <div className="card mt-3" >
                  <img src={avatar_url} alt={name} className="img-fluid" />
                   <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <h3><strong> {login}</strong></h3>
                        <h5>{bio}</h5>
                        <h6>Login id: {id}</h6>
                   </div>
                   </div>
              </Fragment>
            </div>
        )
    }
}
