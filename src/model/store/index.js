

import { createStore } from 'redux';
import Reducer from '../reducers/reducer';

// export default function createStore(Reducer){
//     let state = null;
//     const listeners = [];
//     const getState = () => state
    
//     const dispatch = (action) => {
//         state = reducer(state, action)
//         listeners.forEach(listener => listener())
//     }
    
//     const subscribe = (listener) => listeners.push(listener)
    
//     // 这里初始化dispatch的原因是在这之前,state是为null的
//     //所以我需要传一个不存在的action去reducer里面,拿到最默认的那个defaultState
//     //这个defaultState写在reducer的那个文件里面
//     dispatch({});
//     return {
//         dispatch,
//         subscribe,
//         getState,
//     }
// }

const store = createStore(Reducer)

export default store;


