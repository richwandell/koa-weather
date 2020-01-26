import {CHANGE_STATE, SET_STATE_DATA} from "../constants/action-types";

export function changeState(state) {
    return {type: CHANGE_STATE, payload: state}
}

export function setStateData(data) {
    return {type: SET_STATE_DATA, payload: data};
}