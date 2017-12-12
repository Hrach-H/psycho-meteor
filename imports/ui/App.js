import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import Questionnaire from './Questionnaire';
import { Questions } from "../api/Questions";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Choose a topic</h1>
                <nav>
                    {this.props.questions.map(questions => {
                        return <Link style={{display: 'block'}} key={questions._id} to={`/${questions.topic}`}>{questions.topic.toUpperCase()}</Link>;
                    })}
                </nav>


                <Route path="/:topicId" component={Questionnaire} />

            </div>

        );
    }
}

App = withRouter(withTracker(() => {
    Meteor.subscribe('questions');

    return {
        questions: Questions.find().fetch()
    }

})(App));

export default App;