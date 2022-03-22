import { combineReducers } from "redux";
import {courseReducer} from './courseReducer';
import {authReducer} from './authReducer';

const RootReducers = combineReducers({
    courses: courseReducer,
    auth: authReducer,
})

export default RootReducers;