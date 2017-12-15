import { combineReducers } from 'redux';
import questionsReducer from './questions';
// **************************************************

export const allReducers = combineReducers({
    questionsReducer
});