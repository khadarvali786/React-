import { act } from "react";
import {createStore} from "redux";


const INITIAL_VALUE = {
    count: 0
}

const counterReducer = (store = INITIAL_VALUE,action)=>{
    var newStore = store
    switch (action.type) {
        case 'INCREMENT':
            return {count:newStore.count+1};
        case 'DECREMENT':
            if(newStore.count > 0){
                return {count:newStore.count-1}
            }     
        case 'RESET':
            return {count:0}
        case 'ADD':
            return {count:newStore.count+Number(action.payload.num)}
        case 'DEL':
            if(newStore.count != 0)
                return {count:newStore.count-Number(action.payload.num)}
    }
   
    if(action.type == 'INCREMENT'){
        
    }
    return newStore;
}
const counterStore =createStore(counterReducer)

export default counterStore;