import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Signup from './LRcomponent/Signup';
import Signin from './LRcomponent/Signin';
import Mainpage from '../src/Mainpage';
import Loggeduser from './LRcomponent/loggeduser';
import Notfound from '../src/Notfound';
import PrivateRoute from './LRcomponent/PrivateRoute';
const Home = () => {
    return (
        <div>
        <Router basename='/dropboxy/'>
            <Switch>
            <Route exact path='/' component={Mainpage}/>    
            <Route exact path='/signin' component={Signin}/>  
            <Route exact path='/signup' component={Signup}/>
            <PrivateRoute exact path='/signin/loggeduser' component={Loggeduser}/>
            <Route component={Notfound}/> 
            </Switch>  
        </Router> 
        
            
        </div>
    );
};






export default React.memo(Home);