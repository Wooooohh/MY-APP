

import { createStore, combineReducers } from 'redux';
import Reducer from '../reducers/reducer';


const store = createStore(combineReducers({
    counters: Reducer
}))

export default store;


