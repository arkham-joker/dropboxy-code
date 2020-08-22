import React, { createContext } from 'react';
import {useState} from 'react';
import '../App.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button,Grid} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import store from '../LRlogic/reducer';
import ActionCreator from '../LRlogic/actioncreator';
import axios from 'axios';
import {useContext,} from 'react';
import { context } from './ContextProvider';
//styling the signin button//
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
   
  }));
 
const Signin = (props) => {
  //define a context for authenticating
  const {authhandler,auth}=useContext(context);
  //useDispatch Hook is for accessing the store
   const dispatchsignIn=useDispatch();
  //defne neccesarry states and statehandler for login process
  const [stateIn, setstateIn] = useState({ID:'1',UserName:'UserName 1',PassWord:'PassWord 1'})
  const classes = useStyles();
  //statehandler runs setstateIn 
    const stateInhandler=(e)=>{
const {value,name}=e.target;
setstateIn(prev=>({
  ...prev,
  [name]:value
}))
    }
    //sent post is a plain action creator which return an asynchronos process through axios package
    //and changes the store and authenticating proccess accordingly and finally navigates user 
    //to loggeduser.js page if login process be successfull
    const sentapost=()=>{
     return function(){
      axios.get(`https://fakerestapi.azurewebsites.net/api/Users/${stateIn.ID}`)
      .then(Response=>store.dispatch(ActionCreator.signin_request_SUCCESS(Response.data)))
      .then(res=>authhandler(stateIn.ID),
      console.log('authenticating was done'),).then(console.log(`auth is ${auth.data}`))
      .then(Response=> props.history.push(`${props.match.path}/loggeduser`,{stateIn}),)
     }
     
  
     }
    return (
        <div>
            <Grid container spacing={0} justify='center' >
<form className={classes.root} noValidate autoComplete="off" style={{marginTop:'10%'}}>
    <span>SignIn:</span><br/><br/>
<TextField id="standard-basic" label="userId" name="ID"  value={stateIn.ID} onChange={(e)=>stateInhandler(e)}/><br/>
<TextField id="standard-basic" label="UserName" name="UserName" value={stateIn.UserName} onChange={(e)=>stateInhandler(e)}/><br/>
<TextField id="standard-basic" label="Password" name="PassWord"  value={stateIn.PassWord} onChange={(e)=>stateInhandler(e)}/><br/>
<Button variant="contained" color="primary" onClick={(ex)=>dispatchsignIn(sentapost())}>
 Register
</Button>
</form>
            </Grid>

        </div>
    );
};

export default React.memo(Signin);