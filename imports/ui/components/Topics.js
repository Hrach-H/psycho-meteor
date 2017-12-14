import React, { Component } from 'react';
// Meteor
import { withTracker } from 'meteor/react-meteor-data';
// Router
import { Link, withRouter } from 'react-router-dom';
// API
import { Questions } from "../../api/Questions";
// **************************************************


class Topics extends Component {
    showAvailableTopics = () => {
        return this.props.topics.map(topic => {
            return <Link
                to={`/${topic.topic}`}
                style={{display: 'block'}}
                key={topic._id}>

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
