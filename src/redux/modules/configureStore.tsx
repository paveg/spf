import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "./reducer";

export const history = createBrowserHistory();

export default function configureStore(preloadedState: any) {
  return createStore(createRootReducer(history), preloadedState, compose(applyMiddleware(routerMiddleware(history))));
}
