import { combineReducers } from 'redux'
import {CHANGE_STATE} from "../constants/action-types";

const initialState = window.applicationVariables;

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_STATE:
            return Object.assign({}, state, {state: action.payload});
    }
    return state;
}

export default combineReducers({rootReducer});