import React from 'react';
import { render } from 'react-dom';
// Meteor related
import { Meteor } from 'meteor/meteor';
// React router
import { BrowserRouter as Router} from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { allReducers } from "../imports/ui/reducers";
// Importing main app file
import App from '../imports/ui/App';
// **************************************************

export const store = createStore(allReducers);

Meteor.startup(() => {
    render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
        document.getElementById('app'));
});

