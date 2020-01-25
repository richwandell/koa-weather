import { createStore } from "redux";
import reducer from "../reducers/index";

const store = createStore(reducer, top.__REDUX_DEVTOOLS_EXTENSION__ && top.__REDUX_DEVTOOLS_EXTENSION__());

export default store;