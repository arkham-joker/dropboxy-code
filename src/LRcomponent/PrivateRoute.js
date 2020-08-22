import React from 'react';
import { Route, Redirect } from "react-router-dom";
import {useContext} from 'react';
import {context} from './ContextProvider';
const PrivateRoute = ({component:Component,...rest}) => {
    //get the auth variable with useContext hook
    const {auth}=useContext(context);
    //define a route which render the given component if auth be true or not null otherwise redirect to
    //signin page
    return ( 
        <Route 
        {...rest} render={(routeprop)=>auth?<Component {...routeprop}/>:<Redirect to='/signin'/>}
        />
     );
}
 
export default PrivateRoute;