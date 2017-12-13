import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// Meteor
import { withTracker } from 'meteor/react-meteor-data';
// Components
import Questionnaire from './components/Questionnaire';
import Topics from './components/Topics';
// **************************************************

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