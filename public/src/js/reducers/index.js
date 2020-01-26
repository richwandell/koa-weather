import { combineReducers } from 'redux'
import {CHANGE_STATE, SET_STATE_DATA} from "../constants/action-types";

const initialState = {

};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_STATE:
            return Object.assign({}, state, {state: action.payload});
        case SET_STATE_DATA:
            return Object.assign({}, state, {
                state: action.payload.data.attributes.state,
                city: action.payload.data.attributes.name,
                weather: action.payload.data.attributes.weather,
                newsArticles: action.payload.data.attributes.news.data
            });
    }
    return state;
}

export default combineReducers({rootReducer});