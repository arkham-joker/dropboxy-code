
import LR from '../LRlogic/const';
import ActionCreator from '../LRlogic/actioncreator';
const redux=require('redux');
const createStore=redux.createStore;
const applyMiddleware=redux.applyMiddleware;
const combineReducers=redux.combineReducers;
const axios=require('axios');
const thunkMiddleware=require('redux-thunk').default;


const initialSignin={
    loadIn:false,
    dataIn:[],
    errorIn:'',
    auth:false,
}
const initialSignUp={
    loadUp:false,
    dataUp:[],
    errorUp:''
}
const ReducerSignin=(state=initialSignin,action)=>{
switch(action.type)
{
    case LR.signin.signin_request_sent:
        return{
...state,
loadIn:true,
dataIn:[],
errorIn:'',

        }
        case LR.signin.signin_request_success:
            return{
                ...state,
                loadIn:false,
                dataIn:action.payload,
                errorIn:'',
                auth:true,
            }
            case LR.signin.signin_request_failour:
                return{
                    ...state,
                    loadIn:false,
                    dataIn:[],
                    errorIn:action.payload
                }
                case LR.signin.signout_request:
                    
                    return{
                        ...state,
                        auth:false,
                    }
                default: 
      return state        
}
}

const ReducerSignup=(state=initialSignUp,action)=>{
  switch (action.type)
  {
      case LR.signup.signup_request_sent:
          return{
              ...state,
loadUp:true,
dataUp:[],
errorUp:'',
          }
          case LR.signup.signup_request_success:
              return{
                  ...state,
                loadUp:false,
                dataUp:action.payload,
                errorUp:'',
              }
              case LR.signup.signup_request_failour:
                  return{
                      ...state,
                    loadUp:false,
                    dataUp:[],
                    errorUp:action.payload
                  }
                  default: 
      return state 
  }
}
const rootreducer=combineReducers({
    Rsignin:ReducerSignin,
    Rsignup:ReducerSignup,
})
const store=createStore(rootreducer,applyMiddleware(thunkMiddleware));
const fetchuserSignIn=()=>{
    return function(dispatch){
axios.get('http://fakerestapi.azurewebsitesnet/api/Users').then(response=>
{const user=response.data.map(item=>item.ID);
dispatch(ActionCreator.signup_request_success(user))}
).catch(error=>dispatch(ActionCreator.signup_request_failour(error.message))
    
    )
   }
};
store.subscribe(()=>console.log(store.getState()))
export default store;