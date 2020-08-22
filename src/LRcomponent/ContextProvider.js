import React,{createContext, useEffect} from 'react';
import {useState} from 'react';
//create a context and export it for authenticating proccess
export const context=createContext();

const ContextProvider = ({children}) => {
    const [auth,authsetter]=useState({loading:true,data:null});
    //if user log into the page successfully or refresh the page loading and data will change
    //according to localstorage
    useEffect(() => {
        authsetter({ loading: false, data: JSON.parse(window.localStorage.getItem('authData'))});
      }, []);
      //if auth.data changes the authData will change accordingly
      useEffect(() => {
        window.localStorage.setItem('authData', JSON.stringify(auth.data));
      }, [auth.data]);  
   //an statehandler function for auth
    const authhandler=(data)=>{
authsetter({data:data});
    }
    return ( 
        //provide a provider for its children-->this provider will sorrund App in App.js
<context.Provider value={{auth,authhandler}}>
    {children}
</context.Provider>
     );
}
 
export default ContextProvider;