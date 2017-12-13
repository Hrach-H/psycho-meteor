import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import Questionnaire from './Questionnaire';
import Topics from './Topics';

class App extends Component {

    render() {
        return (
            <div>
                <Topics />
                <Route path="/:topicId" component={Questionnaire} />
            </div>
        );
    }
}

export default App;