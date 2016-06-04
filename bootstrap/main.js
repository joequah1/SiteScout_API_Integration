import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from '../app/App';
import Home from '../app/components/home/Home';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Home}/>
        </Route>
    </Router>
, document.getElementById('app'))

