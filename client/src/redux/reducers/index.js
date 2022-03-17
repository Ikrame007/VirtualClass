import { combineReducers } from "redux";
import {courseReducer} from './courseReducer';

const RootReducers = combineReducers({
    courses: courseReducer,
})

export default RootReducers;