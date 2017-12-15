import React, { Component } from 'react';

import { connect } from 'react-redux';

// **************************************************

class Questionnaire extends Component {
    getQuestions() {
        const questions = this.props.questions;
        if (Object.keys(questions).length) {
            return Object.keys(questions).map((question, i) => {
                return (
                    <div key={i}>
                        <h2>
                            {questions[question].text}
                        </h2>
                        <select>
                            {Object.keys(questions[question].options).map((option, i) => {
                                return (
                                    <option key={i} value={questions[question].options[option]}>
                                        {option}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                );
            })
        }
    }

    render() {
        console.log(this.props.questions);
        return (
            <div>
                {this.getQuestions()}
            </div>
        );
    }
}

Questionnaire = connect(state => ({ questions: state.questionsReducer}))(Questionnaire);

export default Questionnaire;