import React from 'react';

import {useContext} from 'react';
import {context} from './ContextProvider';
import {Redirect} from 'react-router-dom';

const Loggeduser = (props) => {
    const {authhandler,auth}=useContext(context);
    const logout=()=>{
        authhandler(null);
        console.log('user redirected to signin');
         props.history.push('/signin')
   
    }
    //get info of user that was transfered via push method in loginin.js
    const statex=props.location.state;
    //if user logging successfully he will be pushed here 
    //this components uses stateIn.username and ID for showing who was loging in
    //if you comment (statex != undefined) and the part of code which uses the mentioned variable
    //the defined private routing works independently
    return (   
        <div style={{position:'absolute',top:'30%',left:'40%'}}>  
    
         {(auth.data)&& (statex != undefined)?
         <div>
             {console.log(auth.data)}
            <h3>Welcome {statex.stateIn.UserName} </h3> 
            <h5>your ID is {statex.stateIn.ID}</h5> 
            <button onClick={()=>logout()}>logout</button>
            </div>
         :
            <Redirect to='/signin'/>
        
         
         }     
           
      
       
        </div>
    );
};




export default React.memo(Loggeduser);