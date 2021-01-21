import React from 'react';

class Profile extends React.Component{
    render(){
        return (
            
           <div>
               <h3>{this.props.data}</h3>
            <h3>{this.props.text.name}</h3>

           </div>
            
        );
    }
}

export default Profile;