import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
// **************************************************

export const Questions = new Mongo.Collection('questions');

if (Meteor.isServer) {
    Meteor.publish('questions', function publishQuestions(topicId) {
        return Questions.find({topic: topicId});
    });

    Meteor.publish('topics', function publishTopics() {
        return Questions.find({}, {fields: {"topic": 1}});
    });
}