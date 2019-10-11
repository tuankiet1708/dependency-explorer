import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import reducer from "./reducers";

const loggerMiddleware = createLogger();

const persistConfig = {
  key: 'root',
  storage,
  // stateReconciler: autoMergeLevel2,
  whitelist: [
    'session'
  ],
  blacklist: [

  ]
};

let exposedStore = null;

export default function configureStore(onCompletion: () => void): any {
  const persistedReducer = persistReducer(persistConfig, reducer);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancers(
    applyMiddleware(
      thunk,
      loggerMiddleware
    )
  );

  let store = exposedStore = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store, null, onCompletion);

  return {
    store,
    persistor
  };
}

export {exposedStore};
