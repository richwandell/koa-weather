import {CHANGE_STATE} from "../constants/action-types";

export function changeState(state) {
    return {type: CHANGE_STATE, payload: state}
}