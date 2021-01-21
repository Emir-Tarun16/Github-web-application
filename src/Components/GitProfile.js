import React, { Component } from 'react'

import GitCard from './GitCard'
import GitInfo from './GitInfo'

export default class GitProfile extends Component {
  
    render() {
        return (
            <div>
                 <div className="container">
                     <div className="row">
                         <div className="col-md-3">
                            {
                                Object.keys(this.props).length!==0 ?
                                <GitCard  profile={this.props.profile}/> : null
                            }
                         </div>
                         <div className="col-md-9">
                         {
                                Object.keys(this.props).length!==0 ?
                                <GitInfo  profile={this.props.profile}/> : null
                            }
                            
                         </div>
                     </div>

                 </div>
            </div>
        )
    }
}
