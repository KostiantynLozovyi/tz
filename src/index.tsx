import ReactDOM from "react-dom";

import { applyMiddleware, createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IDefaultState, defaultState } from "./redux/reducers/articlesReducer";

import thunk from "redux-thunk";

import App from "./App";

import rootReducer from "./redux/rootReducer";

export interface IInitialState {
  articles: IDefaultState;
}

const initialState: IInitialState = {
  articles: defaultState,
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
