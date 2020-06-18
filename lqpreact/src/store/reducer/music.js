import { MUSIC } from './../container/index'
export const music =(state={},action={})=>{
    switch (action.type) {
        case MUSIC:{
            return Object.assign({},state,{ ...action.payload});
        }

        default:return state;
    }
};
