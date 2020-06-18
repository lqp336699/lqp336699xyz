import { MUSIC } from './../container/index'

export const musicAction = (state)=>{
    return{
        type: MUSIC ,
        payload:{ music : state}
    }
};
