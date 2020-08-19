import LR from '../LRlogic/const';
const signin_request_SENT=()=>{
    return{
        type:LR.signin.signin_request_sent
    }
}
const signin_request_SUCCESS=(user)=>{
    return{
        type:LR.signin.signin_request_success,
        payload:user,
    }
}
const signin_request_failour=(error)=>{
    return{
        type:LR.signin.signin_request_failour,
        payload:error,
    }
}
const signout_request=()=>{
    return{
        type:LR.signin.signout_request,
    }
}

const signup_request_sent=()=>{
    return{
        type:LR.signup.signup_request_sent
    }
}

const signup_request_success=(user)=>{
    return{
        type:LR.signup.signup_request_success,
payload:user,
    }
}

const signup_request_failour=(error)=>{
    return{
        type:LR.signup.signup_request_failour,
        payload:error,
    }
}

const ActionCreator={signin_request_SENT,signin_request_SUCCESS,signin_request_failour,signout_request,
    signup_request_sent,signup_request_success,signup_request_failour}

    export default ActionCreator;