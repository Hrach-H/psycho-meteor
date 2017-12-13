import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Questions = new Mongo.Collection('questions');

if (Meteor.isServer) {
    Meteor.publish('questions', function publishQuestions(onlyTopics = false, topicId) {
        // If onlyTopics is true, we return only the 'topic' field of the collection and nothing else
        return onlyTopics ? Questions.find({}, {fields: {"topic": 1}}) : Questions.find();
    });
}