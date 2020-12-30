import React, { Component, Fragment } from 'react'

export default class GitInfo extends Component {
    
    render() {
        let 
        { id,followers, following, public_repos, 
            name , location, email, company,
            created_at ,url} = this.props.profile;
        return (
           <Fragment>
               <div className="card mt-3">
                   <div className="card-header bg-dark">
                        <span className="badge badge-warning mx-4"> id {id}</span>
                        <span className="badge badge-primary mx-4">{followers} Followers</span>
                        <span className="badge badge-danger mx-4">{public_repos} Repos</span>
                        <span className="badge badge-success mx-4">{following} Following</span>
                        

                   </div>
                   <div className="card-body">
                        <ul className="list-group">
                           <li className="list-group-item">
                              <strong> Username</strong> : {name}
                           </li>
                           <li className="list-group-item">
                               <strong>Location</strong> :  {location}
                           </li>
                           <li className="list-group-item">
                               <strong>Email</strong> :  {email} 
                           </li>
                           <li className="list-group-item">
                               <strong>Company</strong> : {company} 
                           </li>
                           <li className="list-group-item">
                               <strong>Create At</strong> : {created_at} 
                           </li>
                           <li className="list-group-item">
                               <strong>Profile URL</strong> : {url} 
                           </li>
                       </ul> 

                   </div>
               </div>
           </Fragment>

        )
    }
}
