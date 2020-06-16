import { REGISTER } from './../container/index'

const regestReducer = (state={},action={})=>{
    switch (action.type) {
        case REGISTER:
            return Object.assign({},action.payload);
        default:return state;
    }

};

export default regestReducer;
