import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store from './store';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './component/App';

import Audios from './component/audios/Audios';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';

injectTapEventPlugin();

ReactDOM.render((
    <MuiThemeProvider muiTheme={getMuiTheme({})}>
        <Provider store={store}>
            <Router history={browserHistory}>
                
                <Route path="/" component={App}>
                    <Route path="audios" component={Audios}></Route>
                </Route>

            </Router>
        </Provider>
    </MuiThemeProvider>
), document.getElementById('root'));
