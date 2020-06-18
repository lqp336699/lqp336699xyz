import { HOME_USERID,REMOVE_USER } from './../container/index'

const initialState = {
    login:'error',
    userInfo:{
        tx:'',
        username:'',
    }
};

export const saveUserReducer =(state = initialState,action={})=>{
   switch (action.type) {
       case HOME_USERID:{
           return Object.assign({},{ ...action.payload});
       }
       case REMOVE_USER:{
           return Object.assign({},{ ...action.payload});
       }
       default:return state;
   }
};
