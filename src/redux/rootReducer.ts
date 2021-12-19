import { combineReducers } from "redux";
import articlesReducer from "./reducers/articlesReducer";

const rootReducer = combineReducers({
    articles : articlesReducer,
});

export default rootReducer;