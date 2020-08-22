import React from 'react';
import Home from './Main';
import {Provider} from 'react-redux';
import ContextProvider from '../src/LRcomponent/ContextProvider';
import store from '../src/LRlogic/reducer';
// Contextprovider implement a neccesarry authentication process for rendering loggeduser.js through signin.js
//provider implement store for the entire of project for managing states through react-redux
const App = (props) => {

    return (
        <div>

         <ContextProvider>             
         <Provider store={store}>
         <Home/>
         </Provider> 
         </ContextProvider>
           
           
         
        </div>
    );
};


export default App;