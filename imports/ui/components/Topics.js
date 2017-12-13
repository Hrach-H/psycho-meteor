import React, { Component } from 'react';
// Meteor
import { withTracker } from 'meteor/react-meteor-data';
// Router
import { Link, withRouter } from 'react-router-dom';
// API
import { Questions } from "../../api/Questions";
// **************************************************

let topicsSubscription;

class Topics extends Component {
    showAvailableTopics = () => {
        return this.props.questions.map(questions => {
            return <Link
                to={`/${questions.topic}`}
                style={{display: 'block'}}
                key={questions._id}>

                {questions.topic.toUpperCase()}

                </Link>;
        })
    };

    componentWillUnmount() {
        topicsSubscription.stop();
    }

    render() {
        return (
            <div>
                <h1>Choose a topic</h1>
                <nav>
                    { this.showAvailableTopics() }
                </nav>
            </div>
        );
    }
}

Topics = withRouter(withTracker(() => {
    topicsSubscription = Meteor.subscribe('questions', 'onlyTopics');

    return {
        questions: Questions.find().fetch()
    };
})(Topics));

export default Topics;
