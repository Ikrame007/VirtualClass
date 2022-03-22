import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducers from "./reducers";
import { getAllCourses } from './actions/courseActions';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initState = {
    auth: {
        currentUser: null,
        token: "",
        error: "",
        loading: false,
        isAuthenticated: false,
    },
    courses: {
        topCourses: [],
        freeCourses: [],
        filteredCourses: [],
        filter: '',
        difficulty: '',
        price: '',
        time: '',
        hidden: false,
        courses: [],
        selectedCourse: {}
    }
}
const store = createStore(
    RootReducers,
    initState,
    /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), */
    composeEnhancer(applyMiddleware(thunk)),
);
store.dispatch(getAllCourses())

export default store;