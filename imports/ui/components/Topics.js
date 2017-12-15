import React, { Component } from 'react';
// Meteor
import { withTracker } from 'meteor/react-meteor-data';
// Router
import { Link, withRouter } from 'react-router-dom';
// API
import { Questions } from "../../api/Questions";
import {Meteor} from "meteor/meteor";
import {store} from "../../../client/main";
import {storeQuestions} from "../actions";
// **************************************************


class Topics extends Component {
    getQuestions() {
        let topic = this.to.substring(1);
        Meteor.subscribe('questions', topic, function() {
            const questions = Questions.find({topic}).fetch();
            if (questions && questions.length && questions[0].questions) {
                store.dispatch(storeQuestions(questions[0].questions));
            }
        });
    }

    showAvailableTopics = () => {
        return this.props.topics.map(topic => {
            return <Link
                to={`/${topic.topic}`}
                style={{display: 'block'}}
                key={topic._id}
                onClick={this.getQuestions}>

                {topic.topic.toUpperCase()}

                </Link>;
        })
    };

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
    Meteor.subscribe('topics');

    return {
        topics: Questions.find().fetch()
    };
})(Topics));

export default Topics;
