import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter as Router} from 'react-router-dom';

// Importing main app file
import App from '../imports/ui/App';

Meteor.startup(() => {
    render(
        <Router>
            <App />
        </Router>,
        document.getElementById('app'));
});

