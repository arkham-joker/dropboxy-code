import React from 'react';
import Home from './Main';
import {Provider} from 'react-redux';

import store from '../src/LRlogic/reducer';
const App = (props) => {
    
    return (
        <div>
         <Provider store={store}>
         <Home/>
         </Provider> 
            
           
           
         
        </div>
    );
};


export default App;