import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import app from './reducers/app';
import cities from './reducers/cities';
import audios from './reducers/audios';

let reducer = combineReducers({
    app,
    cities,
    audios
});

let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;