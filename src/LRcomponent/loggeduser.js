import React from 'react';




const Loggeduser = (props) => {
    const statex=props.location.state;
    return (
        <div style={{position:'absolute',top:'30%',left:'40%'}}>
           <h3>Welcome {statex.stateIn.UserName} </h3> 
           <h5>your ID is {statex.stateIn.ID}</h5> 
        </div>
    );
};




export default React.memo(Loggeduser);