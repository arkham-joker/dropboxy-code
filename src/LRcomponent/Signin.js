import React from 'react';
import {useState} from 'react';
import '../App.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button,Grid} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import store from '../LRlogic/reducer';
import ActionCreator from '../LRlogic/actioncreator';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
   
  }));
const Signin = (props) => {
   const dispatchsignIn=useDispatch();
  const [stateIn, setstateIn] = useState({ID:'1',UserName:'UserName 1',PassWord:'PassWord 1'})
    const classes = useStyles();
    const stateInhandler=(e)=>{
const {value,name}=e.target;

setstateIn(prev=>({
  ...prev,
  [name]:value
}))



    }
    const sentapost=()=>{
      return function(){
       
        axios.get(`https://fakerestapi.azurewebsites.net/api/Users/${stateIn.ID}`)
        .catch(error=>store.dispatch(ActionCreator.signin_request_failour(error)))
        .then(response=>store.dispatch(ActionCreator.signin_request_SUCCESS(response.data)))
        .then(props.history.push(`${props.match.path}/loggeduser`,{stateIn}))
      
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