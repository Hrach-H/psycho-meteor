import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';

// **************************************************

class Questionnaire extends Component {
    renderQuestions() {
        const questions = this.props.questions;
        if (Object.keys(questions).length) {
            return Object.keys(questions).map((question, i) => {
                return (
                    <li key={i} style={{listStyle: "none"}}>
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
                    </li>
                );
            })
        }
    }

    render() {
        console.log(this.props.questions);
        return (
            <ul>
                {this.renderQuestions()}
            </ul>
        );
    }
}

Questionnaire = connect(state => ({ questions: state.questionsReducer}))(Questionnaire);

export default Questionnaire;