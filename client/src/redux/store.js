import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk'; 
import RootReducers from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    RootReducers,
    /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), */
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;