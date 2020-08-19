import React from 'react';
import {useState} from 'react';
import '../App.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button,Grid} from '@material-ui/core';
import store from '../LRlogic/reducer';
import ActionCreator from '../LRlogic/actioncreator';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
   
  }));
const Signin = () => {
  const dispatcher=useDispatch();
  const [stateUp, setstateUp] = useState({ID:'1',UserName:'UserName 1',PassWord:'PassWord 1'})
    const classes = useStyles();
    const stateInhandler=(e)=>{
const {value,name}=e.target;

setstateUp(prev=>({
  ...prev,
  [name]:value
}))



    }
    const sentapost=()=>{
      return function(){
       
        axios.post(`https://fakerestapi.azurewebsites.net/api/Users`,{ID:stateUp.ID,UserName:stateUp.UserName,
      PassWord:stateUp.PassWord})
        .catch(error=>store.dispatch(ActionCreator.signup_request_failour(error)))
        .then(response=>store.dispatch(ActionCreator.signup_request_success(response.data)))
        .then(res=>document.getElementById('final').innerHTML='you have successfully signed up');
      
      }
      
  
     }
    return (

        <div>
          <div id='final' style={{position:'absolute',top:'13%',left:'41%'}}></div>   
            <Grid container spacing={0} justify='center' style={{marginTop:'10%'}}>
           
<form className={classes.root} noValidate autoComplete="off">
    <span>SignUp:</span><br/><br/>
<TextField id="standard-basic" label="userId" name="ID"  value={stateUp.ID} onChange={(e)=>stateInhandler(e)}/><br/>
<TextField id="standard-basic" label="UserName" name="UserName" value={stateUp.UserName} onChange={(e)=>stateInhandler(e)}/><br/>
<TextField id="standard-basic" label="Password" name="PassWord"  value={stateUp.PassWord} onChange={(e)=>stateInhandler(e)}/><br/>
<Button variant="contained" color="primary" onClick={(ex)=>dispatcher(sentapost())}>
 Register
</Button>
</form>
            </Grid>

        </div>
    );
};

export default React.memo(Signin);