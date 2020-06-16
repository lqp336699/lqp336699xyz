import { HOME_USERID,REMOVE_USER } from './../container/index'
export const saveUserReducer =(state={},action={})=>{
   switch (action.type) {
       case HOME_USERID:{
           // { ...action.payload };
           return Object.assign({},{ ...action.payload});
       }
       case REMOVE_USER:{
           return Object.assign({},{ ...action.payload});
       }
       default:return state;
   }
};
