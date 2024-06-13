import { applyMiddleware, createStore, Dispatch, Middleware } from "redux";
import freeze from "redux-freeze";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducer";

const composer = composeWithDevTools({ trace: true, traceLimit: 25 });

export default function configureStore() {
  const store = createStore(rootReducer(), undefined, composer(applyMiddleware(freeze)));

  return { store };
}